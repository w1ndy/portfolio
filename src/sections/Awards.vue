<template>
  <section class="awards">
    <h2>Awards</h2>
    <ul class="years">
      <li class="year" v-for="y in awards" :key="y.year">
        <div class="year-title">{{ y.year }}</div>
        <ul class="entries">
          <li class="entry" v-for="e in y.entries" :key="e.where + e.what">
            <span class="where">{{ e.where }}</span>
            <span class="what">{{ e.what }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
import conf from '../config'

export default {
  name: 'awards',
  data () {
    return {
      awards: conf.awards
    }
  }
}
</script>

<style lang="scss">
@import "../def.scss";
$AWARDS_SEPARATOR_SPACING: 20px;
$AWARDS_YEAR_COLOR: #95a5a6;

.awards {
  .years {
    list-style: none;
    padding: 30px 0 0 0;
    margin: 0;
    line-height: 2.2rem;
    font-weight: 300;

    .year {
      @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
        display: flex;
        flex-direction: row;
      }

      &:not(:first-child) {
        padding-top: 20px;
      }

      .year-title {
        color: $AWARDS_YEAR_COLOR;
        padding-bottom: 5px;

        @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
          flex: 0 0 70px;
          text-align: right;
          padding-right: $AWARDS_SEPARATOR_SPACING;
          padding-bottom: 0px;
        }
      }

      .entries {
        flex: 1 1;
        list-style: none;
        padding: 0 0 0 $AWARDS_SEPARATOR_SPACING;
        margin: 0 0 0 $AWARDS_SEPARATOR_SPACING / 2;
        border-left: 1px solid $AWARDS_YEAR_COLOR;

        @media print, (min-width: $RESPONSIVE_BREAKPOINT) {
          margin: 0;
        }

        .entry:not(:last-child) {
          padding-bottom: 10px;
        }

        .where::after {
          content: '·';
          padding: 0 8px;
        }

        .what {
          font-weight: 400;
        }
      }
    }
  }
}

</style>
