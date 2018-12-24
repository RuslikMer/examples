var text;

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


const makeid = () => {
    var possible = String.fromCharCode((96 <= key && key <= 105)? key-48 : key);
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }