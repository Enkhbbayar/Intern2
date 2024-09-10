<template>
    <v-container class="bg-outter">
      <v-row no-gutters>
        <v-col cols="12" class="text-left ma-0 pa-0 anitai">
          <h1 class="tx1">BULLET TIME</h1>
          <h2 class="tx2">ҮЙЛ АЖИЛЛАГААНЫ ЦОГЦ БАЙХ</h2>
          <p class="subtitle-1 tx3">
            X4-өө эргүүлж, 5.7K120fps эсвэл 3K240fps-ээр удаанаар сонгодог бичлэгийг аваарай. Сэтгэл догдлолыг дээд цэгтээ хүргэхэд тохиромжтой.
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
              src="https://media.insta360.com/static/2ecd9bd98653d44f80e80749fa308f05/Bullet%20Time_PC_1728x972.mp4"
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
  width: 100% !important; /* Ensure the container is always full width */
  max-width: 100% !important; /* Remove any max-width restrictions */
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
@media screen and (max-width: 970px) {
    .tx3{
        text-align: justify !important;
    }
  .v-container {
    padding: 10% 5%;

  width: 100% !important;
  max-width: 100% !important;
}
.tx2{
    font-size: 35px;
    font-style: italic;
    font-weight: 800;
}
  }
</style>
  