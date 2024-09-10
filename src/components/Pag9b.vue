<template>
    <div class="hero d-block">
        <div class="hero-overlay">
            <div class="hero-content anitai">
                <div class="text-content">
                    <h1 class="tx1">APP BACKGROUND DOWNLOAD</h1>
                    <h2 class="tx2">TRANSFER YOUR FOOTAGE ON THE GO</h2>
                    <p class="subtitle-1 tx3">
                        With X4, start any transfer and get back to what you were doing. The Insta360 app will send you a simple push when your files arrive. Easy!
                    </p>
                </div>
            </div>
        </div>
        <div class="logo-overlay">
            <div class="gra-bg"></div>
            <video class="media-block__video lozad loop lazy-loaded d-block" id="video-1" autobuffer="true" muted="true" autoplay="true" playsinline="true" webkit-playsinline="true" data-loaded="true">
                <source type="video/mp4" data-src="" src="https://media.insta360.com/static/bb2c33fb81dedf584236dcb2ae7e2874/Background%20Download_EN_PC.mp4">
            </video>
        </div>
    </div>
</template>

<style scoped>
.gra-bg {
    background: linear-gradient(to bottom, #000000, #00000024); /* Use the same gradient as the text */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10; /* Ensure it is above the video but below the text */
    /* opacity: 0.9;  */
}
.text-content {
    margin-top: -25%;
    position: relative; /* Ensure it is above the gradient */
    z-index: 20; /* Ensure it is above the gradient */
    /* text-align: center; */
}
.tx1 {
    font-size: 16px;
    font-style: italic;
    background: linear-gradient(to right, #66adff, #ffffff);
    -webkit-background-clip: text;
    font-weight: 800;
    -webkit-text-fill-color: transparent;
}
.tx2 {
    font-size: 40px;
    font-style: italic;
    font-weight: 800;
}
.tx3 {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
    text-align: center;
}
.hero {
    position: relative;
    width: 100%;
    height: 100vh;
    background-size: cover;
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
    object-fit: cover;
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
    pointer-events: none;
}
.logo {
    width: 100%;
    height: 100%;
    z-index: -2;
}
@media screen and (max-width: 900px) {
    .hero-title {
        font-size: 35px;
    }
    .text-content {
    margin-top: -25%;
    position: relative;
    max-width: 100%;
    z-index: 20;
    text-align: left;
}
.tx3 {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
    text-align: left;
    text-align: justify !important;
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
    .hero-title {
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
