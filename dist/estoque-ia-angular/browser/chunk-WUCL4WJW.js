import {
  ScannerDialogComponent,
  StoreService
} from "./chunk-F2RTPAA2.js";
import {
  ActivatedRoute
} from "./chunk-Y6ZJM62F.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-MHPDYUX5.js";
import {
  Component,
  IN_REASONS,
  IconComponent,
  Input,
  OUT_REASONS,
  ToastService,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SAWBXWAZ.js";
import "./chunk-TXDUYLVM.js";

// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var minutesInMonth = 43200;
var minutesInDay = 1440;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;
var constructFromSymbol = /* @__PURE__ */ Symbol.for("constructDateFrom");

// node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date) return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}

// node_modules/date-fns/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}

// node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

// node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(null, context || dates.find((date) => typeof date === "object"));
  return dates.map(normalize);
}

// node_modules/date-fns/compareAsc.js
function compareAsc(dateLeft, dateRight) {
  const diff = +toDate(dateLeft) - +toDate(dateRight);
  if (diff < 0) return -1;
  else if (diff > 0) return 1;
  return diff;
}

// node_modules/date-fns/constructNow.js
function constructNow(date) {
  return constructFrom(date, Date.now());
}

// node_modules/date-fns/differenceInCalendarMonths.js
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
  return yearsDiff * 12 + monthsDiff;
}

// node_modules/date-fns/_lib/getRoundingMethod.js
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    return result === 0 ? 0 : result;
  };
}

// node_modules/date-fns/differenceInMilliseconds.js
function differenceInMilliseconds(laterDate, earlierDate) {
  return +toDate(laterDate) - +toDate(earlierDate);
}

// node_modules/date-fns/endOfDay.js
function endOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/endOfMonth.js
function endOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/isLastDayOfMonth.js
function isLastDayOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  return +endOfDay(_date, options) === +endOfMonth(_date, options);
}

// node_modules/date-fns/differenceInMonths.js
function differenceInMonths(laterDate, earlierDate, options) {
  const [laterDate_, workingLaterDate, earlierDate_] = normalizeDates(options?.in, laterDate, laterDate, earlierDate);
  const sign = compareAsc(workingLaterDate, earlierDate_);
  const difference = Math.abs(differenceInCalendarMonths(workingLaterDate, earlierDate_));
  if (difference < 1) return 0;
  if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27) workingLaterDate.setDate(30);
  workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
  let isLastMonthNotFull = compareAsc(workingLaterDate, earlierDate_) === -sign;
  if (isLastDayOfMonth(laterDate_) && difference === 1 && compareAsc(laterDate_, earlierDate_) === 1) {
    isLastMonthNotFull = false;
  }
  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}

// node_modules/date-fns/differenceInSeconds.js
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = differenceInMilliseconds(laterDate, earlierDate) / 1e3;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};

// node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

// node_modules/date-fns/locale/en-US/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};

// node_modules/date-fns/locale/en-US/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

// node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}

// node_modules/date-fns/locale/en-US/_lib/localize.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};

// node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}

// node_modules/date-fns/locale/en-US/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

// node_modules/date-fns/locale/en-US.js
var enUS = {
  code: "en-US",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};

