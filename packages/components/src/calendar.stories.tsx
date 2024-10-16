import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./calendar";

const meta = {
    title: "Datepicker/Calendar",
    component: Calendar,
    args: {},
    argTypes: {},
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CalendarStory: Story = {};
