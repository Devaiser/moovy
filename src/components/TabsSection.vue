<template>
  <div class="tabs-section">
    <h2 class="section-title">ENHANCE THE DRIVING EXPERIENCE</h2>
    <TabsWrapper class="tabs-wrapper">
      <Tab title="Moovy">
        <div class="tab">
          <div class="tab-img">
            <img src="/img/tabs/moovy.jpg" alt="moovy" />
          </div>
          <div class="tab-text">
            <p>
              Get a chance to purchase one of the unique NFT Boxes for an easy
              start in the game and join Moovy Alpha Version!
            </p>
          </div>
        </div>
        <a
          href="https://discord.gg/yqkyNFVSZf"
          target="_blank"
          class="social-link"
        >
          <IconDiscord :color="'#000'" :width="43" :height="28" />
          <p>Join our Discord Server</p>
        </a>
      </Tab>
      <Tab title="Drive-2-Earn">
        <div class="tab">
          <div class="tab-img">
            <img src="/img/tabs/drive-2-earn.jpg" alt="drive-2-earn" />
          </div>
          <div class="tab-text">
            <p>
              Choose NFT Car from your garage - go to Solo Ride or Rally and
              start earning $MGAS Token
            </p>
          </div>
        </div>
        <a
          href="https://moovy-io.medium.com/"
          target="_blank"
          class="social-link"
        >
          <IconMedium :color="'#000'" :width="39" :height="33" />
          <p>Learn more on our Medium</p>
        </a>
      </Tab>
      <Tab title="Social-Fi">
        <div class="tab">
          <div class="tab-img">
            <img src="/img/tabs/social-fi.jpg" alt="social-fi" />
          </div>
          <div class="tab-text">
            <p>
              Get a Rally ticket and compete with other players to get bonuses,
              special cars and NFT assets
            </p>
          </div>
        </div>
        <a href="/" target="_blank" class="social-link">
          <img src="/img/moovy.svg" alt="moovy" />
          <p>Go to About page</p>
        </a>
      </Tab>
      <Tab title="Compete">
        <div class="tab">
          <div class="tab-img">
            <img src="/img/tabs/compete.jpg" alt="compete" />
          </div>
          <div class="tab-text">
            <p>
              Get a Rally ticket and compete with other players to get bonuses,
              special cars and NFT assets
            </p>
          </div>
        </div>
        <a href="https://bbsoft.io/" target="_blank" class="social-link">
          <img src="/img/bb-soft.svg" alt="bb-soft" />
          <p>bbsoft.io</p>
        </a>
      </Tab>
      <Tab title="GameFi">
        <div class="tab">
          <div class="tab-img">
            <img src="/img/tabs/gamefi.jpg" alt="gamefi" />
          </div>
          <div class="tab-text">
            <p>
              Monetize your driving with Moovy mechanics. Stuck in traffic? On
              the way to work? Went on a road trip? Now it's profitable to drive
              a car
            </p>
          </div>
        </div>
        <a
          href="https://twitter.com/moovy_io"
          target="_blank"
          class="social-link"
        >
          <IconTwitter :color="'#000'" :width="33" :height="26" />
          <p>Learn more on our Twitter</p>
        </a>
      </Tab>
    </TabsWrapper>
  </div>
</template>
<script setup>
  import { TabsWrapper, Tab } from "@/components";
  import { IconDiscord, IconTwitter, IconMedium } from "@/components/icons";
</script>
<style scoped>
  .tabs-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
  .tabs-wrapper {
    margin-top: 60px !important;
  }
  .tab {
    width: calc(60vw + 1px);
    border-radius: 25px;
    margin-top: -140px;
    z-index: 2;
    position: relative;
    overflow: hidden;
    border: 1px solid #fff;
  }
  .tab-img {
    width: 100%;
  }
  .tab-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    user-select: none;
    pointer-events: none;
  }
  .tab-text {
    width: 80%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(29px);
		-webkit-backdrop-filter: blur(29px);
    border-radius: 999px;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px 45px;
  }
  .tab-text p {
    font-weight: 700;
    font-size: 23px;
    line-height: 1.25;
    text-align: center;
    color: #fff;
  }
  .social-link {
    background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 105.42%);
    display: block;
    border-radius: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px 56px;
    width: fit-content;
    margin: 0 auto;
    margin-top: 20px;
    min-width: 250px;
  }
  .social-link p {
    font-weight: 700;
    color: #000;
    font-size: 24px;
    line-height: 1.25;
    margin-left: 10px;
  }
</style>