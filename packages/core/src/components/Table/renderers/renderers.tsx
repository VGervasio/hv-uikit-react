import { DropDownXS, DropRightXS } from "@hitachivantara/uikit-react-icons";
import { setId } from "~/utils";
import {
  HvOverflowTooltip,
  HvTag,
  HvTypography,
  HvButton,
  HvTableColumnConfig,
  HvRowInstance,
  HvTagProps,
  HvBaseSwitchProps,
  HvListValue,
  HvCellProps,
} from "~/components";
import DateColumnCell from "./DateColumnCell/index";
import SwitchColumnCell from "./SwitchColumnCell";
import ProgressColumnCell from "./ProgressColumnCell";
import DropdownColumnCell from "./DropdownColumnCell";
import { hvStringFallback, hvNumberFallback } from "../utils";
import { HeaderProps, Renderer } from "react-table";

export function hvTextColumn<
  D extends object = Record<string, unknown>,
  H extends Renderer<HeaderProps<D>> = Renderer<HeaderProps<D>>
>(col: HvTableColumnConfig<D, H>): HvTableColumnConfig<D, H> {
  return {
    Cell: (cellProps: HvCellProps<D>) => (
      <HvOverflowTooltip data={hvStringFallback(cellProps.value)} />
    ),
    sortType: "alphanumeric",
    ...col,
  };
}

export function hvNumberColumn<
  D extends object = Record<string, unknown>,
  H extends Renderer<HeaderProps<D>> = Renderer<HeaderProps<D>>
>(col: HvTableColumnConfig<D, H>): HvTableColumnConfig<D, H> {
  return {
    Cell: (cellProps: HvCellProps<D>) => (
      <>{hvNumberFallback(cellProps.value)}</>
    ),
    align: "right",
    sortType: "number",
    ...col,
  };
}

export function hvDateColumn<
  D extends object = Record<string, unknown>,
  H extends Renderer<HeaderProps<D>> = Renderer<HeaderProps<D>>
>(
  col: HvTableColumnConfig<D, H>,
  dateFormat?: string
): HvTableColumnConfig<D, H> {
  return {
    Cell: (cellProps: HvCellProps<D>) => (
      <DateColumnCell date={cellProps.value} dateFormat={dateFormat} />
    ),
    sortType: "alphanumeric",
    sortDescFirst: true,
    ...col,
  };
}

export function hvExpandColumn<
  D extends object = Record<string, unknown>,
  H extends Renderer<HeaderProps<D>> = Renderer<HeaderProps<D>>
>(
  col: HvTableColumnConfig<D, H>,
  expandRowButtonAriaLabel: string,
  collapseRowButtonAriaLabel: string,
  getCanRowExpand?: (row: HvRowInstance<D>) => boolean
): HvTableColumnConfig<D, H> {
  return {
    Cell: (cellProps: HvCellProps<D>) => {
      const { value, row } = cellProps;
      const { onClick } = row.getToggleRowExpandedProps();

      const hasContent = getCanRowExpand?.(row) ?? true;

      return (
        <>
          {hasContent && (
            <HvButton
              icon
              variant="secondaryGhost"
              aria-label={
                row.isExpanded
                  ? collapseRowButtonAriaLabel
                  : expandRowButtonAriaLabel
              }
              aria-expanded={row.isExpanded}
              onClick={onClick}
              style={{ position: "absolute", left: 0, top: 0 }}
            >
              {row.isExpanded ? <DropDownXS /> : <DropRightXS />}
            </HvButton>
          )}

          <HvOverflowTooltip data={hvStringFallback(value)} />
        </>
      );
    },
    sortType: "alphanumeric",
    cellStyle: {
      position: "relative",
    },
    ...col,
  };
}

export function hvTagColumn<
  D extends object = Record<string, unknown>,
  H extends Renderer<HeaderProps<D>> = Renderer<HeaderProps<D>>,
  A extends object = Record<string, unknown>
>(
  col: HvTableColumnConfig<D, H>,
  valueDataKey: keyof A,
  colorDataKey: keyof A,
  textColorDataKey: keyof A,
  fromRowData: boolean = false,
  tagProps?: HvTagProps
): HvTableColumnConfig<D, H> {
  return {
    Cell: (cellProps: HvCellProps<D>) => {
      const { value, row } = cellProps;
      if (!value) {
        return <>—</>;
      }

      const {
        [valueDataKey]: name,
        [colorDataKey]: color,
        [textColorDataKey]: textColor,
      } = fromRowData ? row.original : value;

      return (
        <HvTag
          label={<HvTypography variant="body">{name}</HvTypography>}
          type="semantic"
          color={color}
          style={textColor != null ? { color: textColor } : {}}
          tabIndex={-1}
          {...tagProps}
        />
      );
    },
    cellStyle: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    ...col,
  };
}

export function hvSwitchColumn<
  D extends object = Record<string, unknown>,
  H extends Renderer<HeaderProps<D>> = Renderer<HeaderProps<D>>
>(
  col: HvTableColumnConfig<D, H>,
  switchLabel: string,
  falseLabel?: string,
  trueLabel?: string,
  switchProps?: HvBaseSwitchProps
): HvTableColumnConfig<D, H> {
  return {
    Cell: (cellProps: HvCellProps<D>) => {
      const { value, row } = cellProps;
      return (
        <SwitchColumnCell
          checked={value}
          value={row.id}
          switchLabel={switchLabel}
          falseLabel={falseLabel}
          trueLabel={trueLabel}
          switchProps={switchProps}
        />
      );
    },
    cellStyle: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    ...col,
  };
}

export function hvDropdownColumn<
  D extends object = Record<string, unknown>,
  H extends Renderer<HeaderProps<D>> = Renderer<HeaderProps<D>>
>(
  col: HvTableColumnConfig<D, H>,
  id: string,
  placeholder: string,
  disabledPlaceholder: string,
  onChange?: (identifier: string, value: HvListValue) => void
): HvTableColumnConfig<D, H> {
  return {
    Cell: (cellProps: HvCellProps<D>) => {
      const { value, row, column } = cellProps;
      const dsbld = value.length < 1;
      return (
        <DropdownColumnCell
          values={value}
          placeholder={dsbld ? disabledPlaceholder : placeholder}
          onChange={(val) => onChange?.(row.id, val)}
          disabled={dsbld}
          dropdownProps={{
            "aria-labelledby": setId(id, column.id),
          }}
        />
      );
    },
    cellStyle: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    ...col,
  };
}

export function hvProgressColumn<
  D extends object = Record<string, unknown>,
  H extends Renderer<HeaderProps<D>> = Renderer<HeaderProps<D>>
>(
  col: HvTableColumnConfig<D, H>,
  getPartial?: (row: HvRowInstance<D>) => number,
  getTotal?: (row: HvRowInstance<D>) => number,
  color?: "primary" | "secondary"
): HvTableColumnConfig<D, H> {
  return {
    Cell: (cellProps: HvCellProps<D>) => {
      const { row } = cellProps;
      const partial = getPartial?.(row) || 0;
      const total = getTotal?.(row);

      if (total) {
        return (
          <ProgressColumnCell partial={partial} total={total} color={color} />
        );
      }

      return <>—</>;
    },

    cellStyle: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    ...col,
  };
}
