<template>
  <footer>
    <p>
      <span><a href="#" @click="print()">PDF</a></span>
      <span class="print-visible">Last Updated @ {{ updatedDate }}</span>
      <span><a :href="source">Source Code</a></span>
      <span>Powered by <a href="https://vuejs.org">Vue.js</a> and ♡</span>
      <span>© 2018 {{ copyright }}</span>
      <span class="print-visible"><a :href="url">{{ url }}</a></span>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'page-footer',
  data () {
    return {
      updatedDate: 'Aug. 11, 2018',
      source: 'https://github.com/w1ndy/portfolio',
      copyright: 'Di Weng',
      url: 'https://dweng.io'
    }
  },
  methods: {
    print () {
      window.print()
    }
  }
}
</script>

<style lang="scss">
footer {
  margin: 100px 0;
  text-align: center;
  font-size: 0.8em;
  color: #95a5a6;
  text-shadow: 0 0 2px lighten(#95a5a6, 20%);

  span:not(:first-child)::before {
    content: '|';
    padding-left: 5px;
    padding-right: 5px;
  }

  a {
    color: #95a5a6;
    text-decoration: none;
  }
}

@media print {
  footer span {
    display: none;
  }
  footer span.print-visible {
    display: inline-block;
  }
  footer span:not(:first-child)::before {
    content: none;
  }
  footer .print-visible:not(:last-child)::after {
    content: '|';
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>
