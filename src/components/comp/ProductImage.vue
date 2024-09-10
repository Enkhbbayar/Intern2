<template>
    <div class="image-container">
      <v-img
        height="80vh"
        width="100%"
        src="@/assets/ps5-temp.png"
      />
    </div>
  </template>
  
  <style scoped>
  .image-container {
    width: calc(90% - 20px);
    height: calc(60vh - 30px);
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    margin: 5% 5% 0 70px;
    filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.155));
  }
  @media screen and (max-width: 976px) {
  .image-container {
    margin: 0 20px;

  }
}
  </style>
  