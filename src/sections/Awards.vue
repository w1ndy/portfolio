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
export default {
  name: 'awards',
  data () {
    return {
      awards: [
        {
          year: 2015,
          entries: [
            {
              where: 'COMAP Mathematical Contest in Modelling',
              what: 'Honorable Mention'
            }
          ]
        },
        {
          year: 2014,
          entries: [
            {
              where: 'ACM-ICPC China Beijing Invitational Programming Contest',
              what: 'Bronze'
            },
            {
              where: 'ACM-ICPC China Shandong Provincial Programming Contest',
              what: 'Silver'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$AWARDS_SEPARATOR_SPACING: 20px;
$AWARDS_LEFT_COLUMN_COLOR: #95a5a6;

.awards {
  .years {
    list-style: none;
    padding: 30px 0 0 0;
    margin: 0;
    line-height: 2.2rem;
    font-weight: 300;

    .year {
      display: flex;
      flex-direction: row;

      &:not(:first-child) {
        padding-top: 20px;
      }

      .year-title {
        flex: 0 0 70px;
        text-align: right;
        padding-right: $AWARDS_SEPARATOR_SPACING;
        color: $AWARDS_LEFT_COLUMN_COLOR;
      }

      .entries {
        flex: 1 1;
        list-style: none;
        padding: 0 0 0 $AWARDS_SEPARATOR_SPACING;
        margin: 0;
        border-left: 1px solid $AWARDS_LEFT_COLUMN_COLOR;

        .where::after {
          content: '·';
          padding: 0 8px;
        }

        .what {
          font-weight: 500;
        }
      }
    }
  }
}

</style>
