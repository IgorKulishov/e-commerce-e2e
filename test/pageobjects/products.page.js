const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get logoImage () { return $('.custom-navbar-image') }
    get navBarHomeLink () { return $('a.nav-link') }
    get navBarProductLink () { return $("ul.navbar-nav.navbar-custom-upper-header") }
    get userDropdown () { return $("#button-dropdown-user-account") }
    get logout () { return $("[href='/logout']") }
    get register () { return $("[href='/register']") }
    get login () { return $("[href='/login']") }

}

module.exports = new SecurePage();
