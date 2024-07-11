<script setup>

import axios from "axios";
import {ref} from "vue";

import graph from "./graph.vue";

const ret = ref("");

const headers = {
    "X-API-KEY": "e50Z2QcETe021TucuXheW5BezTVKjbOusO1Ch4cq",
}
async function getPrefs(){
    await axios.get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {headers: headers})
        .then(function (response){
            console.log("success");
            // console.log(response);
            ret.value = response;
            prefs2List(ret.value);
        })
        .catch(function (err){
            console.log("error");
            console.log(err);
        });
}

getPrefs();


</script>

<script>
import {ref} from "vue";
var prefList = ref([]);

function prefs2List(ret){
    var data = ret["data"]["result"];
    var prefs = [];
    for(var i = 0; i < data.length; i++){
        var pc = data[i]["prefCode"];
        var pn = data[i]["prefName"];
        prefList.value.push([pc, pn]);
    }
}
</script>

<template>

<div class="checkbox-container" id="pref-checkboxes">
    <label v-for="pref in prefList"><input type="checkbox" :id="'cb-' + pref[0]" :value="pref[1]">{{ pref[1] }}</label>
</div>

<br>

<graph />

</template>

