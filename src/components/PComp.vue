<template>
  <div class="pa-4 container">
    <div class="top-text">
      <h2 style="font-weight: 400;">
        <span class="together zurag">Insta360 X4<label class="tseg zurag" style="color: #448AFF;">.</label></span>
        <label style="font-weight: 700;" class="zurag">VS</label>
        <span class="together zurag">Insta360 X3<label class="tseg zurag" style="color: #448AFF;">.</label></span>
      </h2>
    </div>
    <v-row class="pa-0 ma-6 anitai">
      <v-col
        cols="12"
        md="6"
        class="pa-0 mb-4"
        v-for="(item, index) in items"
        :key="index"
      >
        <v-card class="pa-4 ma-4 backg">
          <v-img
            :src="item.image"
            height="200px"
            class="w-100"
            contain
          ></v-img>
          <v-card-title class="text-wrap">
            <a :href="item.link" target="_blank" style="color: inherit; text-decoration: none; font-size: 30px;">
              {{ item.title }}
              <img src="@/assets/right-icon.svg" class="title-icon"/>
            </a>
          </v-card-title>
          <v-card-text>
            {{ item.detail }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div class="pa-16 md-4 ma-0 mydetail anitai">
      <hr>
      <v-row class="sticky-head">
        <v-col cols="4" class="d-none d-md-block"></v-col>
        <v-col cols="6" md="4">
          <h3 class="text-left sticky-title" style="white-space: nowrap;">Insta360 X4aa</h3>
        </v-col>
        <v-col cols="6" md="4">
          <h3 class="text-left sticky-title" style="white-space: nowrap;">Insta360 X3</h3>
        </v-col>
      </v-row>
      <!-- Row 1 -->
      <v-row>
        <v-col cols="12" md="4">
          <h3 class="text-left tusdaa">360 VIDEO<div style="font-weight: 400; opacity: 0.6;">Max. Resolution/Frame Rate</div></h3>
        </v-col>
        <v-col cols="6" md="4">
          <p class="text-left">8K30fps/5.7K60fps</p>
        </v-col>
        <v-col cols="6" md="4">
          <p class="text-left">5.7K30fps</p>
        </v-col>
      </v-row>
      <!-- Row 2 -->
      <v-row>
        <v-col cols="12" md="4">
          <h3 class="text-left tusdaa">360° VIDEO <br><span style="font-weight: 400; opacity: 0.6;">Max. Slow-Mo Resolution</span></h3>
        </v-col>
        <!-- mdi-check-circle-outline -->
        <v-col cols="6" md="4">
          <p class="text-left">4K100fps</p>
        </v-col>
        <v-col cols="6" md="4">
          <p class="text-left">3K100fps</p>
        </v-col>
      </v-row>
      <!-- Row 3 -->
      <v-row>
        <v-col cols="12" md="4">
          <h3 class="text-left tusdaa">Ү360° PHOTO <br><span style="font-weight: 400; opacity: 0.6;">Max. Resolution</span></h3>
        </v-col>
        <!-- mdi-check-circle-outline -->
        <v-col cols="6" md="4">
          <p class="text-left">72MP With in-cam AI noise reduction</p>
        </v-col>
        <v-col cols="6" md="4">
          <p class="text-left">72MP</p>
        </v-col>
      </v-row>
      <!-- Row 4 -->
      <v-row>
        <v-col cols="12" md="4">
          <h3 class="text-left tusdaa">SINGLE-LENS MODE <br><span style="font-weight: 400; opacity: 0.6;">Max. Resolution/Frame Rate</span></h3>
        </v-col>
        <!-- mdi-check-circle-outline -->
        <v-col cols="6" md="4">
          <p class="text-left">4K60fps</p>
        </v-col>
        <v-col cols="6" md="4">
          <p class="text-left">4K30fps</p>
        </v-col>
      </v-row>
      <!-- Row 5 -->
      <v-row>
        <v-col cols="12" md="4">
          <h3 class="text-left tusdaa">ХRUN TIME <br><span style="font-weight: 400; opacity: 0.6;">5.7K30fps, Lab Environment</span></h3>
        </v-col>
        <!-- mdi-check-circle-outline -->
        <v-col cols="6" md="4">
          <p class="text-left">135 mins</p>
        </v-col>
        <v-col cols="6" md="4">
          <p class="text-left">81 mins</p>
        </v-col>
      </v-row>
      <!-- Row 6 -->
      <v-row>
        <v-col cols="12" md="4">
          <h3 class="text-left tusdaa">REMOVABLE LENS GUARDS</h3>
        </v-col>
        <!-- mdi-check-circle-outline -->
        <v-col cols="6" md="4">
          <p class="text-left">In the box</p>
        </v-col>
        <v-col cols="6" md="4">
          <p class="text-left">-</p>
        </v-col>
      </v-row>
      <hr>
    </div>
  </div>
</template>

<script>
import diskImage from '@/assets/x41.jpeg';
import digitalImage from '@/assets/x42.jpeg';

export default {
  data() {
    return {
      items: [
        {
          image: diskImage,
          title: 'Insta360 X4',
          detail: 'The 8K game changer.',
          link: 'https://www.boom.mn/p/insta360-x4'
        },
        {
          image: digitalImage,
          title: 'Insta360 X3',
          detail: 'The 360 powerhouse.',
          link: 'https://www.boom.mn/p/insta-360'
        }
      ]
    };
  }
};
</script>

<style scoped>
.text-wrap:hover {
  color: #66adff;
}
.zurag {
  transform: translateY(100px);
  opacity: 0;
  transition: transform 1s, opacity 1s;
}

.zurag.visible {
  transform: translateY(0);
  opacity: 1;
}

hr {
  border: 0;
  border-top: 0.5px solid rgba(254, 254, 254, 0.613);
  margin: 20px 0;
}

.mydetail h3 {
  padding-left: 0 !important;
  margin-left: 0 !important;
  color: white;
}

.backg {
  background-color: rgb(26, 26, 26);
  border-radius: 20px;
  color: white;
}

.container {
  width: 100%;
  background-color: #000000;
  color: rgba(255, 255, 255, 0.725);
  font-weight: 500;
}

.bottom-text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  padding-top: 18px;
}

.top-text {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  padding-bottom: 30px;
}

.title-icon {
  width: 24px;
  height: 24px;
  margin-left: 8px;
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

.sticky-head {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #000;
  z-index: 10;
}

@media screen and (max-width: 960px) {
  .tusdaa{
  background-color: rgb(26, 26, 26);
  padding: 10px 0;
}
  .container {
    height: 100%;
    width: 100%;
    padding: 0;
  }
  .ma-4 {
    margin: 0 !important;
  }
}

@media screen and (max-width: 560px) {
  .pa-4 {
    padding: 20px 0 !important;
  }
  .pa-16 {
    padding: 5% !important;
  }
  .top-text {
    display: none;
  }
  .together {
    display: block;
  }
  .bottom-text {
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    padding: 3% 5% 20% 5%;
  }
}
</style>
