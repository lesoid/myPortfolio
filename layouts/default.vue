<template>
    <div class="def__layout">
    <layoutsHeader2 class="header_layout"></layoutsHeader2>
    
    <div class="def__slot"><slot ></slot> </div> 
     <LayoutsFooter></LayoutsFooter>
</div>
</template>

<style  lang="scss">
body{
  margin-top:0 ;
}
.def__slot{
  min-height: 100vh;
}
  

// .header_layout{
//   position: fixed;
// }
// @media (max-width: 787px) {
//   .header-munu {
//     display: none;
//   }
// }

</style>

