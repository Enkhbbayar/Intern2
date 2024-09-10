<template>
  <v-container class="Swiper-cart">
    <v-row>
      <v-col cols="12">
        <v-carousel v-model="currentSlide" 
        :continuous="false"
        :show-arrows="false"
        hide-delimiters >
          <v-carousel-item v-for="(item, index) in items" :key="index">
            <v-row>
              <v-col cols="12" md="6" class="image-class">
                <v-img :src="item.image" :alt="'Image ' + (index + 1)" class="image" />
              </v-col>
              <v-col cols="12" md="6">
                <p class="product-title">{{ item.name }}</p>
                <p class="product-detail">{{ item.detail }}</p>
                <div class="bottom-part">
                  <div v-if="item.isOnSale" class="prices">
                    <div class="product-price original-price">{{ item.originalPrice }}₮</div>
                    <div class="product-price sale-price">{{ item.price }}₮</div>
                  </div>
                  <div v-else class="product-price">{{ item.price }}₮</div>
                  <v-btn 
    block 
    rounded 
    color="#448AFF" 
    class="button" 
    @click="goToProductPage(item.url)">
    <v-icon class="large-icon" slot="append">
        mdi-cart-plus
    </v-icon>
    <p class="button-text" style="font-weight: 700; text-transform: uppercase; font-size: 20px;">
        худалдаж авах
    </p>
</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
        <div class="custom-pagination">
          <span v-for="(item, index) in items" :key="'pagination-' + index" @click="currentSlide = index" :class="{'active': currentSlide === index}" icon>
            <v-icon>mdi-circle</v-icon>
          </span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      currentSlide: 0, // Одоогийн слайдны индекс
      items: [], // Бүтээгдэхүүний мэдээллийг хадгалах массив
    };
  },
  mounted() {
    this.load(); // Компонентыг ачааллах үед мэдээллийг авах функцыг дуудна
  },
  methods: {
    async load() {
      try {
        const productUrls = {
          'playstation-digital-bundle': 'https://www.boom.mn/p/playstation-digital-bundle',
          'playstation-5-controller': 'https://www.boom.mn/p/playstation-5-controller',
          'playstation5-digital-edition-slim': 'https://www.boom.mn/p/playstation-digital-bundle',
        };

        const productIds = Object.keys(productUrls);

        // Бүх бүтээгдэхүүний мэдээллийг нэгэн зэрэг авах
        const requests = productIds.map(id =>
          axios.post(`/v1/product/${id}`, { language: 'mn' })
        );

        const responses = await Promise.all(requests); // Бүх хүсэлтийг хүлээж авна

        const currentDate = new Date(); // Одоогийн огноо

        // Бүх бүтээгдэхүүний мэдээллийг боловсруулах
        this.items = responses.map((response, index) => {
          const product = response.data;
          const sale = product.variants[0].variantSales.find(
            sale =>
              new Date(sale.startDate) <= currentDate &&
              new Date(sale.expireDate) >= currentDate
          );

          let price = product.price; // Үндсэн үнэ
          let isOnSale = false; // Хямдрал байгаа эсэх
          let originalPrice = null; // Хямдралын өмнөх үнэ

          if (sale) {
            price = sale.ammount; // Хямдралын үнэ
            isOnSale = true;
            originalPrice = product.price; // Хямдралын өмнөх үнэ
          }

          // 'translates' массив дотор 'description' талбар байгаа эсэхийг шалгана
          const description = product.translates && product.translates.length > 0 
            ? product.translates[0].description 
            : 'Тайлбар алга байна'; // Массив хоосон эсвэл байхгүй бол алдааны мессеж

          return {
            image: product.thumbnails[0], 
            name: product.name, 
            detail: description,
            price: price, // Хямдралын эсвэл үндсэн үнэ
            isOnSale: isOnSale, // Хямдрал байгаа эсэх
            originalPrice: originalPrice, // Хямдралын өмнөх үнэ
            url: productUrls[productIds[index]], // Бүтээгдэхүүний URL
          };
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    goToProductPage(url) {
      window.location.href = url;
    }
  },
};
</script>
<style scoped>
.Swiper-cart {
  margin-top: 5%;
  background: red;
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 20px;
  padding: 20px;
  max-height: 80%;
}
.large-icon {
    font-size: 32px;
}
.v-carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-title {
  text-transform: uppercase;
  font-weight: 500;
  color: #2962FF;
  margin-bottom: 20px;
  font-size: 26px;
}

.product-detail {
  font-size: calc(22px - 2px);
  overflow: auto;
  height: 40%;
  color: #000;
  font-weight: 500;
}

.prices {
  display: flex;
}

.product-price {
  font-weight: 600;
  font-size: calc(28px - 2px);
  margin-bottom: 10px;
}

.original-price {
  color: #5a5a5a9d;
  text-decoration: line-through;
}

.sale-price {
  color: #FF1744;
  margin-left: 5%;
}

.button {
  padding: 30px 0;
}

.button-text {
  padding-right: 20px;
}

.bottom-part {
  padding-top: 10%;
}

.image-class {
  display: flex;
  align-items: center;
}

.image {
  width: calc(100% - 50px);
  height: calc(80vh - 50px);
  max-height: 400px;
  object-fit: contain;
}

.custom-pagination {
  display: flex;
  justify-content: center;
  color: #5c88ff;
}

.custom-pagination span {
  cursor: pointer;
  margin: 0 5px;
}

.custom-pagination .active .v-icon {
  color: #2962FF;
}

.custom-pagination .v-icon {
  color: #5a5a5a;
}

.custom-pagination .v-icon::before {
  content: "";
  display: inline-block;
  width: 30px;
  height: 4px;
  background-color: currentColor;
  border-radius: 2px;
}

@media screen and (max-width: 916px) {
  .image {
    max-height: 150px;
  }
  .bottom-part {
    padding-top: 0;
  }
  .product-detail {
  font-size: calc(22px - 2px);
  height: 26%;
}
.Swiper-cart {
  margin-top: 15%;
  /* padding: 20px; */
  max-height: 70%;
  margin: 10% 5%;
}

}

@media screen and (max-width: 600px) {
  .Swiper-cart {
    font-size: calc(18px - 2px);
  }
  .product-title {
    font-size: 1.2em;
  }
  .product-price {
    font-size: 1.5em;
  }
  .bottom-part {
    padding-top: 0%;
  }
  .image {
    max-height: 150px;
  }
  .product-detail {
    height: 20%;
  }
}
@media screen and (max-width: 460px) {
  .Swiper-cart {
  margin-top:0;
  /* padding-top: 200px; */
  background: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 20px;
  padding: 20px;
  min-height: 100%;
  /* max-height: 100%; */
}
}
</style>

