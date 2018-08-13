<template>
  <div class="bio">
    <img src="src/assets/me.jpg" class="portrait">
    <div class="description">
      <span v-html="bio"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bio',
  data () {
    return {
      bio: 'I’m a 2nd-year Computer Science Ph.D. student studying at <a href="#">State Key Lab of CAD&CG, Zhejiang University</a> (as of Jul, 2018) and a <a href="#">ZJUVIS</a> group member supervised by <a href="#">Prof. Yingcai Wu</a>. My current research interest lies in the <b>Visual Analytics of Massive Urban Data</b>.'
    }
  }
}
</script>

<style lang="scss">
@import './def.scss';

.bio {
  margin: 30px 40px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
    margin: 30px 40px 40px 60px;
    flex-direction: row;
  }

  .portrait {
    flex: 0 0 150px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #eee;
    margin: auto;

    @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
      flex-direction: row;
    }
  }

  .description {
    flex: 1 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;


    @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
      margin-top: 0;
    }

    span {
      flex: 0 0;
      font-style: italic;
      font-weight: 300;

      font-size: 1.1rem;
      line-height: 1.9em;
      text-align: center;

      @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
        padding-left: 35px;
        text-align: left;
      }

      &::before {
        font-family: Georgia;
        content: "\201C";
        position: absolute;
        left: 40px;
        top: 55px;
        font-size: 10em;
        color: #f2f2f2;
        z-index: -1;
      }
    }
  }
}
</style>
