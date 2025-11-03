import { test, expect } from '@playwright/test';

test('Envio de formulário com dados válidos', async ({ page }) => {
    await page.goto('https://frellocalcados.com/contato');
  
    await page.fill('#form-field-name', 'João Silva');
    await page.fill('#form-field-email', 'joao@email.com');
    await page.fill('#form-field-subject', 'Pedido');
    await page.fill('#form-field-message', 'Gostaria de saber mais sobre o produto X.');
  
    await page.click('button[type="submit"]');
  
    await expect(page.locator('.elementor-message')).toContainText('Mensagem enviada com sucesso');
  });
  