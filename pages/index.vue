<template>
  <div>
    <!-- hero -->
    <section class="hero">
      <div class="container">
        <div class="hero-left">
          <!--        title        -->
          <h1 class="hero-title">
            Discover <br />
            digital art & Collect NFTs
          </h1>

          <!--          desc         -->
          <p class="hero-desc">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>

          <!--          btn          -->
          <button class="hero-btn">
            <img src="~/assets/images/icons/RocketLaunch.svg" alt="btn icon" />
            <span>Get Started</span>
          </button>

          <!-- numbers -->
          <ul class="ranges">
            <li>
              <h3>240k+</h3>
              <p>Total Sale</p>
            </li>
            <li>
              <h3>100k+</h3>
              <p>Auctions</p>
            </li>
            <li>
              <h3>240k+</h3>
              <p>Artists</p>
            </li>
          </ul>
        </div>

        <div class="hero-right">
          <div class="hero-img">
            <img
              src="~/assets/images/site_images/ImagePlaceholder.png"
              alt="hero img"
            />
          </div>
          <div class="hero-right-info">
            <h2 class="hero-right-subtitle">Space Walking</h2>
            <div class="user-wrap">
              <img
                src="~/assets/images/user_avatar_images/Avatar_Placeholder.png"
                alt="user img"
              />
              <h3>Animakid</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trending Collection -->
    <section class="collection">
      <div class="container">
        <h2 class="collection-title">Trending Collection</h2>
        <p class="collection-subtitle">
          Checkout our weekly updated trending collection.
        </p>

        <div class="collection-wrap">
          <div class="collection-user" v-for="i in 3" :key="i">
            <div class="collection-user-images">
              <div class="head-img">
                <img
                  src="~/assets/images/collection_images/item1_head.png"
                  alt="head img"
                />
              </div>
              <ul class="images">
                <li>
                  <img
                    src="~/assets/images/collection_images/item1_1.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="~/assets/images/collection_images/item1_2.png"
                    alt=""
                  />
                </li>
                <li><p>1025+</p></li>
              </ul>
            </div>
            <div class="collection-user-info">
              <h2 class="collection-user-name">DSGN Animals</h2>
              <div class="collection-user-avatar">
                <img
                  src="~/assets/images/collection_images/item1_user.png"
                  alt="user avatar"
                />
                <span>MrFox</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Top creators -->
    <section class="topCreators">
      <div class="container">
        <h2 class="topCreators-title">Top creators</h2>
        <div class="subWrap">
          <p class="topCreators-subtitle">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
          <NuxtLink to="/" class="topCreators-btn">
            <img src="~/assets/images/icons/RocketLaunchPr.svg" alt="icon" />
            <span>View Rankings</span>
          </NuxtLink>
        </div>

        <ul class="topCreators-wrap">
          <li class="topCreators-user" v-for="i in 12" :key="i">
            <span class="count">5</span>
            <div class="avatar">
              <img
                src="~/assets/images/topCreators_images/avatar1.png"
                alt="avatar images"
              />
            </div>
            <div class="info">
              <h2 class="name">DigiLab</h2>
              <p>Total Sales: <span>34.53 ETH</span></p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Browse Categories -->
    <section class="browseCategories">
      <div class="container">
        <h2 class="browseCategories-title">Browse Categories</h2>

        <ul class="browseCategories-wrap">
          <li class="browseCategories-item" v-for="i in 8" :key="i">
            <div class="browseCategories-item-images">
              <img
                src="~/assets/images/browseCategories_images/itemBg1.png"
                alt=""
                class="bgImg"
              />
              <img
                src="assets/images/browseCategories_images/itemSvg1.svg"
                alt=""
                class="svgImg"
              />
            </div>
            <h2 class="browseCategories-item-title">Art</h2>
          </li>
        </ul>
      </div>
    </section>

    <!-- Discover More NFTs -->
    <section class="discoverMore">
      <div class="container">
        <h2 class="discoverMore-title">Discover More NFTs</h2>

        <div class="subWrap">
          <p class="discoverMore-subtitle">Explore new trending NFTs</p>
          <NuxtLink to="/" class="discoverMore-btn">
            <img src="~/assets/images/icons/Eye.svg" alt="icon" />
            <span>See All</span>
          </NuxtLink>
        </div>

        <ul class="discoverMore-wrap">
          <li class="discoverMore-item" v-for="i in 3" :key="i">
            <div class="discoverMore-item-img">
              <img
                src="~/assets/images/discoverMore_images/item_img_1.png"
                alt="images"
              />
            </div>

            <div class="discoverMore-item-info">
              <!-- top -->
              <div class="info-top">
                <h2 class="name">Distant Galaxy</h2>
                <!-- avatar img and name -->
                <div class="avatar-wrap">
                  <img
                    src="~/assets/images/discoverMore_images/item_avatar_1.png"
                    alt="avatar img"
                  />
                  <p>MoonDancer</p>
                </div>
              </div>

              <!-- bottom -->
              <div class="info-bottom">
                <div class="left">
                  <p>Price</p>
                  <h3>1.63 ETH</h3>
                </div>
                <div class="right">
                  <p>Highest Bid</p>
                  <h3>0.33 wETH</h3>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Magic Mashrooms -->
    <section class="magicMashroom">
      <div class="container">
        <div class="magicMashroom-wrap">
          <!-- LEFT -->
          <div class="magicMashroom-wrap-left">
            <div class="comment">
              <img
                src="~/assets/images/magicMashroom_images/Avatar.png"
                alt="avatar ima"
              />
              <p>Shroomie</p>
            </div>

            <h2 class="magicMashroom-title">Magic Mashrooms</h2>

            <NuxtLink to="/" class="magicMashroom-btn">
              <img src="~/assets/images/icons/Eye.svg" alt="icon" />
              <span>See NFT</span>
            </NuxtLink>
          </div>

          <!-- RIGHT action time's -->
          <div class="magicMashroom-wrap-right action-time">
            <h3 class="action-time-title">Auction ends in:</h3>
            <ul class="action-times">
              <!-- hours -->
              <li>
                <h2>9</h2>
                <p>Hours</p>
              </li>
              <!-- : -->
              <li>
                <h2>:</h2>
              </li>
              <!-- minute -->
              <li>
                <h2>59</h2>
                <p>Minutes</p>
              </li>
              <!-- : -->
              <li>
                <h2>:</h2>
              </li>
              <!-- seconds -->
              <li>
                <h2>59</h2>
                <p>Seconds</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="works">
      <div class="container">
        <h2 class="works-title">How it works</h2>
        <p class="works-subtitle">Find out how to get started</p>

        <!-- works wrapper -->
        <ul class="works-wrap">
          <li class="works-item" v-for="i in 3" :key="i">
            <div class="works-item-img">
              <img
                src="~/assets/images/works_images/itemIcon1.png"
                alt="images"
              />
            </div>
            <div class="works-item-info">
              <h2>Setup Your wallet</h2>
              <p>
                Set up your wallet of choice. Connect it to the Animarket by
                clicking the wallet icon in the top right corner.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Join our weekly digest -->
    <section class="weekly">
      <div class="container">
        <div class="weekly-wrap">
          <div class="weekly-img">
            <img src="~/assets/images/weekly_images/Photo.png" alt="images" />
          </div>
          <div class="weekly-info">
            <h2 class="weekly-title">Join our weekly digest</h2>
            <p class="weekly-desc">Get exclusive promotions & updates straight to your inbox.</p>
            
            <!-- submit form -->
            <form class="weekly-form">
              <input type="email" placeholder="Enter your email here">
              <button>
                <img src="~/assets/images/icons/email.svg" alt="email icon">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
