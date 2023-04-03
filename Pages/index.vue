<template>
  <div id="home" class="con">
   <!-- <strong>props = {{ scroll }}</strong> -->
 <Portfolio id="kub1"></Portfolio>
 <PortfolioAbout id="kub2"></PortfolioAbout>
 <PortfolioSkills id="kub3"></PortfolioSkills>
 <PortfolioPortf id="kub4"></PortfolioPortf>
 <PortfolioContacts id="kub5"></PortfolioContacts>
  </div>

  <hr />
</template>
<script setup  lang="ts">
import { useScrolling } from "../composables/useScroll";
let scroll = useScrolling()
onMounted(() => {
  console.log('!!!mounted '+scroll.value);
  scroll.value = "kub1"
  
});
watch(scroll, value => {
  // your code here
  goScroll(value)
  console.log("!!!Watch "+value)})
function goScroll(ar: string) {
  let  count:number
  let indent:number = 10 //отступ прокрутки от хедера
  //console.log('!!!goScroll START '+ar);
  if (process.client){
   // console.log("!!! goScroll client "); 
  if (ar == "home") {
   // console.log('!!!goScroll home '+ar);
    navigateTo(`/`);
    window.scrollTo({ top: -80, behavior: "smooth" });
  } else {
    const elementPosition = document.getElementById(ar) as HTMLInputElement | null;
   // console.log('!!!goScroll elementPosition '+elementPosition);
      // ----------------------start-----------------------
    const elementPosition2 = document.getElementById( "header_layout") as HTMLInputElement | null;
   // if (elementPosition2 != null) {  console.log("!!!Height header offsetHeight" + elementPosition2.offsetHeight);} // 👉️ "number px from top "
  // -----------------------end----------------------
    if (elementPosition != null && elementPosition2 != null) {
         count = elementPosition.offsetTop-elementPosition2.offsetHeight -indent  
      window.scrollTo({
        top: count, //с учетом высоты хедера
        behavior: "smooth",
      });
     // console.log("!!!offsetTop element " + elementPosition.offsetTop); // 👉️ "Initial Value"
      //console.log("!!!END  "); // 👉️ "Initial Value"
    }}
  }else{
       console.log("!!! goScroll server "); 
  }
}
definePageMeta({
  layout: "portfolio",
})
</script>


 <style  scoped lang="scss">
.con {
  display: flex;
  flex-direction: column;
}
</style> 