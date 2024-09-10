<template>
    <v-container class="bg-outter">
      <v-row no-gutters>
        <v-col cols="12" class="text-left ma-0 pa-0 anitai">
          <h1 class="tx1">8K 360° CAPTURE</h1>
          <h2 class="tx2">ХАМГИЙН ШИЛДЭГ</h2>
          <h2 class="tx2">ЗУРГИЙН ЧАНАР</h2>
          <p class="subtitle-1 tx3">
            8K энд байна! 5nm-ийн шинэ хиймэл оюун ухаантай чипээр бүтээгдсэн, итгэмээргүй тунгалаг ертөнцөд өөрийгөө аваачиж, амьдралын нандин мөчүүдээ буулгаж аваарай. Үйлдлийн хүрээ бүр, өнгөт зураас бүрийг урьд өмнө хэзээ ч байгаагүй нарийвчлалтайгаар авна.
          </p>
        </v-col>
        <v-row cols="12" md="8" class="ma-0 pa-0 anitai">
          <video
            class="media-block__video lozad lazy-loaded d-block"
            id="video-1"
            autobuffer
            muted
            loop
            autoplay
            playsinline
            webkit-playsinline
            data-loaded="true"
          >
            <source
              type="video/mp4"
              src="https://media.insta360.com/static/db984df3b3be1fbb9cfdd877212adc48/8K%2030%20PC.mp4"
            />
          </video>
        </v-row>
      </v-row>
    </v-container>
  </template>
<style scoped>
.tx1 {
    font-size: 16px;
    font-style: italic;
    background: linear-gradient(to right, #66adff,#ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.tx2{
    font-size: 40px;
    font-style: italic;
    font-weight: 800;
}
.tx3{
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
}
.bg-outter {
  width: 100%;
  padding: 5%;
}
#video-1 {
  width: 100%;
  height: auto;
  border-radius: 30px;
  margin-top: 5%;
}
.v-container {
  padding: 5% 15%;
  background-color: #000;
  color: #fff;
  width: 100% !important; 
  max-width: 100% !important;
}
/* @media (min-width: 960px) {
  .v-container {
    max-width: 100% !important; 
  }
}
.display-2 {
  font-size: 2.5rem;
}
.subtitle-1 {
  font-size: 1.25rem;
}
.v-img {
  border-radius: 15px;
} */
@media (max-width: 960px) {
    .v-container {
    padding: 10% 5%;
}
.tx3{
    text-align: justify;
}
}
</style>
<script>
export default {
  mounted() {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        } else {
          entry.target.classList.remove('visible');
          entry.target.classList.add('hidden');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const targets = document.querySelectorAll('.bg-outter');
    targets.forEach(target => {
      observer.observe(target);
    });
  },
};
</script>