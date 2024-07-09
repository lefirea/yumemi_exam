<script setup>
import {ref, reactive} from "vue";

console.log("graph.vue loaded");

var prefs = reactive({ checked: ["no checked"] });

function clicked(){
    var prefsCheckboxes = document.getElementById("pref-checkboxes").children;

    prefs.checked = [];
    for(var i = 0; i < prefsCheckboxes.length; i++){
        var pref = prefsCheckboxes[i].children[0];
        if(pref.checked){
            prefs.checked.push(pref.value);
        }
    }

    if(prefs.checked.length == 0){
        console.log("no checked");
        prefs.checked = ["no checked"];
    }
    else{
        console.log(prefs.checked.join(", "));
    }
}

</script>

<template>

<p>graph.vue will here</p><br>

<button @click="clicked">click here!</button>

<br>

<div>
{{ prefs.checked }}
</div>

</template>