// node_modules/date-fns/formatDistance.js
function formatDistance2(laterDate, earlierDate, options) {
  const defaultOptions2 = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions2.locale ?? enUS;
  const minutesInAlmostTwoDays = 2520;
  const comparison = compareAsc(laterDate, earlierDate);
  if (isNaN(comparison)) throw new RangeError("Invalid time value");
  const localizeOptions = Object.assign({}, options, {
    addSuffix: options?.addSuffix,
    comparison
  });
  const [laterDate_, earlierDate_] = normalizeDates(options?.in, ...comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]);
  const seconds = differenceInSeconds(earlierDate_, laterDate_);
  const offsetInSeconds = (getTimezoneOffsetInMilliseconds(earlierDate_) - getTimezoneOffsetInMilliseconds(laterDate_)) / 1e3;
  const minutes = Math.round((seconds - offsetInSeconds) / 60);
  let months;
  if (minutes < 2) {
    if (options?.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance("halfAMinute", 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
      }
    }
  } else if (minutes < 45) {
    return locale.formatDistance("xMinutes", minutes, localizeOptions);
  } else if (minutes < 90) {
    return locale.formatDistance("aboutXHours", 1, localizeOptions);
  } else if (minutes < minutesInDay) {
    const hours = Math.round(minutes / 60);
    return locale.formatDistance("aboutXHours", hours, localizeOptions);
  } else if (minutes < minutesInAlmostTwoDays) {
    return locale.formatDistance("xDays", 1, localizeOptions);
  } else if (minutes < minutesInMonth) {
    const days = Math.round(minutes / minutesInDay);
    return locale.formatDistance("xDays", days, localizeOptions);
  } else if (minutes < minutesInMonth * 2) {
    months = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("aboutXMonths", months, localizeOptions);
  }
  months = differenceInMonths(earlierDate_, laterDate_);
  if (months < 12) {
    const nearestMonth = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
  } else {
    const monthsSinceStartOfYear = months % 12;
    const years = Math.trunc(months / 12);
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance("aboutXYears", years, localizeOptions);
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance("overXYears", years, localizeOptions);
    } else {
      return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
  }
}

// node_modules/date-fns/formatDistanceToNow.js
function formatDistanceToNow(date, options) {
  return formatDistance2(date, constructNow(date), options);
}

// node_modules/date-fns/locale/pt-BR/_lib/formatDistance.js
var formatDistanceLocale2 = {
  lessThanXSeconds: {
    one: "menos de um segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "meio minuto",
  lessThanXMinutes: {
    one: "menos de um minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "cerca de 1 hora",
    other: "cerca de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 dia",
    other: "{{count}} dias"
  },
  aboutXWeeks: {
    one: "cerca de 1 semana",
    other: "cerca de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "cerca de 1 m\xEAs",
    other: "cerca de {{count}} meses"
  },
  xMonths: {
    one: "1 m\xEAs",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "cerca de 1 ano",
    other: "cerca de {{count}} anos"
  },
  xYears: {
    one: "1 ano",
    other: "{{count}} anos"
  },
  overXYears: {
    one: "mais de 1 ano",
    other: "mais de {{count}} anos"
  },
  almostXYears: {
    one: "quase 1 ano",
    other: "quase {{count}} anos"
  }
};
var formatDistance3 = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale2[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", String(count));
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "em " + result;
    } else {
      return "h\xE1 " + result;
    }
  }
  return result;
};

// node_modules/date-fns/locale/pt-BR/_lib/formatLong.js
var dateFormats2 = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
};
var timeFormats2 = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
};
var dateTimeFormats2 = {
  full: "{{date}} '\xE0s' {{time}}",
  long: "{{date}} '\xE0s' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong2 = {
  date: buildFormatLongFn({
    formats: dateFormats2,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats2,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats2,
    defaultWidth: "full"
  })
};

// node_modules/date-fns/locale/pt-BR/_lib/formatRelative.js
var formatRelativeLocale2 = {
  lastWeek: (date) => {
    const weekday = date.getDay();
    const last = weekday === 0 || weekday === 6 ? "\xFAltimo" : "\xFAltima";
    return "'" + last + "' eeee '\xE0s' p";
  },
  yesterday: "'ontem \xE0s' p",
  today: "'hoje \xE0s' p",
  tomorrow: "'amanh\xE3 \xE0s' p",
  nextWeek: "eeee '\xE0s' p",
  other: "P"
};
var formatRelative2 = (token, date, _baseDate, _options) => {
  const format = formatRelativeLocale2[token];
  if (typeof format === "function") {
    return format(date);
  }
  return format;
};

