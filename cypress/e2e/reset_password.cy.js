
// <reference types="cypress" />
describe("réinitialisation mot de passe", () => {
  
    it('connexion BackMarket', () => {
        // cy.intercept({
        //     url: 'https://preprod.backmarket.fr/bm/lost-password',
        //     method: 'POST'
        //   }).as('waitEmail')
        cy.visit(' https://preprod.backmarket.fr/fr-fr/password-reset');
        cy.get('[data-qa="accept-cta"] > .MkLAMntR').click();
        cy.get('#email').type('b16c30ec-1fc9-4a32-8e9e-55c11cd2851f@mailslurp.com');
        cy.get('[data-test="password-reset-submit-button"]').click();
        // cy.wait('@waitEmail');
       cy.mailslurp()
       .then(mailslurp =>
        mailslurp.waitForLatestEmail('b16c30ec-1fc9-4a32-8e9e-55c11cd2851f', 40000, true))
       .then(email =>
       cy.document().invoke('write', email.body));
        // expect(email).to.contain("Nouveau mot de passe"),
        cy.get('[class="t_fz15px t_fwbold t_fsnormal t_w100p m_fwbold m_fsnormal m_w100p"]').click();
        cy.get('#newPassword').type('Test2023');
        cy.get('#newPasswordConfirmation').type('Test2023');
        cy.get('.MkLAMntR').click();
    })
})


