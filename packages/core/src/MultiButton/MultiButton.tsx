import React, { cloneElement } from "react";

import { useDefaultProps } from "../hooks/useDefaultProps";
import { HvButtonSize, HvButtonVariant } from "../Button";
import { HvBaseProps } from "../types/generic";
import { ExtractNames } from "../utils/classes";

import { staticClasses, useClasses } from "./MultiButton.styles";

export { staticClasses as multiButtonClasses };
export type HvMultiButtonClasses = ExtractNames<typeof useClasses>;

export interface HvMultiButtonProps extends HvBaseProps {
  /** If all the buttons are disabled. */
  disabled?: boolean;
  /** If the MultiButton is to be displayed vertically. */
  vertical?: boolean;
  /** Category of button to use */
  variant?: HvButtonVariant;
  /** A Jss Object used to override or extend the styles applied to the component. */
  classes?: HvMultiButtonClasses;
  /** Button size. */
  size?: HvButtonSize;
  split?: boolean;
}

export const HvMultiButton = (props: HvMultiButtonProps) => {
  const {
    className,
    children,
    classes: classesProp,
    disabled = false,
    vertical = false,
    variant = "secondarySubtle",
    size,
    ...others
  } = useDefaultProps("HvMultiButton", props);
  const { classes, cx } = useClasses(classesProp);

  return (
    <div
      className={cx(
        classes.root,
        {
          [classes.vertical]: vertical,
          [classes[variant]]: variant,
        },
        className
      )}
      {...others}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          const childIsSelected = !!child.props.selected;

          return cloneElement(child as React.ReactElement, {
            variant,
            disabled: disabled || child.props.disabled,
            size,
            className: cx(child.props.className, classes.button, {
              [classes.firstButton]: index === 0,
              [classes.lastButton]:
                index === React.Children.count(children) - 1,
              [classes.selected]: childIsSelected,
            }),
            "aria-pressed": childIsSelected,
          });
        }
      })}
    </div>
  );
};
