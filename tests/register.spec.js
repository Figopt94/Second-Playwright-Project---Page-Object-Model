// @ts-check
import { test, expect } from '@playwright/test';
import RegisterPage from '../pom/RegisterPage.js';

test('Register a user', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await page.goto('https://automationexercise.com/login');

  // Generate unique email with timestamp
  const timestamp = Date.now();
  const uniqueEmail = `lacey.massey+${timestamp}@mailinator.com`;

  await registerPage.acceptCookies();
  await registerPage.fillSignupName('Lacey Massey');
  await registerPage.fillSignupEmail(uniqueEmail);
  await registerPage.clickSignupButton();

  await registerPage.fillPersonalDetails('Senha123!', '10', '10', '1990');
  await registerPage.fillAdditionalDetails('Lacey', 'Massey', 'Empresa XYZ', 'Rua Principal, 123', 'United States', 'California', 'Los Angeles', '90001', '+1234567890');
  await registerPage.clickCreateAccountButton();

  // Wait for account creation and verify
  await expect(registerPage.accountCreatedMessage).toBeVisible({ timeout: 30000 });
});