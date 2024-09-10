<template>
    <div class="huudas-3">
        <div class="zurag">
            <h3>PS5-тай хязгааргүй тогло<label class="tseg" style="color: #448AFF;">.</label></h3>
            <h3 style="margin-top: 2%;">Шинэ ертөнц рүү тэмүүл<label class="tseg" style="color: #448AFF;">.</label></h3>
        </div>
        <div class="content">
            <div class="left-text">
                <p>Өндөр хурдны SSD-ээр аянга шиг хурдан хариу үйлдэл үзүүлж, дасан зохицох триггер болон 3D Аудио, шинэ үеийн гайхалтай PlayStation тоглоомуудын тусламжтайгаар илүү гүн гүнзгий тоглоомдоо уусах мэдрэмжийг мэдрээрэй.</p>
                <Button @click="navigateToLink"></Button>
            </div>
            <div class="object-zurag2">
                <img src="@/assets/ps5-slim.png" alt="PS5" class="object-zurag">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToLink() {
            window.location.href = 'https://www.boom.mn/p/playstation5-digital-edition-slim';
        }
    }
}
</script>


<style scoped>
.huudas-3 {
    background-color: #010118;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
}

.zurag {
    padding: 5% 0;
    margin-left: 2%;
    font-size: 55px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(100px);
    opacity: 0;
    transition: transform 1s, opacity 1s;
    line-height: 1em;
}

.zurag.visible {
    transform: translateY(0);
    opacity: 1;
}

.content {
    display: flex;
    width: 100%;
    padding: 0 2%;
    flex-grow: 1;
    justify-content: space-between;
    gap: 20px;
}

.left-text {
    font-size: 20px;
    color: white;
    flex-direction: column;
    text-align: justify;
    margin-top: 3%;
    font-weight: 500;
    line-height: 1.6em;
    transform: translateX(-100px);
    margin: 0 6%;
    opacity: 0;
    transition: transform 1s, opacity 1s;
    width: 60%;
}

.left-text p {
    padding-bottom: 10%;
}

.left-text.visible {
    transform: translateX(0);
    opacity: 1;
}

.object-zurag2 {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.object-zurag {
    height: auto;
    /* width: 100%; */
    max-width: 500px;
    object-fit: cover;
    filter: drop-shadow(3px 1px 7px #1307ff);
    transition: transform 1s, opacity 1s;
}

@media screen and (max-width: 926px) {
    .content {
        flex-direction: column;
        align-items: center;
    }
    .huudas-3 {
        width: 100%;
        padding: 30px;
    }
    .left-text {
        font-size: 2vw;
        width: 100%;
    }
    .left-text p {
        font-size: 20px;
    }
    .left-text {
        font-size: 18px
    }
    .object-zurag {
        width: 100%;
    }
    .zurag {
    padding:0;
    font-size: 32px;
    line-height: 1em;
    font-weight: 400;
}
}

@media screen and (max-width: 460px) {
    .huudas-3 {
        min-height: 90vh;
    }
    .zurag {
        font-size: 5.3vw;
        padding-bottom: 5%;
        display: flex;
        align-items: center;
        line-height: 30px;
        text-align: left;
    }
    .content {
        flex-direction: column;
        align-items: center;
    }
    .left-text {
        text-align: justify;
        max-width: 100%;
    }
    .left-text p {
        font-size: 20px;
    }
    .object-zurag {
        width: 100%;
        margin-top: 20px;
    }
    .huudas-3 {
        width: 100%;
        min-height: 100vh;
        padding: 7%;
    }
}
</style>

