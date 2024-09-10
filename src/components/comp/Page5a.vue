<template>
    <section class="huudas-3">
      <div>
        <h2 class="zurag">Шинэ ертөнц рүү тэмүүл<label class="tseg" style="color: #448AFF; ">.</label></h2>
      </div>
      <div class="content">
        <div class="left-text">
          <p>Та суурилуулсан микрофоныг ашиглан бусадтай хялбархан харилцах боломжтой ба тоглоомондоо анхаарлаа төвлөрүүлэх шаардлагатай үед тусгай дууг хаах товчлуураар үүнийг унтрааж болно.</p>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .huudas-3 {
      background-image: url(@/assets/controller2.webp);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      height: 130vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-content: center; */
      position: relative;
  }
  
  .zurag {
      font-size: 65px;
      color: white;
      /* display: flex; */
      /* flex-direction: column; */
      /* align-items: center; */
      transform: translateY(100px);
      opacity: 0;
      padding-top: 4%;
      transition: transform 1s, opacity 1s;
      line-height: 1.2em; /* Adjust line height for better spacing */
  }
  
  .zurag.visible {
      transform: translateY(0);
      opacity: 1;
  }
  
  .content {
      display: flex;
      width: 80%;
      justify-content: center;
      position: absolute; /* Absolute positioning to place it within the background section */
      bottom: 10%; /* Adjust as needed */
  }
  
  .left-text {
      font-size: 18px;
      color: white;
      text-align: center;
      font-weight: 500;
      line-height: 1.5em; /* Adjust line height for better readability */
      transform: translateX(-100px);
      opacity: 0;
      transition: transform 1s, opacity 1s;
  }
  
  .left-text.visible {
      transform: translateX(0);
      opacity: 1;
  }
  @media screen and (max-width: 916px) {
    .zurag {
      font-size: 35px;
      padding-top: 8%;
      line-height: 1.2em;
  }
  }
  @media screen and (max-width: 460px) {
    .zurag {
      font-size: 32px;
      padding-top: 8%;
      line-height: 1.2em;
      text-align: left;
      /* max-width: 80%; */
      margin: 0 10%;
  }
  .left-text {
      font-size: 18px;
      text-align: left;
  }
  .left-text p{
       text-align: justify; 
    
}
  }
  </style>
  