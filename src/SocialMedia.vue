<template>
  <div class="social-media">
    <div class="sm-cont">
      <a v-for="sm in socialMedia" :key="sm.cls" class="fab" :class="[ sm.cls ]" :href="sm.href"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'social-media',
  data () {
    return {
      socialMedia: [
        { cls: 'fa-github', href: '#' },
        { cls: 'fa-twitter', href: '#' },
        { cls: 'fa-instagram', href: '#' },
        { cls: 'fa-linkedin', href: '#' },
        { cls: 'fa-blogger', href: '#' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import './def.scss';

.social-media {
  flex: 0 0 70px;
  margin: -25px 0 0 0;
  position: relative;
  text-align: center;

  @media print {
    display: none;
  }

  @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
    flex-basis: 250px;
    margin: 0;
    text-align: right;
  }

  .sm-cont {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-40%);
    font-size: 2.2rem;

    @media only screen and (min-width: $RESPONSIVE_BREAKPOINT) {
      right: 0;
    }

    & > a {
      color: #95a5a6;
      padding-left: 15px;
      transition: color 200ms;
      text-decoration: none;

      &:not(:first-child) {
        padding-left: 15px;
      }

      &:hover, &:active {
        color: #7f8c8d;
      }
    }
  }
}
</style>
