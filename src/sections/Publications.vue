<template>
  <section id="publications">
    <h2>Publications</h2>
    <ul>
      <li v-for="pub in publications" :key="pub.title">
        <div class="teaser"><img :src="pub.teaser" :srcset="`${pub.teaser2x} 2x`" alt="publication teaser image"></div>
        <div class="info-cont">
          <div class="info" :title="`${pub.title}; ${pub.authors}; ${pub.journal}`">
            <div class="title" v-html="pub.title"></div>
            <div class="authors" v-html="pub.authors"></div>
            <div class="journal" v-html="pub.journal"></div>
          </div>
          <div class="links">
            <div class="supp">
              <a v-if="pub.pdf" :href="pub.pdf"><font-awesome-icon icon="file-pdf"></font-awesome-icon>PDF</a>
              <a v-if="pub.video" :href="pub.video"><font-awesome-icon icon="video"></font-awesome-icon>Video</a>
              <a v-if="pub.demo" :href="pub.demo"><font-awesome-icon icon="desktop"></font-awesome-icon>Demo</a>
            </div>
            <div class="doi">
              <a v-if="pub.doi" :href="'https://dx.doi.org/' + pub.doi" class="doi">{{ pub.doi }}</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import conf from '../config'
export default {
  name: 'publications',
  data () {
    return {
      publications: conf.publications
    }
  }
}
</script>

<style lang="scss">
@import "../def.scss";
$TEASER_WIDTH: 200px;
$INFOBOX_LEFT_MARGIN: 20px;

#publications {
  ul {
    list-style: none;
    margin: 0;
    padding: 30px 0 0 0;

    li {
      // display: flex;
      // flex-direction: column;
      // padding-right: 10px;
      box-sizing: content-box;
      max-width: 500px;
      margin: auto;
      position: relative;

      &:not(:first-child) {
        margin-top: 30px;
      }

      @media print {
        page-break-inside: avoid;
      }

      @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
        display: flex;
        flex-direction: row;
        max-width: unset;
      }

      .teaser {
        text-align: right;

        @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
          flex: 0 0 $TEASER_WIDTH;
        }

        img {
          width: 100%;
          object-fit: cover;
          border: 1px solid #eee;

          @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
            width: $TEASER_WIDTH;
            height: 130px;
            transform: translateY(3px);
          }
        }
      }

      .info-cont {
        padding-top: 10px;
        line-height: 1.5rem;
        top: 0;
        bottom: 0;

        @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
          flex: 1 1;
          margin-left: $INFOBOX_LEFT_MARGIN;
          padding-top: 0;
          position: relative;
          // display: flex;
          // flex-direction: column;
        }

        .info {
          @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
            flex: 1 1;
          }

          .title {
            font-weight: 700;
          }

          .authors, .journal {
            font-weight: 300;
            color: #95a5a6;
            font-size: 0.85rem;
            @media (prefers-color-scheme: dark) {
              color: #a5b4bb;
            }
          }
        }

        .links {
          font-weight: 400;
          color: #95a5a6;
          @media (prefers-color-scheme: dark) {
            color: #a5b4bb;
          }
          // height: 1.5rem;
          padding-top: 10px;
          font-size: 0.8rem;

          @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: row;
            background-color: white;
            @media (prefers-color-scheme: dark) {
              background-color: $DARKMODE_BACKGROUND_COLOR;
            }
            width: 100%;
            align-content: space-between;
          }

          a {
            color: #7f8c8d;
            @media (prefers-color-scheme: dark) {
              color: #a5b4bb;
            }
            text-decoration: none;
            display: inline-block;

            svg {
              padding-right: 5px;
            }
          }

          .supp {
            @media print {
              display: none;
            }
            @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
              flex: 1 1;
            }

            a:not(:last-child):after {
              content: '·';
              padding: 0 8px;
            }
          }

          .doi {
            font-family: "Courier";
            letter-spacing: -0.1rem;
            display: none;

            @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
              flex: 0 0;
              display: block;
              // padding-right: 10px;
            }
          }
        }
      }
    }
  }
}

.fa-file-pdf {
  font-size: 0.9rem;
}
.fa-desktop {
  font-size: 0.8rem;
}
</style>
