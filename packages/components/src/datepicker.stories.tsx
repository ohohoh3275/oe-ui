import type { Meta, StoryObj } from "@storybook/react";
import { Datepicker } from "./datepicker";

const meta = {
    title: "Datepicker/Datepicker",
    component: Datepicker,
    args: {},
    argTypes: {},
} satisfies Meta<typeof Datepicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DatepickerStory: Story = {};
