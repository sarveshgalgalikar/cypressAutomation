describe('Login',function(){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login?')
        cy.get('input[type="email"]').type('servodams@gmail.com')
        cy.get('input[type="password"]').type('ijnijn@123')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
}
)