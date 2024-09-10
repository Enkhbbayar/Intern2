<template>
    <div class="deed-hseg"></div>
    <v-container align-center justify-center d-block class="position-relative pa-0 outter-div" fluid>
      <v-container class="position-absolute pa-16 fade-in" style=" display: flex; justify-content: left; align-items: center;">
        <div class="texts" style="text-align: center;">
          <div class="logo-text"><strong>Insta360 X4</strong></div>
          <div  class="logo-dood" style="opacity: 0.6; font-weight: 200;">Ид шидийн үйлдэл<label class="tseg" style="color: #448AFF; font-weight: 600;">.</label></div>
          <div id="video-button" class="mt-6">
            <video autoplay muted loop playsinline style="opacity: 0.5;">
              <source src="https://media.insta360.com/static/4867035447db85c7984af5ae31ff7c82/560_112%20@5mbps.mp4" type="video/mp4">
            </video>
            <!-- https://youtu.be/utIKv7KNOYo?si=P0KU-sH-hcWocQbW -->
            <div class="btn-content">
              <button style="text-transform: uppercase; font-weight: 800; font-size: 20px; padding-right: 15px;">Интро үзэх</button>
              <img src="https://res.insta360.com/static/146ce8e95a302bcc6c9496bfa08ef9dd/Polygon%202.svg" alt="">
            </div>
          </div>
        </div>
      </v-container class="d-block">
      <video class="media-block__video lozad lazy-loaded d-block" id="video-1" autobuffer="true" muted="true" autoplay="true" playsinline="true" webkit-playsinline="true" data-loaded="true">
        <source type="video/mp4" data-src="" src="https://media.insta360.com/static/3078ae2931221a65ba292e4a8f38943c/KV-PC0418%E6%9C%80%E7%BB%88.mp4">
      </video>
      <!-- <div class="arrow fade-in">
          <span></span>
          <span></span>
          <span></span>
        </div> -->
    </v-container>
  </template>
  
  <style scoped>
  .logo-text{
    font-size: 62px;
  }
  .logo-dood{
    font-size: 30px;
  }
    #video-1 {
    object-fit: cover;
    width: 100%;
    /* padding-left: 300px; */
    height: 100vh;
  }
  #video-button {
    /* padding: 0 5%; */
    text-wrap: nowrap;
    border-radius: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    width: 100%; 
    height: auto;
  }
  
  #video-button video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure video covers the entire button */
    pointer-events: none; /* Ensure video doesn't capture mouse events */
  }
  
  #video-button .btn-content {
    position: relative;
    z-index: 1;
    padding: 5% 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .texts{
    /* height:100% */
  }
  .fade-in {
    opacity: 0;
    animation: fadeIn 4s forwards;
    color: white;
    height: 100%;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .arrow {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
  }
  
  .arrow span {
    display: block;
    width: 20px;
    height: 20px;
    border-bottom: 5px solid #06A8FF;
    border-right: 5px solid #06A8FF;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
  }
  
  .arrow span:nth-child(2) {
    animation-delay: -0.2s;
  }
  
  .arrow span:nth-child(3) {
    animation-delay: -0.4s;
  }
  
  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(20px, 20px);
    }
  }
  @media screen and (max-width: 1200px) {
  
    .texts {
      /* height: 1000px; */
      /* margin-top: 300px; */
      transform: translateY(-200px);
      margin-left: 0;
    }
    .fade-in{
      display: flex;
      flex-direction: column;
      align-items: center;
      /* background-color: #000000;
      z-index: -1; */
      max-width: 100%;
    }
    #video-1 {
    object-fit: cover;
    width: 100%;
    /* padding-left: 300px; */
    height: 155vh;
    object-position: right !important;
  }
  .outter-div{
    /* height: 130vh;
    background-color: red; */
  }
  .deed-hseg{
    height: 30vh;
    width:100%;
    background-color: #000000;
    display: block;
  }
  }
  @media screen and (max-width: 1120px) {
    #video-1 {
    height: 150vh;
  }
  .deed-hseg{
    height: 28vh;
  }
  .texts {
      transform: translateY(-220px);
    }
  }
  @media screen and (max-width: 1060px) {
    #video-1 {
    height: 140vh;
  }
  .deed-hseg{
    height: 28vh;
  }
  .texts {
      transform: translateY(-220px);
    }
  }
  @media screen and (max-width: 940px) {
    #video-1 {
    height: 130vh;
  }
  .texts {
      transform: translateY(-240px);
    }
  }
  @media screen and (max-width: 900px) {
    #video-1 {
    height: 120vh;
  }
  
  }
  @media screen and (max-width: 850px) {
    #video-1 {
    height: 110vh;
  }
  
  }
  @media screen and (max-width: 800px) {
    #video-1 {
    height: 105vh;
  }
  }
  @media screen and (max-width: 750px) {
    #video-1 {
    height: 100vh;
  }
  .texts {
      transform: translateY(-260px);
    }
  }
  @media screen and (max-width: 690px) {
    #video-1 {
    height: 90vh;
  }
  .deed-hseg{
    height: 38vh;
  }
  .texts {
      transform: translateY(-290px);
    }
  }
  @media screen and (max-width: 660px) {
    #video-1 {
    height: 85vh;
  }
  .deed-hseg{
    height: 38vh;
  }
  .texts {
      transform: translateY(-290px);
    }
  }
  @media screen and (max-width: 600px) {
    #video-1 {
    height: 80vh;
  }
  }
  @media screen and (max-width: 560px) {
    #video-1 {
    height: 75vh;
  }
  @media screen and (max-width: 560px) {
    #video-1 {
    height: 65vh;
  }
  }
  .logo-text{
    font-size: 45px;
  }
  .deed-hseg{
    height: 50vh;
  }
  .texts {
      transform: translateY(-290px);
    }
  }
  @media screen and (max-width: 465px) {
    #video-1 {
    height: 60vh;
  }
  .deed-hseg{
    height: 55vh;
  }
  .logo-text{
    font-size: 35px;
  }
  .texts {
      transform: translateY(-350px);
    }
  }
  @media screen and (max-width: 410px) {
    #video-1 {
    height: 55vh;
  }
  }
  @media screen and (max-width: 386px) {
    #video-1 {
    height: 50vh;
  }
  .deed-hseg{
    height: 55vh;
  }
  .texts {
      transform: translateY(-290px);
    }
  }
  @media screen and (max-width: 336px) {
    #video-1 {
    height: 40vh;
  }
  .deed-hseg{
    height: 55vh;
  }
  .texts {
      transform: translateY(-290px);
    }
    .logo-text{
    font-size: 3px;
  }
  .logo-dood{
    font-size: 22px;
  }
  }
  </style>
  