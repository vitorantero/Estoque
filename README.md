# EstoqueIA — Angular

Versão em **Angular 19** do EstoqueIA, com as mesmas regras de negócio, visual (Tailwind + tema azul ciano) e fluxos da versão React.

## Como rodar

```bash
cd estoque-ia-angular
npm install
npm start
```

Abra [http://localhost:4200](http://localhost:4200)

## Usuários de demonstração (senha: `123456`)

| E-mail | Perfil |
|--------|--------|
| admin@estoqueia.com | Administrador |
| gerencia@estoqueia.com | Gerência |
| operacional@estoqueia.com | Operacional |

## Estrutura

- `src/app/core` — modelos, serviços (estoque, auth, tema), guards
- `src/app/pages` — telas (dashboard, cadastro, inventário, etc.)
- `src/app/shared` — scanner, modais, avatar, toasts
- `src/styles.css` — mesmo design system da versão React

A versão React original permanece na pasta pai (`../`).
