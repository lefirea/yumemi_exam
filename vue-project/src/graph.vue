<script setup>
import axios from 'axios'
import { ref, reactive } from 'vue'
import DrawGraph from './draw_graph.vue'

let prefs = reactive({ checked: ['no checked'] })
let prefPopulations = reactive({ result: { 'no-data': '' } })

let child = ref(null)

async function clicked() {
  let prefsCheckboxes = document.getElementById('pref-checkboxes').children

  document.getElementById('my-chart').innerHTML = 'データ取得中...'

  /* チェックされた都道府県を列挙する */
  prefs.checked = []
  for (let i = 0; i < prefsCheckboxes.length; i++) {
    let pref = prefsCheckboxes[i].children[0]
    if (pref.checked) {
      let prefCode = pref.id.split('-')[1]
      let prefName = pref.value
      prefs.checked.push([prefCode, prefName])
    }
  }

  /* チェックされた個数に応じた処理 */
  if (prefs.checked.length == 0) {
    prefs.checked = ['no checked']
    prefPopulations['result'] = { 'no-data': '' }
  } else {
    prefPopulations['result'] = {}
    /* チェックされた都道府県ごとに人口統計を取得する */
    for (let i = 0; i < prefs.checked.length; i++) {
      let prefCode = prefs.checked[i][0]
      let prefName = prefs.checked[i][1]

      let ret = await getPrefPopulation(prefCode)
      prefPopulations['result'][prefName] = ret
    }
  }

  child.value.draw(prefPopulations)
}

async function getPrefPopulation(prefCode) {
  let res = null

  const headers = {
    'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY
  }

  await axios
    .get('https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear', {
      headers: headers,
      params: {
        prefCode: prefCode,
        cityCode: '-'
      }
    })
    .then(function (response) {
      let data = response['data']['result']
      res = data
    })
    .catch(function (err) {
      console.log('resas api error:', err)
    })

  return res
}
</script>

<template>
  <div id="graph-area">
    <button @click="clicked" id="drawGraphButton">グラフを表示する</button>

    <br />

    <div>
      <DrawGraph ref="child" :btn="btnElem" />
    </div>
  </div>
</template>
