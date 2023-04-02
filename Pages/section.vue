<template>
  <div><h4>Section</h4></div>
  <div class="conteiner">
    <div class="a100 kub">
      <div class="a100a kub1"></div>
      <div class="a100aa kub2"></div>
    </div>
    <div class="b101 kub">
      <div class="b100b kub1"><span></span></div>
      <!-- <i class="fa fa-home fa-fw"></i> -->
      <div class="b100bb kub2"></div>
    </div>
    <div class="c102 kub">
      <div class="c100c kub1"></div>
      <div class="c100cc kub2"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.conteiner {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.a100a {
  position: relative;
  & i::after {
    position: absolute;
    content: "";
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(150, 199, 101);
    opacity: 0;
    // transition: all .35s;
    transition: all 0.25s ease-in-out 0.05s;
  }
  &:hover::after {
    background-color: rgb(3, 43, 23);
    bottom: -5px;
    opacity: 1;
  }
}
.a100aa {
  position: fixed;
  left: 100px;
  &:hover {
    transition: all 1s;
    width: 40px;
    background-color: rgb(186, 214, 8);
  }
}

.b100b {
  position: relative;
  
  &:after {
    position: absolute;
    content: "\f130";
    font-family: FontAwesome;
    color: #161111;
    font-size: 60px;
    top: -61px;
    left: 130px;
    //font-weight: 900;
    
  }
  &:hover:after{
    color: #ccbfbf;
  }
}

.b100bb {
  position: absolute;
  left: 50px;
}
.c100c:hover:after {
  content: "→";
  animation: 3s ease-in 1s infinite reverse both running slidein;
}

.c100c {
  position: static;
}
.c100cc:hover {
  background-color: aquamarine;
}
.c100cc {
  position: sticky;
}
.kub {
  height: 300px;
  width: 300px;
  background-color: aquamarine;
  border: 1px solid gray;
  margin-left: 10px;
  position: sticky;
}
.kub1 {
  height: 30px;
  width: 30px;
  background-color: rgb(89, 157, 21);
  border: 1px solid rgb(202, 27, 27);
}
.kub2 {
  height: 30px;
  width: 30px;
  background-color: rgb(185, 15, 120);
  border: 1px solid rgb(202, 27, 27);
}
</style>

<script setup lang="ts">
definePageMeta({
  // middleware: ["guest"],
 // layout: "default",
  layout: "portfolio",
});

</script>