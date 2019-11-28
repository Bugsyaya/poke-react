describe('The Home Page',  () => {
    it('successfully loads',() => cy.visit('http://localhost:3000') );
    it('previous button should be disabled', function() {
        cy.contains('previous').should('be.disabled');
    });
    it('previous button should be enaabled',() => {
        cy.contains('next').click();
        cy.contains('previous').should('not.be.disabled');
    });
    it('should display all pokemons',() => {
         cy.get('a').its('length').should('not.eq', 0)
    });
  })