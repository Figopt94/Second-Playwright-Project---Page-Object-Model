import { expect } from '@playwright/test';

class GoogleMaps {
    constructor(page) {
        this.page = page;
        this.acceptCookiesButton = page.locator('button:has-text("Accept all"), button:has-text("Aceitar tudo"), button:has-text("I agree")').first();
        this.searchBox = page.locator('input[id="searchboxinput"], input[aria-label*="Search"], input[placeholder*="Search"]').first();
        this.headline = page.locator('h1').first();
        this.directionsButton = page.locator('button[aria-label*="Directions"], button:has-text("Directions"), button:has-text("Direções")').first();
        this.destinationInput = page.locator('input[aria-label*="Destination"], input[aria-label*="Destino"]').first();
    }

    async acceptCookiesIfVisible() {
        try {
            await this.acceptCookiesButton.click({ timeout: 5000 });
        } catch (error) {
            // Cookies button not found or already accepted
            console.log('Cookies button not found or already accepted');
        }
    }

    async searchLocation(location) {
        // Wait for search box to be available
        await this.searchBox.waitFor({ state: 'visible', timeout: 30000 });
        await this.searchBox.fill(location);
        await this.searchBox.press('Enter');
    }

    async verifyHeadline(expectedText) {
        // Look for any heading that contains the expected text
        const headlineLocator = this.page.locator(`h1:has-text("${expectedText}"), h2:has-text("${expectedText}"), [role="heading"]:has-text("${expectedText}")`).first();
        await expect(headlineLocator).toBeVisible({ timeout: 30000 });
    }

    async clickDirections() {
        await this.directionsButton.click();
    }

    async verifyDestinationContains(expectedSubstring) {
        await expect(this.destinationInput).toBeVisible({ timeout: 30000 });
        const destinationValue = await this.destinationInput.inputValue();
        expect(destinationValue).toContain(expectedSubstring);
    }
}

export default GoogleMaps;