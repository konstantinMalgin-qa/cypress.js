describe('Тестирование формы пороля', function () { 
   it('Ввожу верный логин и верный пароль', function () {
        cy.visit(' https://login.qa.studio//');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click(); 
        cy.contains('Авторизация прошла успешно').should('be.visible');
         
         })


    it('Ввожу верный логин и неверный пароль', function () {
        cy.visit(' https://login.qa.studio//');
        cy.get('#loginButton').should('be.disabled'); // кнопка неактивна
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); // кнопка при логине неактивна
        cy.get('#pass').type('iLoveqast444'); 
        cy.get('#loginButton').should('be.enabled'); // кнопка при пароле активна
        cy.get('#loginButton').click(); 
        cy.wait(1000)
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })


 it('Ввожу неверный логин и верный пароль', function () {
        cy.visit(' https://login.qa.studio//');
        cy.get('#loginButton').should('be.disabled'); // кнопка неактивна
        cy.get('#mail').type('german@dolkov.ru');
        cy.get('#loginButton').should('be.disabled'); // кнопка при логине неактивна
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').should('be.enabled'); // кнопка при пароле активна
        cy.get('#loginButton').click(); 
        cy.wait(1000)
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })
     it('Проверка я забыл пароль', function () {
        cy.visit(' https://login.qa.studio//');
        cy.get('#loginButton').should('be.disabled'); // кнопка неактивна
        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль').should('be.visible');
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
        cy.contains('Форма логина').should('be.visible');
         })

      it('Проверка на отсутствие @ в логине', function () {
         cy.visit(' https://login.qa.studio//');
        cy.get('#loginButton').should('be.disabled'); // кнопка неактивна
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); // кнопка при логине неактивна
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').should('be.enabled'); // кнопка при пароле активна
        cy.get('#loginButton').click(); 
        cy.wait(1000)
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })


      it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit(' https://login.qa.studio//');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click(); 
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         
         })

})