// node_modules/date-fns/locale/pt-BR/_lib/localize.js
var eraValues2 = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
};
var quarterValues2 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1\xBA trimestre", "2\xBA trimestre", "3\xBA trimestre", "4\xBA trimestre"]
};
var monthValues2 = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  wide: ["janeiro", "fevereiro", "mar\xE7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
};
var dayValues2 = {
  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
  abbreviated: ["domingo", "segunda", "ter\xE7a", "quarta", "quinta", "sexta", "s\xE1bado"],
  wide: ["domingo", "segunda-feira", "ter\xE7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\xE1bado"]
};
var dayPeriodValues2 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "manh\xE3",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "manh\xE3",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "manh\xE3",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite"
  }
};
var formattingDayPeriodValues2 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "da manh\xE3",
    afternoon: "da tarde",
    evening: "da tarde",
    night: "da noite"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "da manh\xE3",
    afternoon: "da tarde",
    evening: "da tarde",
    night: "da noite"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "da manh\xE3",
    afternoon: "da tarde",
    evening: "da tarde",
    night: "da noite"
  }
};
var ordinalNumber2 = (dirtyNumber, options) => {
  const number = Number(dirtyNumber);
  if (options?.unit === "week") {
    return number + "\xAA";
  }
  return number + "\xBA";
};
var localize2 = {
  ordinalNumber: ordinalNumber2,
  era: buildLocalizeFn({
    values: eraValues2,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues2,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues2,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues2,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues2,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues2,
    defaultFormattingWidth: "wide"
  })
};

// node_modules/date-fns/locale/pt-BR/_lib/match.js
var matchOrdinalNumberPattern2 = /^(\d+)[ºªo]?/i;
var parseOrdinalNumberPattern2 = /\d+/i;
var matchEraPatterns2 = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
};
var parseEraPatterns2 = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
};
var matchQuarterPatterns2 = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
};
var parseQuarterPatterns2 = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns2 = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
};
var parseMonthPatterns2 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i]
};
var matchDayPatterns2 = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
};
var parseDayPatterns2 = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
};
var matchDayPeriodPatterns2 = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
};
var parseDayPeriodPatterns2 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn|^meia[-\s]noite/i,
    noon: /^md|^meio[-\s]dia/i,
    morning: /manhã/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noite/i
  }
};
var match2 = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern2,
    parsePattern: parseOrdinalNumberPattern2,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns2,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns2,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns2,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns2,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns2,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns2,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns2,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns2,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns2,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns2,
    defaultParseWidth: "any"
  })
};

// node_modules/date-fns/locale/pt-BR.js
var ptBR = {
  code: "pt-BR",
  formatDistance: formatDistance3,
  formatLong: formatLong2,
  formatRelative: formatRelative2,
  localize: localize2,
  match: match2,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};

