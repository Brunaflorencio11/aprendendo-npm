import userData from '../fixtures/users/userData.jason'

describe('orange HTM test', () => {

  const selectorList = {
    usernamefield:"[name='username']",
    passwordFild:"[name='password']",
    loginButon: "[type='submit']",
    selectorTitleTopBar:'.oxd-topbar-header-breadcrumb-module',
    dashbordGrid:".orangehrm-dashbord-grid",
    wrongCredentialAlert:"[role='alert']"
  }


  it('login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernamefield).type(userData.userSucess.username)
    cy.get(selectorList.passwordFild).type(userData.userSucess.password)
    cy.get(selectorList.loginButon).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.selectorTitleTopBar).contanis('Dashbord')
  })
  it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernamefield).type(userData.userSucess.password)
    cy.get(selectorList.passwordFild).type('test')
    cy.get(selectorList.loginButon).click()
    cy.get(selectorList.dashbordGrid)
    
 })
})