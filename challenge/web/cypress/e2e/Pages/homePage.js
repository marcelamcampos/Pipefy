class HomePage{

    locators = {
        "baseUrl":"https://app.pipefy.com/public/form/6qhKljB1",
        "userNameLocator":"[name='customFields.your_name'",
        "whyWorkTextAreaLocator":"[name='customFields.why_do_you_want_to_work_at_pipefy']",
        "dateOptionLocator":"[id='pipe-field-publicForm-customFields_select_today_s_date'] input",
        "todaysOptionLocator":".is-today",
        "saveDatePickerLocator":".pp-date-picker-actions button[title='Save']",
        "checkBOptionLocator":"[for='publicForm_customFields.check_b_option_B']",
        "SelectBOptionLocator":"input[name='customFields.what_time_is_it_now']",
        "flagContainerLocator":".flag-container",
        "SpainflagOption":".flag-container ul li[data-dial-code='34']",
        "phoneNumebrInputLocator":"input[name='customFields.place_a_phone_number_from_spain_country",
        "AddAssigneeLocator":"[name='customFields.select_any_user'][href='#add-assignee']",
        "userToBeSelectedLocator":"[title='felipe fantoni']",
        "setTimeNowLocator":""

    }

    data = {
        "userName":"Marcela Campos",
        "whyWorkText":"adding reason here",
        "userPhoneNumber":"333333333",


    }

    access() {
        cy.visit(this.locators.baseUrl); 
    }


    fillInFirstName() {
        cy.get(this.locators.userNameLocator).type(this.data.userName)
    }

    fillInWhyWork(){
        cy.get(this.locators.whyWorkTextAreaLocator).type(this.data.whyWorkText)
    }

    checkOptionB(){
        cy.get(this.locators.checkBOptionLocator).click()

    }


    selectAssignee(){
        cy.get(this.locators.AddAssigneeLocator).click()
        cy.get(this.data.userToBeSelected).click()
        cy.get('body').click(0,0)
    }

    selectTodaysDate(){
        cy.get(this.locators.dateOptionLocator).click()
        cy.get(this.locators.todaysOptionLocator).click()
        cy.get(".pp-date-picker-actions button[title='Save']").click()
    }

    selectOptionB(){
        cy.get('select').select('B')
    }
    

    typeInTimeNow(){
        cy.get(this.locators.setTimeNowLocator).type(gettingTimeNow())

    }
    gettingTimeNow = () => {
        return  new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"});
    }

    uploadFile(){
        cy.get("[type='file'").selectFile('uploadImage.png', { force: true })
        cy.get("[data-pp-button='submit-fields']").click()
    }


    typePhoneNumber(){
        cy.get(this.locators.flagContainerLocator).click()
        cy.get(this.locators.SpainflagOption).click()
        cy.get(this.locators.phoneNumebrInputLocator).type(this.data.userPhoneNumber)
    
    }

    
   
    


}

export default new HomePage();