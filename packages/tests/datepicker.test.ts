import { test, expect } from "@playwright/test";

test("calendar is visible after datepicker-input is clicked", async ({
    page,
}) => {
    await page.goto(
        "http://localhost:6006/iframe.html?id=datepicker-datepicker--datepicker-story"
    );

    // check if page is on
    expect(page.url()).toBe(
        "http://localhost:6006/iframe.html?id=datepicker-datepicker--datepicker-story"
    );

    const calendar = page.getByTestId("calendar");

    // not visible yet
    await expect(calendar).not.toBeVisible();
    await page.getByTestId("datepicker-input").click();

    // visible now
    await expect(calendar).toBeVisible();
});

test("calendar is hidden after clicking outside", async ({ page }) => {
    await page.goto(
        "http://localhost:6006/iframe.html?id=datepicker-datepicker--datepicker-story"
    );

    const calendar = page.locator("data-testid=calendar");
    await page.locator("data-testid=datepicker-input").click();
    await expect(calendar).toBeVisible();

    // calendar 바깥 영역
    await page.locator("body").click();

    await expect(calendar).not.toBeVisible();
});
