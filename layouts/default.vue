<template>
  <div>
    <header class="header">
      <div class="header-top">
        <div class="logo">
          <NuxtLink to="/">
            <img src="~/assets/images\logo.svg" alt="logo" />
          </NuxtLink>
        </div>

        <div class="header-top__right">
          <ul class="categorys">
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Rankings</a></li>
            <li><a href="#">Connect a wallet</a></li>
          </ul>

          <div class="login">
            <button>
              <img src="~/assets\images\icons\User.svg" alt="user icon" />
              <span>Sign Up</span>
            </button>
          </div>
        </div>

        <div v-if="false" class="header-top__burger-menu">
          <button>
            <img
              src="~/assets\images\icons\Burger Menu.svg"
              alt="burger icon"
            />
          </button>
        </div>
      </div>
    </header>
    
    <NuxtPage />

    <footer>
      <div class="footer">
        <div class="container">
          <div class="footer-top">
            <ul class="footer-top-list">
              <!-- footer top list first child -->
              <li>
                <ul>
                  <!-- logo -->
                  <li>
                    <NuxtLink class="logo" to="/">
                      <img src="~/assets\images\logo.svg" alt="logo icon" />
                    </NuxtLink>
                  </li>
                  <!-- desc -->
                  <li>
                    <p>NFT marketplace UI created with Anima for Figma.</p>
                  </li>
                  <!-- desc -->
                  <li>
                    <p>Join our community</p>
                  </li>
                  <!-- social's -->
                  <li>
                    <ul class="social-list">
                      <!-- discord -->
                      <li class="social">
                        <a href="#"
                          ><img
                            src="~/assets\images\icons\DiscordLogo.svg"
                            alt="social icon"
                        /></a>
                      </li>
                      <!-- you tobe -->
                      <li class="social">
                        <a href="#"
                          ><img
                            src="~/assets\images\icons\YoutubeLogo.svg"
                            alt="social icon"
                        /></a>
                      </li>
                      <!-- twitter -->
                      <li class="social">
                        <a href="#"
                          ><img
                            src="~/assets\images\icons\TwitterLogo.svg"
                            alt="social icon"
                        /></a>
                      </li>
                      <!-- instagram -->
                      <li class="social">
                        <a href="#"
                          ><img
                            src="~/assets\images\icons\InstagramLogo.svg"
                            alt="social icon"
                        /></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <!-- footer top list second child -->
              <li>
                <ul>
                  <li>
                    <h3>Explore</h3>
                  </li>
                  <li><a href="#">Marketplace</a></li>
                  <li><a href="#">Rankings</a></li>
                  <li><a href="#">Connect a wallet</a></li>
                </ul>
              </li>

              <!-- footer top list third child -->
              <li>
                <ul>
                  <li><h3>Join our weekly digest</h3></li>
                  <li>
                    <p style="max-width: 330px">
                      Get exclusive promotions & updates straight to your inbox.
                    </p>
                  </li>
                  <li>
                    <form class="footer-subs">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your email here"
                      />
                      <button type="submit">Subscride</button>
                    </form>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="footer-bottom">
            <p>Ⓒ NFT Market. Use this template freely.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
