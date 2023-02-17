// @ts-nocheck
import styled from "@emotion/styled";
import { theme } from "@hitachivantara/uikit-styles";
import { Meta, StoryObj } from "@storybook/react";
import { HvButton } from "components";
import React, { useState } from "react";
import { HvSlider, HvSliderProps } from "./Slider";

const meta: Meta<typeof HvSlider> = {
  title: "Inputs/Slider",
  component: HvSlider,
};

export default meta;

export const Main: StoryObj<HvSliderProps> = {
  args: { label: "Failure Rate", defaultValues: [10] },
  render: (args) => {
    return <HvSlider id="Main" {...args} />;
  },
};

export const RangeSlider: StoryObj<HvSliderProps> = {
  parameters: {
    docs: {
      description: {
        story:
          "A range slider can be achieved by adding an array with two values.",
      },
    },
  },
  render: () => {
    return (
      <HvSlider id="Range" label="Failure Rate" defaultValues={[10, 40]} />
    );
  },
};

export const RangeSliderControlled: StoryObj<HvSliderProps> = {
  parameters: {
    docs: {
      description: {
        story: "A controlled slider where the values are set from outside.",
      },
    },
  },
  render: () => {
    const [values, setValues] = useState<number[]>([0, 2]);

    const onChangeHandler = (knobs: number[]) => {
      setValues(knobs);
    };

    const StyledButtonWrapper = styled("div")({
      marginTop: theme.space.md,
      "& button": {
        marginRight: theme.space.xs,
      },
    });

    return (
      <div>
        <HvSlider
          id="RangeSliderControlled"
          label="Failure Rate"
          values={values}
          onChange={onChangeHandler}
          maxPointValue={10}
          minPointValue={-10}
          markStep={10}
          markDigits={1}
        />
        <StyledButtonWrapper>
          <HvButton
            onClick={() => {
              const newValues: number[] = values.map((value) => value - 0.2);

              setValues(newValues);
            }}
          >
            Decrement
          </HvButton>
          <HvButton
            onClick={() => {
              const newValues: number[] = values.map((value) => value + 0.2);

              setValues(newValues);
            }}
          >
            Increment
          </HvButton>
        </StyledButtonWrapper>
      </div>
    );
  },
};

export const FormattedMark: StoryObj<HvSliderProps> = {
  render: () => {
    const defaultValues: number[] = [10];

    const formatMark = (mark: string | React.ReactNode) => `${mark} Cº`;

    return (
      <HvSlider
        id="format"
        label="Temperature"
        formatMark={formatMark}
        defaultValues={defaultValues}
      />
    );
  },
};

export const BlankSlider: StoryObj<HvSliderProps> = {
  parameters: {
    docs: {
      description: {
        story: "A single slider without any value.",
      },
    },
  },
  render: () => {
    return <HvSlider id="BlankSlider" label="Failure Rate" required />;
  },
};

export const RangeBlankSlider: StoryObj<HvSliderProps> = {
  parameters: {
    docs: {
      description: {
        story:
          "A range slider without any value is achieved by adding undefined values in an array.",
      },
    },
  },
  render: () => {
    return (
      <HvSlider
        id="RangeBlankSlider"
        label="Failure Rate"
        defaultValues={[undefined, undefined]}
        required
      />
    );
  },
};

export const ErrorSingleSlider: StoryObj<HvSliderProps> = {
  render: () => {
    return (
      <HvSlider
        id="ErrorSingleSlider"
        label="Failure Rate"
        status="invalid"
        statusMessage="Invalid because I said so"
      />
    );
  },
};

export const ErrorRangeSlider: StoryObj<HvSliderProps> = {
  render: () => {
    return (
      <HvSlider
        id="ErrorRangeSlider"
        label="Failure Rate"
        status="invalid"
        statusMessage="Invalid because I said so"
        defaultValues={[undefined, 53]}
      />
    );
  },
};

export const RangeSpecificErrorSlider: StoryObj<HvSliderProps> = {
  parameters: {
    docs: {
      description: {
        story: "A single slider without any value.",
      },
    },
  },
  render: () => {
    return (
      <HvSlider
        id="RangeSpecificErrorSlider"
        label="Failure Rate"
        status={["valid", "invalid"]}
        statusMessage="Invalid because I said so"
        defaultValues={[undefined, 53]}
      />
    );
  },
};

export const SingleDisabled: StoryObj<HvSliderProps> = {
  render: () => {
    return (
      <HvSlider
        id="SingleDisabled"
        label="Failure Rate"
        defaultValues={[10]}
        disabled
      />
    );
  },
};

export const RangeSliderDisabled: StoryObj<HvSliderProps> = {
  render: () => {
    return (
      <HvSlider
        id="RangeSliderDisabled"
        label="Failure Rate"
        defaultValues={[10, 40]}
        disabled
      />
    );
  },
};

export const NoInput: StoryObj<HvSliderProps> = {
  render: () => {
    return (
      <HvSlider
        id="NoInput"
        label="Failure Rate"
        defaultValues={[10]}
        hideInput
      />
    );
  },
};

export const NoLabelNoInput: StoryObj<HvSliderProps> = {
  render: () => {
    return (
      <HvSlider
        id="NoLabelNoInput"
        knobProps={[{ "aria-label": "no-label-knob" }]}
        hideInput
        defaultValues={[10]}
      />
    );
  },
};

export const ReadOnly: StoryObj<HvSliderProps> = {
  render: () => {
    return (
      <HvSlider
        id="ReadOnly"
        label="Failure Rate"
        defaultValues={[10, 40]}
        readOnly
      />
    );
  },
};
