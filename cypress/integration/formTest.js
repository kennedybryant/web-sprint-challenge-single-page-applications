describe('PizzaForm', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

    const nameInput = () => cy.get('input[name=name')
    const instructionsInput = () => cy.get('input[name=instructions')
    const topping1 = () => cy.get('input[name=pepperoni')
    const topping2 = () => cy.get('input[name=meatballs')
    const submitBtn = () => cy.get('button[id=order-button')

    it('Sanity check to make sure that tests work', () => {
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
        expect({}).not.to.equal({}) 
        expect({}).to.eql({}) 
    })

    it('Can add text to box', () => {
        nameInput()
            .should('have.value', '')
            .type('Kennedy')
            .should('have.value', 'Kennedy')
        instructionsInput()
            .should('have.value', '')
            .type('Please deliver')
            .should('have.value', 'Please deliver')
    })

    it('Can select multiple toppings', () => {
        topping1().click()
        topping2().click()
    })

    it('Can submit form', () => {
        nameInput()
            .should('have.value', '')
            .type('Kennedy')
            .should('have.value', 'Kennedy')
        topping1().click()
        topping2().click()
        submitBtn().click()

    })
})