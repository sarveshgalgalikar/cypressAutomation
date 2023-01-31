describe('Create feed, mark-unmark as favorites', function(){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login?')
        cy.title().should('be.eq', 'Conduit')
        cy.location('protocol').should('include', 'https')
        cy.get('input[type="email"]').type('servodams@gmail.com')
        cy.get('input[type="password"]').type('ijnijn@123')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed',{timeout:10000}).should('be.visible')
        cy.contains('Global Feed', {timeout:10000}).should('be.visible')
    })
})