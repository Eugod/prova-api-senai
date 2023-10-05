/* eslint-disable no-undef */

describe("Teste de abertura do sistema", () => {
  it("Deve abrir o sistema sem erros", () => {
    cy.visit("http://localhost:5173/");

    cy.get(".logo").should("exist");
  });
});

describe("Teste de navegação ao escolher um time", () => {
  it("Deve navegar para a próxima página ao clicar em um time", () => {
    cy.visit("http://localhost:5173/");

    cy.get(".li-link:eq(1)").should("exist").click();
  })
})