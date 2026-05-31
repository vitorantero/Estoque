import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../../core/services/toast.service';
import { IconComponent } from '../icon/icon.component';

const SCANNER_SCANNING = 2;
const SCANNER_PAUSED = 3;

@Component({
  selector: 'app-scanner-dialog',
  standalone: true,
  imports: [FormsModule, IconComponent],
  templateUrl: './scanner-dialog.component.html',
})
export class ScannerDialogComponent implements OnChanges, OnDestroy {
  private readonly toast = inject(ToastService);

  @Input() open = false;
  @Input() mode: 'immediate' | 'confirm' = 'immediate';
  @Output() openChange = new EventEmitter<boolean>();
  @Output() scan = new EventEmitter<string>();

  manual = '';
  starting = true;
  cameraError = false;

  private scanner: {
    stop: () => Promise<void>;
    clear?: () => void;
    getState?: () => number;
  } | null = null;
  private stopping = false;
  private lastCaptured = '';
  private cancelled = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['open']) {
      if (this.open) void this.startCamera();
      else void this.close();
    }
  }

  ngOnDestroy(): void {
    void this.safeStop();
  }

  async close(): Promise<void> {
    await this.safeStop();
    this.manual = '';
    this.lastCaptured = '';
    this.openChange.emit(false);
  }

  private async safeStop(): Promise<void> {
    const inst = this.scanner;
    if (!inst || this.stopping) return;
    this.stopping = true;
    try {
      const state = inst.getState?.();
      if (state === SCANNER_SCANNING || state === SCANNER_PAUSED) await inst.stop();
    } catch {
      /* ok */
    }
    try {
      inst.clear?.();
    } catch {
      /* ok */
    }
    this.scanner = null;
    this.stopping = false;
  }

  private async startCamera(): Promise<void> {
    await this.safeStop();
    this.cancelled = false;
    this.cameraError = false;
    this.starting = true;
    this.manual = '';
    this.lastCaptured = '';

    try {
      const { Html5Qrcode } = await import('html5-qrcode');
      if (this.cancelled) return;
      const instance = new Html5Qrcode('qr-reader-region', { verbose: false });
      this.scanner = instance;
      await instance.start(
        { facingMode: 'environment' },
        { fps: 10, qrbox: { width: 220, height: 220 } },
        (decoded: string) => this.onDetected(decoded),
        () => {},
      );
      if (this.cancelled) {
        await this.safeStop();
        return;
      }
      this.starting = false;
    } catch {
      if (!this.cancelled) {
        this.cameraError = true;
        this.starting = false;
      }
    }
  }

  private onDetected(code: string): void {
    const trimmed = code.trim();
    if (!trimmed || !this.open) return;
    if (this.mode === 'confirm') {
      this.manual = trimmed;
      if (this.lastCaptured !== trimmed) {
        this.lastCaptured = trimmed;
        this.toast.message(
          'Código capturado',
          'Confira o valor abaixo e clique em Confirmar leitura.',
        );
      }
      return;
    }
    void this.confirmResult(trimmed);
  }

  confirmResult(code?: string): void {
    const trimmed = (code ?? this.manual).trim();
    if (!trimmed) return;
    void this.safeStop().then(() => {
      this.scan.emit(trimmed);
      this.openChange.emit(false);
    });
  }

  randomCode(): void {
    this.manual = '789' + Math.floor(1000000000 + Math.random() * 8999999999);
  }
}
