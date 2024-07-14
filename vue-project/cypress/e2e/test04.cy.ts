// https://on.cypress.io/api

describe('都道府県2個選んでグラフ表示→使う都道府県を変更してグラフ表示', () => {
  it('visits the app root url', () => {
    cy.visit('http://test.leflove.net/yumemi_exam/index.html')

    // 東京都と大阪府のグラフを表示
    cy.contains("東京都").click()
    cy.contains("大阪府").click()
    cy.contains("グラフを表示する").click()

    // 表示する都道府県を変えて再表示
    cy.contains("東京都").click()
    cy.contains("愛知県").click()
    cy.contains("グラフを表示する").click()
  })
})