// src/app/pages/movimentacao/movement-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MovementFormComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div")(2, "p", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 15);
    \u0275\u0275listener("click", function MovementFormComponent_Conditional_5_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selected = null);
    });
    \u0275\u0275text(7, "Trocar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selected.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r1.selected.sku, " \xB7 ", ctx_r1.selected.qty, " ", ctx_r1.selected.unit, "");
  }
}
function MovementFormComponent_Conditional_6_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function MovementFormComponent_Conditional_6_Conditional_4_For_2_Template_button_click_0_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.pick(p_r5));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r5.qty, " ", p_r5.unit, "");
  }
}
function MovementFormComponent_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, MovementFormComponent_Conditional_6_Conditional_4_For_2_Template, 5, 3, "button", 22, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.matches);
  }
}
function MovementFormComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 16);
    \u0275\u0275element(2, "app-icon", 17);
    \u0275\u0275elementStart(3, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function MovementFormComponent_Conditional_6_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.search, $event) || (ctx_r1.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MovementFormComponent_Conditional_6_Conditional_4_Template, 3, 0, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function MovementFormComponent_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scanOpen = true);
    });
    \u0275\u0275element(6, "app-icon", 21);
    \u0275\u0275text(7, " Scanner ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.search);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.matches.length > 0 ? 4 : -1);
  }
}
function MovementFormComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275property("value", r_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6);
  }
}
function MovementFormComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function MovementFormComponent_Conditional_25_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmOpen = false);
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275listener("click", function MovementFormComponent_Conditional_25_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " de ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 29)(13, "button", 30);
    \u0275\u0275listener("click", function MovementFormComponent_Conditional_25_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmOpen = false);
    });
    \u0275\u0275text(14, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 31);
    \u0275\u0275listener("click", function MovementFormComponent_Conditional_25_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doConfirm());
    });
    \u0275\u0275text(16, "Confirmar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Confirmar ", ctx_r1.type === "in" ? "Entrada" : "Sa\xEDda", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.type === "in" ? "Adicionar" : "Remover", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.qty, " ", ctx_r1.selected == null ? null : ctx_r1.selected.unit, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selected == null ? null : ctx_r1.selected.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.reason, "). ");
  }
}
var MovementFormComponent = class _MovementFormComponent {
  store = inject(StoreService);
  toast = inject(ToastService);
  type = "in";
  preset = null;
  selected = null;
  search = "";
  qty = "1";
  reason = "";
  scanOpen = false;
  confirmOpen = false;
  reasons = [];
  nowLabel = (/* @__PURE__ */ new Date()).toLocaleString("pt-BR");
  get matches() {
    const t = this.search.trim().toLowerCase();
    if (!t)
      return [];
    return this.store.products().filter((p) => p.name.toLowerCase().includes(t) || p.sku.includes(t)).slice(0, 5);
  }
  ngOnInit() {
    this.reasons = this.type === "in" ? IN_REASONS : OUT_REASONS;
    this.reason = this.reasons[0];
    if (this.preset)
      this.selected = this.preset;
  }
  pick(p) {
    this.selected = p;
    this.search = "";
  }
  onScan(code) {
    const found = this.store.products().find((p) => p.sku === code.trim());
    if (found) {
      this.selected = found;
      this.search = "";
      this.toast.success(`Selecionado: ${found.name}`);
    } else {
      this.toast.error("C\xF3digo n\xE3o cadastrado.");
    }
  }
  tryConfirm() {
    if (!this.selected) {
      this.toast.error("Selecione um produto.");
      return;
    }
    const n = Number(this.qty);
    if (!n || n <= 0) {
      this.toast.error("Quantidade inv\xE1lida.");
      return;
    }
    if (this.type === "out" && n > this.selected.qty) {
      this.toast.error("Quantidade maior que o estoque dispon\xEDvel.");
      return;
    }
    this.confirmOpen = true;
  }
  doConfirm() {
    if (!this.selected)
      return;
    const ok = this.store.registerMovement({
      productId: this.selected.id,
      type: this.type,
      qty: Number(this.qty),
      reason: this.reason
    });
    this.confirmOpen = false;
    if (ok) {
      this.toast.success(`${this.type === "in" ? "Entrada" : "Sa\xEDda"} registrada com sucesso!`);
      this.selected = null;
      this.qty = "1";
      this.search = "";
    } else {
      this.toast.error("N\xE3o foi poss\xEDvel registrar a movimenta\xE7\xE3o.");
    }
  }
  static \u0275fac = function MovementFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MovementFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MovementFormComponent, selectors: [["app-movement-form"]], inputs: { type: "type", preset: "preset" }, decls: 26, vars: 9, consts: [[1, "rounded-xl", "border", "bg-card", "shadow"], [1, "space-y-4", "p-5"], [1, "space-y-2"], [1, "text-sm", "font-medium"], [1, "flex", "items-center", "justify-between", "rounded-lg", "border", "bg-muted/40", "p-3"], [1, "flex", "gap-2"], [1, "grid", "grid-cols-2", "gap-4"], ["type", "number", "min", "1", 1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], [1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], [3, "value"], ["disabled", "", 1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "value"], ["type", "button", 1, "inline-flex", "h-9", "w-full", "items-center", "justify-center", "gap-2", "rounded-md", "px-4", "text-sm", "font-medium", "text-primary-foreground", 3, "click"], [3, "openChange", "scan", "open"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/80", "p-4"], [1, "font-mono", "text-xs", "text-muted-foreground"], ["type", "button", 1, "text-sm", "hover:underline", 3, "click"], [1, "relative", "flex-1"], ["name", "search", 1, "pointer-events-none", "absolute", "left-3", "top-1/2", "size-4", "-translate-y-1/2", "text-muted-foreground"], ["placeholder", "Buscar produto por nome ou SKU...", 1, "flex", "h-9", "w-full", "rounded-md", "border", "bg-background", "pl-9", "pr-3", "text-sm", "shadow-sm", 3, "ngModelChange", "ngModel"], [1, "absolute", "z-20", "mt-1", "w-full", "overflow-hidden", "rounded-lg", "border", "bg-popover", "shadow-lg"], ["type", "button", 1, "inline-flex", "h-9", "shrink-0", "items-center", "justify-center", "gap-2", "rounded-md", "bg-secondary", "px-4", "text-sm", 3, "click"], ["name", "scan-line", 1, "size-4"], ["type", "button", 1, "flex", "w-full", "justify-between", "px-3", "py-2", "text-left", "text-sm", "hover:bg-accent"], ["type", "button", 1, "flex", "w-full", "justify-between", "px-3", "py-2", "text-left", "text-sm", "hover:bg-accent", 3, "click"], [1, "text-xs", "text-muted-foreground"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/80", "p-4", 3, "click"], [1, "grid", "w-full", "max-w-md", "gap-4", "rounded-lg", "border", "bg-background", "p-6", "shadow-lg", 3, "click"], [1, "text-lg", "font-semibold"], [1, "text-sm", "text-muted-foreground"], [1, "flex", "justify-end", "gap-2"], ["type", "button", 1, "inline-flex", "h-9", "items-center", "justify-center", "rounded-md", "border", "px-4", "text-sm", 3, "click"], ["type", "button", 1, "inline-flex", "h-9", "items-center", "justify-center", "rounded-md", "bg-primary", "px-4", "text-sm", "text-primary-foreground", 3, "click"]], template: function MovementFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
      \u0275\u0275text(4, "Produto");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, MovementFormComponent_Conditional_5_Template, 8, 4, "div", 4)(6, MovementFormComponent_Conditional_6_Template, 8, 2, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 2)(9, "label", 3);
      \u0275\u0275text(10, "Quantidade");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function MovementFormComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.qty, $event) || (ctx.qty = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 2)(13, "label", 3);
      \u0275\u0275text(14, "Motivo / Justificativa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function MovementFormComponent_Template_select_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.reason, $event) || (ctx.reason = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(16, MovementFormComponent_For_17_Template, 2, 2, "option", 9, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 2)(19, "label", 3);
      \u0275\u0275text(20, "Data / Hora");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 11);
      \u0275\u0275listener("click", function MovementFormComponent_Template_button_click_22_listener() {
        return ctx.tryConfirm();
      });
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "app-scanner-dialog", 12);
      \u0275\u0275listener("openChange", function MovementFormComponent_Template_app_scanner_dialog_openChange_24_listener($event) {
        return ctx.scanOpen = $event;
      })("scan", function MovementFormComponent_Template_app_scanner_dialog_scan_24_listener($event) {
        return ctx.onScan($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, MovementFormComponent_Conditional_25_Template, 17, 6, "div", 13);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.selected ? 5 : 6);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.qty);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.reason);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.reasons);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.nowLabel);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.type === "in" ? "bg-primary" : "bg-destructive");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.type === "in" ? "Registrar Entrada" : "Registrar Sa\xEDda", " ");
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.scanOpen);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.confirmOpen ? 25 : -1);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, IconComponent, ScannerDialogComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MovementFormComponent, [{
    type: Component,
    args: [{ selector: "app-movement-form", standalone: true, imports: [FormsModule, IconComponent, ScannerDialogComponent], template: `<div class="rounded-xl border bg-card shadow">
  <div class="space-y-4 p-5">
    <div class="space-y-2">
      <label class="text-sm font-medium">Produto</label>
      @if (selected) {
        <div class="flex items-center justify-between rounded-lg border bg-muted/40 p-3">
          <div>
            <p class="text-sm font-medium">{{ selected.name }}</p>
            <p class="font-mono text-xs text-muted-foreground">{{ selected.sku }} \xB7 {{ selected.qty }} {{ selected.unit }}</p>
          </div>
          <button type="button" class="text-sm hover:underline" (click)="selected = null">Trocar</button>
        </div>
      } @else {
        <div class="flex gap-2">
          <div class="relative flex-1">
            <app-icon name="search" class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input class="flex h-9 w-full rounded-md border bg-background pl-9 pr-3 text-sm shadow-sm" placeholder="Buscar produto por nome ou SKU..." [(ngModel)]="search" />
            @if (matches.length > 0) {
              <div class="absolute z-20 mt-1 w-full overflow-hidden rounded-lg border bg-popover shadow-lg">
                @for (p of matches; track p.id) {
                  <button type="button" class="flex w-full justify-between px-3 py-2 text-left text-sm hover:bg-accent" (click)="pick(p)">
                    <span>{{ p.name }}</span>
                    <span class="text-xs text-muted-foreground">{{ p.qty }} {{ p.unit }}</span>
                  </button>
                }
              </div>
            }
          </div>
          <button type="button" class="inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md bg-secondary px-4 text-sm" (click)="scanOpen = true">
            <app-icon name="scan-line" class="size-4" />
            Scanner
          </button>
        </div>
      }
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-2">
        <label class="text-sm font-medium">Quantidade</label>
        <input type="number" min="1" class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="qty" />
      </div>
      <div class="space-y-2">
        <label class="text-sm font-medium">Motivo / Justificativa</label>
        <select class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="reason">
          @for (r of reasons; track r) {
            <option [value]="r">{{ r }}</option>
          }
        </select>
      </div>
    </div>
    <div class="space-y-2">
      <label class="text-sm font-medium">Data / Hora</label>
      <input class="flex h-9 w-full rounded-md border px-3 text-sm" [value]="nowLabel" disabled />
    </div>
    <button
      type="button"
      class="inline-flex h-9 w-full items-center justify-center gap-2 rounded-md px-4 text-sm font-medium text-primary-foreground"
      [class]="type === 'in' ? 'bg-primary' : 'bg-destructive'"
      (click)="tryConfirm()"
    >
      {{ type === 'in' ? 'Registrar Entrada' : 'Registrar Sa\xEDda' }}
    </button>
  </div>
</div>

<app-scanner-dialog [open]="scanOpen" (openChange)="scanOpen = $event" (scan)="onScan($event)" />

@if (confirmOpen) {
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" (click)="confirmOpen = false">
    <div class="grid w-full max-w-md gap-4 rounded-lg border bg-background p-6 shadow-lg" (click)="$event.stopPropagation()">
      <h2 class="text-lg font-semibold">Confirmar {{ type === 'in' ? 'Entrada' : 'Sa\xEDda' }}</h2>
      <p class="text-sm text-muted-foreground">
        {{ type === 'in' ? 'Adicionar' : 'Remover' }} <strong>{{ qty }} {{ selected?.unit }}</strong> de
        <strong>{{ selected?.name }}</strong> ({{ reason }}).
      </p>
      <div class="flex justify-end gap-2">
        <button type="button" class="inline-flex h-9 items-center justify-center rounded-md border px-4 text-sm" (click)="confirmOpen = false">Cancelar</button>
        <button type="button" class="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm text-primary-foreground" (click)="doConfirm()">Confirmar</button>
      </div>
    </div>
  </div>
}
` }]
  }], null, { type: [{
    type: Input
  }], preset: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MovementFormComponent, { className: "MovementFormComponent", filePath: "src/app/pages/movimentacao/movement-form.component.ts", lineNumber: 15 });
})();

