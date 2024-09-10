<template>
  <Image></Image>
  <v-container class="container-style">
    <h4 class="text-uppercase text-blue-accent-2 font-weight-300">Танилцуулга</h4>
    <h1>Play Has No Limits</h1>
    <p>Хэт өндөр хурдны SSD-ээр аянга шиг хурдан ачаалах, мэдрэгчтэй хариу үйлдэл, дасан зохицох триггер болон 3D Аудиогоор илүү гүнзгий нэвтрэн орох, гайхалтай PlayStation® тоглоомуудын цоо шинэ үеийн туршлагыг мэдрээрэй.</p>
    <Button></Button>
  </v-container>
</template>


<style scoped>
.logo-align {
  display: block;
  margin-left: 0;
  opacity: 60%;
  height: 30%;
  width: 30%;
}
.container-style{
  border-left: 4px solid #448AFF;
  font-size: medium;
  /* background-color: red; */
  z-index: 2;
  position: absolute;
  max-width: 50%;
  color: white;
  /* padding-right: 40px; */
}
@media screen and (max-width: 900px) {
  .container-style {
    max-width: 100%;
    position: relative;
  }
}
</style>
  