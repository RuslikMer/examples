describe('Reg', function() {
    it('Gets, types and asserts', function() {
      cy.visit('/')

      cy.contains('Регистрация').click()
  
      cy.url().should('include', '/register')
      makeid();
      cy.get('input[placeholder="Ваше имя"]')
        .type(text+Cypress.env('domen'))
      cy.get('input[placeholder="E-mail"]')
        .type(Cypress.env('testPass'))
      cy.get('input[type="password"]')
        .type('123456')  
      cy.get('form')            
        .contains('button', 'Начать бесплатно')
        .click()
        //.url().should('include', '/projects')
    })
  })
//var text;

/*function makeid() {
    var possible = String.fromCharCode((96 <= key && key <= 105)? key-48 : key);
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }*/

describe('Auth', function() {
    it('Gets, types and asserts', function() {
      cy.visit('/')

      cy.contains('Войти').click()
  
      cy.url().should('include', '/login')
  
      cy.get('input[name="email"]')
        .type(Cypress.env('login'))
      cy.get('input[name="password"]')
        .type(Cypress.env('pass'))
      cy.get('form')            
        .contains('button', 'Войти')
        .click()
        .url().should('include', '/projects')
    })
  })

  