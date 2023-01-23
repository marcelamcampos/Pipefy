import homePage from '/Users/marcelamariacoelhocampos/Documents/pipefy/cypress/e2e/Pages/homePage'


describe('Interview Form Sign up sucessfully', () => {
  it('sign up and submits form', () => {
    homePage.access()
    homePage.fillInFirstName()
    homePage.fillInWhyWork()
    homePage.checkOptionB()
    homePage.selectAssignee()
    homePage.selectTodaysDate()
    homePage.selectOptionB()
    homePage.typeInTimeNow()
    homePage.uploadFile()
    homePage.typePhoneNumber()
  })

})

