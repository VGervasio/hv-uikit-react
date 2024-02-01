import React, { useMemo, useState } from "react";
import {
  HvCellProps,
  HvPagination,
  HvRowInstance,
  HvTable,
  HvTableBody,
  HvTableCell,
  HvTableContainer,
  HvTableHead,
  HvTableHeader,
  HvTableRow,
  hvDropdownColumn,
  useHvData,
  useHvPagination,
} from "@hitachivantara/uikit-react-core";

import { EmptyRow, NewRendererEntry, makeRenderersData } from "../storiesUtils";

export const DropdownColumnRenderer = () => {
  const initialData = useMemo(() => makeRenderersData(64), []);

  const [data, setData] = useState(initialData);

  const columns = useMemo(() => {
    return [
      hvDropdownColumn<NewRendererEntry, string>(
        { Header: "Severity", accessor: "severity", id: "severity-header" },
        undefined,
        "Select severity...",
        "Select severity...",
        (id, value) => {
          let newData = [...data];
          newData = newData.map((val, index) => {
            const newVal = { ...val };
            if (index.toString() === id) {
              if (newVal.severity) {
                newVal.severity = newVal.severity.map((sev) => {
                  const newSev = { ...sev };
                  newSev.selected = false;
                  if (newSev.id === value?.id) newSev.selected = value.selected;
                  return newSev;
                });
              }
            }
            return newVal;
          });
          setData(newData);
        }
      ),
    ];
  }, [data]);

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headers,
    page,
    getHvPaginationProps,
  } = useHvData<NewRendererEntry, string>(
    {
      initialState: { pageSize: 5 },
      columns,
      data,
      defaultColumn: {
        Cell: ({ value }: HvCellProps<NewRendererEntry, string>) =>
          value ?? "—",
      },
    },
    useHvPagination
  );

  const rowRenderer = (pages: HvRowInstance<NewRendererEntry, string>[]) => {
    return pages.map((row, index) => {
      prepareRow(row);

      return (
        <React.Fragment key={row.id}>
          <HvTableRow
            {...row.getRowProps({
              "aria-rowindex": index + 1,
            })}
          >
            {row.cells.map((cell) => (
              <HvTableCell {...cell.getCellProps()}>
                {cell.render("Cell")}
              </HvTableCell>
            ))}
          </HvTableRow>
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <HvTableContainer>
        <HvTable
          {...getTableProps({
            "aria-rowcount": data.length,
          })}
          style={{
            width: 230,
          }}
        >
          <HvTableHead>
            <HvTableRow>
              {headers.map((col) => (
                <HvTableHeader
                  {...col.getHeaderProps()}
                  key={col.Header}
                  id={col.id}
                >
                  {col.render("Header")}
                </HvTableHeader>
              ))}
            </HvTableRow>
          </HvTableHead>
          <HvTableBody {...getTableBodyProps()}>
            {page.length === 0 ? <EmptyRow /> : rowRenderer(page)}
          </HvTableBody>
        </HvTable>
      </HvTableContainer>
      <HvPagination {...getHvPaginationProps?.()} />
    </>
  );
};
