<template>
    <div class="pa-4 container">
        <div class="top-text">
            <h2 style="font-weight: 400;"><span class="together zurag">Disc Edition<label class="tseg zurag" style="color: #448AFF;">.</label> </span><label style="font-weight: 700;" class="zurag">VS</label><span class="together zurag"> Digital Edition<label class="tseg zurag" style="color: #448AFF;">.</label></span></h2>
        </div>
      <v-row class="pa-0 ma-6">
        <v-col
          cols="12"
          md="6"
          class="pa-0"
          v-for="(item, index) in items"
          :key="index"
        >
          <v-card class="pa-4 ma-4 backg">
            <v-img
              :src="item.image"
              height="300px"
              class="w-100"
              contain
            ></v-img>
            <v-card-title class="text-wrap">
              {{ item.title }}
            </v-card-title>
            <v-card-text>
              {{ item.detail }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div class="pa-16 md-4 ma-0 mydetail">
    <hr>
    <v-row>
        <v-col cols="4" class="d-none d-md-block"></v-col>
        <v-col cols="6" md="4">
            <h3 class="text-left" style="white-space: nowrap;">Digital Edition</h3>
        </v-col>
        <v-col cols="6" md="4">
            <h3 class="text-left" style="white-space: nowrap;">Disc Edition</h3>
        </v-col>
    </v-row>
    <!-- Row 1 -->
    <v-row>
        <v-col cols="12" md="4">
            <h3 class="text-left">Диск унших эсэх</h3>
        </v-col>
        <v-col cols="6" md="4">
            <p class="text-left">Уншихгүй</p>
        </v-col>
        <v-col cols="6" md="4">
            <p class="text-left">Уншина</p>
        </v-col>
    </v-row>
    <!-- Row 2 -->
    <v-row>
        <v-col cols="12" md="4">
            <h3 class="text-left">Playstation store-оос тоглоом авах</h3>
        </v-col>
        <!-- mdi-check-circle-outline -->
        <v-col cols="6" md="4">
            <p class="text-left">Боломжтой</p>
        </v-col>
        <v-col cols="6" md="4">
            <p class="text-left">Боломжгүй</p>
        </v-col>
    </v-row>
    <!-- Row 3 -->
    <v-row>
        <v-col cols="12" md="4">
            <h3 class="text-left">Үндсэн үнэ</h3>
        </v-col>
        <!-- mdi-check-circle-outline -->
        <v-col cols="6" md="4">
            <p class="text-left">Илүү хямд</p>
        </v-col>
        <v-col cols="6" md="4">
            <p class="text-left">Илүү үнэтэй</p>
        </v-col>
    </v-row>
    <!-- Row 4 -->
    <v-row>
        <v-col cols="12" md="4">
            <h3 class="text-left">Blu-ray кино тоглуулах</h3>
        </v-col>
        <!-- mdi-check-circle-outline -->
        <v-col cols="6" md="4">
            <p class="text-left">Боломжгүй</p>
        </v-col>
        <v-col cols="6" md="4">
            <p class="text-left">Боломжтой</p>
        </v-col>
    </v-row>
    <!-- Row 5 -->
    <v-row>
        <v-col cols="12" md="4">
            <h3 class="text-left">Хэмжээ <span style="font-weight: 400; opacity: 0.6;">(Өргөн x Өндөр x Гүн)</span></h3>
        </v-col>
        <!-- mdi-check-circle-outline -->
        <v-col cols="6" md="4">
            <p class="text-left">92 мм x 390 мм x 260 мм</p>
        </v-col>
        <v-col cols="6" md="4">
            <p class="text-left">104 мм x 390 мм x 260 мм</p>
        </v-col>
    </v-row>
    <!-- Row 6 -->
    <v-row>
        <v-col cols="12" md="4">
            <h3 class="text-left">Гадаад төрх</h3>
        </v-col>
        <!-- mdi-check-circle-outline -->
        <v-col cols="6" md="4">
            <p class="text-left">Диск оролтгүй</p>
        </v-col>
        <v-col cols="6" md="4">
            <p class="text-left">Диск оролттой</p>
        </v-col>
    </v-row>
    <hr>
</div>

    </div>
  </template>
  
  <script>
  import diskImage from '@/assets/disk.png';
  import digitalImage from '@/assets/digital.png';
  
  export default {
    data() {
      return {
        items: [
          {
            image: diskImage,
            title: 'PS5 Disc edition',
            detail: 'Диск уншигчтай, физик дискээр тоглоом тоглох боломжтой. Мөн playstaion store-оос тоглоом татаж суулгах боломжтой.'
          },
          {
            image: digitalImage,
            title: 'PS5 Digital edition',
            detail: 'Диск уншигчгүй, зөвхөн playstaion store-оос тоглоом татаж суулгах боломжтой.'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
    .zurag {
      transform: translateY(100px);
      opacity: 0;
      transition: transform 1s, opacity 1s;
  }
  
  .zurag.visible {
      transform: translateY(0);
      opacity: 1;
  }
  hr{
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.167);
    margin: 20px 0;
  }
  .mydetail h3 {
    padding-left: 0 !important;
    margin-left: 0 !important;
}

  .backg{
    background-color: black;
    border-radius: 20px;
  }
  .container{
    height: 130vh;
    width: 100%;
    background-color: #010118;
    /* align-items: center; */
  }
  .bottom-text{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    padding-top: 18px;
  }
  .top-text{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 40px;
    padding-bottom: 30px;
  }
  .v-card-title {
    font-size: 20px;
    font-weight: bold;
  }
  
  .v-card-text {
    font-size: 16px;
  }
  
  .text-wrap {
    white-space: normal;
  }
  @media screen and (max-width: 960px) {
    .container{
    height: 100%;
    width: 100%;
    padding: 0;
  }
  }
  @media screen and (max-width: 560px) {
    .top-text {
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 25px;
          padding: 6% 1%;
          display: inline;
      }
      .together{
        display: block;
      }
      .bottom-text {
          text-align: left;
          font-size: 20px;
          font-weight: 500;
          padding: 3% 5% 20% 5%;
      }
      /* .top-text label {
          display: block;
          margin: 0;
      } */
  }
  </style>
  