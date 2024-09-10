<template>
    <div class="hero">
      <video autoplay loop muted plays-inline>
        <source src="https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/hardware/ps5/channel-specific-content/pdc/2021/overview/akqa/video//ps5-games-intro-loop.mp4#t=0.04" type="video/mp4">
      </video>
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title" ref="heroTitle">PS5-тай Шинэ ертөнц рүү тэмүүл<label class="tseg" style="color: #448AFF;">.</label></h1>
          <p class="hero-subtitle" ref="heroSubtitle">Мэдрэмжтэй чичиргээ нь таны тоглоомын сонголтод хариу үйлдэл үзүүлж, PS5 тоглоомуудад хүрээлэн буй орчны хүчин зүйлсийг дуурайдаг.</p>
        </div>
        <div class="play-button">
          <a href="#" class="playBtn"></a>
        </div>
      </div>
      <div class="logo-overlay">
        <img src="@/assets/psruu1.png" class="logo">
      </div>
    </div>
  </template>
  
  <style scoped>
  .hero {
    position: relative;
    width: 100%;
    height: 100vh; /* Make sure the hero section covers the full viewport height */
    background: url('@/assets/psruu1.png') center center no-repeat;
    background-size: cover; /* Ensure the background image covers the entire section */
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }
  
  .hero-content {
    text-align: center;
    z-index: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .hero-title {
    font-size: 65px;
    text-transform: uppercase;
  }
  
  .hero-subtitle {
    font-size: 24px;
    max-width: 70%;
  }
  
  .hero-title,
  .hero-subtitle {
    opacity: 0;
    transition: opacity 1s;
  }
  
  .hero-title.visible,
  .hero-subtitle.visible {
    animation: slide-in-up 1s forwards;
  }
  
  .hero-title.hidden,
  .hero-subtitle.hidden {
    animation: slide-out-down 1s forwards;
  }
  
  @keyframes slide-in-up {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes slide-out-down {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(100%);
      opacity: 0;
    }
  }
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the video covers the entire section */
  }
  
  .play-button {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  
  .playBtn {
    width: 80px;
    height: 80px;
    background-color: transparent;
    border-radius: 100%;
    border: #fff solid 2px;
    position: relative;
    animation: shadowPulse 1s infinite linear;
  }
  
  .playBtn::before {
    position: absolute;
    content: '';
    border-top: transparent 15px solid;
    border-bottom: transparent 15px solid;
    border-left: #fff 25px solid;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
  }
  
  .playBtn::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: #fff solid 2px;
    border-radius: 100%;
    animation: ringPulse 1s infinite linear;
  }
  
  @keyframes ringPulse {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    10% {
      opacity: 1;
    }
    80%, 100% {
      opacity: 0;
      transform: scale(2);
    }
  }
  
  @keyframes shadowPulse {
    0% {
      box-shadow: 0 0 8px 6px transparent,
                  0 0 0 0 transparent,
                  0 0 0 0 transparent;
    }
    10% {
      box-shadow: 0 0 8px 6px rgba(255, 255, 255, 0.416),
                  0 0 12px 10px transparent,
                  0 0 12px 5px rgba(255, 255, 255, 0.156);
    }
    80%, 100% {
      box-shadow: 0 0 8px 6px transparent,
                  0 0 0 40px transparent,
                  0 0 0 40px transparent;
    }
  }
  
  .logo-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    pointer-events: none; /* Ensure it doesn't interfere with other interactions */
  }
  
  .logo {
    width: 100%;
    height: 100%; 
    z-index: -2;/* Adjust size as needed */
  }
  
  @media screen and (max-width: 900px) {
    .hero-title{
      font-size: 35px;
    }
    .hero-content {
      font-size: .6em;
    }
    .hero-subtitle {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 460px) {
    .hero-content {
    display: flex;
    text-align: left;
    max-width: 80%;
    
  }
  .hero-subtitle {
    font-size: 30px;
    max-width: 100%;
    text-align: justify;
  }
    .hero-title{
      font-size: 25px;
      text-align: left;
    }
    .hero-content {
      font-size: .3em;
      text-align: left;
    }
    .hero-subtitle {
      font-size: 20px;
    }
  }
  </style>
  
  <script>
  export default {
    mounted() {
      const observerOptions = {
        threshold: 0.1,
      };
  
      const observerCallback = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
          } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
          }
        });
      };
  
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      const targets = document.querySelectorAll('.hero-title, .hero-subtitle');
      targets.forEach(target => {
        observer.observe(target);
      });
    },
  };
  </script>
  