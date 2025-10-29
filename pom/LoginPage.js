import { expect } from '@playwright/test';

class LoginPage {
    constructor(page) {
        this.page = page;
        this.botaoConsent = page.getByRole('button', { name: 'Consent' });
        this.campoEmail = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.campoSenha = page.getByRole('textbox', { name: 'Password' });
        this.botaoLogin = page.getByRole('button', { name: 'Login' });
        this.mensagemBoasVindas = page.getByRole('heading', { name: 'Full-Fledged practice website' });
    }

    async AceitarCookies() {
        try {
            await this.botaoConsent.click({ timeout: 5000 });
        } catch (error) {
            console.log('Consent button not found or already accepted');
        }
    }

    async PreencherEmail(email) {
        await this.campoEmail.fill(email);
    }

    async PreencherSenha(pass) {
        await this.campoSenha.fill(pass);
    }

    async ClicarNoBotaoLogin() {
        await this.botaoLogin.click();
    }

    async VerificarSeUsuarioEstaLogado() {
        // Wait for navigation to complete
        await this.page.waitForLoadState('networkidle', { timeout: 30000 });
        
        // Check if we're on the right domain
        await expect(this.page).toHaveURL(/automationexercise.com/, { timeout: 10000 });
        
        // Look for success indicators
        try {
            await expect(this.mensagemBoasVindas).toBeVisible({ timeout: 10000 });
            const messageText = await this.mensagemBoasVindas.innerText();
            expect(messageText).toContain("Full-Fledged");
        } catch (error) {
            // Alternative verification - check for logged in user elements
            const loggedInIndicator = this.page.locator('text="Logged in as"').first();
            await expect(loggedInIndicator).toBeVisible({ timeout: 5000 });
        }
    }
}

export default LoginPage;