<template>
  <Pag1></Pag1>
  <Pag2a></Pag2a>
  <Pag3></Pag3>
  <Pag3a></Pag3a>
  <Pag3b></Pag3b>
  <Pag4></Pag4>
  <Pag4a></Pag4a>
  <Pag5></Pag5>
  <Pag6></Pag6>
  <Pag7a></Pag7a>
  <Pag7b></Pag7b>
  <Pag7c></Pag7c>
  <Pag7d></Pag7d>
  <Pag7e></Pag7e>
  <Pag8></Pag8>
  <Pag8a></Pag8a>
  <Pag8b></Pag8b>
  <Pag8c></Pag8c>
  <Pag8d></Pag8d>
  <Pag8e></Pag8e>
  <Pag9></Pag9>
  <Pag9a></Pag9a>
  <Pag9b></Pag9b>
  <!-- <Pag10></Pag10> -->
  <Pag10before></Pag10before>
  <Pag2></Pag2>
  <PComp></PComp>
  <Pag10></Pag10>
  <!-- <Test></Test> -->
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
html,
body {
  height: 100%;
}
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
@media (max-width: 960px) {
  .v-container {
    padding: 0;
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
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.remove("hidden");
        } else {
          entry.target.classList.remove("visible");
          entry.target.classList.add("hidden");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const targets = document.querySelectorAll(".anitai");
    targets.forEach((target) => {
      observer.observe(target);
    });
  },
};
</script>
