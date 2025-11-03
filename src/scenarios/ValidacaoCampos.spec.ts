import { test, expect } from '@playwright/test';

test('Validação de campos obrigatórios', async ({ page }) => {
  await page.goto('https://frellocalcados.com/contato');

  await page.waitForSelector('#form-field-name', { state: 'visible' });
  await page.waitForSelector('#form-field-email', { state: 'visible' });
  await page.waitForSelector('#form-field-subject', { state: 'visible' });
  await page.waitForSelector('#form-field-message', { state: 'visible' });

  await page.click('button[type="submit"]');

  await page.waitForTimeout(2000);

  const nameValue = await page.locator('#form-field-name').inputValue();
  const emailValue = await page.locator('#form-field-email').inputValue();
  const subjectValue = await page.locator('#form-field-subject').inputValue();
  const messageValue = await page.locator('#form-field-message').inputValue();

  expect(nameValue).toBe('');
  expect(emailValue).toBe('');
  expect(subjectValue).toBe('');
  expect(messageValue).toBe('');
});