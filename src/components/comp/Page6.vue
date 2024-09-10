<template>
    <div class="container">
      <div class="left-section left-text" style="margin-top:10px;">
        <h3 style="font-weight: 400;">Adaptive Triggers</h3>
        <p>Динамик эсэргүүцэл нь PS5 тоглоомуудын тоглоомын тоног төхөөрөмж болон объектуудтай харицаж буй байдлыг дуурайж танд мэдрүүлэхээр бүтээгдсэн.</p>
      </div>
      <video class="media-block__video lozad lazy-loaded" id="video-3" autobuffer="true" muted="true" autoplay="true" loop="true" playsinline="true" webkit-playsinline="true" data-loaded="true">
        <source src="https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/hardware/ps5/channel-specific-content/pdc/2021/overview/akqa/video//ps5-immersive_controller-adaptive_triggers-widescreen.mp4#t=0.04" type="video/mp4">
      </video>
      <div class="right-section">
        <div class="ps5-logo"></div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .left-text {
    transform: translateX(100px);
    opacity: 0;
    transition: transform 1s, opacity 1s;
}
.left-text.visible {
    transform: translateX(0);
    opacity: 1;
}
  .container {
    position: relative;
    width: 100%;
    height: 140vh; /* Ensure the container covers the viewport height */
  }
  
  #video-3 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1; /* Set the z-index below the text sections */
  }
  
  .left-section {
    position: absolute;
    top: 30%;
    right: 60px;
    width: 28%;
    /* padding: 1%; */
    color: rgba(17, 17, 17, 0.761);
    box-sizing: border-box;
    z-index: 2;
    line-height: 2.2em;
    background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  padding: 20px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  }
  
  .left-section h3 {
    font-size: 3em;
    margin-bottom: 20px;
  }
  
  .left-section p {
    text-align: justify;
    padding: 4% 0;
    border-top: 1px solid rgba(0, 0, 0, 0.216);
    font-size: 1.5em;
    line-height: 1.5;
  }
  
  .right-section {
    position: absolute;
    top: 20%;
    right: 20px;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  
  .right-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('your-background-video.jpg') no-repeat center center;
    background-size: cover;
    opacity: 0.1;
    z-index: 1;
  }
  
  .ps5-logo {
    width: 300px;
    height: 300px;
    background: url('ps5-intro.png') no-repeat center center;
    background-size: contain;
    filter: grayscale(100%);
    z-index: 2;
  }
  @media screen and (max-width: 916px) {
    .left-section {
    position: absolute;
    top: 0;
    left: 10%;
    box-sizing: border-box;
    width: 80%;
  }
  .left-section h3 {
    font-size: 3em;
    margin-bottom: 1%;
  }
  
  .left-section p {
    font-size: 1.5em;
    line-height: 1.5;
  }
  }
  @media screen and (max-width: 460px) {
    
    .left-section {
    position: absolute;
    top: 20px;
    left: 10%;
    box-sizing: border-box;
    width: 80%;
  }
  .left-section h3 {
    font-size: 2em;
    margin-bottom: 1%;
  }
  
  .left-section p {
    font-size: 1em;
    line-height: 1.5;
  }
  }
  </style>
  