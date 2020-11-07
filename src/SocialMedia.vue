<template>
  <div class="social-media">
    <div class="sm-cont">
      <a v-for="sm in socialMedia" :title="sm.key" :key="sm.cls" :href="sm.href">
        <font-awesome-icon :icon="['fab', sm.cls]"></font-awesome-icon>
      </a>
    </div>
  </div>
</template>

<script>
import conf from './config'

const SocialMediaSources = [
  { key: 'github', cls: 'github' },
  { key: 'twitter', cls: 'twitter' },
  { key: 'instagram', cls: 'instagram' },
  { key: 'linkedin', cls: 'linkedin' },
  { key: 'medium', cls: 'medium' },
  { key: 'researchgate', cls: 'researchgate' },
]

export default {
  name: 'social-media',
  data () {
    return {
      socialMedia: SocialMediaSources
        .filter((v, k) => v.key in conf)
        .map((v, k) => ({ key: v.key, cls: v.cls, href: conf[v.key] }))
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

  @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
    flex-basis: 250px;
    margin: 0;
    text-align: right;
  }

  .sm-cont {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    font-size: 2.2rem;

    @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
      right: 0;
    }

    & > a {
      color: #95a5a6;
      padding-left: 15px;
      transition: color 200ms;
      text-decoration: none;

      @media (prefers-color-scheme: dark) {
        color: rgb(165, 180, 187);
      }

      &:not(:first-child) {
        padding-left: 15px;
      }

      &:hover, &:active {
        color: rgb(137, 149, 155);
      }
    }
  }
}
</style>
