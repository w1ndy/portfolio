<template>
  <section class="contact">
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
export default {
  name: 'contact',
  data () {
    return {
      contact: [
        {
          type: 'Address',
          info: 'Rm. 408-2, Mengminwei Bd., Zijingang Campus of Zhejiang University<br>866th, Yuhangtang Rd., Xihu District, Hangzhou, Zhejiang, China. 310054'
        },
        {
          type: 'Email',
          info: `<pre>'mystery.' + 'wd' + '@gmail.com'</pre>`
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$CONTACT_SEPARATOR_SPACING: 10px;
$CONTACT_LEFT_COLUMN_COLOR: #95a5a6;

.contact {
  .types {
    list-style: none;
    padding: 30px 0 0 0;
    margin: 0;
    line-height: 2.2rem;
    font-weight: 300;

    .type {
      display: flex;
      flex-direction: row;

      &:not(:first-child) {
        padding-top: 20px;
      }

      .type-title {
        flex: 0 0 70px;
        text-align: right;
        padding-right: $CONTACT_SEPARATOR_SPACING;
        color: $CONTACT_LEFT_COLUMN_COLOR;
      }

      .info {
        flex: 1 1;
        list-style: none;
        padding: 0 0 0 $CONTACT_SEPARATOR_SPACING;
        margin: 0;
        // border-left: 1px solid $CONTACT_LEFT_COLUMN_COLOR;

        pre {
          margin: 0;
        }
      }
    }
  }
}

</style>
