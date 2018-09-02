<template>
  <div class="bio">
    <img :src="pic" class="portrait">
    <div class="description">
      <span v-html="bio" lang="en"></span>
    </div>
  </div>
</template>

<script>
import conf from './config'

export default {
  name: 'bio',
  data () {
    return {
      pic: conf.profilePic,
      bio: conf.bio
    }
  }
}
</script>

<style lang="scss">
@import './def.scss';

.bio {
  margin: 30px 35px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
    margin: 30px 50px;
    flex-direction: row;
    justify-content: space-evenly;
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
      margin: 0;
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
      max-width: 72%;
    }

    span {
      flex: 0 0;
      font-style: italic;
      font-weight: 300;

      font-size: 1.1rem;
      line-height: 1.9em;
      text-indent: 2rem;

      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;

      @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
        text-align: left;
      }

      &::before {
        font-family: Georgia;
        content: "\201C";
        position: absolute;
        left: -2rem;
        top: 3rem;
        font-size: 10em;
        color: #f2f2f2;
        z-index: -1;
      }
    }
  }
}
</style>
