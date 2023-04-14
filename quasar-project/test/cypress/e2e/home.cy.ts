// Use `cy.dataCy` custom command for more robust tests
// See https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements

// ** This file is an example of how to write Cypress tests, you can safely delete it **

// This test will pass when run against a clean Quasar project
describe('Ride to work by Bike', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Change language to English', () => {
    cy.contains('EN').click()
    cy.url().should('include', '?lang=en')
  });
  it('Change language to Czech', () => {
    cy.contains('CZ').click()
    cy.url().should('include', '?lang=cs')
  });
  it('Component 1',() => {
    cy.get('div.component1').should('exist')
    cy.get('div.component1').should('have.css', 'background-image').and('match', /.*background\.png"\)$/)
  });
  it('All images are loaded', () =>{
    cy.get('img').should('have.length', 2) // make sure there are exactly two images
    cy.get('img').eq(0).should('have.attr', 'src').and('include', 'title.png');
    cy.get('img').eq(1).should('have.attr', 'src').and('include', 'message.png');
  });
});

// ** The following code is an example to show you how to write some tests for your home page **
//
// describe('Home page tests', () => {
//   beforeEach(() => {
//     cy.visit('/');
//   });
//   it('has pretty background', () => {
//     cy.dataCy('landing-wrapper')
//       .should('have.css', 'background')
//       .and('match', /(".+(\/img\/background).+\.png)/);
//   });
//   it('has pretty logo', () => {
//     cy.dataCy('landing-wrapper img')
//       .should('have.class', 'logo-main')
//       .and('have.attr', 'src')
//       .and('match', /^(data:image\/svg\+xml).+/);
//   });
//   it('has very important information', () => {
//     cy.dataCy('instruction-wrapper')
//       .should('contain', 'SETUP INSTRUCTIONS')
//       .and('contain', 'Configure Authentication')
//       .and('contain', 'Database Configuration and CRUD operations')
//       .and('contain', 'Continuous Integration & Continuous Deployment CI/CD');
//   });
// });


// Workaround for Cypress AE + TS + Vite
// See: https://github.com/quasarframework/quasar-testing/issues/262#issuecomment-1154127497
export {};

