<template>
    <v-container class="bg-outter d-flex align-center">
      <v-row no-gutters>
        <v-col cols="12" md="6" class="pa-0 order-md-1 order-last anitai">
          <video
            class="media-block__video lozad lazy-loaded d-block"
            id="video-1"
            autobuffer
            muted
            autoplay
            loop
            playsinline
            webkit-playsinline
            data-loaded="true"
          >
            <source
              type="video/mp4"
              src="https://media.insta360.com/static/8b5595fb18bfeadfe9fb275b5e354e54/quick%20edit%20PC%20EN.mp4"
            />
          </video>
        </v-col>
        <v-col cols="12" md="6" class="text-left ma-0 pa-0 d-flex flex-column justify-center order-md-2 order-first anitai">
          <div class="text-content">
            <h1 class="tx1">ШУУРХАЙ ЗАСАХ</h1>
            <h2 class="tx2">REFRAMING АМАРХАН БОЛЛОО</h2>
            <p class="subtitle-1 tx3">
                Зүгээр л утсаа хөдөлгөж, дэлгэцийг шудар эсвэл виртуал джойстик ашиглан зураг авалтынхаа хүссэн газар руу чиглүүлээрэй. Яг үүнтэй адил таны засварыг шууд хадгалах, хуваалцахад бэлэн боллоо. Маш амархан, бас үнэхээр дажгүй!
            </p>
          </div>
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
      margin-left: 50px; 
  }
  @media screen and (max-width: 970px) {
    .text-content {
      margin-left: 0;
  }
  .v-container {
  padding: 5% 15%;

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
  