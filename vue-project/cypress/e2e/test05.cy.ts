// https://on.cypress.io/api

describe('都道府県2個選んでグラフ表示→チェックを全て外してグラフ表示', () => {
  it('visits the app root url', () => {
    cy.visit('http://test.leflove.net/yumemi_exam/index.html')

    // 東京都と大阪府のグラフを表示
    cy.contains("東京都").click()
    cy.contains("大阪府").click()
    cy.contains("グラフを表示する").click()

    // 都道府県の選択を全て消してグラフ表示
    cy.contains("東京都").click()
    cy.contains("大阪府").click()
    cy.contains("グラフを表示する").click()
  })
})
