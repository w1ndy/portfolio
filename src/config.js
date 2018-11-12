export default {
  url: 'https://dweng.org',

  name: 'Di Weng',
  altName: '翁荻',

  github: 'https://github.com/w1ndy',
  twitter: 'https://twitter.com/skies457',
  instagram: 'https://instagram.com/skies457',
  linkedin: 'https://www.linkedin.com/in/di-weng-05887663/',
  medium: 'https://medium.com/@w1ndy',

  profilePic: require('./assets/me.jpg'),
  profilePic2x: require('./assets/me@2x.jpg'),

  // Use &shy; to define where the hypenation will be inserted
  bio: 'I’m a 3rd-year Com&shy;puter Sci&shy;ence Ph.D. stu&shy;dent study&shy;ing at <a href="http://www.cad.zju.edu.cn">State Key Lab of CAD&CG, Zhe&shy;jiang Uni&shy;ver&shy;sity</a> (as of Oct, 2018) and a <a href="http://zjuvis.org">ZJU&shy;VIS</a> group mem&shy;ber su&shy;per&shy;vised by <a href="http://ycwu.org">Prof. Ying&shy;cai Wu</a>. My cur&shy;rent re&shy;search in&shy;ter&shy;est lies in the <b>Vis&shy;ual An&shy;a&shy;lyt&shy;ics of Mas&shy;sive Ur&shy;ban Data</b>.',

  experience: [
    {
      date: 'Sep. 2016 - Present',
      location: '<a href="https://goo.gl/maps/di4P6wCET5C2">Hangzhou, China</a>',
      title: 'Ph.D. Student',
      affiliation: '<a href="http://www.cad.zju.edu.cn">State Key Lab of CAD&CG, Zhejiang University</a>',
      description: 'Supervised by <a href="http://www.ycwu.org">Prof. Yingcai Wu</a>',
      logo: require('./assets/zju.png'),
      logo2x: require('./assets/zju@2x.png')
    },
    {
      date: 'Apr. 2018 - Sep. 2018',
      location: '<a href="https://goo.gl/maps/4PtB3kMQoSK2">Beijing, China</a>',
      title: 'Research Intern',
      affiliation: '<a href="http://icity.jd.com/">Urban Computing Lab, JD Finance</a>',
      description: 'Supervised by <a href="https://scholar.google.com/citations?user=juUcdgYAAAAJ&hl=en&oi=ao">Prof. Yu Zheng</a>',
      logo: require('./assets/jdf.png'),
      logo2x: require('./assets/jdf@2x.png')
    },
    {
      date: 'Jul. 2015 - Mar. 2016',
      location: '<a href="https://goo.gl/maps/di4P6wCET5C2">Hangzhou, China</a>',
      title: 'Research Intern',
      affiliation: '<a href="http://www.cad.zju.edu.cn">State Key Lab of CAD&CG, Zhejiang University</a>',
      description: 'Supervised by <a href="http://www.ycwu.org">Prof. Yingcai Wu</a>',
      logo: require('./assets/zju.png'),
      logo2x: require('./assets/zju@2x.png')
    },
    {
      date: 'Sep. 2012 - Jun. 2016',
      location: '<a href="https://goo.gl/maps/79eWcBKJHLJ2">Jinan, China</a>',
      title: 'Undergraduate Student',
      affiliation: '<a href="http://tsxt.sdu.edu.cn">Taishan Honored College, Shandong University</a>',
      description: 'Computer Science and Technology',
      logo: require('./assets/sdu.png'),
      logo2x: require('./assets/sdu@2x.png')
    }
  ],

  publications: [
    {
      teaser: require('./assets/srvis.png'),
      teaser2x: require('./assets/srvis@2x.png'),
      title: 'SRVis: Towards Better Spatial Integration in Ranking Visualization',
      authors: '<b>Di Weng</b>, Ran Chen, Zikun Deng, Feiran Wu, Jingmin Chen, Yingcai Wu',
      journal: 'IEEE TVCG 25.1 (2019), <i>To Appear</i>. (IEEE InfoVis 2018)',
      pdf: 'http://zjuvis.org/files/srvis.pdf',
      video: 'https://www.youtube.com/watch?v=lenSZci4gy4',
      demo: 'https://srvis.zjuvis.org/',
      doi: '10.1109/TVCG.2018.2865126'
    },
    {
      teaser: require('./assets/reach.png'),
      teaser2x: require('./assets/reach@2x.png'),
      title: 'HomeFinder Revisited: Finding Ideal Homes with Reachability-Centric Multi-Criteria Decision Making',
      authors: '<b>Di Weng</b>, Heming Zhu, Jie Bao, Yu Zheng, Yingcai Wu',
      journal: 'Proc. of the ACM CHI 2018',
      pdf: 'http://zjuvis.org/files/reach.pdf',
      video: 'https://youtu.be/WcjMXAfuygg',
      doi: '10.1145/3173574.3173821'
    },
    {
      teaser: require('./assets/smartadp.png'),
      teaser2x: require('./assets/smartadp@2x.png'),
      title: 'SmartAdP: Visual Analytics of Large-scale Taxi Trajectories for Select&shy;ing Billboard Locations',
      authors: 'Dongyu Liu, <b>Di Weng</b>, Yuhong Li, Jie Bao, Yu Zheng, Huamin Qu, Yingcai Wu',
      journal: 'IEEE TVCG 23.1 (2017): 1-10. (IEEE VAST 2016)',
      pdf: 'http://zjuvis.org/files/smartadp.pdf',
      video: 'https://www.youtube.com/watch?v=Nkdup4YcX0A',
      doi: '10.1109/TVCG.2016.2598432',
      demo: 'http://smartadp.urban-computing.cn/'
    }
  ],

  awards: [
    {
      year: 2018,
      entries: [
        {
          where: 'Microsoft Research Asia',
          what: 'Fellowship Nomination Award'
        }
      ]
    },
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
  ],

  contact: [
    {
      type: 'Address',
      info: 'Rm. 408-2, Mengminwei Bd., Zijingang Campus of Zhejiang University<br>866th, Yuhangtang Rd., Xihu District, Hangzhou, Zhejiang, China. 310054'
    },
    {
      type: 'Email',
      info: `<pre>'mystery.wd' + '@gmail.com'</pre>`
    }
  ]
}
