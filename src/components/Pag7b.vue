<template>
    <v-container class="bg-outter d-flex align-center">
      <v-row no-gutters>
        <v-col cols="12" md="6" class="text-left ma-0 pa-0 d-flex flex-column justify-center order-md-1 order-first anitai">
          <div class="text-content">
            <h1 class="tx1">ME MODE</h1>
            <h2 class="tx2">УРД БА ТӨВД</h2>
            <h2 class="tx2">ҮҮНИЙ ТӨЛӨӨ</h2>
            <p class="subtitle-1 tx3">
                Одоо 4K30fps эсвэл 2.7K120fps-ээр Үл үзэгдэгч селфи гар эффектээр өөрийгөө илүү чадварлаг үйлдлээр бичээрэй! Энд дахин фрэйм хийх шаардлагагүй!
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
              src="https://media.insta360.com/static/ef053ceb4f973c9d0c5da82dad7b8ad4/Me%20mode.mp4"
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
      /* max-width: 90%; */
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
      margin-left: 0;
  }
  .text-content {
      margin-right: 0px; 
  }
  .v-container {
    padding: 10% 5%;

  width: 100% !important;
  max-width: 100% !important;
}
  }
  </style>
  <!-- <img alt="That's a lot of pixels" data-src="https://res.insta360.com/static/f909a6f476145cb8bfdf15120926bcd7/72MP.jpg" src="https://res.insta360.com/static/f909a6f476145cb8bfdf15120926bcd7/72MP.jpg" style="transform: translate3d(0px, 0px, 0px) scale(1.0467, 1.04674);"></img> -->