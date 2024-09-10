<template>
    <div class="container">
      <div class="left-section left-text" style="margin-top:10px;">
        <h3 style="font-weight: 400;">Haptic Feedback</h3>
        <p>Гарны чичиргээ нь таны тоглоомын сонголтонд хариу үйлдэл үзүүлж ps5 тоглоомны хүрээлэн буй орчин нь тоглогчид үзүүлж буй хүчин зүйлсийг дуриадаг.</p>
      </div>
      <video class="media-block__video lozad lazy-loaded" id="video-3" autobuffer="true" muted="true" autoplay="true" loop="true" playsinline="true" webkit-playsinline="true" data-loaded="true">
        <source src="https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/hardware/ps5/channel-specific-content/pdc/2021/overview/akqa/video//ps5-immersive_controller-haptic_feedback-widescreen.mp4#t=0.04" type="video/mp4">
      </video>
      <div class="right-section">
        <div class="ps5-logo"></div>
      </div>
    </div>
  </template>
  <!-- <video loop="" title="Haptic Feedback<sup>1</sup>" id="vid_el_hapticfeedback<sup>1</sup>" playsinline="" preload="auto" poster="https://gmedia.playstation.com/is/image/SIEPDC/ImmersiveControl-Haptic-Poster-Widescreen?qlt=87,1&amp;resMode=bilin&amp;fmt=jpg&amp;scl=1" aria-label="">
  <source src="https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/hardware/ps5/channel-specific-content/pdc/2021/overview/akqa/video//ps5-immersive_controller-haptic_feedback-widescreen.mp4#t=0.04" type="video/mp4">Your browser does not support the HTML5 <code>video</code> tag.</video> -->
  <style scoped>
    .left-text {
    transform: translateX(-100px);
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
    height: 100%;
    /* padding-bottom: 100px; */
  }
  
  #video-3 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1; 
    transform: scaleX(-1);
  }
  
  .left-section {
    position: absolute;
    top: 20%;
    left: 60px;
    width: 28%;
    padding: 2%;
    color: rgba(17, 17, 17, 0.761);
    box-sizing: border-box;
    z-index: 2; 
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
    font-size: 1.5em;
    line-height: 1.5;
    text-align: justify;
    padding: 4% 0;
    border-top: 1px solid rgba(0, 0, 0, 0.216);
  }
  
  .right-section {
    position: absolute;
    top: 20%;
    right: 20px;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2; /* Ensure the right section is above the video */
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
  
  @media screen and (max-width:460px) {
    .container {
    position: relative;
    width: 100%;
    height: 100vh;
  }
  .left-section {
    position: absolute;
    top: 0;
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
  