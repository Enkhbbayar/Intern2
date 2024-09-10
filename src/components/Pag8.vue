<template>
    <v-container class="bg-outter">
      <v-row no-gutters>
        <v-col cols="12" class="text-left ma-0 anitai" style="transform: translateY(60px);">
          <h1 class="tx1">Салгах боломжтой линзийн хамгаалалт</h1>
          <h2 class="tx2">СУЛ ТАЛГҮЙ ХАМГААЛАЛТ</h2>
        </v-col>
        <v-row class="ma-0 pa-0 anitai">
          <v-col cols="12" md="6" class="order-md-1 order-first zuragn">
            <div class="tip-container">
    <div class="icon">
        <img src="@/assets/tsenher-lens.png" alt="">
    </div>
    <div class="text">
        <h1 class="tx11">STANDART</h1>
          <h2 class="tx21">Lens Guards</h2>
    </div>
</div>
<video
              class="media-block__video lozad lazy-loaded d-block "
              id="video-2"
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
                src="https://media.insta360.com/static/c073c6dd858c75d49588270d0842354b/Standard%20lens%20guard_PC_1320x972.mp4"
              />
            </video>
            <!-- <img alt="That's a lot of pixels" src="@/assets/lens.jpeg" class="lens"> -->
            <p class="subtitle-1 tx31">
                Линзний хамгаалалтыг стандарт болгон хөнгөвчлөх. X4 нь илүү ухаалаг, түрхэхэд хялбар линзний хамгаалалттай бөгөөд хавчихаар авагддаг. Ямар ч эмх замбараагүй байдал, бэрхшээл байхгүй!
          </p>
          </v-col>
          <v-col cols="12" md="6" class="order-md-2 order-last">
            <div class="tip-container2">
    <div class="icon">
        <img src="@/assets/ulaan-lens.png" alt="">
    </div>
    <div class="text">
        <h1 class="tx11">Premium</h1>
          <h2 class="tx21">Lens Guards</h2>
    </div>
</div>
            <video
              class="media-block__video lozad lazy-loaded d-block "
              id="video-2"
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
                src="https://media.insta360.com/static/e4e869c1c04e3efd82d0694d74c1268f/Premium%20Lens%20Guard_PC_1320x972.mp4"
              />
            </video>
            <p class="subtitle-1 tx31">
                Аюулгүй байдалд нухацтай ханддаг хүмүүст зориулав. Шилэн хамгаалалт нь бат бөх, зураасанд тэсвэртэй, зургийн чанарыг хадгалах зориулалттай.
          </p>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </template>
  
  <style scoped>
  .tip-container,
  .tip-container2{
    /* position: absolute; */
    z-index: 9;
    border-radius: 12px;
    background: rgba(0, 0, 0, .15);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    height: 70px;
    width: 220px;
}
  .tip-container{
    /* position: absolute; */
    transform: translateY(110px);
    top: 6px;
    padding: 0 24px 0 8px;
    margin: 20px;

}
.tip-container2 {
    /* position: absolute; */
    transform: translateY(110px);
    top: 6px;
    padding: 0 24px 0 8px;
    margin: 20px;
}

.icon {
    margin-right: 8px;
}
.icon img{
    width: auto;
    height: 70px;
}

.text {
    /* Styles for your text container */
    color: white; /* Example color */
    font-size: 16px; 
    text-transform: uppercase;
    flex-direction: column;
}

  .zuragn {
    padding-right: 20px;
    /* margin-right: 50px;  */
    /* margin-top: 20px; */
  }
  .lens {
    width: 100%;
    height: auto;
    border-radius: 30px;
  }
  .tx11 {
    font-size: 16px;
    font-style: italic;
    color: white;
    font-weight: 800;
  }
  .tx21 {
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
  }
  .tx1 {
    font-size: 16px;
    font-style: italic;
    background: linear-gradient(to right, #66adff, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .tx2 {
    font-size: 40px;
    font-style: italic;
    font-weight: 800;
  }
  .tx3 {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
  }
  .tx31 {
    margin-top: 5%;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
  }
  .bg-outter {
    width: 100%;
    padding: 5%;
  }
  .v-col-12 {
    padding-left: 5px !important;
  }
  #video-1,
  #video-2 {
    width: 100%;
    height: auto;
    border-radius: 30px;
    margin-top: 20px;
  }
  .v-container {
    padding: 5% 15%;
    background-color: #000;
    color: #fff;
    width: 100% !important; /* Ensure the container is always full width */
    max-width: 100% !important; /* Remove any max-width restrictions */
  }
  @media (max-width: 960px) {
    .order-md-1 {
      order: 1 !important;
    }
    .order-md-2 {
      order: 2 !important;
    }
  }
  .tx31 {
    text-align: justify;
  }
  @media (max-width: 960px) {
    .v-container {
        padding: 10% 5%;
}
}
  </style>