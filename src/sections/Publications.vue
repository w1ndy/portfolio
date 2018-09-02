<template>
  <section class="publications">
    <h2>Publications</h2>
    <ul>
      <li v-for="pub in publications" :key="pub.title">
        <div class="teaser"><img :src="pub.teaser"></div>
        <div class="info-cont">
          <div class="info">
            <div class="title" v-html="pub.title"></div>
            <div class="authors" v-html="pub.authors"></div>
            <div class="journal" v-html="pub.journal"></div>
          </div>
          <div class="links">
            <div class="supp">
              <a v-if="pub.pdf" :href="pub.pdf"><i class="fas fa-file-pdf"></i>PDF</a>
              <a v-if="pub.video" :href="pub.video"><i class="fas fa-video"></i>Video</a>
              <a v-if="pub.demo" :href="pub.demo"><i class="fas fa-desktop"></i>Demo</a>
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
export default {
  name: 'publications',
  data () {
    return {
      publications: [
        {
          teaser: 'src/assets/srvis.png',
          title: 'SRVis: Towards Better Spatial Integration in Ranking Visualization',
          authors: '<b>Di Weng</b>, Ran Chen, Zikun Deng, Feiran Wu, Jingmin Chen, Yingcai Wu',
          journal: 'IEEE TVCG 25.1 (2019), <i>To Appear</i>. (IEEE InfoVis 2018)',
          pdf: '#',
          video: '#'
        },
        {
          teaser: 'src/assets/reach.png',
          title: 'HomeFinder Revisited: Finding Ideal Homes with Reachability-Centric Multi-Criteria Decision Making',
          authors: '<b>Di Weng</b>, Heming Zhu, Jie Bao, Yu Zheng, Yingcai Wu',
          journal: 'Proc. of the ACM CHI 2018',
          pdf: '#',
          video: '#',
          doi: '10.1145/3173574.3173821'
        },
        {
          teaser: 'src/assets/smartadp.png',
          title: 'SmartAdP: Visual Analytics of Large-scale Taxi Trajectories for Select&shy;ing Billboard Locations',
          authors: 'Dongyu Liu, <b>Di Weng</b>, Yuhong Li, Jie Bao, Yu Zheng, Huamin Qu, Yingcai Wu',
          journal: 'IEEE TVCG 23.1 (2017): 1-10. (IEEE VAST 2016)',
          pdf: '#',
          video: '#',
          doi: '10.1109/TVCG.2016.2598432',
          demo: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../def.scss";
$TEASER_WIDTH: 200px;
$INFOBOX_LEFT_MARGIN: 20px;

.publications {
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

      @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
        display: flex;
        flex-direction: row;
        max-width: unset;
      }

      .teaser {
        text-align: right;

        @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
          flex: 0 0 $TEASER_WIDTH;
        }

        img {
          width: 100%;
          object-fit: cover;
          border: 1px solid #eee;

          @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
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

        @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
          flex: 1 1;
          margin-left: $INFOBOX_LEFT_MARGIN;
          padding-top: 0;
          position: relative;
          // display: flex;
          // flex-direction: column;
        }

        .info {
          @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
            flex: 1 1;
            overflow-y: scroll;
          }

          .title {
            font-weight: 700;
          }

          .authors, .journal {
            font-weight: 300;
            color: #95a5a6;
            font-size: 0.8rem;
          }
        }

        .links {
          font-weight: 400;
          color: #95a5a6;
          // height: 1.5rem;
          padding-top: 10px;
          font-size: 0.9rem;

          @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: row;
            background-color: white;
            width: 100%;
            align-content: space-between;
          }

          a {
            color: #7f8c8d;
            text-decoration: none;
            display: inline-block;

            i {
              padding-right: 5px;
            }
          }

          .supp {
            @media print {
              display: none;
            }
            @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
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

            @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
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
