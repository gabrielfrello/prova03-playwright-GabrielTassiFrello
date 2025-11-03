import { test, expect } from '@playwright/test';

test('Validação de campos obrigatórios', async ({ page }) => {
    await page.goto('https://frellocalcados.com/contato');
    await page.click('button[type="submit"]');
  
    await expect(page.locator('#form-field-name:invalid')).toBeVisible();
    await expect(page.locator('#form-field-email:invalid')).toBeVisible();
    await expect(page.locator('#form-field-subject:invalid')).toBeVisible();
    await expect(page.locator('#form-field-message:invalid')).toBeVisible();
  });
  