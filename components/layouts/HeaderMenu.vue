<template>
    <div :class="{hiden__burger:hidenburger}" class="header__link ">
      <nav class="ul__menu2">
        <ul class="ul__menu">
          <li><NuxtLink to="/">Home</NuxtLink></li>

          <div @click="hideActions = !hideActions">
            <p class="menu_text">Category</p>
            <ul
              ref="userActions"
              :class="{ hiden_ul: hideActions }"
              class="section"
            >
              <li style="z-index: 4;">
                <NuxtLink to="/slider">Slider</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/catsvgExemple.vue">SvgExemple</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/section">Section2</NuxtLink>
              </li>
            </ul>
          </div>

          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/contacts">Contacts</NuxtLink></li>
        </ul>
      </nav>
      <!-- <strong>{{ hidenburger }}</strong> -->
    </div>
</template>

<script  lang="ts">
import { onClickOutside } from "@vueuse/core";
export default {
  props:{
    hidenburger:{
      type:Boolean
    }
    
  },
  setup() {
    const hideActions = ref(true);
    const userActions = ref(null);
 
   
    onClickOutside(userActions, () => (hideActions.value = true));
    return {
   
      hideActions,
      userActions,
 
     
    };
  },
};
</script>
<style scoped lang="scss">


.ul__menu {
  list-style: none;
  display: flex;
  position: static;
  & :hover {
    color: rgb(86, 150, 106);
  }
}
.menu_text, .ul__menu li a {
  font-size: 20px;
  margin: 0px 10px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
   color: rgb(180 217 187);
}
.menu_text:after {
  content: " \25BC";
  color: #4a88b5;
font-size: 15px;
}

.section {
  // position: absolute;
  background-image: url("/src/img/336.jpg");
  top:115px;
  padding-inline-start: 5px;
  // left: 80px;
  list-style: none;
  & li :hover {
    color: rgb(86, 150, 106);
  }
  & li a {
    font-weight: bold;
    text-decoration: none;
    // background-color: rgb(34, 84, 128);
  }
}
.ul__menu2 {
  list-style: none;
  display: block;
  flex-direction: column;
}

.hiden_ul {
  display: none;
}

.header__link {
  display: flex;
  // background-color: aqua;
}
.router-link-exact-active{
  color: green !important;
}

@media (max-width: 787px) {
  .hiden__burger{
    display: none;
  }
  .menu_text:after {
  content: " \25BA";
// font-size: 15px;
 
}
  .ul__menu {
     display: flex;
     flex-direction: column;
     padding-left: 10px;
    // background-color: gray;
  }
  .section {
    background-image:none;
  position: absolute;
  left: 120px;
    top: 106px;
    padding-inline-start: 0px;
  }
}
</style>