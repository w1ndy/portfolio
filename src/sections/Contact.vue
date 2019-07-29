<template>
  <section id="contact">
    <h2>Contact</h2>
    <ul class="types">
      <li class="type" v-for="m in contact" :key="m.type">
        <div class="type-title">{{ m.type }}</div>
        <div class="info" v-html="m.info"></div>
      </li>
    </ul>
  </section>
</template>

<script>
import conf from '../config'

export default {
  name: 'contact',
  data () {
    return {
      contact: conf.contact
    }
  }
}
</script>

<style lang="scss">
@import "../def.scss";
$CONTACT_SEPARATOR_SPACING: 10px;
$CONTACT_LEFT_COLUMN_COLOR: #95a5a6;

#contact {
  .types {
    list-style: none;
    padding: 30px 0 0 0;
    margin: 0;
    line-height: 2.2rem;
    font-weight: 300;

    .type {
      @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
        display: flex;
        flex-direction: row;
      }

      &:not(:first-child) {
        padding-top: 20px;
      }

      .type-title {
        padding-right: $CONTACT_SEPARATOR_SPACING;
        color: $CONTACT_LEFT_COLUMN_COLOR;

        @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
          flex: 0 0 70px;
          text-align: right;
        }
      }

      .info {
        flex: 1 1;
        list-style: none;
        margin: 0;

        @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
          padding: 0 0 0 $CONTACT_SEPARATOR_SPACING;
        }

        pre {
          margin: 0;
          white-space: pre-wrap;
          word-break: break-all;
        }
      }
    }
  }
}

</style>
