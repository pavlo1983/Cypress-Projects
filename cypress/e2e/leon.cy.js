require('cypress-xpath');

  it('Configure Red SEAT Leon FR Sport', () => {

    cy.visit('https://www.seat.co.uk/');
    
    cy.get('#psyma_html_layer', { timeout: 7000 });
    cy.get('#psyma_close_link_container');
    cy.get('#psyma_close_button_link').click();
    cy.get('button#onetrust-accept-btn-handler').click();
    cy.get('#homepagerange_configureCtaLabel_Leon').invoke('removeAttr','target').click();
    cy.on('uncaught:exception', (err, runnable) => {

      if (err.message.includes('_satellite is not defined')) {
        return false
      };

      if (err.message.includes('$ is not defined')) {
        return false
      }

      if (err.message.includes('replaceAll')) {
        return false
      }

      if (err.message.includes('Cannot read properties of undefined (reading \'params\')')) {
        return false
      }
    });
   
    cy.get(('[data-testid=\'version-selector__standard-equipment__button\']'), { timeout: 30000 }).eq(3).should('exist').click({force: true});
    cy.get(('[data-testid=\'tabs-ui__tab\'] > span'), { timeout: 50000 }).eq(1).should('exist').click();
    cy.on('uncaught:exception', (err, runnable) => {

      if (err.message.includes('_satellite is not defined')) {
        return false
      };

      if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
        return false
      };

      if (err.message.includes('ResizeObserver loop limit exceeded')) {
        return false
      };


    });
    cy.get(('[data-testid=\'modal-close-button\']'), { timeout: 30000 }).should('exist').click();
    cy.get(('[data-testid=\'version-selector__card\']'), { timeout: 30000 }).eq(3).should('exist').click();
    cy.get(('[data-testid=\'seat_engine_selector_card-main-card\']'), { timeout: 50000 }).eq(4).should('be.visible');
    cy.get(('[data-testid=\'seat_engine_selector_card-main-card\']'), { timeout: 30000 }).eq(4).should('exist').click({force: true});
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('TypeError: _satellite._runScript25 is not a function')) {
        return false
      }
      if (err.message.includes('Error: Script error.')) {
        return false
      }

    });

  cy.xpath('/html/body/div[6]/div[1]/div/div/div/div[1]/div/div[3]/div[2]/div/div[2]', { timeout: 50000 }).should('be.visible');
  cy.contains('div', '£ 32,235').then(($div) => {
      const text = $div.text()
      cy.log(text)
    });
  cy.get(('[data-testid=\'card-picker_main-container\']'), { timeout: 30000 }).eq(5).should('be.visible').click();

  cy.contains('button', 'View your summary').scrollIntoView().should('be.visible').click();

  cy.on('uncaught:exception', (err, runnable) => {   
      if (err.message.includes('Error: Script error.')) {
        return false
      }

      if (err.message.includes('ReferenceError: carModel is not defined')) {
        return false
      }

      if (err.message.includes('TypeError: _satellite._runScript33 is not a function')) {
        return false
      }
    });

  cy.contains('Your SEAT Leon FR Sport', { timeout: 50000 }).should('be.visible');

});




