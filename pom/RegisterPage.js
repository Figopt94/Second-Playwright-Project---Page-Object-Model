import { expect } from '@playwright/test';

class RegisterPage {
    constructor(page) {
        this.page = page;
        this.consentButton = page.getByRole('button', { name: 'Consent' });
        this.nameField = page.locator("[data-qa='signup-name']");
        this.emailField = page.locator("[data-qa='signup-email']");
        this.signupButton = page.getByRole('button', { name: 'Signup' });
        this.genderField = page.getByText('Mrs.');    // Selecionar gênero
        this.passwordField = page.getByLabel('Password *');
        this.daysDropdown = page.locator('#days');
        this.monthsDropdown = page.locator('#months');
        this.yearsDropdown = page.locator('#years');
        this.newsletterCheckbox = page.getByLabel('Sign up for our newsletter!');
        this.firstNameField = page.getByLabel('First name *');
        this.lastNameField = page.getByLabel('Last name *');
        this.companyField = page.getByLabel('Company', { exact: true });
        this.addressField = page.getByLabel('Address * (Street address, P.');
        this.countryDropdown = page.getByLabel('Country *');
        this.stateField = page.getByLabel('State *');
        this.cityField = page.getByLabel('City *');
        this.zipcodeField = page.locator('#zipcode');
        this.mobileNumberField = page.getByLabel('Mobile Number *');
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
        this.accountCreatedMessage = page.getByText('Account Created!');
    }

    async acceptCookies() {
        try {
            await this.consentButton.click({ timeout: 5000 });
        } catch (error) {
            // Consent button not found or not needed, continue with test
            console.log('Consent button not found or already accepted');
        }
    }

    async fillSignupName(name) {
        await this.nameField.fill(name);
    }

    async fillSignupEmail(email) {
        await this.emailField.fill(email);
    }

    async clickSignupButton() {
        await this.signupButton.click();
    }

    async fillPersonalDetails(password, day, month, year) {
        // Wait for the form to be fully loaded
        await this.page.waitForLoadState('load', { timeout: 30000 });
        
        // Wait for gender field to be available and click it
        await this.genderField.waitFor({ state: 'visible', timeout: 10000 });
        await this.genderField.click();
        
        await this.passwordField.fill(password);
        await this.daysDropdown.selectOption(day);
        await this.monthsDropdown.selectOption(month);
        await this.yearsDropdown.selectOption(year);
    }

    async fillAdditionalDetails(firstName, lastName, company, address, country, state, city, zipcode, mobileNumber) {
        await this.newsletterCheckbox.check();
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.companyField.fill(company);
        await this.addressField.fill(address);
        await this.countryDropdown.selectOption(country);
        await this.stateField.fill(state);
        await this.cityField.fill(city);
        await this.zipcodeField.fill(zipcode);
        await this.mobileNumberField.fill(mobileNumber);
    }

    async clickCreateAccountButton() {
        await this.createAccountButton.click();
    }
}

export default RegisterPage;