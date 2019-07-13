<template>
  <div id="main">
    <div class="header">
      <h1 class="name">{{ name }} <span class="altname">({{ altName }})</span></h1>
      <social-media></social-media>
    </div>
    <bio></bio>
    <div class="content">
      <div class="content-cont" v-scroll-spy="{ time: 500, allowNoActive: false }">
        <education></education>
        <experience></experience>
        <publications></publications>
        <awards></awards>
        <contact></contact>
      </div>
      <div class="toc">
        <ul v-scroll-spy-active v-scroll-spy-link>
          <li><a>EDUCATION</a></li>
          <li><a>EXPERIENCE</a></li>
          <li><a>PUBLICATIONS</a></li>
          <li><a>AWARDS</a></li>
          <li><a>CONTACT</a></li>
        </ul>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import SocialMedia from './SocialMedia'
import Bio from './Bio'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Publications from './sections/Publications'
import Awards from './sections/Awards'
import Contact from './sections/Contact'
import Footer from './Footer'

import conf from './config'

export default {
  name: 'app',
  data () {
    return {
      name: conf.name,
      altName: conf.altName
    }
  },
  components: {
    SocialMedia,
    Bio,
    Education,
    Experience,
    Publications,
    Awards,
    Contact,
    'page-footer': Footer
  }
}
</script>

<style lang="scss">
@import './def.scss';

@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 300;
  src: local('Merriweather Light'), local('Merriweather-Light'), url(./assets/merriweather_light.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  src: local('Merriweather Regular'), local('Merriweather-Regular'), url(./assets/merriweather_regular.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 700;
  src: local('Merriweather Bold'), local('Merriweather-Bold'), url(./assets/merriweather_bold.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

html {
  font-size: 14px;

  @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
    font-size: 16px;
  }
}

body {
  width: 100vw;
  margin: 0 auto;
  padding: none;
  font-family: 'Merriweather', 'Microsoft Yahei', serif;
  background-color: $BACKGROUND_COLOR;

  @media print, (min-width: $MAX_PAGE_WIDTH) {
    width: $MAX_PAGE_WIDTH;
  }

  a {
    color: black;
  }
}

.header {
  margin: 50px 30px;
  display: flex;
  flex-direction: column;

  @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
    flex-direction: row;
  }

  & > .name {
    flex: 1 1;
    font-size: 3rem;
    text-align: center;

    @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
      text-align: left;
    }

    & > .altname {
      color: #bdc3c7;
      font-weight: 300;
      letter-spacing: 0.05em;
      display: block;

      @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
        display: inline-block;
      }
    }
  }
}

.content {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
    flex-direction: row;
  }

  .content-cont {
    flex: 1 1;
    overflow: hidden;
  }

  .toc {
    padding-top: 55px;
    flex: 0 0 150px;
    display: none;

    @media only screen and (min-width: $TOC_BREAKPOINT) {
      display: block;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      position: sticky;
      position: -webkit-sticky;
      top: 20px;

      li {
        height: 1.8rem;
        line-height: 1.8rem;
        padding-left: 10px;
        margin-bottom: 5px;
        font-size: 0.9em;
        font-weight: 400;
        letter-spacing: 1px;
        transition: box-shadow 200ms;
        transform: scale(1, 0.93);
        cursor: pointer;

        a {
          transition: color 200ms;
          color: #bdc3c7;
        }

        &.active {
          // border-left: 5px solid #95a5a6;
          box-shadow: -5px 0px 0px 0px #95a5a6;

          a {
            color: #95a5a6;
          }
        }
      }
    }
  }
}

section {
  margin: 50px 35px 50px 35px;

  h2 {
    position: relative;
  }
  h2::before {
    position: absolute;
    content: '#';
    color: #95a5a6;
    left: -25px;
  }
}

// .toc {
//   padding-top: 55px;
//   position: -webkit-sticky;
//   position: sticky;
//   align-self: flex-start;
//   top: -40px;
// }
</style>
