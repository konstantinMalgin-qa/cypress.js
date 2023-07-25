describe('Тестирование Hunting Pony', function () { 
   it('Оформляю заказ', function () {
        cy.visit(' https://huntingpony.com//');
cy.get('.header-part-main').click();
       cy.get('[data-index="0"] > .header__collections-controls > .header__collections-link').click();// выбрать товар
       cy.get('.header-part-main').click();
       cy.get('[data-product-id="338933151"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click(); // выбрать товар
      cy.get('.header-part-main').click();
       cy.get('.add-cart-counter__btn-label').click(); // добавить в корзину
       cy.get('.header-part-main').click();
       cy.get('[data-add-cart-counter-plus=""]').click(); // удвоить товар
       cy.get('.header-part-main').click();
       cy.get('.header__cart > .icon').click(); // перейти в корзину
       cy.get('.cart-controls > .button').click(); // оформить заказ
       cy.contains('Оформление заказа').should('be.visible');

         })

})
