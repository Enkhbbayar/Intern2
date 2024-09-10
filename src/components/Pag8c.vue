<template>
    <v-container class="bg-outter d-flex align-center">
      <v-row no-gutters>
        <v-col cols="12" md="6" class="text-left ma-0 pa-0 d-flex flex-column justify-center order-md-1 order-first anitai">
          <div class="text-content">
            <h1 class="tx1">САЛХИНЫ ЧИМЭЭ ДАРАГЧ</h1>
            <h2 class="tx2">ТА ЯЛГААГ НЬ СОНСОХ БОЛНО</h2>
            <p class="subtitle-1 tx3">
                Ямар ч үйлдэл хийсэн X4-ийн цоо шинэ салхины бууралт нь та улих салхи ч тэр агшинг бүх сүр жавхлантайгаар нь үлдээх боломжийг олгоно.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="pa-0 order-md-2 order-last d-flex align-items-center justify-center anitai">
          <div>
            <video
              class="media-block__video lozad lazy-loaded d-block"
              id="video-1"
              autobuffer
              muted
              autoplay
              playsinline
              loop
              webkit-playsinline
              :src="videoSrc"
            >
              <source
                type="video/mp4"
                :src="videoSrc"
              />
            </video>
            <div class="toggle">
              <p>OFF</p>
              <label class="switch">
                <input type="checkbox" v-model="isToggled">
                <span class="slider round"></span>
              </label>
              <p>ON</p><br><br>
            </div>
            <div class="dood-tx">ACTIVE WIND REDUCTION</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <style scoped>
  /* Styles remain unchanged */
  .dood-tx{
    flex-direction: column; 
    display: flex; 
    align-items: center; 
    transform: translateY(-40px); 
    font-weight: 600;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin: 0 10px;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: #404040;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #404040;
  }
  
  input:checked + .slider:before {
    transform: translateX(26px);
  }
  
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
  
  .toggle {
    transform: translateY(-50px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px; /* Adjust as needed */
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
    /* padding: 5%; */
  }
  
  .text-content {
    margin-right: 50px;
  }
  
  @media screen and (max-width: 970px) {
    .text-content {
    margin-right: 0px;
  }
    .tx3{
        text-align: justify;
    }
    .toggle {
    transform: translateY(-0px);
    margin-top: 10px;
  }
  .dood-tx{
    flex-direction: column; 
    display: flex; 
    align-items: center; 
    transform: translateY(-0px); 
    font-weight: 600;
  }
    .text-content {
      margin-left: 0;
    }
    .v-container {
      padding: 10% 5%;
      width: 100% !important;
      max-width: 100% !important;
    }
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        isToggled: false,
        videoSrc: 'https://media.insta360.com/static/28fb1854bac3a79845cd88145df7ff30/%E6%9C%AA%E9%99%8D%E5%99%AA.mp4' // Default video source
      };
    },
    watch: {
      isToggled(newVal) {
        this.videoSrc = newVal 
          ? 'https://media.insta360.com/static/90a8e1b27dd835af4fa6c91d6ec6727e/%E9%99%8D%E5%99%AA0418.mp4' 
          : 'https://media.insta360.com/static/28fb1854bac3a79845cd88145df7ff30/%E6%9C%AA%E9%99%8D%E5%99%AA.mp4';
      }
    }
  };
  </script>
  