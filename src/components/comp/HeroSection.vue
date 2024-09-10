<template>
    <v-container class="hero" data-sr>
      <video autoplay loop muted plays-inline>
        <!-- <source src="@/assets/ps5-video.mp4" type="video/mp4"> -->
        <source src="https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/hardware/ps5/channel-specific-content/pdc/2021/overview/akqa/video//ps5-games-intro-loop.mp4#t=0.04">"
    </video>
    <div class="hero-content">
      <h1 class="hero-title" ref="heroTitle">PS5-тай Шинэ ертөнц рүү тэмүүл</h1>
      <p class="hero-subtitle" ref="heroSubtitle">Мэдрэмжтэй чичиргээ нь таны тоглоомын сонголтод хариу үйлдэл үзүүлж, PS5 тоглоомуудад хүрээлэн буй орчны хүчин зүйлсийг дуурайдаг.</p>
    </div>
    </v-container>
  </template>
<script>
import sr from '../plugins/scroll-reveal';

export default {
  mounted() {
    sr.reveal(this.$refs.heroTitle, { origin: 'left', delay: 200 });
    sr.reveal(this.$refs.heroSubtitle, { origin: 'right', delay: 400 });
  },
};
</script>

  
  <style scoped>
  .hero {
    /* height: 80vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-image: url(/intern_test/src/assets/); */
    color: white;
    width: 100%;
    /* border-radius: 20px !important; */
  }
  
  .hero-content {
    font-size: 1.6em;
    margin: 0;
    /* color: black; */
    position: absolute;
    padding: 5%;

  }
  .hero-subtitle{
    justify-content: center;
    display: flex;
    font-size: 25px;
  }
  
  video{
        margin-top: 5%;
        width: 103%;
        /* height: 100%; */
        border-radius: 20px !important;

    }
    @media screen and (max-width: 900px) {
          .hero-content {
            font-size: .6em;

  }
  .hero-subtitle{
            font-size: 14px;
  }
    }

  </style>
  