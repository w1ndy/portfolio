<template>
  <section class="skills">
    <h2>Skills</h2>
    <div class="cloud-wrapper">
      <svg class="skill-cloud"></svg>
    </div>
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
    const fontWeight = 400

    for (const s of this.skills) {
      s.size = s.level / 10 * 44 + 6
    }

    window.addEventListener('DOMContentLoaded', () => {
      cloud()
      .size([760, 400])
      .words(this.skills)
      .padding(3)
      .font(fontFamily)
      .fontSize(function(d) { return d.size })
      .rotate(0)
      .fontWeight(fontWeight)
      .on('end', words => {
        d3.select('.skill-cloud')
          .append('g')
          .attr('transform', `translate(350, 200)`)
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
  .cloud-wrapper {
    overflow-y: hidden;
    overflow-x: scroll;
    width: 700px;
    height: 400px;
    background-color: rgba(236, 240, 241, 0.5);

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .skill-cloud {
    margin: 30px auto -20px auto;
    display: block;
    overflow: visible;
    width: 700px;
    height: 400px;
  }
}
</style>
