<template>
  <div class="grid-system">
    <div class="grid-item bgc-1 anitai"></div>
    <div class="grid-item bgc-2 anitai"></div>
    <div class="grid-item bgc-3 anitai"></div>
    <div class="grid-item bgc-4 anitai"></div>
    <div class="grid-item bgc-5 anitai"></div>
    <div class="grid-item bgc-6 anitai"></div>
    <div class="grid-item bgc-7 anitai"></div>
    <div class="grid-item bgc-8 anitai"></div>
    <div class="grid-item bgc-9 anitai"></div>
    <div class="grid-item bgc-10 anitai"></div>
    <div class="grid-item bgc-11 anitai"></div>
    <div class="grid-item bgc-12 anitai"></div>
    <div class="grid-item bgc-13 anitai"></div>
    <!-- <div class="grid-item bgc-14"></div> -->
  </div>
</template>

<script>
export default {
  name: 'Insta360Layout',
}
</script>

<style scoped>
.grid-system {
  background-color: rgb(0, 0, 0);
  /* padding: 0 115px; */
  padding: 0 5%;
  height: 120vh;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "bgc1 bgc1 bgc2 bgc2 bgc3 bgc3"
    "bgc4 bgc4 bgc2 bgc2 bgc5 bgc5"
    "bgc6 bgc6 bgc2 bgc2 bgc7 bgc8"
    "bgc9 bgc10 bgc11 bgc12 bgc13 bgc13";
  color: black;
}

.grid-item {
  padding: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
}

.bgc-1 { grid-area: bgc1; background-image: url('@/assets/img-1.png'); }
.bgc-2 { grid-area: bgc2; background-image: url('@/assets/img-2.png'); }
.bgc-3 { grid-area: bgc3; background-image: url('@/assets/img-3.png'); }
.bgc-4 { grid-area: bgc4; background-image: url('@/assets/img-4.png'); }
.bgc-5 { grid-area: bgc5; background-image: url('@/assets/img-5.png'); }
.bgc-6 { grid-area: bgc6; background-image: url('@/assets/img-6.png'); }
.bgc-7 { grid-area: bgc7; background-image: url('@/assets/img-7.png'); }
.bgc-8 { grid-area: bgc8; background-image: url('@/assets/img-8.png'); }
.bgc-9 { grid-area: bgc9; background-image: url('@/assets/img-9.png'); }
.bgc-10 { grid-area: bgc10; background-image: url('@/assets/img-10.png'); }
.bgc-11 { grid-area: bgc11; background-image: url('@/assets/img-11.png');}
.bgc-12 { grid-area: bgc12; background-image: url('@/assets/img-12.png');}
.bgc-13 { grid-area: bgc13; background-image: url('@/assets/img-13.png');}

@media (max-width: 968px) {
  .grid-system {
      /* padding: 4%; */
      padding: 0 5%;
  height: 100%;
  display: grid;
  grid-gap: 1rem;
  /* display: block; */
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "bgc1 bgc1"
      "bgc4 bgc4"
      "bgc6 bgc6"
      "bgc9 bgc10"
      "bgc2 bgc2"
      "bgc2 bgc2"
      "bgc11 bgc12"
      "bgc3 bgc3"
      "bgc5 bgc5"
      "bgc7 bgc8"
      "bgc13 bgc13";
  }
.grid-item {
  padding: 30%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px
}
/* .grid-system {
  padding: 0;
} */
}
</style>
