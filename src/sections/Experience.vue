<template>
  <section class="experience">
    <h2>Experience</h2>
    <div class="entry-cont">
      <div class="entry" v-for="e in experience" :key="e.title + e.location">
        <div class="date" v-html="e.date"></div>
        <div class="location" v-html="e.location">Beijing, China</div>
        <div class="title" v-html="e.title">Research Intern</div>
        <div class="affiliation" v-html="e.affiliation">Urban Computing Lab, JD Finance</div>
        <div class="description" v-html="e.description">Supervised by Prof. Yu Zheng</div>
        <img class="logo" :src="e.logo" :srcset="`${e.logo2x} 2x`" alt="affiliation logo">
      </div>
    </div>
  </section>
</template>

<script>
import conf from '../config'
export default {
  name: 'experience',
  data () {
    return {
      experience: conf.experience
    }
  }
}
</script>

<style lang="scss">
@import "../def.scss";

$LOGO_WIDTH: 120px;
$LOGO_RIGHT_PADDING: 25px;

.experience {
  a {
    text-decoration: none;
  }

  .entry-cont {
    // margin-left: 30px;
    border-left: 2px solid #7f8c8d;
    box-sizing: content-box;
    padding-bottom: 30px;


    @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
      margin-left: 180px;
    }
  }

  .entry {
    padding-top: 50px;
    position: relative;
    padding-left: 30px;
    line-height: 1.6em;
    font-weight: 300;
    box-sizing: content-box;

    @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
      padding-right: $LOGO_WIDTH + $LOGO_RIGHT_PADDING;
    }

    &:first-child {
      padding-top: 30px;
      &::before {
        content: '';
        position: absolute;
        display: block;
        width: 5px;
        height: 40px;
        background-color: $BACKGROUND_COLOR;
        left: -2.5px;
        top: 0;
      }

      &::after {
        top: 30px;
      }
    }

    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 8px;
      height: 8px;
      background-color: white;
      border-radius: 50%;
      border: 2px solid #7f8c8d;
      left: -1px;
      top: 50px;
      transform: translate(-50%, 50%);
    }

    .date, .location {
      color: #95a5a6;

      a {
        color: #95a5a6;
      }

      @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
        position: absolute;
        right: 100%;
        width: 180px;
        text-align: right;
        padding-right: 20px;
      }
    }

    .location {
      @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
        padding-top: 25px;
      }
    }

    .title {
      font-weight: 700;
      padding-top: 10px;

      @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
        padding-top: 0px;
      }
    }

    .logo {
      display: none;

      @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
        display: block;
        position: absolute;
        right: $LOGO_RIGHT_PADDING;
        height: 40px;
        width: $LOGO_WIDTH;
        object-fit: contain;
        bottom: 0;
        transform: translateY(-5px);
      }
    }
  }
}
</style>
