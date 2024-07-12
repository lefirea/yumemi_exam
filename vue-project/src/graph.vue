<script setup>
import axios from "axios";
import {ref, reactive } from "vue";
import DrawGraph from "./draw_graph.vue";

var prefs = reactive({ checked: ["no checked"] });
var prefPopulations = reactive({ result: {"none": ""} });

var child = ref(null);

async function clicked(){
    var prefsCheckboxes = document.getElementById("pref-checkboxes").children;

    /* チェックされた都道府県を列挙する */
    prefs.checked = [];
    for(var i = 0; i < prefsCheckboxes.length; i++){
        var pref = prefsCheckboxes[i].children[0];
        if(pref.checked){
            var prefCode = pref.id.split("-")[1];
            var prefName = pref.value;
            prefs.checked.push([prefCode, prefName]);
        }
    }

    /* チェックされた個数に応じた処理 */
    if(prefs.checked.length == 0){
        prefs.checked = ["no checked"];
        prefPopulations["result"] = {"none": ""};
    }
    else{
        prefPopulations["result"] = {};
        /* チェックされた都道府県ごとに人口統計を取得する */
        for(var i = 0; i < prefs.checked.length; i++){
            var prefCode = prefs.checked[i][0];
            var prefName = prefs.checked[i][1];

            var ret = await getPrefPopulation(prefCode);
            prefPopulations["result"][prefName] = ret;
        }
    }

    console.log(prefPopulations["result"]);
    console.log(Object.keys(prefPopulations["result"]));
    
    var data = {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
    }
    child.value.draw(prefPopulations);
}

async function getPrefPopulation(prefCode){
    var res = null;

    const headers = {
        "X-API-KEY": "e50Z2QcETe021TucuXheW5BezTVKjbOusO1Ch4cq",
    };
    
    await axios.get("https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear",
        {headers: headers,
         params: {
            prefCode: prefCode,
            cityCode: "-"
         }
    }).then(function (response){
        var data = response["data"]["result"];
        res = data;
    }).catch(function (err){
        // pass
    });

    return res;
}



</script>


<template>

<button @click="clicked" id="drawGraphButton">click here!</button>

<br>

<div>
</div>

<br>

<div>
    <DrawGraph ref="child" />
</div>

</template>

