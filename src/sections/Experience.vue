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
        <img class="logo" :src="e.logo">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'experience',
  data () {
    return {
      experience: [
        {
          date: 'Apr. 2018 - Present',
          location: '<a href="https://goo.gl/maps/4PtB3kMQoSK2">Beijing, China</a>',
          title: 'Research Intern',
          affiliation: '<a href="http://icity.jd.com/">Urban Computing Lab, JD Finance</a>',
          description: 'Supervised by <a href="https://scholar.google.com/citations?user=juUcdgYAAAAJ&hl=en&oi=ao">Prof. Yu Zheng</a>',
          logo: 'src/assets/jdf.png'
        },
        {
          date: 'Sep. 2016 - Present',
          location: '<a href="https://goo.gl/maps/di4P6wCET5C2">Hangzhou, China</a>',
          title: 'Ph.D. Student',
          affiliation: '<a href="http://www.cad.zju.edu.cn">State Key Lab of CAD&CG, Zhejiang University</a>',
          description: 'Supervised by <a href="http://www.ycwu.org">Prof. Yingcai Wu</a>',
          logo: 'src/assets/zju.png'
        },
        {
          date: 'Jul. 2015 - Mar. 2016',
          location: '<a href="https://goo.gl/maps/di4P6wCET5C2">Hangzhou, China</a>',
          title: 'Research Intern',
          affiliation: '<a href="http://www.cad.zju.edu.cn">State Key Lab of CAD&CG, Zhejiang University</a>',
          description: 'Supervised by <a href="http://www.ycwu.org">Prof. Yingcai Wu</a>',
          logo: 'src/assets/zju.png'
        },
        {
          date: 'Sep. 2012 - Jun. 2016',
          location: '<a href="https://goo.gl/maps/79eWcBKJHLJ2">Jinan, China</a>',
          title: 'Undergraduate Student',
          affiliation: '<a href="http://tsxt.sdu.edu.cn">Taishan Honored College, Shandong University</a>',
          description: 'Computer Science and Technology',
          logo: 'src/assets/sdu.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../def.scss";

.experience {
  a {
    text-decoration: none;
  }

  .entry-cont {
    margin-left: 30px;
    border-left: 2px solid #7f8c8d;
    box-sizing: content-box;
    padding-bottom: 30px;


    @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
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

      @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
        position: absolute;
        right: 100%;
        width: 180px;
        text-align: right;
        padding-right: 20px;
      }
    }

    .location {
      // padding-top: 25px;
    }

    .title {
      font-weight: 700;
      padding-top: 10px;
    }

    .logo {
      position: absolute;
      right: 25px;
      height: 40px;
      width: 120px;
      object-fit: contain;
      bottom: 0;
      transform: translateY(-5px);

      @media only screen and (max-width: 600px) {
        display: none;
      }
    }
  }
}
</style>
