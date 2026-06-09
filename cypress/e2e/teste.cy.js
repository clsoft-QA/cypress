// Script para efetuar testes no SauceDemo
// Dev: Claudio Santos
// Data: 13-05-2026
// Utilizando BeforeEach e Commands (Funcoes)


// Automatizar os testes do Sauce Demo
beforeEach (() => {
  // Visitar o Site saucedemo

    cy.visit('https://www.saucedemo.com/')

    // Validar se o site abriu o correto

    cy.url().should("eq","https://www.saucedemo.com/")
  
})


describe('1-Login', () => {
  it('a - Login com credenciais válidas', () => {
    cy.fazerlogin('standard_user','secret_sauce')

    // Verifica se a pagina aberta é a pagina correta
    
    cy.url().should("eq","https://www.saucedemo.com/inventory.html")

  })

  it('b - Login com username inválido', () => {
    
    cy.fazerlogin('claudio','secret_sauce')
    
    // Validar nao foi login com sucesso, verificando se a mensagem de erro

    cy.xpath("//h3[@data-test='error']").should('be.visible')


  })

  it('c - Login com senha inválida', () => {
    
    cy.fazerlogin('standard_user','senhaincorreta')

    // Validar nao foi login com sucesso, verificando se a mensagem de erro

    cy.xpath("//h3[@data-test='error']").should('be.visible')

  })

  it('d - Login com username vazio', () => {
    
    // Validar se os campos estao visiveis 

    cy.fazerlogin('','secret_sauce')

    // Validar nao foi login com sucesso, verificando se a mensagem de erro

    cy.xpath("//h3[@data-test='error']").should('be.visible')

  })

  it('e - Login com senha vazia', () => {
    
    cy.fazerlogin('standard_user','')

     // Validar nao foi login com sucesso, verificando se a mensagem de erro

    cy.xpath("//h3[@data-test='error']").should('be.visible')

  })
})

describe('2-AddToCart', () => {
 it('a - Adicionar um item ao carrinho', () => {
    
    cy.fazerlogin('standard_user','secret_sauce')

    // Verifica se a pagina aberta é a pagina correta
    
    cy.url().should("eq","https://www.saucedemo.com/inventory.html")

    // Clicar em algum produto para adicionar ao Carrinho

    cy.xpath("//button[@id='add-to-cart-sauce-labs-fleece-jacket']").click()
  
  })

  it('b - Remover um item do carrinho', () => {
    
    cy.fazerlogin('standard_user','secret_sauce')

    // Verifica se a pagina aberta é a pagina correta
    
    cy.url().should("eq","https://www.saucedemo.com/inventory.html")

    // Clicar em algum produto para adicionar ao Carrinho

    cy.xpath("//button[@id='add-to-cart-sauce-labs-fleece-jacket']").click()

    // Clicar novamente para remover do carrinho
      
    cy.xpath("//button[@id='remove-sauce-labs-fleece-jacket']").click()

  })
  
})
describe('3-Checkout', () => {
 it('a - Checkout com sucesso', () => {
    
    cy.fazerlogin('standard_user','secret_sauce')

    // Verifica se a pagina aberta é a pagina correta
    
    cy.url().should("eq","https://www.saucedemo.com/inventory.html")

    // Clicar em algum produto para adicionar ao Carrinho

    cy.xpath("//button[@id='add-to-cart-sauce-labs-fleece-jacket']").click()

    // Clicar no botao do carrinho

    cy.xpath("//a[@class='shopping_cart_link']").click()

    // Validar se abriu a pagina correta do carrinho

    cy.url().should('eq','https://www.saucedemo.com/cart.html')

    // Clicar no botao Checkou

    cy.xpath("//button[@id='checkout']").click()

    // Validar se direcionou para o site correto do checkout

    cy.url().should('eq','https://www.saucedemo.com/checkout-step-one.html')

    // Preencher os campos solicitados

    cy.xpath("//input[@id='first-name']").type('Claudio')
    cy.xpath("//input[@id='last-name']").type('Santos')
    cy.xpath("//input[@id='postal-code']").type(1234-123)

    // Clicar no botao Continue

    cy.xpath("//input[@id='continue']").click()

    // validar se direcionou para a pagina correta de finalizacao da compra

    cy.url().should('eq','https://www.saucedemo.com/checkout-step-two.html')

    // Clicar em Finalizar compra

    cy.xpath("//button[@id='finish']").click()

    // validar se concluiu com sucesso e apresentou a pagina correta

    cy.url().should('eq','https://www.saucedemo.com/checkout-complete.html')

    cy.xpath("//h2[@class='complete-header']").should('be.visible')
    
  })

  
  
})