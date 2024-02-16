import { StoryObj } from "@storybook/react";

import { SimpleTableSection } from "./SimpleTableSection";
import SimpleTableSectionRaw from "./SimpleTableSection?raw";
import { CompleteTableSection } from "./CompleteTableSection";
import CompleteTableSectionRaw from "./CompleteTableSection?raw";
import { PropsTableSection } from "./PropsTableSection";
import PropsTableSectionRaw from "./PropsTableSection?raw";
import { TableEditable } from "./TableEditable";
import TableEditableRaw from "./TableEditable?raw";

export const SimpleTableSectionStory: StoryObj = {
  parameters: {
    docs: { source: { code: SimpleTableSectionRaw } },
  },
  render: () => <SimpleTableSection />,
};

export const CompleteTableSectionStory: StoryObj = {
  parameters: {
    docs: { source: { code: CompleteTableSectionRaw } },
  },
  render: () => <CompleteTableSection />,
};

export const PropsTableSectionStory: StoryObj = {
  parameters: {
    docs: { source: { code: PropsTableSectionRaw } },
  },
  render: () => <PropsTableSection />,
};

export const EditableStory: StoryObj = {
  parameters: {
    docs: { source: { code: TableEditableRaw } },
  },
  render: () => <TableEditable />,
};