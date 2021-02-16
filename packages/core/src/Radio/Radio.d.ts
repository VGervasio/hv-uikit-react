import { StandardProps } from "@material-ui/core";

import { HvBaseRadioProps } from "../BaseRadio";
import { HvFormStatus } from "../Forms/FormElement";

export type HvRadioClassKey =
  | "root"
  | "container"
  | "disabled"
  | "radio"
  | "label"
  | "focusVisible";

export interface HvRadioProps extends StandardProps<HvBaseRadioProps, HvRadioClassKey> {
  /**
   * The label of the form element.
   *
   * The form element must be labeled for accessibility reasons.
   * If not provided, an aria-label or aria-labelledby must be provided.
   */
  label?: React.ReactNode;

  /**
   * The status of the form element.
   *
   * Valid is correct, invalid is incorrect and standBy means no validations have run.
   *
   * When uncontrolled and unspecified it will default to "standBy" and change to either "valid"
   * or "invalid" after any change to the state.
   */
  status?: HvFormStatus;
  /**
   * The error message to show when `status` is "invalid". Defaults to "Required".
   */
  statusMessage?: React.ReactNode;
}

export default function HvRadio(props: HvRadioProps): JSX.Element | null;