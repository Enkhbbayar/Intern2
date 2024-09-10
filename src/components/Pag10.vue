<template>
    <div class="grid-system">
      <div class="grid-item bgc-1 anitai"></div>
      <div class="grid-item bgc-2 anitai"></div>
      <div class="grid-item bgc-3 anitai"></div>
      <div class="grid-item bgc-4 anitai"></div>
      <div class="grid-item bgc-5 anitai"></div>
      <div class="grid-item bgc-6 anitai"></div>
      <!-- <div class="grid-item bgc-14"></div> -->
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const observerOptions = {
        threshold: 0.1,
      };
  
      const observerCallback = (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
              entry.target.classList.remove('hidden');
            }, index * 100);
          } else {
            setTimeout(() => {
              entry.target.classList.remove('visible');
              entry.target.classList.add('hidden');
            }, index * 100); 
          }
        });
      };
  
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      const targets = document.querySelectorAll('.anitai');
      targets.forEach(target => {
        observer.observe(target);
      });
    },
  };
  </script>
  
  <style scoped>
  .anitai {
    opacity: 0;
    transition: opacity 0.7s;
  }
  
  .anitai.visible {
    animation: fade-in 0.7s forwards;
  }
  .anitai.hidden {
    animation: fade-out 0.7s forwards;
  }
  
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    80% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
    }
  }
  
  .grid-system {
    background-color: rgb(0, 0, 0);
    padding: 5% 5%;
    height: 160vh;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      "bgc1 bgc1 bgc1 bgc2 bgc2"
      "bgc3 bgc3 bgc4 bgc4 bgc4"
      "bgc5 bgc5 bgc5 bgc6 bgc6";
    color: black;
  }
  
  .grid-item {
    padding: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
  }
  
  .bgc-1 { grid-area: bgc1; background-image: url('https://res.insta360.com/static/eba5e17b59e33f5c06bf88f4db68b111/scenes-01.jpg'); }
  .bgc-2 { grid-area: bgc2; background-image: url('https://res.insta360.com/static/ee5b8b6821b6c92fb37beed08c01a62e/scenes-02.jpg'); }
  .bgc-3 { grid-area: bgc3; background-image: url('https://res.insta360.com/static/d269ced7fea70f10a14f00904dfd6ba8/scenes-05.jpg'); }
  .bgc-4 { grid-area: bgc4; background-image: url('https://res.insta360.com/static/affcd4040356f354882e80b99ae7ea6c/scenes-06.jpg'); }
  .bgc-5 { grid-area: bgc5; background-image: url('https://res.insta360.com/static/64dc3bff81d68f757ba0becd1fc3c2c1/scenes-07.jpg'); }
  .bgc-6 { grid-area: bgc6; background-image: url('https://res.insta360.com/static/cc950346b9eea949dbe5fc59bcf4ff47/scenes-08.jpg'); }
  
  @media (max-width: 768px) {
    .grid-system {
      padding: 5% 5%;
      height: 160vh;
      grid-gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(6, auto);
      grid-template-areas:
        "bgc1 bgc1"
        "bgc2 bgc2"
        "bgc3 bgc3"
        "bgc4 bgc4"
        "bgc5 bgc5"
        "bgc6 bgc6";
      color: black;
    }
    .grid-item {
      padding: 20px;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 20px;
    }
  }
  </style>
  