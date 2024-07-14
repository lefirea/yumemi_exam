// https://on.cypress.io/api

describe('都道府県を選択せずにグラフ表示', () => {
  it('visits the app root url', () => {
    cy.visit('http://test.leflove.net/yumemi_exam/index.html')
    cy.contains("グラフを表示する").click()
  })
})
