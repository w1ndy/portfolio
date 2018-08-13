<template>
  <section class="skills">
    <h2>Skills</h2>
    <svg class="skill-cloud"></svg>
  </section>
</template>

<script>
import cloud from 'd3-cloud'
import * as d3 from 'd3'

export default {
  name: 'skills',
  data () {
    return {
      skills: [
        { text: 'C/C++', level: 8 },
        { text: 'JavaScript', level: 9 },
        { text: 'TypeScript', level: 8 },
        { text: 'HTML', level: 9 },
        { text: 'CSS', level: 8 },
        { text: 'Vue', level: 8 },
        { text: 'AngularJS', level: 5 },
        { text: 'React', level: 3 },
        { text: 'Python', level: 8 },
        { text: 'LaTeX', level: 6 },
        { text: 'Bash', level: 6 },
        { text: 'Java', level: 3 },
        { text: 'Objective-C', level: 3 },
        { text: 'Linux', level: 9 },
        { text: 'Docker', level: 7 },
        { text: 'Kubernetes', level: 5 },
        { text: 'Container', level: 6 },
        { text: 'Network', level: 7 },
        { text: 'SDN', level: 6 },
        { text: 'SQL', level: 4 },
        { text: 'SIMD', level: 4 },
        { text: 'Graphics', level: 4 },
        { text: 'OpenGL', level: 3 },
        { text: 'DirectX', level: 3 },
        { text: 'Lua', level: 4 },
        { text: 'AI', level: 6 },
        { text: 'Tensorflow', level: 2 },
        { text: 'Electron', level: 3 },
        { text: 'Compiler', level: 4 },
      ]
    }
  },
  mounted () {
    const fontFamily = 'Merriweather'
    const fontWeight = 500

    for (const s of this.skills) {
      s.size = s.level / 10 * 44 + 6
    }

    window.addEventListener('DOMContentLoaded', () => {
      cloud()
      .size([760, 400])
      .words(this.skills)
      .padding(2)
      .font(fontFamily)
      .fontSize(function(d) { return d.size })
      .rotate(0)
      .fontWeight(fontWeight)
      // .spiral('rectangular')
      .on('end', words => {
        let minHeight = Infinity
        let maxHeight = -Infinity
        for (const w of words) {
          minHeight = Math.min(minHeight, w.y + w.y0)
          maxHeight = Math.max(maxHeight, w.y + w.y1)
        }
        const height = maxHeight - minHeight + 20

        d3.select('.skill-cloud')
          .attr('width', 760).attr('height', height)
          .append('g')
          .attr('transform', `translate(380, ${ height / 2 })`)
          .selectAll('text')
            .data(words)
          .enter().append('text')
            .style('font-size', function(d) { return d.size + "px" })
            .style('font-family', fontFamily)
            .style('font-weight', `${fontWeight}`)
            .attr('text-anchor', 'middle')
            .attr('opacity', d => d.level / 10)
            .attr('transform', function(d) {
              return 'translate(' + [d.x, d.y] + ')'
            })
            .text(function(d) { return d.text })
      })
      .start()
    })
  }
}
</script>

<style lang="scss">
.skills {
  .skill-cloud {
    margin: 30px auto -20px auto;
    display: block;
    overflow: visible;
  }
}
</style>
