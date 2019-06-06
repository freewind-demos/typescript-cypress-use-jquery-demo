import $ from 'jquery';

describe('cypress', () => {

  it('test', () => {

    cy.visit('index.html');

    cy.window().then(win => {
      console.log('### jquery:visible', $(win.document.getElementById('hello')!).is(':visible'));
      console.log('### jquery:visible', $(win.document).find('#hello').is(':visible'));
      console.log('### Cypress.$:visible', Cypress.$('#hello').is(':visible'));
    })

  });

})
