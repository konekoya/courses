describe.skip('CSS-Tricks home page', function() {
  beforeEach(function() {
    cy.visit('/');
  });

  it('contains "CSS-Tricks" in the title', function() {
    cy.title().should('contain', 'CSS-Tricks');
  });

  it('has a visible star logo', function() {
    cy.get('.icon-logo-star').should('be.visible');
  });

  describe('with a 320x568 viewport', function() {
    beforeEach(function() {
      cy.viewport(320, 568);
    });

    it('has a visible mobile menu toggle', function() {
      cy.get('#mobile-menu-toggle').should('be.visible');
    });
  });

  describe('with a 1085 viewport', function() {
    beforeEach(function() {
      cy.viewport(1085, 660);
    });

    it('has a visible mobile menu toggle', function() {
      cy.get('#mobile-menu-toggle').should('be.visible');
    });
  });

  describe('site search', function() {
    beforeEach(function() {
      cy.get('.search-field').type('flexbox{enter}');
    });

    it('requests the results', function() {
      cy.url().should('include', '?s=flexbox');
    });
  });
});

describe('Search results page', function() {
  beforeEach(function() {
    cy.visit('/?s=flexbox');
  });

  it('displays search results', function() {
    cy.get('.search-grid-list li').should('exist');
  });
});
