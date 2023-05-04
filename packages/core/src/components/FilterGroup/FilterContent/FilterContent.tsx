import {
  HvActionBar,
  HvBaseDropdown,
  HvBaseDropdownProps,
  HvButton,
  HvButtonVariant,
  HvFormStatus,
  HvTypography,
} from "@core/components";
import { setId } from "@core/utils";
import {
  HvFilterGroupLabels,
  HvFilterGroupValue,
  HvFilterGroupHorizontalPlacement,
} from "../FilterGroup";
import { styles } from "./FilterContent.styles";
import filterGroupContentClasses, {
  HvFilterGroupContentClasses,
} from "./filterContentClasses";
import { HvFilterGroupContext } from "../FilterGroupContext";
import { useContext, useMemo, useRef, useState } from "react";
import { Filters } from "@hitachivantara/uikit-react-icons";
import { clsx } from "clsx";
import { HvFilterGroupCounter } from "../Counter";
import { ClassNames } from "@emotion/react";
import { HvFilterGroupLeftPanel } from "../LeftPanel";
import { HvFilterGroupRightPanel } from "../RightPanel";
import { useTheme } from "@core/hooks";

export interface HvFilterGroupContentProps
  extends Omit<HvBaseDropdownProps, "onChange"> {
  description?: React.ReactNode;
  status?: HvFormStatus;
  onChange?: (
    event: React.MouseEvent<HTMLButtonElement>,
    value?: HvFilterGroupValue
  ) => void;
  onCancel?: (event: React.MouseEvent<HTMLButtonElement> | Event) => void;
  onClear?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  labels?: HvFilterGroupLabels;
  horizontalPlacement?: HvFilterGroupHorizontalPlacement;
  disablePortal?: boolean;
  escapeWithReference?: boolean;
  height?: string | number;
  leftEmptyElement?: React.ReactNode;
  rightEmptyElement?: React.ReactNode;
  disabled?: boolean;
  classes?: HvFilterGroupContentClasses;
}

export const HvFilterGroupContent = ({
  id,
  status,
  disabled = false,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  description,
  "aria-describedby": ariaDescribedBy,
  onChange,
  onCancel,
  onClear,
  labels,
  horizontalPlacement = "right",
  disablePortal = true,
  escapeWithReference = true,
  height,
  leftEmptyElement,
  rightEmptyElement,
  classes,
  ...others
}: HvFilterGroupContentProps) => {
  const { activeTheme } = useTheme();

  const [filterGroupOpen, setFilterGroupOpen] = useState<boolean>(false);

  const {
    defaultValue,
    filterValues,
    rollbackFilters,
    clearFilters,
    applyFilters,
    applyDisabled,
  } = useContext(HvFilterGroupContext);

  const focusTarget = useRef<HTMLDivElement>(null);

  const focusOnContainer = () => {
    focusTarget.current?.focus();
  };

  const onApplyHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    applyFilters();
    onChange?.(event, filterValues);
    setFilterGroupOpen(false);
  };

  const onCancelHandler = (
    event: React.MouseEvent<HTMLButtonElement> | Event
  ) => {
    rollbackFilters();
    onCancel?.(event);
    setFilterGroupOpen(false);
  };

  const onClearHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    clearFilters();
    onClear?.(event);
  };

  const handleToggle = (event: Event, open: boolean) => {
    /* 
     If evt is null this toggle wasn't triggered by the user.
     instead it was triggered by the baseDropdown useEffect after
     the datepicker changed the expanded value this baseDropdown behavior needs a review
    */
    if (event === null) return;
    setFilterGroupOpen(open);
    if (!open) onCancelHandler?.(event);
  };

  const Header = useMemo(
    () => (
      <>
        <Filters />
        <HvTypography variant="label">{labels?.placeholder}</HvTypography>
      </>
    ),
    [labels?.placeholder]
  );

  return (
    <ClassNames>
      {({ css }) => (
        <HvBaseDropdown
          id={setId(id, "dropdown")}
          role="combobox"
          classes={{
            root: clsx(classes?.dropdown, filterGroupContentClasses.dropdown),
            panel: clsx(
              classes?.panel,
              filterGroupContentClasses.panel,
              css(styles.panel)
            ),
            selection: clsx(
              classes?.baseDropdownSelection,
              filterGroupContentClasses.baseDropdownSelection,
              css(styles.baseDropdownSelection)
            ),
            header: clsx(
              classes?.header,
              filterGroupContentClasses.header,
              css(styles.header)
            ),
          }}
          disabled={disabled}
          disablePortal={disablePortal}
          variableWidth
          placement={horizontalPlacement}
          expanded={filterGroupOpen}
          onToggle={handleToggle}
          onClickOutside={onCancelHandler}
          onContainerCreation={focusOnContainer}
          placeholder={Header}
          adornment={<HvFilterGroupCounter />}
          popperProps={{
            modifiers: [
              { name: "preventOverflow", enabled: escapeWithReference },
            ],
          }}
          aria-haspopup="dialog"
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-invalid={status === "invalid" ? true : undefined}
          aria-errormessage={
            status === "invalid" ? setId(id, "error") : undefined
          }
          aria-describedby={
            [description && setId(id, "description"), ariaDescribedBy]
              .join(" ")
              .trim() || undefined
          }
          {...others}
        >
          <div ref={focusTarget} tabIndex={-1} />
          <div
            className={clsx(
              classes?.root,
              filterGroupContentClasses.root,
              css(styles.root)
            )}
            style={{ height }}
          >
            <HvFilterGroupLeftPanel
              id={id}
              className={clsx(
                classes?.leftSidePanel,
                filterGroupContentClasses.leftSidePanel,
                css(styles.leftSidePanel)
              )}
              emptyElement={leftEmptyElement}
            />
            <HvFilterGroupRightPanel
              id={id}
              className={clsx(
                classes?.rightSidePanel,
                filterGroupContentClasses.rightSidePanel,
                css(styles.rightSidePanel)
              )}
              emptyElement={rightEmptyElement}
              labels={labels}
            />
          </div>
          <HvActionBar
            className={clsx(
              classes?.actionBar,
              filterGroupContentClasses.actionBar,
              css(styles.actionBar)
            )}
          >
            <HvButton
              id={setId(id, "clearFilters-button")}
              disabled={
                defaultValue
                  ? defaultValue?.flat().length === filterValues?.flat().length
                  : filterValues?.flat().length === 0
              }
              variant="secondaryGhost"
              onClick={onClearHandler}
            >
              {labels?.clearLabel}
            </HvButton>
            <div
              aria-hidden="true"
              className={clsx(
                classes?.space,
                filterGroupContentClasses.space,
                css(styles.space)
              )}
            >
              &nbsp;
            </div>
            <HvButton
              id={setId(id, "apply-button")}
              disabled={applyDisabled}
              variant={
                activeTheme?.filterGroup.applyButtonVariant as HvButtonVariant
              }
              onClick={onApplyHandler}
              className={css(styles.applyButton)}
            >
              {labels?.applyLabel}
            </HvButton>
            <HvButton
              id={setId(id, "cancel-button")}
              variant={
                activeTheme?.filterGroup.cancelButtonVariant as HvButtonVariant
              }
              onClick={onCancelHandler}
            >
              {labels?.cancelLabel}
            </HvButton>
          </HvActionBar>
        </HvBaseDropdown>
      )}
    </ClassNames>
  );
};