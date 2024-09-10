<template>
    <v-container class="bg-outter d-flex align-center">
      <v-row no-gutters>
        <v-col cols="12" md="6" class="text-left ma-0 pa-0 d-flex flex-column justify-center order-md-1 order-first anitai">
          <div class="text-content">
            <h1 class="tx1">360° ИДЭВХИТЭЙ HDR</h1>
            <h2 class="tx2">ЮУ ХАРЖ БАЙГААГАА ШУУД ДАР</h2>
            <p class="subtitle-1 tx3">
                Бичлэг дээрх жижиг нарийн мэдээллийг цуглуул, тогтворгүй хөдөлгөөний гайхалтай тогтворжилтыг хангасан шинэлэг HDR видео горим. Идэвхтэй HDR нь бусад үйлдлийн камеруудад байдаггүй онцлох болон сүүдэрт байгаа өнгийг сайжруулдаг.
            </p>
          </div>
        </v-col>
                <v-col cols="12" md="6" class="pa-0 order-md-2 order-last anitai">
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
              src="https://media.insta360.com/static/d1ebc8d103d0a7d736fb636c644b3c4e/HDR.mp4"
            />
          </video>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <style scoped>
  .tx1 {
      font-size: 16px;
      font-style: italic;
      background: linear-gradient(to right, #66adff, #ffffff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
  }
  .tx2 {
      font-size: 35px;
      font-style: italic;
      font-weight: 800;
  }
  .tx3 {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
      font-weight: 500;
      text-align: justify;
      margin-top: 3%;
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
      background-color: #000;
      color: #fff;
      width: 100% !important; 
      max-width: 100% !important; 
      min-height: 80vh; 
  }
  .text-content {
      margin-right: 50px; 
  }
  @media screen and (max-width: 970px) {
    .text-content {
      margin-right: 0; 
  }
    .text-content {
      margin-left: 0;
  }
  .v-container {
  /* padding: 5% 15%; */

  width: 100% !important;
  max-width: 100% !important;
}
  }
  @media (max-width: 960px) {
    .v-container {
    padding: 10% 5%;
}
}
  </style>
  <!-- <img alt="That's a lot of pixels" data-src="https://res.insta360.com/static/f909a6f476145cb8bfdf15120926bcd7/72MP.jpg" src="https://res.insta360.com/static/f909a6f476145cb8bfdf15120926bcd7/72MP.jpg" style="transform: translate3d(0px, 0px, 0px) scale(1.0467, 1.04674);"></img> -->