<template>
  <div id="main">
    <div class="header">
      <h1 class="name">{{ name }} <span class="altname">({{ altName }})</span></h1>
      <social-media></social-media>
    </div>
    <bio></bio>
    <div class="content">
      <div class="content-cont" v-scroll-spy="{ time: 500, allowNoActive: false }">
        <experience></experience>
        <publications></publications>
        <awards></awards>
        <skills></skills>
        <contact></contact>
      </div>
      <div class="toc">
        <ul v-scroll-spy-active v-scroll-spy-link>
          <li><a>EXPERIENCE</a></li>
          <li><a>PUBLICATIONS</a></li>
          <li><a>AWARDS</a></li>
          <li><a>SKILLS</a></li>
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
import Experience from './sections/Experience'
import Publications from './sections/Publications'
import Awards from './sections/Awards'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './Footer'

export default {
  name: 'app',
  data () {
    return {
      name: 'Di Weng',
      altName: '翁荻',
      pdf: '#',
      source: '#',
      url: 'https://dweng.io',
      section: 0
    }
  },
  components: {
    SocialMedia,
    Bio,
    Experience,
    Publications,
    Awards,
    Skills,
    Contact,
    'page-footer': Footer
  }
}
</script>

<style lang="scss">
@import './def.scss';

body {
  width: 100vw;
  margin: 0 auto;
  padding: none;
  font-family: 'Merriweather', 'Microsoft Yahei', serif;
  background-color: $BACKGROUND_COLOR;

  @media only screen and (min-width: $MAX_PAGE_WIDTH) {
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

  @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
    flex-direction: row;
  }

  & > .name {
    flex: 1 1;
    font-size: 3rem;
    text-align: center;

    @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
      text-align: left;
    }

    & > .altname {
      color: #bdc3c7;
      font-weight: 300;
      letter-spacing: 0.05em;
      display: block;

      @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
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
  overflow: hidden;

  @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
    flex-direction: row;
  }

  .content-cont {
    flex: 1 1;
  }

  .toc {
    flex: 0 0 150px;
    display: none;

    @media only screen and (min-width: $TOC_BREAKPOINT) {
      display: block;
    }
  }
}

section {
  margin: 50px 30px 70px 30px;

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

.toc {
  padding-top: 55px;
  position: -webkit-sticky;
  position: sticky;
  align-self: flex-start;
  top: -40px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      height: 1.8rem;
      line-height: 1.8rem;
      padding-left: 10px;
      margin-bottom: 5px;
      font-size: 0.9em;
      font-weight: 700;
      letter-spacing: 1px;
      transition: box-shadow 200ms;

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
</style>
