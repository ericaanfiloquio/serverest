Cypress.Commands.add('login', (email, password) => {
    cy.request("POST", "https://serverest.dev/login", {
        email: email,
        password: password
    }).then((response) => {
        window.localStorage.setItem("serverest/userToken", response.body.authorization)
    })
})
