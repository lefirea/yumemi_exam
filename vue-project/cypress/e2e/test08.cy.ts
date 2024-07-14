// https://on.cypress.io/api

describe('全都道府県を選択してグラフ表示', () => {
  it('visits the app root url', () => {
    cy.visit('http://test.leflove.net/yumemi_exam/index.html')

    cy.contains("北海道").click()

    cy.contains("青森県").click()
    cy.contains("岩手県").click()
    cy.contains("宮城県").click()
    cy.contains("秋田県").click()
    cy.contains("山形県").click()
    cy.contains("福島県").click()
    
    cy.contains("茨城県").click()
    cy.contains("栃木県").click()
    cy.contains("群馬県").click()
    cy.contains("埼玉県").click()
    cy.contains("千葉県").click()
    cy.contains("東京都").click()
    cy.contains("神奈川県").click()
    
    cy.contains("新潟県").click()
    cy.contains("富山県").click()
    cy.contains("石川県").click()
    cy.contains("福井県").click()
    cy.contains("山梨県").click()
    cy.contains("長野県").click()
    cy.contains("岐阜県").click()
    cy.contains("静岡県").click()
    cy.contains("愛知県").click()

    cy.contains("三重県").click()
    cy.contains("滋賀県").click()
    cy.contains("京都府").click()
    cy.contains("大阪府").click()
    cy.contains("兵庫県").click()
    cy.contains("奈良県").click()
    cy.contains("和歌山県").click()

    cy.contains("鳥取県").click()
    cy.contains("島根県").click()
    cy.contains("岡山県").click()
    cy.contains("広島県").click()
    cy.contains("山口県").click()

    cy.contains("徳島県").click()
    cy.contains("香川県").click()
    cy.contains("愛媛県").click()
    cy.contains("高知県").click()

    cy.contains("福岡県").click()
    cy.contains("佐賀県").click()
    cy.contains("長崎県").click()
    cy.contains("熊本県").click()
    cy.contains("大分県").click()
    cy.contains("宮崎県").click()
    cy.contains("鹿児島県").click()
    cy.contains("沖縄県").click()

    cy.contains("グラフを表示する").click()
    cy.wait(10000)  // 通信待ちと確認のために10秒待つ

    cy.get("select").select("年少人口")
    cy.contains("グラフを表示する").click()

    cy.wait(10000)  // 通信待ちと確認のために10秒待つ

    cy.get("select").select("生産年齢人口")
    cy.contains("グラフを表示する").click()
    cy.wait(10000)  // 通信待ちと確認のために10秒待つ

    cy.get("select").select("老年人口")
    cy.contains("グラフを表示する").click()
  })
})
