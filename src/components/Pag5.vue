<template>
    <v-container class="bg-outter d-flex align-center">
      <v-row no-gutters align="center">
        <v-row cols="12" md="6" class="text-center ma-0 pa-0 d-flex flex-column anitai m-align">
          <div class="text-content">
            <h1 class="tx1">72MP 360° PHOTO</h1>
            <h2 class="tx2">ИЛҮҮ ОЛОН ПИКСЕЛЬ</h2>
            <p class="subtitle-1 text-center tx3">
                Таныг зогсоож, ширтэхэд хүргэх гайхалтай 360° зураг аваарай. <br>72 мегапикселийн зураг урьд өмнөхөөсөө илүү тод, нарийвчлалтай боллоо!
            </p>
          </div>
        </v-row>
        <v-row cols="12" md="6" class="pa-2 d-flex align-center anitai">
          <div class="image-wrapper">
            <img alt="That's a lot of pixels" src="@/assets/72MP.jpeg" class="scroll-image">
          </div>
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
}
.bg-outter {
    width: 100%;
    padding: 5%;
}
.v-container {
    padding: 5% 15%;
    background-color: #000;
    color: #fff;
    width: 100% !important; 
    max-width: 100% !important; 
    min-height: 80vh; 
    display: flex;
    align-items: center;
    justify-content: center;
}
.text-content {
    margin-right: 50px;
}
.image-wrapper {
    margin-top: 3%;
    overflow: hidden;
    width: auto !important;
    position: relative;
    border-radius: 35px;
    object-fit: cover;
}
.scroll-image {
    width: 100%;
    height: auto !important;
}
@media screen and (max-width: 970px) {
    .m-align{
        text-align: left !important;
    }
    .tx3 {
        text-align: left !important;
}
  .text-content {
    margin-right: 0;
    margin-top: 20px;
    align-items: left;
  }
  .v-container {
    padding: 10% 5%;
    width: 100% !important;
    max-width: 100% !important;
  }
}
</style>
<script>

</script>
  