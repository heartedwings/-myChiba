<template>
  <div>
    <div id="app" class="Page">
      <div class="Page-Text">
        <div class="title">
          <div>
            <h3>Famous spot of Chiba prefacture</h3>
            <img class="main-images" src="./img/main.jpeg" alt="メイン画像" />
          </div>
        </div>

        <div class="container">
          <div class="introduce">
            <div>
              <h4>- Introduce -</h4>
            </div>
            <div>千葉県の名所について紹介します</div>
          </div>
        </div>

        <div class="container">
          <div class="main1" rows="2">
            <h4>江戸川区花火大会</h4>
            <img class="main1-images" src="./img/hanabi3.jpg" alt="線香花火" />
            <a
              href="https://www.city.edogawa.tokyo.jp/e032/sports/kankomidokoro/hanabi/index.html"
              >江戸川区公式HP</a
            >
          </div>

          <div class="main2">
            <h4>東京ディズニーランド &amp; シー</h4>
            <img
              class="main1-images"
              src="./img/amusement-park.jpg"
              alt="遊園地"
            />
            <a href="https://www.tokyodisneyresort.jp/tds/">公式HP</a>
          </div>

          <div class="main3">
            <h4>ららぽーとTOKYO-BAY</h4>
            <img class="main1-images" src="./img/shop.jpg" alt="カフェの柱" />
            <a href="https://mitsui-shopping-park.com/lalaport/tokyo-bay/"
              >公式HP</a
            >
          </div>
        </div>

        <div class="container">
          <div class="main1-1">
            <div>
              <h3 class="main1-1-title">江戸川区花火大会</h3>
              <h4>
                <img class="fadein" src="./img/hanabi.jpg" alt="江戸川花火" />
              </h4>
              <div class="fig1-1">Fig. 1 江戸川花火大会の写真</div>
              <div class="main1-1-contents">本花火大会の特色<sup>1)</sup></div>
              <p class="main1-1-contents">・ 8つのテーマで構成されている</p>
              <p class="main1-1-contents">
                ・ 各テーマに合った異なるBGMと共に花火を打ち上げる。
              </p>
              <p class="main1-1-contents">
                ・遠隔操作から電気着火で打ち上げ、きめの細かい演出を行っている。
              </p>
            </div>

            <h4>
              <img
                class="fadein"
                src="./img/hanabi2.jpg"
                alt="江戸川花火 ~富士山~"
              />
            </h4>
            <div class="fig1-2">Fig. 2 仕掛け花火 (富士山)の写真</div>
            <table class="sankou">
              <tr>
                <td>参考文献 :</td>
              </tr>
              <tr>
                <td>
                  1) Holiday Inc.
                  "国内最大級の富士山仕掛け花火！「江戸川区花火大会」開催",
                  Holiday, 8月4日 (2018), https://haveagood.holiday/events/2022,
                  8月8日 (2021)
                </td>
              </tr>
            </table>

            <transition>
              <!-- <div v-show="visible" :class="{fadeIn:visible}"> -->
              <div id="head1" @click="inWord">
                <h1>ここがフェードイン・アウトするよ</h1>
              </div>
            </transition>

            <div id="rect2" style="width: 600px; border: 3px solid black"></div>

            <div class="toHide">
              <h1>ここにきたら動くよ</h1>
            </div>

            <div class="main">
              <div class="uk-dark uk-background-muted uk-padding">
                <dl class="uk-description-list">
                  <dt>画面サイズ</dt>
                  <dd id="scrsize"></dd>
                  <dt>ウィンドウサイズ</dt>
                  <dd id="winsize"></dd>
                </dl>

                <button class="uk-button uk-button-primary" @click="getSize()">
                  サイズを取得
                </button>
              </div>
            </div>

          </div>
        </div>

        <div class="container">
          <div class="main2-1">
            <div>
              <h3 class="main2-1-title">
                東京ディズニーランド | 東京ディズニーシー
              </h3>
              <img
                class="fig2-1"
                src="https://img.sirabee.com/wp-content/uploads/2020/04/sirabee20200530tokyodisneyland2-600x400.jpg"
                alt="ディズニーランド"
              />
            </div>

            <div class="youtube-movie">
              <youtube :video-id="videoId" @playing="playing" />
            </div>

            <div>
              <img
                class="fig2-2"
                src="https://cdn.pixabay.com/photo/2019/02/22/21/56/hotels-4014509_1280.jpg"
                alt="ディズニー ホテル"
              />
            </div>
          </div>
        </div>

        <div class="container">
          <div class="main3-1">
            <div>
              <h3 class="main3-1-title">
                ららぽーとTOKYO-BAY - 三井ショッピングパーク
              </h3>
              <img
                class="fadein"
                src="https://www.fashion-headline.com/api/image/width/750/images/migration/2014/06/80b5a9c14f94a0e1eb3a365ef7e3e9fb.jpg"
                alt="ららぽ"
              />
            </div>

            <div class="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6481.257750232755!2d139.98573793287434!3d35.68613918019315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187fda5f7485e7%3A0xd77eefa69fe0c1c7!2z44KJ44KJ44G944O844GoVE9LWU8tQkFZ!5e0!3m2!1sja!2sjp!4v1628754144563!5m2!1sja!2sjp"
                width="450"
                height="300"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="Page-Btn" @click="scrollTop">
        <a class="scroll">▲</a>
      </div>

      <div class="footer">
        <!-- <div class="container"> -->
        <div class="footer-left">
          <p>Condividi questo sito</p>
          <button>
            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              class="twitter-share-button"
              data-text="VOLARE"
              data-show-count="false"
              >Tweet</a
            >
          </button>
          <!-- <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"> -->
        </div>
        <div class="footer-right">&copy; 2021 VOLARE.</div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>



