<script setup>
import * as c3 from 'c3'
import { defineExpose } from 'vue'

import 'c3/c3.min.css'

function draw(data) {
  let dataTypeLabel = { 0: '総人口', 1: '年少人口', 2: '生産年齢人口', 3: '老年人口' }

  let dataType = document.getElementById('data-type').selectedIndex

  let prefs = Object.keys(data['result'])
  let boundaryYear = data['result'][prefs[0]]['boundaryYear']

  let years = ['years']
  for (let i = 1980; i <= boundaryYear; i += 5) {
    years.push(i)
  }

  let columns = [years]
  for (let pref of prefs) {
    let column = [pref]

    let elems = data['result'][pref]['data'][dataType]['data']
    for (let i = 0; i < elems.length; i++) {
      let value = elems[i]['value']
      column.push(value)
    }
    columns.push(column)
  }

  c3.generate({
    bindto: '#my-chart',
    padding: { right: 20 },
    // size: {width: 1000, height: 300},
    data: {
      x: 'years',
      columns: columns
    },
    axis: {
      x: {
        label: {
          text: '西暦',
          position: 'outer-middle'
        }
      },
      y: {
        label: {
          text: `${dataTypeLabel[dataType]}`,
          position: 'outer-middle'
        }
      }
    }
  })
}

defineExpose({
  draw
})
</script>

<template>
  表示する項目：
  <select id="data-type" @change="test">
    <option value="総人口">総人口</option>
    <option value="年少人口">年少人口</option>
    <option value="生産年齢人口">生産年齢人口</option>
    <option value="老年人口">老年人口</option>
  </select>

  <br />

  <div id="my-chart"></div>
</template>
