
<template>
  <button @click="clickMe">show  ref.value</button>
  <button @click="clickMe2">show  id.textContent</button>
  <button @click="clickMe3">show  ref.textContent</button>  

  <div id="ttt" ref="myCoolDiv">
    hello there
    <span>Beer</span>
  </div>
  <div ref="myCoolDiv1">
    <br >
    <p>{{ results }}</p>
  </div>

</template>

<script setup>
const myCoolDiv = ref(null)
const results = ref("")
const clickMe = () => console.log(myCoolDiv.value) 
//const clickMe = () =>results.value =  myCoolDiv.value[0]
//  const clickMe = () => console.log(myCoolDiv.value) 
 //const clickMe2 = () => console.log(ttt.textContent)
 const clickMe2 = () => results.value = ttt.textContent
const clickMe3 = () => results.value = myCoolDiv.value.textContent
 


</script>

