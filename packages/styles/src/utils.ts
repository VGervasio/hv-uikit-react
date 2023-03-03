import { DeepString, HvThemeStructure } from "./types";

const toCSSVars = (obj: object, prefix = "--uikit") => {
  const vars = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      const nestedVars = toCSSVars(value, `${prefix}-${key}`);

      for (const [nestedKey, nestedValue] of Object.entries(nestedVars)) {
        vars[nestedKey] = nestedValue;
      }
    } else {
      vars[`${prefix}-${key}`] = value;
    }
  }

  return vars;
};

export const mapCSSVars = <T extends object>(
  obj: T,
  prefix: string = "--uikit"
): DeepString<T> => {
  const vars = {} as DeepString<T>;

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      vars[key] = mapCSSVars(value, `${prefix}-${key}`);
    } else {
      vars[key] = `var(${prefix}-${key})`;
    }
  }

  return vars;
};

export const mergeTheme = (...objects) => {
  const isObject = (obj) => obj && typeof obj === "object";

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (isObject(pVal) && isObject(oVal)) {
        prev[key] = pVal ? oVal : mergeTheme(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });

    return prev;
  }, {});
};

export const parseTheme = (
  themes: { [key: string]: HvThemeStructure },
  theme: string = "",
  colorMode: string = ""
): {
  selected: string;
  selectedMode: string;
  colorModes: string[];
  bgColor: string;
} => {
  const names = Object.keys(themes);
  const selected = names.includes(theme) ? theme : names[0];
  const colorModes = Object.keys(themes[selected].colors.modes);
  const selectedMode = colorModes.includes(colorMode)
    ? colorMode
    : colorModes[0];
  const bgColor = themes[selected].colors.modes[selectedMode].backgroundColor;

  return { selected, selectedMode, colorModes, bgColor };
};

export const getThemesList = (themes: object) => {
  const list = {};

  Object.keys(themes).forEach((themeName) => {
    const theme = themes[themeName];
    const colorModes = Object.keys(theme.colors.modes);

    list[themeName] = {
      colorModes: {},
    };

    colorModes.forEach((colorMode) => {
      list[themeName].colorModes[colorMode] = toCSSVars({
        ...theme,
        colors: {
          ...theme.colors.modes[colorMode],
        },
      });
    });
  });

  return list;
};

export const getThemesVars = (themes: { [key: string]: HvThemeStructure }) => {
  const vars = {};

  Object.keys(themes).forEach((themeName) => {
    const theme = themes[themeName];
    const colorModes = Object.keys(theme.colors.modes);

    colorModes.forEach((colorMode) => {
      const styleName = `[data-theme="${themeName}"][data-color-mode="${colorMode}"]`;

      vars[styleName] = toCSSVars({
        ...theme,
        colors: {
          ...theme.colors.modes[colorMode],
        },
      });
    });
  });

  return vars;
};
