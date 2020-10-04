const LoginPage = require('../pageobjects/login.page');
const ProductPage = require('../pageobjects/products.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        browser.pause(3000);
        LoginPage.login('kuku@kuku.com', '123456789');

        expect(ProductPage.logoImage).toBeExisting();
        // browser.debug();

        expect(ProductPage.navBarHomeLink).toHaveTextContaining(
            'Home');
        expect(ProductPage.navBarProductLink).toHaveTextContaining(
            'Product');

        browser.pause(3000);
        ProductPage.userDropdown.click();
        ProductPage.logout.click();
        browser.pause(1000);
        ProductPage.register.click();
        browser.pause(1000);
        ProductPage.login.click();
        browser.pause(1000);
        // browser.debug();
    });
});


