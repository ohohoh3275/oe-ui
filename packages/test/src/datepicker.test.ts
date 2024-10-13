import { expect, test } from "vitest";

test("test test", () => {
    expect(true).toBe(true);
});

test("import datepicker", async () => {
    const { Datepicker } = await import("../../components/src/datepicker");
    expect(Datepicker).toBeDefined();
});
