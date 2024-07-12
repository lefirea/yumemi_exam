<script setup>

// import * as VueC3 from "vue-c3";
import * as Vue from "vue";
import * as c3 from "c3";
import { ref, defineExpose } from "vue";

import "c3/c3.min.css";

function draw(data){
    var dataType = document.getElementById("data-type").selectedIndex;

    var prefs = Object.keys(data["result"]);
    var boundaryYear = data["result"][prefs[0]]["boundaryYear"];

    var years = ["years"];
    for(var i = 1980; i <= boundaryYear; i += 5){
        years.push(i);
    }

    var columns = [years];
    for(var pref of prefs){
        var column = [pref];

        var elems = data["result"][pref]["data"][dataType]["data"];
        for(var i = 0; i < elems.length; i++){
            var year = elems[i]["year"];
            var value = elems[i]["value"];
            column.push(value);
        }
        columns.push(column);
    }

    let chart = c3.generate({
        bindto: "#my-chart",
        padding: {right: 20},
        // size: {width: 1000, height: 300},
        data: {
            x: "years",
            columns: columns
        }
    })
}

defineExpose({
    draw
});

</script>

<script>
// 「総人口」とかの変更に合わせて自動でグラフ再描画したいが、なぜかnot definedと言われる
function changeDropDown(){
    var button = document.getElementById("showGraphButton");
    button.click();
}

</script>

<template>
    <select id="data-type">
        <option value="総人口">総人口</option>
        <option value="年少人口">年少人口</option>
        <option value="生産年齢人口">生産年齢人口</option>
        <option value="老年人口">老年人口</option>
    </select>
    
    <br>
    
    <div id="my-chart"></div>
</template>

