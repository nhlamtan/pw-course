import { test } from "@playwright/test";

test("Basic action", async ({ page }) => {
  await test.step("Navigate to material website", async () => {
    await page.goto(`https://material.playwrightvn.com/`);
  });

  await test.step("Click Bai hoc 1", async () => {
    await page
      .locator(`//a[text() = 'Bài học 1: Register Page (có đủ các element)']`)
      .click();
  });

  await test.step("Input", async () => {
    await page.locator("//input[@id = 'username']").fill("Lam Tan");
    await page
      .locator("//input[@id = 'email']")
      .pressSequentially("lamtan1411@gmail.com", { delay: 1_000 });
  });

  await test.step("Radio button / Checkbox", async () => {
    let isCheckmale = await page.locator("//input[@id='male']").isChecked();
    console.log(isCheckmale);

    await page.locator("//input[@id='male']").check();
    isCheckmale = await page.locator("//input[@id='male']").isChecked();
    console.log(isCheckmale);
  });

  await test.step("Select option", async () => {
    await page.locator('//select[@id="country"]').selectOption("canada");
  });
  await test.step("Button upload file", async () => {
    await page
      .locator('//input[@type="file"]')
      .setInputFiles("tests/data-test/data-test.txt");
  });
});

test("Ex3", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com");
  await page.click("//a[@href='03-xpath-todo-list.html']");

  await page.locator("//input[@id='new-task']").fill("Task 1");
  await page.click("//button[@id='add-task']");

  page.on("dialog", async (dialog) => dialog.accept());
  await page.click("//button[text()='Delete']");
});
