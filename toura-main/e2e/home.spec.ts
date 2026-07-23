import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders page title and hero", async ({ page }) => {
    await expect(page).toHaveTitle(/Toura/);
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("header navigation links are visible", async ({ page }) => {
    const nav = page.locator("header nav");
    await expect(nav).toBeVisible();
    await expect(nav.getByRole("link", { name: /destinos/i }).first()).toBeVisible();
  });

  test("footer is rendered", async ({ page }) => {
    const footer = page.locator("footer");
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toBeVisible();
  });

  test("skip link is present in DOM", async ({ page }) => {
    const skip = page.locator("a.skip-link");
    await expect(skip).toHaveCount(1);
  });

  test("page has no broken JSON-LD", async ({ page }) => {
    const scripts = await page.locator('script[type="application/ld+json"]').all();
    for (const script of scripts) {
      const text = await script.textContent();
      expect(() => JSON.parse(text ?? "")).not.toThrow();
    }
  });
});
