<template>
  <section class="publications">
    <h2>Publications</h2>
    <ul>
      <li v-for="pub in publications" :key="pub.title">
        <div class="teaser"><img :src="pub.teaser"></div>
        <div class="info">
          <div class="title">{{ pub.title }}</div>
          <div class="authors" v-html="pub.authors"></div>
          <div class="journal" v-html="pub.journal"></div>
          <div class="links">
            <a v-if="pub.doi" :href="'https://dx.doi.org/' + pub.doi" class="doi">{{ pub.doi }}</a>
            <span>
              <a v-if="pub.pdf" :href="pub.pdf"><i class="fas fa-file-pdf"></i>PDF</a>
              <a v-if="pub.video" :href="pub.video"><i class="fas fa-video"></i>Video</a>
              <a v-if="pub.demo" :href="pub.demo"><i class="fas fa-desktop"></i>Demo</a>
            </span>
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
          title: 'SmartAdP: Visual Analytics of Large-scale Taxi Trajectories for Selecting Billboard Locations',
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
$TEASER_RIGHT_MARGIN: 20px;

.publications {
  ul {
    list-style: none;
    margin: 0;
    padding: 30px 0 0 0;

    li {
      display: flex;
      flex-direction: row;
      padding-right: 10px;
      box-sizing: content-box;

      &:not(:first-child) {
        padding-top: 30px;
      }

      @media print {
        page-break-inside: avoid;
      }

      .teaser {
        flex: 0 0 220px;
        text-align: right;

        img {
          width: 220px;
          height: 130px;
          object-fit: cover;
          border: 1px solid #eee;
          transform: translateY(3px);
        }
      }

      .info {
        flex: 1 1;
        padding-left: $TEASER_RIGHT_MARGIN;
        position: relative;

        & > div {
          line-height: 1.5rem;
          // margin-bottom: 5px;
        }

        .title {
          font-weight: 700;
        }

        .authors, .journal {
          font-weight: 300;
          color: #95a5a6;
          font-size: 0.9rem;
        }

        .links {
          font-weight: 500;
          position: absolute;
          bottom: 0;
          color: #95a5a6;
          width: calc(100% - #{$TEASER_RIGHT_MARGIN});
          height: 1.5rem;

          span {
            @media print {
              display: none;
            }
          }

          span > a:not(:last-child):after {
            content: '·';
            padding: 0 8px;
          }

          a {
            color: #7f8c8d;
            text-decoration: none;

            i {
              padding-right: 5px;
            }

            &.doi {
              font-family: "Courier";
              letter-spacing: -0.1rem;
              position: absolute;
              right: 0;
              // font-size: 0.9rem;
            }
          }
        }
      }
    }
  }
}

.fa-file-pdf {
  font-size: 1.05rem;
}
.fa-desktop {
  font-size: 0.9rem;
}
</style>
