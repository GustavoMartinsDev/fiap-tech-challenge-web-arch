import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "@mui/material";
import { FHeader } from "./FHeader";

const meta = {
  title: "Molecules/Header",
  component: FHeader,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof FHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    leftContent: (
      <Typography variant="h1" fontWeight={400}>
        Foo bar
      </Typography>
    ),
    rightContent: (
      <Typography variant="h1" fontWeight={400}>
        Foo bar
      </Typography>
    ),
  },
};

export const Dark: Story = {
  args: {
    leftContent: (
      <Typography variant="h1" fontWeight={400}>
        Foo bar
      </Typography>
    ),
    rightContent: (
      <Typography variant="h1" fontWeight={400}>
        Foo bar
      </Typography>
    ),
  },
  parameters: {
    isDark: true,
  },
};
