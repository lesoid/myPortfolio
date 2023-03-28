<template>
    <div class="portfolio__item">
        <h1>Portfolio. </h1>
        <p>- - -</p>
        <div class="portfolio__slider">
          <!-- :title="slide.title"   :content="slide.content"-->
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
     
        :image="slide.image"
      
            >
      </vueper-slide>
    </vueper-slides>
    </div>
    </div>
    <!-- <hr> -->
</template>

<script>
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
    
  }),
};
</script>




<style lang="scss" scoped>
.portfolio__item{
margin-top: 100px;
}
.portfolio__slider{
    flex-grow: 7;
    width: calc(75vw) ;
    // max-width: 750px;
} 



</style>