import { test, expect } from "@playwright/test";

test.describe("Contacto page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contacto");
  });

  test("page title includes Contacto", async ({ page }) => {
    await expect(page).toHaveTitle(/Contacto/i);
  });

  test("contact form is visible", async ({ page }) => {
    await expect(page.locator("form")).toBeVisible();
  });

  test("shows validation errors on empty submit", async ({ page }) => {
    await page.locator("form button[type='submit']").click();
    const errors = page.locator("[id^='error-']");
    await expect(errors.first()).toBeVisible();
  });

  test("shows error for invalid email", async ({ page }) => {
    await page.fill("#contact-name", "João Silva");
    await page.fill("#contact-email", "nao-e-um-email");
    await page.selectOption("#contact-subject", "geral");
    await page.fill("#contact-message", "Mensagem de teste com mais de vinte caracteres.");
    await page.locator("form button[type='submit']").click();

    await expect(page.locator("#error-email")).toBeVisible();
    await expect(page.locator("#error-email")).toHaveText(/inválido/i);
  });

  test("successful form submission shows confirmation", async ({ page }) => {
    await page.fill("#contact-name", "Maria Santos");
    await page.fill("#contact-email", "maria@exemplo.ao");
    await page.selectOption("#contact-subject", "parcerias");
    await page.fill(
      "#contact-message",
      "Estou interessada em explorar uma parceria institucional com a Toura Angola."
    );

    await page.locator("form button[type='submit']").click();
    await expect(page.locator("[role='alert']")).toBeVisible({ timeout: 5000 });
    await expect(page.locator("[role='alert']")).toContainText(/enviada/i);
  });

  test("FAQ accordions work", async ({ page }) => {
    const firstDetails = page.locator("details").first();
    const summary = firstDetails.locator("summary");
    await summary.click();
    await expect(firstDetails).toHaveAttribute("open");
  });
});

test.describe("Sobre page", () => {
  test("renders mission and team sections", async ({ page }) => {
    await page.goto("/sobre");
    await expect(page).toHaveTitle(/Sobre/i);
    await expect(page.locator("h1")).toContainText(/Angola/i);

    // Team section should have at least 3 cards
    const teamCards = page.locator("article");
    await expect(teamCards.first()).toBeVisible();
  });
});
