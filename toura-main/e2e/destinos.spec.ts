import { test, expect } from "@playwright/test";

test.describe("Destinos listing", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/destinos");
  });

  test("page title includes Destinos", async ({ page }) => {
    await expect(page).toHaveTitle(/Destinos/i);
  });

  test("destination cards are rendered", async ({ page }) => {
    const cards = page.locator("a[href^='/destinos/']");
    await expect(cards.first()).toBeVisible();
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe("Destino detail", () => {
  test("loads a destination page without errors", async ({ page }) => {
    // navigate via the listing first to get a real slug
    await page.goto("/destinos");
    const firstCard = page.locator("a[href^='/destinos/']").first();
    const href = await firstCard.getAttribute("href");
    expect(href).toBeTruthy();

    await page.goto(href!);
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(page).not.toHaveURL(/not-found/);
  });

  test("breadcrumb back to /destinos is present", async ({ page }) => {
    await page.goto("/destinos");
    const href = await page.locator("a[href^='/destinos/']").first().getAttribute("href");
    await page.goto(href!);

    const breadcrumb = page.locator("nav[aria-label='Breadcrumb']");
    await expect(breadcrumb.getByRole("link", { name: /Destinos/i })).toBeVisible();
  });
});
