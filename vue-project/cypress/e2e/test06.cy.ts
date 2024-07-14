// https://on.cypress.io/api

describe('都道府県1個で年少人口→生産年齢人口→老年人口の順でグラフ表示', () => {
  it('visits the app root url', () => {
    cy.visit('http://test.leflove.net/yumemi_exam/index.html')

    cy.contains("東京都").click()
    cy.get("select").select("年少人口")
    cy.contains("グラフを表示する").click()

    cy.wait(2000)

    cy.get("select").select("生産年齢人口")
    cy.contains("グラフを表示する").click()
    
    cy.wait(2000)

    cy.get("select").select("老年人口")
    cy.contains("グラフを表示する").click()
  })
})
