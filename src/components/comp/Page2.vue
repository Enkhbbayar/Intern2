<template>
  <div id="video-container">
    <div class="outter-bg">
      <img src="@/assets/comic4.png" class="background-image">
    </div>
    <video class="media-block__video lozad lazy-loaded" id="video-2" autobuffer="true" muted="true" autoplay="true" loop="true" playsinline="true" webkit-playsinline="true" data-loaded="true" style="opacity: 0.3;">
      <source type="video/mp4" data-src="https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/hardware/ps5/channel-specific-content/pdc/2023/ps5-overview/video-brand-billboard/ps5-feel-it-now-video-block-01-en-02apr24.mp4" src="https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/hardware/ps5/channel-specific-content/pdc/2023/ps5-overview/video-brand-billboard/ps5-feel-it-now-video-block-01-en-02apr24.mp4">
    </video>
    <div class="content">
      <div class="transaction big-text">Тоглож байгаагүйгээрээ тогло<label class="tseg" style="color: #448AFF;">.</label></div>
      <div class="columns">
        <div class="transaction column glass-effect">
          <img src="@/assets/speed.png" alt="Icon 1" class="icon">
          <div class="text">Өндөр хурд</div>
        </div>
        <div class="transaction column glass-effect">
          <img src="@/assets/human.png" alt="Icon 2" class="icon">
          <div class="text">Бодит мэт мэдрэмж</div>
        </div>
        <div class="transaction column glass-effect">
          <img src="@/assets/gallery.png" alt="Icon 3" class="icon">
          <div class="text">Таныг уяах тоглоомнууд</div>
        </div>
      </div>
      <div class="transaction long-text">PlayStation 5 нь AMD Ryzen Zen 2 процессор, AMD RDNA 2 10.3 TFLOP, 16 ГБ GDDR6 болон 1 TB SSD дискний бүрэн хүчийг мэдрүүлж, үйлдэл бүрийг хурдан, жигд, тэсрэлттэйгээр тоглох боломжийг олгох болно. HDR дэмжлэгтэй PS5 тоглоомууд гайхалтай өнгө, нягтаршилтайгаар таны дэлгэц дээр гарч ирэх ба нарийн ширхэг бүрийг тод харах боломжтой.</div>
    </div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

#video-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.outter-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
}

#video-2 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
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
  justify-content: center;
  z-index: 3;
  color: white;
  text-align: center;
  padding: 20px;
}

.columns {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.column {
  display: flex;
  width: 200px;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  padding: 20px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  font-weight: 700;
  opacity: 0;
  transform: translateY(100px);
  transition: transform 1s ease, opacity 1s ease;
}

.icon {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  object-fit: contain;
}

.text {
  font-size: 16px;
}

.big-text {
  text-transform: uppercase;
  font-size: 65px;
  font-weight: 700;
  padding-bottom: 8%;
  opacity: 0;
  transform: translateY(100px);
  transition: transform 1s ease, opacity 1s ease;
}

.long-text {
  font-size: 20px;
  font-weight: 500;
  margin-top: 5%;
  max-width: 80%;
  opacity: 0;
  transform: translateY(100px);
  transition: transform 1s ease, opacity 1s ease;
}

.visible {
  transform: translateY(0);
  opacity: 1;
}
@media screen and (max-width: 960px) {
  .big-text {
  font-size: 35px;
  padding-bottom: 8%;
}
}
@media screen and (max-width: 560px) {
  .big-text {
  font-size: 30px;
  padding-bottom: 9%;
  text-align: left;
  max-width: 90%;
}
.columns {
  width: 95%;
  max-width: 900px;
  margin-bottom: 10px;
}

.column {
  width: 100px;
  border-radius: 10px;
  padding: 10px;
}
.icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}
.text {
  font-size: 10px;
}
.long-text {
  font-size: 16px;
  font-weight: 500;
  margin-top: 5%;
  max-width: 90%;
  text-align: left;
}
}

</style>

