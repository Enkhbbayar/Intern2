<template>
    <section>
      <p class="text-uppercase text-blue-accent-4 mt-12 font-weight-400 title">Үзүүлэлт</p>
      <v-img
        class="mb-4"
        height="90%"
        width="100%"
        src="@/assets/ps5-intro.png"
      />
      <v-container class="width-100">
        <v-row>
          <v-col cols="12" md="4">
            <div class="detail-title">
              Өндөр хурд
              <v-icon class="icon">mdi-speedometer</v-icon>
            </div>
            <p>
              Өндөр хурдны SSD-ээр аянга шиг хурдан ачаалах, мэдрэгчтэй хариу үйлдэл,
              дасан зохицох триггер болон 3D Аудио, шинэ үеийн гайхалтай PlayStation
              тоглоомуудын тусламжтайгаар илүү гүн гүнзгий тоглоомондоо уусах мэдрэмжийг
              мэдрээрэй.
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <div class="detail-title">
              Илүү нимгэн
              <v-icon class="icon">mdi-image-size-select-large</v-icon>
            </div>
            <p>
              PlayStation 5 Slim-ийн тусламжтайгаар AMD Ryzen Zen 2 процессор, AMD RDNA 2 10.3 TFLOP, 16 ГБ GDDR6 болон 1 TB SSD дискний бүрэн хүчийг мэдэржээрэй. Үйлдэл бүр илүү хурдан, жигд, тэсрэлттэй, хөдөлгөөнүүд мэдрэх гайхалтай тоглоомуудыг тоглохыг хүсвэл Playstation 5 Slim-c мэдрэээрэй.
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <div class="detail-title">
              НҮД БУЛААМ ГРАФИК
              <v-icon class="icon">mdi-monitor-shimmer</v-icon>
            </div>
            <p>
              PlayStation 5 Slim нь гэрлийн туяа тус бүрийг тус тусад нь загварчлан realistiс сүүдэр, тусгалыг бий болгохын тулд дараагийн түвшний бодит байдлыг өгдөг Ray Tracing технологийг агуулдаг. Тохиромжтой тоглоомуудад секундэд 120FPS хурдыг мэдрээрэй.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </template>
  
  <style scoped>
  p{
    font-size: 14px;
    opacity: 70%;
  }
  .title{
    padding: 20px 0;
    position: relative;
    font-size: 24px;
    font-weight: 600;
    opacity: 100%;
  }
  .detail-title {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 500;
    color: #2962FF;
    font-size: larger;
    margin-bottom: 20px;
  }
  .detail-title .icon{
    padding-left: 20px;
  }
  p{
    text-align: justify;
  }
  
  .detail-title v-icon {
    margin-left: 8px;
  }
  </style>
  