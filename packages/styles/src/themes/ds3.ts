import { colors } from "../tokens/colors";
import { makeTheme } from "../makeTheme";
import { HvTheme } from "../types";

const ds3 = makeTheme((theme: HvTheme) => ({
  name: "ds3",
  colors: {
    modes: {
      dawn: {
        type: "light",
        backgroundColor: "#F0F0F0",
        ...colors.common,
        ...colors.light,
        primary_80: "#477DBD",
        atmo2: "#F0F0F0",
        neutral: "#4D9284",
        catastrophic: "#C51162",
        cat1: "#6EAFFF",
        cat2: "#FFAB5C",
        cat3: "#5CD1B2",
        cat4: "#9672C1",
        cat5: "#ED6868",
        cat6: "#58C9DD",
        cat7: "#FFDB70",
        cat8: "#4AB573",
        cat9: "#646A98",
        cat10: "#EB7397",
        cat11: "#33ABCC",
        cat12: "#F8C169",
      },
      wicked: {
        type: "dark",
        backgroundColor: colors.dark.atmo2,
        ...colors.common,
        ...colors.dark,
        positive: "#63A621",
        neutral: "#72CCCB",
        catastrophic: "#E26BD2",
        cat1: "#6EAFFF",
        cat2: "#FFAB5C",
        cat3: "#5CD1B2",
        cat4: "#9672C1",
        cat5: "#ED6868",
        cat6: "#58C9DD",
        cat7: "#FFDB70",
        cat8: "#4AB573",
        cat9: "#646A98",
        cat10: "#EB7397",
        cat11: "#33ABCC",
        cat12: "#F8C169",
      },
    },
  },
  space: {
    base: 10,
    xs: "10px",
    sm: "20px",
    md: "30px",
    lg: "60px",
    xl: "90px",
  },
  breakpoints: {
    unit: "px",
    step: 5,
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1270,
      xl: 1920,
    },
  },
  typography: {
    display: {
      color: theme.colors.secondary,
      fontSize: "42px",
      letterSpacing: "0.02em",
      lineHeight: "52px",
      fontWeight: 600,
    },
    title1: {
      color: theme.colors.secondary,
      fontSize: "32px",
      letterSpacing: "0.02em",
      lineHeight: "40px",
      fontWeight: 600,
    },
    title2: {
      color: theme.colors.secondary,
      fontSize: "22px",
      letterSpacing: "0.02em",
      lineHeight: "30px",
      fontWeight: 600,
    },
    title3: {
      color: theme.colors.secondary,
      fontSize: "18px",
      letterSpacing: "0.02em",
      lineHeight: "28px",
      fontWeight: 600,
    },
    title4: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.lg,
      lineHeight: theme.lineHeights.lg,
    },
    label: {
      color: theme.colors.secondary,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 600,
    },
    body: {
      color: theme.colors.secondary,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 400,
    },
    caption1: {
      color: theme.colors.secondary,
      fontSize: "10px",
      letterSpacing: "0.02em",
      lineHeight: "15px",
      fontWeight: 400,
    },
    caption2: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeights.normal,
      fontSize: theme.fontSizes.xs,
      lineHeight: theme.lineHeights.sm,
    },
    // LEGACY
    "5xlTitle": {
      color: theme.colors.secondary,
      fontSize: "52px",
      letterSpacing: "0.02em",
      lineHeight: "60px",
      fontWeight: 600,
    },
    "4xlTitle": {
      color: theme.colors.secondary,
      fontSize: "52px",
      letterSpacing: "0.02em",
      lineHeight: "60px",
      fontWeight: 400,
    },
    xxlTitle: {
      color: theme.colors.secondary,
      fontSize: "42px",
      letterSpacing: "0.02em",
      lineHeight: "52px",
      fontWeight: 400,
    },
    lTitle: {
      color: theme.colors.secondary,
      fontSize: "32px",
      letterSpacing: "0.02em",
      lineHeight: "40px",
      fontWeight: 400,
    },
    sTitle: {
      color: theme.colors.secondary,
      fontSize: "22px",
      letterSpacing: "0.02em",
      lineHeight: "30px",
      fontWeight: 400,
    },
    xxsTitle: {
      color: theme.colors.secondary,
      fontSize: "18px",
      letterSpacing: "0.02em",
      lineHeight: "28px",
      fontWeight: 400,
    },
    sectionTitle: {
      color: theme.colors.secondary,
      fontSize: "14px",
      letterSpacing: "0.32em",
      lineHeight: "18px",
      fontWeight: 400,
      textTransform: "uppercase",
    },
    placeholderText: {
      color: theme.colors.secondary_60,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 400,
    },
    link: {
      color: theme.colors.primary,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 600,
    },
    disabledText: {
      color: theme.colors.secondary_60,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 600,
    },
    selectedNavText: {
      color: theme.colors.brand,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 600,
    },
    vizTextDisabled: {
      color: theme.colors.secondary_60,
      fontSize: "10px",
      letterSpacing: "0.02em",
      lineHeight: "15px",
      fontWeight: 400,
    },
    xsInlineLink: {
      color: theme.colors.primary,
      fontSize: "10px",
      letterSpacing: "0.02em",
      lineHeight: "15px",
      fontWeight: 600,
      textDecoration: "underline",
    },
  },
  actionBar: {
    borderTop: `3px solid ${theme.colors.atmo2}`,
  },
  dropdown: {
    borderRadius: "2px",
    disabledColor: theme.colors.secondary_60,
    readOnlyBorder: "none",
    readOnlyBackgroundColor: theme.colors.atmo1,
    placeholderColor: theme.colors.secondary_60,
    dropdownHeaderInvalidBorder: `1px solid ${theme.colors.negative}`,
    listContainerPadding: theme.space.sm,
    searchContainerMargin: theme.space.xs,
  },
  button: {
    borderRadius: theme.radii.base,
    padding: theme.spacing(["0", "xs"]),
    marginIconRight: "0px",
    marginIconLeft: "-8px",
    semanticColor: "rgba(251, 252, 252, 0.3)",
    semanticColorDisabled: "rgba(251, 252, 252, 0.1)",
    hoverColor: theme.colors.atmo3,
    secondaryBackgroundColor: theme.colors.atmo1,
    secondarySubtleBorderColor: theme.colors.atmo4,
  },
  header: {
    color: theme.colors.secondary,
    brandColor: theme.colors.secondary,
    height: "44px",
    backgroundColor: theme.colors.atmo1,
    secondLevelBackgroundColor: theme.colors.atmo2,
    secondLevelHeight: "40px",
    hoverColor: theme.colors.atmo3,
    borderTopThickness: "4px",
    borderTopColor: `${theme.colors.brand}`,
    selectedItemColor: theme.colors.brand,
    selectedItemBackgroundColor: "transparent",
    selectedItemBorderTopColor: theme.colors.brand,
    selectedItemBorderTopThickness: "2px",
    selectedItemBorderBottomColor: "transparent",
    selectedItemBorderBottomThickness: "0px",
    secondLevelSelectedItemBorderTopColor: "transparent",
    secondLevelSelectedItemBorderTopThickness: "2px",
    secondLevelSelectedItemBorderBottomColor: "transparent",
    secondLevelSelectedItemBorderBottomThickness: "0px",
    shadow: theme.colors.shadow,
    secondLevelItemColor: theme.colors.secondary,
    secondLevelSelectedItemColor: theme.colors.brand,
    secondLevelSelectedItemBackgroundColor: "transparent",
  },
  card: {
    iconMargin: "-24px",
    outline: "none",
    borderRadius: "0px",
    hoverColor: theme.colors.atmo4,
    backgroundColor: "transparent",
    titleVariant: "title3",
    subheaderVariant: "body",
    subheaderColor: theme.colors.secondary,
  },
  tab: {
    padding: "0 20px",
    hoverBackgroundColor: "transparent",
    hoverBackgroundBorderRadius: "0px",
    hoverUnderlineBackgroundColor: theme.colors.secondary_60,
  },
  list: {
    hoverColor: theme.colors.atmo3,
    disabledBackgroundColor: "transparent",
  },
  dialog: {
    borderRadius: "0",
    margin: "100px",
    titleVariant: "xxsTitle",
  },
  baseCheckBox: {
    hoverColor: theme.colors.atmo3,
    borderRadius: "0px",
  },
  checkbox: {
    hoverColor: theme.colors.atmo3,
    borderRadius: "0px",
  },
  baseDropdown: {
    shadow: theme.colors.shadow,
    placeholderColor: theme.colors.secondary_60,
    borderColor: theme.colors.atmo4,
    hoverBorderColor: theme.colors.secondary,
    disabledBorderColor: theme.colors.atmo4,
    disabledBackgroundColor: theme.colors.atmo3,
    readOnlyBorder: "none",
    readOnlyBackgroundColor: theme.colors.atmo1,
    openBorderColor: "transparent",
  },
  baseRadio: {
    hoverColor: theme.colors.atmo3,
    hoverBorderRadius: "0px",
  },
  baseSwitch: {
    padding: 0,
    height: "16px",
    width: "32px",
    track: {
      opacity: 1,
      borderRadius: "15px",
      height: "16px",
      width: "32px",
      border: `solid 1px ${theme.colors.secondary}`,
      backgroundColor: theme.colors.atmo2,
      hoverBackgroundColor: "transparent",
    },
    thumb: {
      width: "12px",
      height: "12px",
      left: "-9px",
      border: `solid 1px ${theme.colors.secondary}`,
      backgroundColor: theme.colors.atmo1,
      marginLeft: "2px",
      marginTop: 0,
      boxShadow: "none",
    },
    disabled: {
      thumbBackgroundColor: theme.colors.atmo3,
      thumbBorder: `solid 1px ${theme.colors.secondary_60}`,
      trackBackgroundColor: theme.colors.atmo3,
      trackBorder: `solid 1px ${theme.colors.secondary_60}`,
      trackOpacity: 1,
    },
    checkedTrackBackgroundColor: theme.colors.secondary,
    hoverBackgroundColor: "transparent",
    hoverBaseBackgroundColor: "transparent",
    checkedOpacity: 1,
    borderRadius: "0px",
    focusBorderRadius: "8px",
  },
  baseInput: {
    underlineHeight: "1px",
    placeholderColor: theme.colors.secondary_60,
    borderColor: "none",
    hoverColor: theme.colors.secondary,
    disabledBorderColor: "transparent",
    disabledTextColor: theme.colors.secondary_60,
    disabledBackgroundColor: theme.colors.atmo3,
    readOnlyBorderColor: "transparent",
    readOnlyTextColor: theme.colors.secondary,
    readOnlyBackgroundColor: theme.colors.atmo1,
    multilineBorderColor: theme.colors.atmo4,
    multilineDisabledBorderColor: theme.colors.atmo4,
  },
  radio: {
    hoverColor: theme.colors.atmo3,
    borderRadius: "0px",
  },
  tagsInput: {
    borderColor: theme.colors.atmo4,
    disabledBackgroundColor: theme.colors.atmo1,
    readOnlyBackgroundColor: theme.colors.atmo1,
    hoverColor: theme.colors.secondary,
    readOnlyBorderColor: "transparent",
  },
  switch: {
    invalidPaddingBottom: "0px",
  },
  fileUploader: {
    dropZone: {
      borderColor: theme.colors.atmo4,
      backgroundColor: theme.colors.atmo2,
      borderRadius: "0px",
      borderColorDrag: theme.colors.secondary,
      borderColorDisabled: theme.colors.atmo4,
      borderType: "dotted",
    },
    fileList: {
      itemBorder: "none",
      itemBorderRadius: "0px",
    },
    file: {
      progressHeight: "2px",
      borderWidth: "1px",
      previewContainerSize: "52px",
      imageSize: "100%",
    },
    preview: {
      buttonSize: "52px",
      overlayColor: theme.colors.atmo3,
      overlayOpacity: "0.75",
      overlayBorderRadius: "0px",
    },
  },
  dropDownMenu: {
    borderRadius: "0px",
    hoverColor: theme.colors.atmo3,
    borderOpened: "none",
    borderClosed: "none",
    extensionHeight: theme.space.xs,
    extensionBorderColor: "transparent",
  },
  pagination: {
    pageSizeBorderColor: "transparent",
    pageSizeHoverBorderColor: "transparent",
  },
  actionsGeneric: {},
  bulkActions: {
    separatorDisplay: "none",
    border: "none",
    backgroundColor: theme.colors.atmo1,
    padding: "0px",
    anySelectedBackgroundColor: theme.colors.neutral_20,
  },
  table: {
    headerHoverColor: theme.colors.atmo3,
    headerBorderTopColor: theme.colors.atmo4,
    selectedRowBackgroundColor: theme.colors.atmo1,
    rowBorderColor: "transparent",
    rowBackgroundColor: "transparent",
    rowBorderRadius: "0px",
    rowListBackgroundColor: "transparent",
    rowListBorderRadius: "0px",
    rowListBorderColor: "transparent",
    rowStripedBackgroundColorEven: theme.colors.atmo1,
    rowStripedBackgroundColorOdd: "transparent",
    rowExpandBackgroundColor: theme.colors.atmo2,
    rowHoverColor: theme.colors.atmo3,
    rowHoverBorderColor: theme.colors.atmo4,
    rowSortedColor: theme.colors.atmo1,
    rowSortedColorAlpha: "0.4",
    cellPaddingTop: `calc(${theme.space.xs} - 2px )`,
    cellPaddingBottom: `calc(${theme.space.xs} - 3px )`,
    cellListBorder: `solid 2px ${theme.colors.atmo2}`,
    cellBorder: `solid 1px ${theme.colors.atmo4}`,
  },
  calendar: {
    border: "none",
    borderRadius: "0",
    cellHoverColor: theme.colors.atmo3,
    headerInputBorderBottom: `1px solid ${theme.colors.atmo4}`,
    headerInputBorderTop: "1px solid transparent",
    headerInputBorderLeft: "1px solid transparent",
    headerInputBorderRight: "1px solid transparent",
    headerInputFontColor: theme.colors.secondary,
    headerInputFontSize: "18px",
    headerInputFontLetterSpacing: "0.02em",
    headerInputFontLineHeight: "28px",
    headerInputFontWeight: theme.fontWeights.semibold,
  },
  globalActions: {
    sectionVariant: "sectionTitle",
    border: "transparent",
    borderRadius: theme.radii.none,
    sectionBackgroundColor: "transparent",
    sectionPaddingLeft: "0px",
  },
  emptyState: {
    titleVariant: "xxsTitle",
    titleMarginTop: "2px",
  },
  tooltip: {
    borderRadius: "0px",
  },
  verticalNavigation: {
    justifyContent: "space-between",
    hoverColor: theme.colors.atmo3,
    activeBorderLeft: `2px solid ${theme.colors.brand}`,
    inactiveBorderLeft: `2px solid transparent`,
    actionsMarginTop: "none",
  },
  slider: {
    dragBarColor: theme.colors.atmo3,
    ringColor: theme.colors.secondary,
    ringOpacity: "20%",
  },
  stepNavigation: {
    separatorMargin: "0px",
    defaultSeparatorHeight: 3,
    simpleSeparatorHeight: 2,
  },
  filterGroup: {
    applyButtonVariant: "secondaryGhost",
    cancelButtonVariant: "secondaryGhost",
    applyButtonMarginRight: "0px",
    rightPanelBorderLeft: "none",
    rightPanelShadow: `inset 8px 0 8px -6px ${theme.colors.shad1}`,
    partialCounterFontWeight: theme.fontWeights.bold,
  },
  multiButton: {
    disabledBackgroundColor: theme.colors.atmo2,
  },
  datePicker: {
    dropdownPlaceholderColor: theme.colors.secondary_60,
    placeholderVariant: "body",
  },
  scrollTo: {
    horizontal: {
      dotDisplay: "none",
      buttonHeight: "32px",
      buttonHoverBackgroundColor: theme.colors.atmo3,
      buttonBottomBorder: "2px solid transparent",
      selectedButtonBottomBorder: `2px solid ${theme.colors.secondary}`,
      textPadding: "8px 10px",
      textMaxWidth: "180px",
    },
    dotRootSize: "32px",
    dotRootRadius: "0%",
    dotHoverBackgroundColor: theme.colors.atmo3,
    dotHoverColor: theme.colors.atmo4,
    dotHoverSize: "10px",
    dotNotSelectedColor: theme.colors.atmo4,
    dotNotSelectedSize: "6px",
    dotSelectedSize: 10,
    backgroundColorOpacity: 0.8,
    backgroundColorBlur: "4px",
  },
  inlineEditor: {
    hoverBorderColor: "transparent",
    activeBorderColor: "transparent",
    borderWidth: "0px",
  },
  queryBuilder: {
    ruleSubGroupLeftConnectorPosition: "-42px",
    ruleSubGroupContainerLeftConnectorPosition: "-41px",
    ruleLeftConnectorPosition: `calc( -1 * 21px)`,
    ruleConnectorHorizontalSize: "21px",
    ruleConnectorHeight: "39px",
    actionsContainerMarginTop: "22px",
    topActionButtonContainerBottom: `calc(-1 * ${theme.space.md} * 0.5)`,
    topActionButtonContainerRight: `calc(${theme.space.sm} * 1.75)`,
    topGroupPaddingBottom: `calc(${theme.space.sm} * 3)`,
    border: `1px solid ${theme.colors.atmo4}`,
  },
  colorPicker: {
    inputValueVariant: "body",
    panelMinWidth: "240px",
    panelPadding: "20px 15px 20px 20px",
    pickersFlexDirection: "row",
    hueHeight: "180px",
    hueWidth: "15px",
    hueDirection: "vertical",
    hueMarginTop: "0px",
    hueBorderRadius: theme.radii.none,
    hueSliderWidth: "12px",
    hueSliderHeight: "6px",
    hueSliderBorderRadius: "1px",
    hueSliderBackground: "#fff",
    hueSliderBorder: "1px solid #fff",
    hueSliderMarginLeft: "1px",
    saturationWidth: "180px",
    saturationHeight: "180px",
    saturationMarginRight: "5px",
    saturationBorderRadius: theme.radii.none,
    saturationPointerWidth: "6px",
    saturationPointerHeight: "6px",
    colorPickerWidth: "205px",
    recommendedColorsRootWidth: "205px",
    recommendedColorsWidth: "calc(100% + 5px)",
    recommendedColorsMargin: "-5px -3px",
    recommendedColorsBottomPadding: "20px",
    recommendedColorsSwatchWidth: "16px",
    recommendedColorsSwatchHeight: "16px",
    recommendedColorsSwatchMargin: "5px",
    recommendedColorsSwatchBorderRadius: theme.radii.none,
    fieldsPaddingTop: "10px",
    fieldsMarginRight: "5px",
    fieldsHexPaddingRight: "20px",
    fieldsRgbPaddingLeft: "5px",
    fieldsHexWidth: "80px",
    fieldsRgbWidth: "40px",
    addSavedColorButtonMargin: "5px",
    addSavedColorButtonWidth: "32px",
    addSavedColorButtonHeight: "32px",
    savedColorsWidth: "calc(100% + 5px)",
    savedColorsMargin: "-5px -3px",
    savedColorsSwatchWidth: "32px",
    savedColorsSwatchHeight: "32px",
    savedColorsSwatchMargin: "4px",
    savedColorsSwatchBorderRadius: theme.radii.base,
  },
  carousel: {
    xsControlsDisplay: "none",
    counterContainerDisplay: "block",
    mainContainerFlexDirection: "column-reverse",
    controlsBorder: "none",
    controlsBackgroundColor: "transparent",
    controlsJustifyContent: "space-between",
    thumbnailBorderRadius: theme.radii.none,
    thumbnailSelectedBorder: `1px solid ${theme.colors.base_dark}`,
  },
  drawer: {
    backDropBackgroundColor: theme.colors.atmo4,
  },
  forms: {
    infoMessage: {
      textColor: theme.colors.secondary,
    },
    label: {
      fontWeight: theme.fontWeights.semibold,
    },
  },
  snackbar: {
    actionButtonVariant: "secondaryGhost",
    actionMarginLeft: "inherit",
  },
}));

export default ds3;
