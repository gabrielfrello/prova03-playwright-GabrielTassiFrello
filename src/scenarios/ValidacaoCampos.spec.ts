import { test, expect } from '@playwright/test';

test('Validação de campos obrigatórios', async ({ page }) => {
  await page.goto('https://frellocalcados.com/contato');

  await page.click('button[type="submit"]');

  await expect(page.locator('#form-field-name')).toHaveValue('');
  await expect(page.locator('#form-field-email')).toHaveValue('');
  await expect(page.locator('#form-field-subject')).toHaveValue('');
  await expect(page.locator('#form-field-message')).toHaveValue('');
});