<style>
.head1 {
  width: 200px;
  height: 80px;
  background-color: #666;
}

.title {
  color: rgb(147, 146, 154);
  width: 70%;
  font-family: "Zapfino";
  text-align: center;
  background-color: white;
  /* box-shadow: 0 0 10px #716d62; */
  /* border-radius: 30px; */
  /* padding-top: 25px;
  padding-bottom: 25px; */
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  margin-bottom: 100px;
}

.main-images {
  width: 100%;
  margin-top: 20px;
}

.container {
  display: flex;
  padding: 5px;
  background-color: aliceblue;
}

.introduce {
  background-color: white;
  width: 100%;
  height: 200px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 10px #efeeee;
}

/* https://deecode.net/?p=811 */
.fadein {
  width: 78%;
  margin-left: 10%;
  /*透過度と表示位置を1秒かけて変化させる*/
  /* animation: fadein-anim 0.7s ease 0s 1 normal;
  animation: 対象 動作時間 進行の挙動 開始時間 回数 反転再生させるかの指定 */
  animation: fadein-anim 2s ease 0s 1 normal;
}

/* 名前の通り、fromで指定した状態からtoで指定した状態にアニメーションします。パーセント指定することもできますが今回は省略します。
/* opacityは不透明度です。0%すなわち透明から、100%透過なしに遷移します。 */
/* また、translatexで要素をX軸方向にずらすことができます。100px左から0pxすなわち元の高さに戻すという意味です。 */
@keyframes fadein-anim {
  from {
    /* 透過度の設定。0で表示されなくなる。 */
    opacity: 0;
    /*要素を左に100pxずらしたところに配置する*/
    transform: translateX(-50px);
  }
  to {
    /*透過度の設定。非表示から表示にする。*/
    opacity: 1;
    /*要素を100px左にしていたのを元の位置に戻す*/
    transform: translateX(0px);
  }
}

.toHide {
      /* 透過度の設定。0で表示されなくなる。 */
    opacity: 0;
    /*要素を左に100pxずらしたところに配置する*/
    transform: translateX(-50px);
}
.toShow {
    /*透過度の設定。非表示から表示にする。*/
  opacity: 1;
    /*要素を100px左にしていたのを元の位置に戻す*/
  transform: translateX(0px);
  animation: fadein-anim 5s ease 0s 1 normal;
}

.main1 {
  background-color: white;
  width: 100%;
  border-radius: 5px;
  margin: 5px;
  box-shadow: 0 0 10px #efeeee;
}
.main1-images {
  width: 100%;
}

.main1-1 {
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  margin: 5px;
  box-shadow: 0 0 10px #efeeee;
}

.main1-1-title {
  margin-left: 20px;
}

.main1-1-contents {
  margin-left: 20px;
}

.fig1-1 {
  text-align: center;
  margin-top: -20px;
  margin-bottom: 20px;
  font-size: 12px;
}

.fig1-2 {
  text-align: center;
  margin-top: -20px;
  margin-bottom: 20px;
  font-size: 12px;
}

.main2 {
  background-color: white;
  width: 100%;
  border-radius: 5px;
  margin: 5px;
  box-shadow: 0 0 10px #efeeee;
}

.main2-1 {
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  margin: 5px;
  box-shadow: 0 0 10px #efeeee;
}

.main2-1-title {
  margin-left: 20px;
}

.fig2-1 {
  width: 80%;
  text-align: center;
  margin-right: auto;
  margin-left: 10%;
  margin-top: 100px;
}

.fig2-2 {
  text-align: center;
  width: 40%;
  height: 60%;
  border-radius: 50%;
  margin-top: 15%;
  margin-left: 10%;
  margin-bottom: 100px;
}

.youtube-movie {
  width: 100px;
}

.main3 {
  background-color: white;
  width: 100%;
  border-radius: 5px;
  margin: 5px;
  box-shadow: 0 0 10px #efeeee;
}

.main3-1 {
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  margin: 5px;
  box-shadow: 0 0 10px #efeeee;
}

.main3-1-title {
  margin-left: 20px;
}

