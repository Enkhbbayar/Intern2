<template>
    <v-container class="bg-outter d-flex align-left">
      <v-row no-gutters align="center">
        <v-row cols="12" md="6" class="text-left ma-0 pa-0 d-flex flex-column justify-center anitai">
          <div class="text-content">
            <h1 class="tx1">ШИНЭ 2.5" МЭДРЭГЧТЭЙ ДЭЛГЭЦ</h1>
            <h2 class="tx2">ИЛҮҮ ТОМ, САЙН</h2>
            <p class="subtitle-1 text-left tx3">
                Тийм ээ, энэ бол маш тод гэрэл зураг, видео бичлэгийг үзэхэд тохиромжтой Corning® Gorilla® Glass-тай, тод 2,5 инчийн мэдрэгчтэй дэлгэц юм.
            </p>
          </div>
        </v-row>
        <v-row cols="12" md="6" class="pa-2 d-flex align-center anitai">
          <!-- <div class="image-wrapper">
            <img alt="That's a lot of pixels" src="@/assets/72MP.jpeg" class="scroll-image">
          </div> -->
        </v-row>
      </v-row>
    </v-container>
  </template>
<style scoped>
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
    max-width: 50%;
}
.bg-outter {
    width: 100%;
    padding: 5%;
}
.v-container {
    padding: 5% 15%;
    background-image: url(@/assets/goril.jpeg);
    /* background-color: red; */
    background-size: cover;
    background-position: center;
    color: #fff;
    width: 100% !important; 
    max-width: 100% !important; 
    min-height: 90vh; 
    display: flex;
    align-items: center;
    justify-content: center;
}
.text-content {
    /* margin-right: 50px; */
    margin-top: -30%;
}
.image-wrapper {
    margin-top: 3%;
    overflow: hidden;
    width: 100%;
    height: auto;
    position: relative;
    border-radius: 35px;
    object-fit: cover;
}
.scroll-image {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
}
@media screen and (max-width: 970px) {
    .tx3{
        text-align: justify !important;
    }
  .text-content {
    margin-right: 0;
    margin-top: -60%; /* Add some space between text and video on mobile */
  }
  .v-container {
    padding: 10% 5%;
    width: 100% !important;
    max-width: 100% !important;
  }
  .tx3 {
    max-width: 100%;
}
}
</style>
<script>
document.addEventListener('scroll', function() {
  const scrollImage = document.querySelector('.scroll-image');
  const scrollPosition = window.scrollY;
  const imageHeight = scrollImage.clientHeight;

  // Calculate the scale factor based on the scroll position
  const scaleFactor = 1 + scrollPosition / 1000;  // Adjust the divisor to control the scaling speed

  // Ensure the image does not grow indefinitely
  if (scaleFactor < 2) {  // You can set a maximum scale limit
    scrollImage.style.transform = `scale(${scaleFactor}, 1)`;  // Scale horizontally only
  }
});
</script>
  