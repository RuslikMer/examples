describe('Auth', function() {
    it('Gets, types and asserts', function() {
      cy.visit('/')

      cy.contains('Войти').click()

      cy.contains('Забыли пароль?').click()

  
      cy.url().should('include', '/password/reset')
  
      cy.get('input[name="email"]')
        .type('qwerty@rsvhr.com')
      
      cy.contains('button', 'Восстановить аккаунт')
        .click()
      cy.get('div[class="header"]').should('be.visible')
    })
  })