<template>
    <div class="product-container">
      <v-row>
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="6"
          lg="3"
          class="product-card"
        >
          <v-card class="cardc">
            <div class="header-section">
              <div class="discount-percentage">
                -{{ calculateDiscount(item.originalPrice, item.price) }}%
              </div>
              <img src="@/assets/ps5-logo-mini.png" class="mini-logo" />
            </div>
            <v-img
              :src="CpictSmall(item.image)"
              :alt="'Image ' + (index + 1)"
              class="product-image"
            ></v-img>
            <div class="product-title">{{ item.name }}</div>
            <div v-if="item.isOnSale" class="prices">
              <div class="product-price sale-price">{{ formatPrice(item.price) }}₮</div>
              <div class="product-price original-price">{{ formatPrice(item.originalPrice) }}₮</div>
            </div>
            <div v-else class="product-price">{{ formatPrice(item.price) }}₮</div>
            <v-card-actions class="product-actions">
              <v-row class="button-row">
                <v-col class="pr-2" cols="9">
                  <v-btn 
                    block 
                    rounded 
                    color="#ec2b45" 
                    class="button red-button"
                    @click="goToProductPage(item.url)"
                  >
                    <v-icon class="large-icon">
                      mdi-cart-plus
                    </v-icon>
                  </v-btn>
                </v-col>
                <v-col class="pl-0" cols="3">
                  <v-btn 
                    block 
                    rounded 
                    color="#ec2b45" 
                    class="button outlined-button"
                    @click="goToProductPage(item.url)"
                  >
                    <v-icon class="large-icon" style="color: black;">
                      mdi-heart-outline
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <style scoped>
    .mini-logo {
      width: 20px;
      height: 20px;
    }
    .header-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 3%;
    }
    .large-icon {
      color: white;
      width: 50px;
      height: 50px;
    }
    .product-container {
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      padding: 6%;
      background-color: #010118;
    }
    .cardc {
      box-shadow: 1px solid black;
      border-radius: 15px;
      background-color: #ffffff;
      height: 100%;
    }
    .cardc:hover{
      border: 2px solid #316cf5 ;
    }
    .product-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .product-image {
      width: 100%;
      height: 200px;
      object-fit: contain;
    }
    .product-title {
      text-transform: capitalize;
      font-weight: 500;
      color: black;
      margin-bottom: 10px;
      font-size: 16px;
      padding-left: 3.2%;
      width: 96%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .product-detail {
      font-size: 16px;
      overflow: auto;
      height: 80px;
      color: #000;
      font-weight: 500;
    }
    .prices {
      display: flex;
      gap: 4px;
      align-items: center;
      justify-content: left;
      margin-bottom: 10px;
    }
    .product-price {
      font-size: 20px;
      font-weight: 800;
    }
    .original-price {
      color: #5a5a5a9d;
      text-decoration: line-through;
      font-size: 14px;
      font-weight: 600;
    }
    .sale-price {
      color: #316cf5;
      margin-left: 3.2%;
      font-size: 16px;
    }
    .discount-percentage {
      color: white;
      padding: 2px 12px;
      font-weight: 600;
      font-size: 13px;
      background-color: #316cf5;
      border-radius: 12px;
      width: fit-content; /* Adjusted */
      display: flex;
      align-items: center;
      margin-right: 10px; /* Added margin to separate from the image */
    }
    .button {
      padding: 10px 0;
    }
    .red-button {
      background-color: black;
      border-radius: 10px;
    }
    .outlined-button {
      background-color: #f2f2f2;
      color: black !important;
      border-radius: 10px;
    }
    .button-row {
      display: flex;
      align-items: center;
      width: 100%;
    }
    .product-actions {
      display: flex;
    }
    @media screen and (max-width: 600px) {
      .product-container {
        font-size: 14px;
      }
      .product-title {
        font-size: 16px;
        padding-left: 6%;
      }
      .product-price {
        font-size: 18px;
      }
      .discount-percentage {
        font-size: 12px;
      }
      .original-price {
        font-size: 12px;
        padding-left: 6%;
        order: 1; /* Make the original price appear first */
        width: 100%; /* Make sure it takes full width */
        text-align: left; /* Align text to the left */
      }
      .sale-price {
        font-size: 20px;
        order: 2; /* Make the sale price appear second */
      }
      .prices {
        flex-direction: column; /* Stack the prices vertically */
        align-items: flex-start; /* Align items to the start */
        gap: 0;
      }
      .outlined-button {
        background-color: #f2f2f2;
        color: black !important;
        border-radius: 10px;
      }
    }
  </style>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
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
            'playstation5-digital-edition-slim' : 'https://www.boom.mn/p/playstation5-digital-edition-slim',
            'playstation-bundle' : 'https://www.boom.mn/p/playstation-bundle',
            'playstation-digital-bundle' : 'https://www.boom.mn/p/playstation-digital-bundle',
            'playstation-5-slim-disc-3-game-bundle' : 'https://www.boom.mn/p/playstation-5-slim-disc-3-game-bundle'
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
      },
      calculateDiscount(originalPrice, salePrice) {
        if (!originalPrice || !salePrice) return 0;
        return ((originalPrice - salePrice) / originalPrice * 100).toFixed(0);
      },
      formatPrice(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      CpictSmall (val) {
        return val
          ? val.includes(
            "ecommerce-boom.s3.ap-east-1.amazonaws.com" && "productImages"
          )
            ? val + "-small"
            : val
          : "https://imgur.com/WJCLQkB.png";
      },
    },
  };
  </script>
  