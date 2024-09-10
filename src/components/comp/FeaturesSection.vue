<template>
  <div class="features">
    <v-container class="gaduurh">
      <h2 style="padding-bottom: 5%;" class="zurag">Цоо шинэ хүчирхэг үзүүлэлт<label class="tseg" style="color: #448AFF; ">.</label></h2>
    <v-row>
      <v-col cols="12" md="4" v-for="(feature, index) in features" :key="index" class="feature-col">
        <v-card class="feature-card" :class="'feature-card-' + (index + 1)" :ref="'feature' + index">
          <video autoplay loop muted playsinline class="feature-video">
            <source :src="feature.video" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="feature-content">
            <v-card-title><strong>{{ feature.title }}</strong></v-card-title>
            <v-card-text class="feature-desc">{{ feature.description }}</v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
    <div class="banner-wrapper">
      <!-- <img src="@/assets/banner.png" alt="Banner" class="banner-image"/> -->
    </div>
  </div>
</template>

<script>
import sr from '@/plugins/scroll-reveal';

export default {
  data() {
    return {
      features: [
        { 
          title: 'ЖИНХЭНЭ ХУРД', 
          description: 'Үйлдэл бүр илүү хурдан, жигд, тэсрэлттэй, хөдөлгөөнүүд мэдрэх боломж.',
          video: 'https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/hardware/ps5/channel-specific-content/pdc/2021/overview/akqa/video//ps5-performance-io_animation.mp4',
        },
        { 
          title: 'НҮД БУЛААМ ГРАФИК', 
          description: 'Тохиромжтой тоглоомуудад секундэд 120FPS хурдыг мэдрээрэй.',
          video: 'https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/hardware/ps5/channel-specific-content/pdc/2021/overview/akqa/video//ps5-performance-fps_loop.mp4#t=0.04',
        },
        { 
          title: 'ӨНДӨР НЯГТРАШИЛ', 
          description: 'HDR зурагтаар дэмжигдсэн PS5 тоглоомууд гайхалтай өнгөний сонголт болон нягтаршилтайгаар таны дэлгэц дээр гарч ирнэ.',
          video: 'https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/hardware/ps5/channel-specific-content/pdc/2021/overview/akqa/video//ps5-performance-hdr_gamut.mp4#t=0.04',
        },
      ],
    };
  },
  mounted() {
    this.features.forEach((_, index) => {
      sr.reveal(this.$refs['feature' + index][0], { origin: 'bottom', delay: index * 200 });
    });
  },
};
</script>

<style scoped>
  .zurag {
      font-size: 65px;
      transform: translateY(100px);
      opacity: 0;
      transition: transform 1s, opacity 1s;
  }
  
  .zurag.visible {
      transform: translateY(0);
      opacity: 1;
  }
.gaduurh{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.gaduurh h2{
  font-size: 65px; 
}
.features {
  padding: 50px 0;
  /* background: linear-gradient(160deg, #072793, #052589, #051e73); */
  /* background-image: url(@/assets/banner.png); */
  position: relative;
  z-index: 1;
  background-color: #010119;
}

.feature-col {
  padding-right: 10px;
}

.feature-card {
  width: 100%;
  position: relative;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
}

.feature-desc {
  font-size: 18px;
  font-weight: 400;
}

.feature-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.feature-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
}

.feature-card-1 .feature-content,
.feature-card-2 .feature-content,
.feature-card-3 .feature-content {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 100% 0%;
}

@media screen and (max-width: 960px) {
  .feature-card-1 .feature-content,
  .feature-card-2 .feature-content,
  .feature-card-3 .feature-content {
    padding: 100% 20%;
  }
}
.gaduurh{
  font-size: 52px; 
}
.banner-wrapper {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: -3;
  overflow: hidden;
}
.features {
  padding: 50px 5%;
  height: 100%
}
.banner-image {
  width: 100%;
  height: auto;
}
@media screen and (max-width: 460px) {
  /* .gaduurh{
  font-size: 25px; 
} */
.gaduurh h2{
  font-size: 32px;
}
}
</style>
