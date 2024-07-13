<script setup>
import axios from 'axios'
import { ref } from 'vue'

import graph from './graph.vue'

const ret = ref('')

const headers = {
  'X-API-KEY': 'e50Z2QcETe021TucuXheW5BezTVKjbOusO1Ch4cq'
}
async function getPrefs() {
  await axios
    .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', { headers: headers })
    .then(function (response) {
      console.log('success')
      // console.log(response);
      ret.value = response
      prefs2List(ret.value)
    })
    .catch(function (err) {
      console.log('error')
      console.log(err)
    })
}

getPrefs()
</script>

<script>
var prefList = ref([])

function prefs2List(ret) {
  var data = ret['data']['result']
  for (var i = 0; i < data.length; i++) {
    var pc = data[i]['prefCode']
    var pn = data[i]['prefName']
    prefList.value.push([pc, pn])
  }
}
</script>

<template>
  <h1>都道府県の人口動態グラフを表示できるよ！</h1>
  <br />

  <div>
    <h2>都道府県を選択してね</h2>
    <div class="checkbox-container" id="pref-checkboxes">
      <label v-for="pref in prefList" :key="pref[0]">
        <input type="checkbox" :id="'cb-' + pref[0]" :value="pref[1]" />{{ pref[1] }}
      </label>
    </div>
  </div>

  <br /><br />

  <div>
    <h2>グラフが表示されるよ</h2>
    <graph />
  </div>
</template>
