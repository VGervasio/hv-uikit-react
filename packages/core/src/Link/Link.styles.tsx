import { theme } from "@hitachivantara/uikit-styles";

import { outlineStyles } from "../utils/focusUtils";
import { createClasses } from "../utils/classes";

export const { staticClasses, useClasses } = createClasses("HvLink", {
  a: {
    ...theme.typography.label,
    textDecoration: "underline",
    color: theme.colors.primary,

    "&:focus-visible": { ...outlineStyles },
  },
});