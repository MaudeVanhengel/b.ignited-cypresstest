before(() => {
    cy.setCookie('euconsent-v2', 'CPVC3YAPVC3YAAHABBENCDCgAP_AAF_AAAAAIDpH7XzVLWFC-O5_dLsAMIxG5OCMA-QAAgaAB-ABiDKQMAQGgmAotATgBAACIBAAIDJBIAJEGAEQCUAA4IABAAEIQAQAAAJIICIAkAIACEAAAAAKAoAQAAAIgEAAEAAAmggAALIAWFAAggAAAABAAAgAAIAAAgAAAAAAAAAAAAAAACgcWASIaFQAAUJY4Ek0KQAggBBEAAwAoAACAIACIAAIEBAgBAIQQAgAAIAAAAAAAAAgBgEAAgAACAAAQAHggEAAAAgABAAAAAgAIgAQAAAAQAAAAAIAgBBAAAAAAAAAAACBAAAAEABYUAAAAAAgAAAAAAAAgAhoAMAAQRLA.f_gAC_gAAAAA');
})

describe('Shows the news page', () => {
    it('succesfully loads the page', () => {
        cy.visit('/')
    })

    it('shows a list of articles', () => {
        cy.get('.widget--most-recent *[class^="list__item-"]').should('exist')
    })
})

describe('Opening an article', () => {

    it('opens the correct article when clicked', () => {
        let firstArticle = cy.get('.widget--most-recent')
            .find('*[class^="list__item-"]')
            .not('.list__item--plus')
            //filtert plus-artikels eruit
            .first()
            //neemt het eerste artikel
            .find('a').as('firstArticle');
        
            firstArticle.click();

            firstArticle.should('have.attr', 'href')
                .then((href => {
                    cy.url().should('be.equal', href)
                }))
    })
})

describe('Navigating to the weather page', () => {
    beforeEach(() => {
        cy.get('.dropdown__toggle')
        .contains(' Meer ').as('dropdown') 
    })
    it('is able to toggle the dropdown menu', () => {
        cy.get('@dropdown')
            .click()

        cy.get('.dropdown__list').should('exist');
    })

    it('opens the weather page when clicked on the correct element', () => {

        cy.get('.dropdown__list')
            .find('>li')
            .filter(':contains("Weer")')
            .click();

        cy.url().should('be.equal', "https://meteo.standaard.be/");
    })
})


