<script  >
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    pauseOnHover: true,
    autoPlaying: true,
    Playing: {},
    arrowsHiden: true,
    slides: [
      {
        title: "  Title Slide #0",
        //content: 'Slide 1 content.',
        image: "/src/img/slider/103.jpg",
        content: `{slide.image}`,
      },
      {
        title: " Title Slide #1",
        // content: 'Slide 2 content.',
        image: "/src/img/slider/102.jpg",
        content: 'Content, <span  " style=" font-size: 1.2em;color: yellow">why not?</span>',
      },
      {
        title: "  Title Slide #2",
        // content: 'Slide 3 content.',
        image: "/src/img/slider/101.jpg",
        content: " Content",
      },
      {
        title: "  Title Slide #3",
        content: "Content",
        // You can also provide a URL for the image.
        image: "/src/img/slider/100.jpg",
        //link: 'https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk'
      },
      {
        title: "Title Slide #4",
        //content: 'Slide 1 content.',
        image: "/src/img/slider/104.jpg",
        content: "Content",
      },
      {
        title: " Title Slide #5",
        // content: 'Slide 2 content.',
        image: "/src/img/slider/105.jpg",
        content: "Content",
      },
      {
        title: "Title Slide #6",
        // content: 'Slide 3 content.',
        image: "/src/img/slider/106.jpg",
        content: "Content",
      },
    ],
    slides2: [
      {
        title: "  Slide #0",
        //content: 'Slide 1 content.',
        image: "/src/img/slider/70.jpg",
        content: "Slide  HTML",
      },
      {
        title: " Slide #1",
        // content: 'Slide 2 content.',
        image: "/src/img/slider/71.jpg",
        content: "Slide HTML",
      },
      {
        title: "  Slide #2",
        // content: 'Slide 3 content.',
        image: "/src/img/slider/72.jpg",
        content: " Slide  HTML",
      },
      {
        title: " El Teide Volcano, Spain #3",
        content: "Photo ",
        // You can also provide a URL for the image.
        image: "/src/img/slider/73.jpg",
        //link: 'https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk'
      },
      {
        title: " Slide #4",
        //content: 'Slide 1 content.',
        image: "/src/img/slider/74.jpg",
        content: "Slide ",
      },
      {
        title: " Slide #5",
        // content: 'Slide 2 content.',
        image: "/src/img/slider/75.jpg",
        content: "Slide ",
      },
      {
        title: " Slide #6",
        // content: 'Slide 3 content.',
        image: "/src/img/slider/76.jpg",
        content: "Slide",
      },{
        title: " Slide #7",
        // content: 'Slide 3 content.',
        image: "/src/img/slider/77.jpg",
        content: "Slide",
      },
    ],
  }),
};
</script>

<template>
  <div class="slider__container">
  
    <!-- :fade="true"  :autoplay="autoPlaying" :pause-on-hover="pauseOnHover"-->
    <!-- :transition-speed='700' -->
    <div>
    <vueper-slides
      ref="myVueperSlides"
      :fractions="true"
      :arrows="arrowsHiden"
      bullets-outside
    
      :slide-ratio="1 / 2"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :title="slide.title"
        :image="slide.image"
        :content="slide.content"
            >
      </vueper-slide>
    </vueper-slides>
    </div>
    <div>
       

       <!-- :link="slide.image" -->
       <!-- :openInNew="true" ссылку откывать в новой вкладке -->
    <vueper-slides
    class="no-shadow"
      :visible-slides="4"
      slide-multiple
      :gap="1"
      :slide-ratio="1 / 3"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2, slideRatio:1 / 1.5 } }"
      :touchable="false"
      :arrowsOutside="false"
      :arrows="true"
    >
      <vueper-slide
      v-for="(slide, i) in slides2"
        :key="i"
       
        :image="slide.image"
        :link="slide.image"
        :openInNew="true"
      />
    </vueper-slides>
  </div>
  <!---------------- LINK TO Developer Slider --------------------->
    <NuxtLink to="https://antoniandre.github.io/vueper-slides/#vueper-slides--api" > <span style="font-size: 25px">Link to site Developer Helper</span> </NuxtLink>
    <br>
    <NuxtLink to="  https://owlcarousel2.github.io/OwlCarousel2/"><span span style="font-size: 25px"> Альтернатива слайдера OwlCarousel2</span></NuxtLink>
   <br>
   <NuxtLink to=" https://kenwheeler.github.io/slick/"><span span style="font-size: 25px"> Альтернатива слайдера Slick</span></NuxtLink>
  
   <NuxtLink to=" https://fls.guru/slick.html"><span span style="font-size: 25px; margin-left: 20px" > --- Slick Шпаргалка ---</span></NuxtLink>
   <br>



  </div>
</template>
<!--                ???????????????????                   -->
<!-- Мобильный бывают с большим разрешением как опрелелить что экран сенсорный и наведение мыши не будет -->

<style  lang="scss">
/* Изначально стрелки не видны*/ 
.vueperslides__arrow {
  // display: none;
  opacity: 0;
}

@media (max-width: 787px) {
  .vueperslides__inner .vueperslides__arrow {
//  display: block;
  opacity: 1;
  & svg {
    color: rgb(210, 77, 37);

  }
}
}

.vueperslide__title {
  color: rgb(162, 180, 52);
  font-size: 2em;
}
.vueperslide__content {
  color: rgb(15, 207, 76);
  font-size: 1.5em;
  position: relative;
//   &::after{
//     content: url("/assets/images/logo/telegram_icon.png");
//     position: absolute;
// right:30px;
// top: -250px;
//   }
}
/* Стрелки  маленьких слайдов были за пределами видимости*/
.vueperslides__arrows.vueperslides__arrows--outside button.vueperslides__arrow--prev {
  left: -1.5em; opacity: 1;}
.vueperslides__arrows.vueperslides__arrows--outside button.vueperslides__arrow--next {
    right: 1.5em; opacity: 1;}


/* Стрелки при наведении на слайд появляються и окрашиваются*/ 
:hover.vueperslides__inner .vueperslides__arrow {
//  display: block;
  opacity: 1;
  & svg {
    color: rgb(210, 77, 37);

  }
}

/*Сдвигает Title Content в правый нижний угол*/ 
.vueperslide div {
  justify-content: flex-end !important ;
  align-items: end !important;
}

</style> 
