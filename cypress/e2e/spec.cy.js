describe('template spec', () => {
  
  beforeEach(() => {
    cy.login('ericatest@qa.com.br','teste')
  })

  it('passes', () => {
    cy.visit('https://front.serverest.dev/admin/home')

  })
})