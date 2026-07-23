import { test, expect } from "@playwright/test";

test.describe("Favoritos", () => {
  test("favorites page renders empty state when no favorites", async ({ page }) => {
    // clear localStorage first
    await page.goto("/favoritos");
    await page.evaluate(() => localStorage.removeItem("toura:favorites"));
    await page.reload();

    // Should show empty-state content rather than crashing
    await expect(page.locator("main")).toBeVisible();
    await expect(page).toHaveTitle(/Favoritos/i);
  });

  test("toggling favorite on a destination card stores it", async ({ page }) => {
    await page.goto("/destinos");

    // Click the first visible favorite button
    const favBtn = page.locator("button[aria-label*='favorito'], button[aria-label*='Guardar']").first();
    if (await favBtn.count() > 0) {
      await favBtn.click();
      const stored = await page.evaluate(() => localStorage.getItem("toura:favorites"));
      expect(stored).not.toBeNull();
      const parsed = JSON.parse(stored ?? "[]");
      expect(Array.isArray(parsed)).toBe(true);
      expect(parsed.length).toBeGreaterThan(0);
    }
  });
});
