<template>
  <div id="video-container">
    <div class="overlay"></div>
    <video class="media-block__video lozad lazy-loaded" id="video-1" autobuffer="true" muted="true" autoplay="true" playsinline="true" webkit-playsinline="true" data-loaded="true">
      <source type="video/mp4" data-src="https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/hardware/ps5/channel-specific-content/pdc/2023/ps5-overview/hero/video-hero/ps5-slim-overview-video-hero-01-en-08nov23.mp4" src="https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/hardware/ps5/channel-specific-content/pdc/2023/ps5-overview/hero/video-hero/ps5-slim-overview-video-hero-01-en-08nov23.mp4">
    </video>
    <div class="content">
      <div class="deed-hseg">
        <img class="logo" src="@/assets/ps5-logo.png" style="filter: invert(100%);" />
        <div class="gradient-text" style=" margin-top: -30px; font-weight: 500; ">Slim Edition</div>
        <!-- <div class="slim" style="margin-top: -15px; font-weight: 500;">Slim model</div> -->
      </div>
      <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.gradient-text{
  font-size: 34px;
}
#video-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.deed-hseg{
  display: flex;
  align-items: center;
  flex-direction: column;
}
#video-1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(1.5, 0, 0.3, 0.7), rgba(0, 0, 0, 0.1));
  z-index: 1;
  pointer-events: none;
  opacity: .7;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  pointer-events: none;
  padding: 20px;
  box-sizing: border-box;
}

.logo {
  width: 250px;
  height: auto;
}

.gradient-text {
  color: white;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
  background: linear-gradient(60deg, #316cf5, #d8deea, #385ac1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: changeToWhite 10s forwards;
}

@keyframes changeToWhite {
  0% {
    -webkit-text-fill-color: transparent;
  }
  50% {
    -webkit-text-fill-color: linear-gradient(60deg, #d2daed, #d8deea, #a0a9c3);
  }
  100% {
    -webkit-text-fill-color: white;
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
@media screen and (max-width: 560px) {
  .gradient-text{
    font-size: 23px;
  }
}
</style>
