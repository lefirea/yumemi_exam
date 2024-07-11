<script setup>

// import * as VueC3 from "vue-c3";
import * as Vue from "vue";
import * as c3 from "c3";
import { ref, defineExpose } from "vue";

import "c3/c3.min.css";

function draw(data){
    let chart = c3.generate({
        bindto: "#my-chart",
        data: data
    })
}

defineExpose({
    draw
});

</script>

<template>
    <div id="my-chart"></div>
</template>

