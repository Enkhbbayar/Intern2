<template>
    <v-container class="bg-outter d-flex align-center">
      <v-row no-gutters>
        <v-col cols="12" md="5" class="pa-0 order-md-1 order-last d-flex align-center ehnii-back anitai">
            <img src="@/assets/waterproof.jpeg" alt="">
        </v-col>
        <v-col cols="12" md="6" class="text-left ma-0 pa-0 d-flex flex-column justify-center order-md-2 order-first anitai">
            <div class="text-content">
            <h1 class="tx1">33ФТ (10М) ХҮРТЭЛ УС НЭВТЭРГҮЙ</h1>
            <h2 class="tx2">БАЙГАЛИЙН УСАНД</h2>
            <p class="subtitle-1 text-left tx3">
                Хайрцагнаас гарангуутаа 33 фут (10 метр) хүртэл ус нэвтэрдэггүй X4-тэй адал явдалд шумбаарай. Усан доорх адал явдлаа 360°-ийн гайхалтай нарийвчлалтайгаар бичихийн тулд X4-өө үл үзэгдэх шумбалтын хайрцагт байрлуулж, 164 фут (50 метр) хүртэл буулгана уу.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <style scoped>
  .ehnii-back img{
    max-height: 500px;
    max-width: 500px;
  }
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
    .tx3{
        text-align: justify !important;
    }
    .ehnii-back img{
    max-height: 300px;
    max-width: 300px;
  }
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
.ehnii-back{

    align-items: center;
}
}
  </style>
  