import React, { useContext, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { HvBaseProps } from "../../../types";
import {
  StyledRoot,
  StyledSelectionList,
  StyledPopper,
} from "./Suggestions.styles";
import { HvFormElementContext } from "../FormElement";
import { HvListItem } from "../../ListContainer/ListItem";
import { HvClickOutsideEvent, useClickOutside, useId } from "hooks";
import suggestionsClasses, { HvSuggestionsClasses } from "./suggestionsClasses";

export type HvSuggestion = {
  id?: string;
  label: React.ReactNode;
  value?: string;
  disabled?: boolean;
};

export type HvSuggestionsProps = HvBaseProps & {
  /** Whether suggestions is visible. */
  expanded?: boolean;
  /** The HTML element Suggestions attaches to. */
  anchorEl?: HTMLElement | null;
  /** Array of { id, label, ...others } values to display in the suggestion list */
  suggestionValues?: HvSuggestion[] | null;
  /** Function called when a suggestion is selected */
  onSuggestionSelected?: (event: React.MouseEvent, value: HvSuggestion) => void;
  /** Function called when suggestion list is closed */
  onClose?: (event: HvClickOutsideEvent) => void;
  /** A Jss Object used to override or extend the styles applied to the component. */
  classes?: HvSuggestionsClasses;
};

export const HvSuggestions = ({
  id,
  className,
  classes,
  expanded = false,
  anchorEl,
  suggestionValues = [],
  onClose,
  onSuggestionSelected,
  ...others
}: HvSuggestionsProps) => {
  const { elementId } = useContext(HvFormElementContext);
  const suggestionsId = id ?? useId(elementId, "suggestions");

  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(expanded);

  useClickOutside(ref, (event: HvClickOutsideEvent) => {
    setIsOpen(false);
    onClose?.(event);
  });

  useEffect(() => {
    setIsOpen(expanded);
  }, [expanded]);

  return (
    <StyledRoot
      id={suggestionsId}
      ref={ref}
      className={clsx(className, suggestionsClasses.root, classes?.root)}
      {...others}
    >
      <StyledPopper
        open={isOpen}
        disablePortal
        anchorEl={anchorEl}
        className={clsx(suggestionsClasses.popper, classes?.popper)}
      >
        <StyledSelectionList
          className={clsx(suggestionsClasses.list, classes?.list)}
          id={useId(suggestionsId, "sugestions-list")}
          onChange={onSuggestionSelected}
        >
          {suggestionValues?.map((item) => {
            const itemKey = item.id || useId(null, "sugestions-list-item");

            return (
              <HvListItem
                key={itemKey}
                value={item}
                disabled={item.disabled || undefined}
              >
                {item.label}
              </HvListItem>
            );
          })}
        </StyledSelectionList>
      </StyledPopper>
    </StyledRoot>
  );
};
