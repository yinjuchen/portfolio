describe('template spec', () => {
  it('passes', () => {
    cy.visit('./index.html')
    cy.get('#navbar-collapse > ul > li:nth-child(2) > a').click()
    cy.get('#navbar-collapse > ul > li:nth-child(3) > a').click()
    cy.get('#navbar-collapse > ul > li:nth-child(4) > a').click()
    cy.get('#navbar-collapse > ul > li:nth-child(1) > a').click()
  })
})