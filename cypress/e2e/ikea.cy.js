require('cypress-xpath');

  it('Configuring UTESPELARE black gaming desk', () => {

    cy.visit('https://www.ikea.com/gb/en/');
    cy.get('button#onetrust-accept-btn-handler', {timeout: 15000}).click();
    cy.get('#ikea-search-input', {timeout: 5000}).type('desk');
    cy.get('button#search-box__searchbutton').click();
    cy.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Error: {\"frameUrl\":\"https://s.salecycle.com/receiver.html\",\"name\":\"POSTFRAME_UNAVAILABLE\"}')) {
          return false
        }
      });
    cy.contains('Showing results for \"desk\"', {timeout: 50000}).should('be.visible');
    cy.get('#content > div > div > div > div.plp-catalog-product-list > div.plp-filter.plp-clearfix > div.plp-filter-bar > div > button:nth-child(4) > svg', { timeout: 15000 }).click({force: true});
    cy.get('#content > div > div > div > div.plp-catalog-product-list > div > div.plp-filter-bar > div:nth-child(4) > div > div > ul > li:nth-child(1)', { timeout: 20000 }).click();
    cy.get('#content > div > div > div > div.plp-catalog-product-list > div.plp-filter.plp-clearfix > div.plp-filter-bar > div > button:nth-child(3)', { timeout: 15000 }).should('be.visible').click({force: true});
    cy.get('#content > div > div > div > div.plp-catalog-product-list > div.plp-filter.plp-clearfix > div.plp-filter-bar > div > button:nth-child(3)', { timeout: 15000 }).should('be.visible').click({force: true});
    cy.get('#black', { timeout: 10000 }).click();
    cy.get('#content > div > div > div > div.plp-catalog-product-list > div.plp-filter.plp-clearfix > div.plp-filter-bar > div > button:nth-child(3)', { timeout: 15000 }).should('be.visible').click({force: true});
    cy.contains('UTESPELARE', {timeout: 5000}).scrollIntoView().should('be.visible');
    cy.get('[ data-ref-id=\"80507627\"] > div.plp-mastercard__item.plp-mastercard__button-container > div > button.btn.btn--small.btn--icon-emphasised', { timeout: 15000 }).should('be.visible').click({force: true});
    cy.get('div > div.hnf-toast__close-btn > button > span > svg', {timeout: 50000}).click({force: true});
    cy.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Cannot read properties of null')) {
          return false
        }
      });
    cy.scrollTo('top', {ensureScrollable: false}, {easing: 'linear'});
    cy.get('body > header > div > div > div > ul > li.hnf-header__shopping-cart-link > a > span > span.hnf-btn__label', {timeout: 10000}).click({force: true});
    cy.contains('Order summary', {timeout: 50000}).should('be.visible');
    cy.contains('UTESPELARE', {timeout: 5000}).should('be.visible');
    cy.contains('Continue to checkout', {timeout: 15000}).scrollIntoView().should('be.visible').click({force: true});
});
