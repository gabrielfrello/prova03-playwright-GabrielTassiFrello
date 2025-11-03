import { test, expect } from '@playwright/test';

test('Validação automática com ZeroStep AI', async ({ page }) => {
  await page.goto('https://frellocalcados.com/contato');

  const token = process.env.ZEROSTEP_TOKEN;

  const response = await page.evaluate(async (token) => {
    const form = document.querySelector('form.elementor-form');
    const formData = new FormData(form);
    formData.set('form_fields[name]', 'Teste AI');
    formData.set('form_fields[email]', 'ai@teste.com');
    formData.set('form_fields[subject]', 'ZeroStep');
    formData.set('form_fields[message]', 'Teste automatizado com ZeroStep AI');

    const res = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.ok;
  }, token);

  expect(response).toBeTruthy();
});
