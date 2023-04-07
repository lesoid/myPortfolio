<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
  </div>
  <div class="preloader overlay" >
     <i><b> +++++++++++++  Overley +++++++++++++ </b></i>
  </div>
  <p>
      <!--because the base is consistent, you can use multiple icons on the same line and they're all in order-->
      <icon-base icon-name="sun2" :width="widthsvg" :height="hightsvg"><icons-icon-sun2 /></icon-base>
      <icon-base icon-name="github" :width="widthsvg" :height="hightsvg"><icons-icon-github /></icon-base>
      <icon-base icon-name="moon2" :width="widthsvg" :height="hightsvg"><icons-icon-moon2 /></icon-base>
      <br>
      <icon-base icon-name="moon" :width="widthsvg" :height="hightsvg"><icons-icon-moon /></icon-base>
      <icon-base icon-name="sun" :width="widthsvg" :height="hightsvg"><icons-icon-sun /></icon-base>
      <icon-base icon-name="write" :width="widthsvg" :height="hightsvg"><icons-icon-write /></icon-base>
      <icon-base icon-name="image" :width="widthsvg" :height="hightsvg"><icons-icon-image /></icon-base>
      <icon-base icon-name="garbage" :width="widthsvg" :height="hightsvg"><icons-icon-garbage /></icon-base>
      <icon-base icon-name="calendar" :width="widthsvg" :height="hightsvg"><icons-icon-calendar /></icon-base>
      <icon-base icon-name="envelope" :width="widthsvg" :height="hightsvg"><icons-icon-envelope /></icon-base>
      <icon-base  icon-name="telegram" ><icons-icon-telegram /></icon-base>
      <icon-base icon-name="linkedin" :width="widthsvg" :height="hightsvg" ><icons-icon-linkedin /></icon-base>
      <br>
       <icon-base icon-name="viber" :width="widthsvg" :height="hightsvg"><icons-icon-viber /></icon-base>
       
       <icon-base :width="widthsvg" :height="hightsvg"><icons-icon-box2 /></icon-base>
       <br>
      
    </p>
    <div class="links">
    <!-- <hr  text-align="left"> -->
    <span> <NuxtLink to="https://color-mode.nuxtjs.org/" target="_blank"> Color-Mode</NuxtLink></span><br><br>
    <!-- <hr  > -->
    <span><NuxtLink to="https://vueuse.org/core/onClickOutside/" target="_blank"> onClickOutside клик вне объекта </NuxtLink></span>  <br>
    <span><NuxtLink to="https://www.npmjs.com/package/@vueuse/core" target="_blank"> ссылка на требуемый пакет</NuxtLink></span> 
    <!-- <hr  > -->
    <!-- <hr > -->
  </div>
<!--    
    <div class="kub">
       <div class="icon">
        <NuxtLink to="/section">
          
          <span class="smicon" id="vb">

          </span>
        </NuxtLink>

       </div>

    </div>
    <div class="bef" style="background:blueviolet;" ></div> -->

  <!-- <AppOptionsSwitcherColorMode>

  </AppOptionsSwitcherColorMode> -->
</template>

<script setup lang="ts">
const colorMode = useColorMode()
console.log(colorMode.preference)
const widthsvg = "24px"
const hightsvg = "24px"
</script>

 <style scoped lang="scss">

.links{
  // border: 1px solid green;
   position: relative;
 display: flex;
   flex-direction: column;
   justify-content:left;
  }
   span::after{
    display: flex;
    position: relative;
      content:'';
      bottom: -10px;
      // left: 20px;
      width: 250px;
      height: 2px;
      background-color: #103b15;
      // opacity: 0;
      transition: all .25s;
    opacity: 1;
   
  }
  .main-menu__item ::after{
      position: absolute;
      content:'';
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #103b15;
      opacity: 0;
      transition: all .25s;
    
    }
    .main-menu__item :hover ::after{
      bottom: -3px;
      opacity: 1;

    }


.bef{
  width: 300px;
  height: 400px;
  background-color: rgb(45, 109, 125);
  position: relative;
  margin-left: 50px;
  &::before{
    content: "O";
  }
  // &::after{
  //   content: "F";
  // }
}

 .kub{
  width: 300px;
  height: 400px;
  background-color: gray;
  position: relative;
  margin-left: 50px;
  
 }
 #vb{
  width: 32px;
  height: 32px;
 }
 .smicon{
  // font-family: socialmedia-icons2,socialmedia-icons3!important;
  &:before{
    content: " \21E6"; /* Hexadecimal for Unicode Leftwards white arrow*/
  display: inline;
    // content: url("/assets/images/logo/telegram_icon.png");
    position: absolute;
left:310px;
font-size: 3em;
  }
  &::after{
    width: 32px;
  // height: 30px;
  content: url("/assets/icons/teleg.svg");
  // content:"";
  // background: url("/assets/icons/viber.svg");
    position: absolute;
 
    // background-size: contain;
    // width: 30px;
    // height: 30px;
    // margin-left: 10px;
  }

 }
 .prel{
  border: #dce7dd solid 1px;
 }

//  -------------overlay--------------------------
 .overlay1:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(140, 90, 90, 0.7);
  z-index: -5; //сделай индекс большой overlay все перекроет
}
.preloader1:after {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  width: 40px;
  margin: auto;
  background: rgb(245, 244, 244) url(http://www.jacklmoore.com/colorbox/example1/images/loading.gif) no-repeat center center;
  border-radius: 6px;
  z-index: -3;//сделай индекс большой overlay все перекроет
}

//----------------------------------------------------------

/* body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422; 
}*/
</style> 