.google-map {
  text-align: center;
  margin-top: 10%;
  margin-bottom: 10%;
}

.footer {
  height: 100px;
  background-color: rgb(59, 71, 81);
  color: #d9ece4;
  padding-top: 20px;
}
.footer-left {
  float: left;
  margin-left: 20px;
}
.footer-right {
  float: right;
  padding-top: 50px;
  margin-right: 30px;
}

.Page-Btn {
  position: fixed;
  right: 14px;
  bottom: 14px;
  width: 30px;
  height: 30px;
  line-height: 32px;
  text-align: center;
  border-radius: 50%;
  background: #5bc8ac;
}
.Page-Btn-Icon {
  color: #fff;
  font-size: 16px;
}
.scroll {
  color: rgb(54, 90, 43);
}

.sankou {
  font-size: 10.5px;
  margin-top: 100px;
  margin-left: 10px;
}

  .main {
    margin: 0 auto;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
  }
</style>



<script>
import Vue from "vue";
import VueYoutube from "vue-youtube";

Vue.use(VueYoutube);

export default {
  data() {
    return {
      // https://youtu.be/vQGF0jA9jRk
      videoId: "vQGF0jA9jRk",
      visible: false,
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
    // window.addEventListener("scroll",this.rectTest2);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    scrollTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },

    playing() {
      console.log("再生中です");
    },

    //サイズを取得する
    getSize() {
      let scrennsize =
        "横 " + window.parent.screen.width +
        " 高さ " + window.parent.screen.height;
      let windoowsize =
        "横 " + window.innerWidth + " 高さ " + window.innerHeight;

      document.getElementById("scrsize").textContent = scrennsize;
      document.getElementById("winsize").textContent = windoowsize;
    },

    handleScroll() {
      // let position = document.getElementById("rect");
      // console.log(position);
      // let windowsHeight = window.parent.screen.height;
      // let width = position.offsetWidth;
      // let hight = position.offsetHeight;

      // スクロール量の取得
      // let scrollValue = window.pageYOffset;
      // console.log(scrollValue);

      // // // 要素の取得
      let scrollEle = this.$el.firstChild.firstChild.children[3].firstChild.children[6];   
      console.log(scrollEle);
      //要素の高さ
      let hight = scrollEle.clientHeight;
      console.log(hight);

      // // 取得した要素のtop値の取得 
      let scrollTop = scrollEle.getBoundingClientRect().top ;
      console.log(scrollTop);

      // let scrollTop2 = position.getBoundingClientRect().top ;
      // console.log(scrollTop2);


      // // 画面の高さを取得
      let windowHeight = window.innerHeight;

      // if(scrollTop <= windowHeight - (要素の縦の長さ)){ (フェードインさせるクラスを付与) }
      // getBoundingClientRectはターゲット要素をの位置を
      // ブラウザの表示領域の左上を(0, 0)として、そこからの相対位置で示される
      // window.innerHeightは表示している画面の高さ

      //要素が画面内に入り切った位置 = x(0, 0) とおくと
      // const x = windowHeight - hight
      // console.log( x );

      if ( scrollTop <= windowHeight - hight ) {
        scrollEle.classList.remove("toHide");
        scrollEle.classList.add("toShow");
      }

      // let xy2 = position.getBoundingClientRect();
      // let xx2 = xy2.left;
      // let yy2 = xy2.top;


      // if ( scrollTop <= windowHeight - (hight) ) {
      //   position.classList.remove("toHide");
      //   position.classList.add("toShow");
      // }

      // console.log();
      // console.log(yy2, xx2);
      // console.log(windowsHight);
      // console.log(width, hight);
      // console.log(window.pageYOffset);
      // console.log (window.scrollY)
    },

    // if (!this.visible) {
    //   this.visible = window.scrollY > 1650;
    // // }else if(window.scrollY < 1600 ){
    // //   this.visible = !this.visible;
    // }
    // // window.scrollTo(0, 3000);
    // console.log(window.pageYOffset);
    // // console.log (window.scrollY)
    // },

    /*座標の取得*/
    inWord() {
      /*id名head1を取得*/
      let ele = document.getElementById("head1");
      let bounds = ele.getBoundingClientRect();
      /*id名head1のx座標を取得*/
      const x = bounds.left;
      const posX = window.scrollX;
      /*id名head1のy座標を取得*/
      const y = bounds.top;
      var posY = window.scrollY;

      /*警告パネルにhead1のx座標とy座標を表示*/
      alert(
        `イベント発火したい要素のX座標 :『${x}』、Y座標 :『${y}』。またはスクロール位置は X座標 :『${posX}』、Y座標 :『${posY}』`
      );
    },

    rectTest2() {
      let position = document.getElementById("rect2");

      let xy2 = position.getBoundingClientRect();
      let xx2 = xy2.left;
      let yy2 = xy2.top;
      position.innerHTML = `xは${xx2}です。yは${yy2}です`;
    },
  },
};
</script>