// src/app/pages/movimentacao/movimentacao.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function MovimentacaoComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-movement-form", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("preset", ctx_r0.presetProduct());
  }
}
function MovimentacaoComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-movement-form", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("preset", ctx_r0.presetProduct());
  }
}
function MovimentacaoComponent_For_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-icon", 5);
  }
}
function MovimentacaoComponent_For_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-icon", 6);
  }
}
function MovimentacaoComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275template(2, MovimentacaoComponent_For_22_Conditional_2_Template, 1, 0, "app-icon", 5)(3, MovimentacaoComponent_For_22_Conditional_3_Template, 1, 0, "app-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "p", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 19);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(m_r2.type === "in" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive");
    \u0275\u0275advance();
    \u0275\u0275conditional(m_r2.type === "in" ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(m_r2.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r2.reason, " \xB7 ", ctx_r0.formatWhen(m_r2.date), "");
    \u0275\u0275advance();
    \u0275\u0275classMap(m_r2.type === "in" ? "text-primary" : "text-destructive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", m_r2.type === "in" ? "+" : "-", "", m_r2.qty, " ");
  }
}
function MovimentacaoComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Sem movimenta\xE7\xF5es.");
    \u0275\u0275elementEnd();
  }
}
var MovimentacaoComponent = class _MovimentacaoComponent {
  store = inject(StoreService);
  route = inject(ActivatedRoute);
  activeTab = signal("in");
  presetSku = signal("");
  movements = this.store.movements;
  products = this.store.products;
  presetProduct = computed(() => {
    const sku = this.presetSku();
    return this.products().find((p) => p.sku === sku) ?? null;
  });
  history = computed(() => this.movements().slice(0, 8));
  ngOnInit() {
    this.route.queryParams.subscribe((p) => {
      this.activeTab.set(p["tab"] === "out" ? "out" : "in");
      this.presetSku.set(typeof p["sku"] === "string" ? p["sku"] : "");
    });
  }
  formatWhen(iso) {
    return formatDistanceToNow(new Date(iso), { addSuffix: true, locale: ptBR });
  }
  static \u0275fac = function MovimentacaoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MovimentacaoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MovimentacaoComponent, selectors: [["app-movimentacao"]], decls: 24, vars: 10, consts: [[1, "space-y-6"], [1, "text-2xl", "font-bold", "tracking-tight"], [1, "text-sm", "text-muted-foreground"], [1, "grid", "w-full", "grid-cols-2", "gap-1", "rounded-lg", "bg-muted", "p-1"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "gap-2", "rounded-md", "px-3", "py-2", "text-sm", "font-medium", 3, "click"], ["name", "arrow-down-to-line", 1, "size-4"], ["name", "arrow-up-from-line", 1, "size-4"], ["type", "in", 3, "preset"], ["type", "out", 3, "preset"], [1, "rounded-xl", "border", "bg-card", "shadow"], [1, "p-6", "pb-2"], [1, "flex", "items-center", "gap-2", "text-base", "font-semibold"], ["name", "history", 1, "size-4"], [1, "space-y-2", "p-6", "pt-0"], [1, "flex", "items-center", "gap-3", "rounded-lg", "border", "p-3"], [1, "grid", "size-9", "shrink-0", "place-items-center", "rounded-lg", "text-sm"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "text-xs", "text-muted-foreground"], [1, "text-sm", "font-semibold"]], template: function MovimentacaoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Movimenta\xE7\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Registre entradas e sa\xEDdas do estoque.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "button", 4);
      \u0275\u0275listener("click", function MovimentacaoComponent_Template_button_click_7_listener() {
        return ctx.activeTab.set("in");
      });
      \u0275\u0275element(8, "app-icon", 5);
      \u0275\u0275text(9, " Registrar Entrada ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 4);
      \u0275\u0275listener("click", function MovimentacaoComponent_Template_button_click_10_listener() {
        return ctx.activeTab.set("out");
      });
      \u0275\u0275element(11, "app-icon", 6);
      \u0275\u0275text(12, " Registrar Sa\xEDda ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, MovimentacaoComponent_Conditional_13_Template, 1, 1, "app-movement-form", 7)(14, MovimentacaoComponent_Conditional_14_Template, 1, 1, "app-movement-form", 8);
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "h3", 11);
      \u0275\u0275element(18, "app-icon", 12);
      \u0275\u0275text(19, " Hist\xF3rico Recente ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 13);
      \u0275\u0275repeaterCreate(21, MovimentacaoComponent_For_22_Template, 11, 10, "div", 14, _forTrack02);
      \u0275\u0275template(23, MovimentacaoComponent_Conditional_23_Template, 2, 0, "p", 2);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("bg-background", ctx.activeTab() === "in")("shadow", ctx.activeTab() === "in");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("bg-background", ctx.activeTab() === "out")("shadow", ctx.activeTab() === "out");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.activeTab() === "in" ? 13 : 14);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.history());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.history().length === 0 ? 23 : -1);
    }
  }, dependencies: [MovementFormComponent, IconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MovimentacaoComponent, [{
    type: Component,
    args: [{ selector: "app-movimentacao", standalone: true, imports: [MovementFormComponent, IconComponent], template: `<div class="space-y-6">
  <div>
    <h1 class="text-2xl font-bold tracking-tight">Movimenta\xE7\xE3o</h1>
    <p class="text-sm text-muted-foreground">Registre entradas e sa\xEDdas do estoque.</p>
  </div>

  <div class="grid w-full grid-cols-2 gap-1 rounded-lg bg-muted p-1">
    <button type="button" class="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium" [class.bg-background]="activeTab() === 'in'" [class.shadow]="activeTab() === 'in'" (click)="activeTab.set('in')">
      <app-icon name="arrow-down-to-line" class="size-4" />
      Registrar Entrada
    </button>
    <button type="button" class="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium" [class.bg-background]="activeTab() === 'out'" [class.shadow]="activeTab() === 'out'" (click)="activeTab.set('out')">
      <app-icon name="arrow-up-from-line" class="size-4" />
      Registrar Sa\xEDda
    </button>
  </div>

  @if (activeTab() === 'in') {
    <app-movement-form type="in" [preset]="presetProduct()" />
  } @else {
    <app-movement-form type="out" [preset]="presetProduct()" />
  }

  <div class="rounded-xl border bg-card shadow">
    <div class="p-6 pb-2">
      <h3 class="flex items-center gap-2 text-base font-semibold">
        <app-icon name="history" class="size-4" />
        Hist\xF3rico Recente
      </h3>
    </div>
    <div class="space-y-2 p-6 pt-0">
      @for (m of history(); track m.id) {
        <div class="flex items-center gap-3 rounded-lg border p-3">
          <div class="grid size-9 shrink-0 place-items-center rounded-lg text-sm" [class]="m.type === 'in' ? 'bg-primary/10 text-primary' : 'bg-destructive/10 text-destructive'">
            @if (m.type === 'in') {
              <app-icon name="arrow-down-to-line" class="size-4" />
            } @else {
              <app-icon name="arrow-up-from-line" class="size-4" />
            }
          </div>
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium">{{ m.productName }}</p>
            <p class="text-xs text-muted-foreground">{{ m.reason }} \xB7 {{ formatWhen(m.date) }}</p>
          </div>
          <span class="text-sm font-semibold" [class]="m.type === 'in' ? 'text-primary' : 'text-destructive'">
            {{ m.type === 'in' ? '+' : '-' }}{{ m.qty }}
          </span>
        </div>
      }
      @if (history().length === 0) {
        <p class="text-sm text-muted-foreground">Sem movimenta\xE7\xF5es.</p>
      }
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MovimentacaoComponent, { className: "MovimentacaoComponent", filePath: "src/app/pages/movimentacao/movimentacao.component.ts", lineNumber: 16 });
})();
export {
  MovimentacaoComponent
};
//# sourceMappingURL=chunk-WUCL4WJW.js.map
