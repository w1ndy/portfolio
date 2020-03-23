export default {
  url: 'https://dweng.org',

  name: 'Di Weng',
  altName: '翁荻',

  github: 'https://github.com/w1ndy',
  twitter: 'https://twitter.com/skies457',
  researchgate: 'https://www.researchgate.net/profile/Di_Weng',
  linkedin: 'https://www.linkedin.com/in/di-weng-05887663/',
  medium: 'https://medium.com/@w1ndy',

  profilePic: require('./assets/me.jpg').default,
  profilePic2x: require('./assets/me@2x.jpg').default,

  // Use &shy; to define where the hypenation will be inserted
  bio: 'I’m a 4th-year Computer Science Ph.D. candidate studying Data Visualization at <a href="http://www.cad.zju.edu.cn">State Key Lab of CAD&CG, Zhejiang University</a> (as of Jan, 2020) and a <a href="http://zjuidg.org">Interactive Data Group</a> member supervised by <a href="http://ycwu.org">Prof. Yingcai Wu</a>. My research interest lies in the <b>Visual Analytics of Massive Urban Data</b>.',

  education: [
    {
      date: 'Sep. 2016 - Jun. 2021',
      location: '<a href="https://goo.gl/maps/di4P6wCET5C2">Hangzhou, China</a>',
      title: 'Ph.D. Candidate',
      affiliation: '<a href="http://www.cad.zju.edu.cn">State Key Lab of CAD&CG, Zhejiang University</a>',
      description: 'Supervised by <a href="http://www.ycwu.org">Prof. Yingcai Wu</a>',
      logo: require('./assets/zju.png').default,
      logo2x: require('./assets/zju@2x.png').default
    },
    {
      date: 'Sep. 2012 - Jun. 2016',
      location: '<a href="https://goo.gl/maps/79eWcBKJHLJ2">Jinan, China</a>',
      title: 'Undergraduate Student',
      affiliation: '<a href="http://tsxt.sdu.edu.cn">Taishan Honored College, Shandong University</a>',
      description: 'Bachelor in Computer Science and Technology',
      logo: require('./assets/sdu.png').default,
      logo2x: require('./assets/sdu@2x.png').default
    }
  ],

  experience: [
    {
      date: 'Jul. 2019 - Jan. 2020',
      location: '<a href="https://goo.gl/maps/chD2rAZPgic9m64P9">Melbourne, Australia</a>',
      title: 'Visiting Research Student',
      affiliation: '<a href="https://www.monash.edu/it/our-research/strengths/chic">Immersive Analytics Lab, Monash University</a>',
      logo: require('./assets/monash.png').default,
      logo2x: require('./assets/monash@2x.png').default
    },
    {
      date: 'Apr. 2019 - Jun. 2019',
      location: '<a href="https://goo.gl/maps/di4P6wCET5C2">Hangzhou, China</a>',
      title: 'Research Intern',
      affiliation: '<a href="http://www.zhejianglab.com/">Zhejiang Lab</a>',
      logo: require('./assets/zjlab.jpg').default,
      logo2x: require('./assets/zjlab@2x.jpg').default
    },
    {
      date: 'Apr. 2018 - Sep. 2018',
      location: '<a href="https://goo.gl/maps/4PtB3kMQoSK2">Beijing, China</a>',
      title: 'Research Intern',
      affiliation: '<a href="http://icity.jd.com/">Urban Computing Lab, JD Finance</a>',
      logo: require('./assets/jdf.png').default,
      logo2x: require('./assets/jdf@2x.png').default
    },
    {
      date: 'Jul. 2015 - Mar. 2016',
      location: '<a href="https://goo.gl/maps/di4P6wCET5C2">Hangzhou, China</a>',
      title: 'Research Intern',
      affiliation: '<a href="http://www.cad.zju.edu.cn">State Key Lab of CAD&CG, Zhejiang University</a>',
      logo: require('./assets/zju.png').default,
      logo2x: require('./assets/zju@2x.png').default
    }
  ],

  publications: [
    {
      teaser: require('./assets/corvizor.png').default,
      teaser2x: require('./assets/corvizor@2x.png').default,
      title: 'Towards Better Detection and Analysis of Massive Spatiotemporal Co-Occurrence Patterns',
      authors: 'Yingcai Wu, <b>Di Weng</b>, Zikun Deng, Jie Bao, Mingliang Xu, Zhangye Wang, ...',
      journal: 'To appear in IEEE Trans. Intell. Transp. Syst.',
      doi: '10.1109/TITS.2020.2983226'
    },
    {
      teaser: require('./assets/mcrs.png').default,
      teaser2x: require('./assets/mcrs@2x.png').default,
      title: 'Pareto-Optimal Transit Route Planning with Multi-Objective Monte-Carlo Tree Search',
      authors: '<b>Di Weng</b>, Ran Chen, Jianhui Zhang, Jie Bao, Yu Zheng, Yingcai Wu',
      journal: 'To appear in IEEE Trans. Intell. Transp. Syst.',
      pdf: 'https://www.researchgate.net/publication/339242293_Pareto-Optimal_Transit_Route_Planning_With_Multi-Objective_Monte-Carlo_Tree_Search',
      doi: '10.1109/TITS.2020.2964012'
    },
    {
      teaser: require('./assets/airvis.png').default,
      teaser2x: require('./assets/airvis@2x.png').default,
      title: 'AirVis: Visual Analytics of Air Pollution Propagation',
      authors: 'Zikun Deng, <b>Di Weng</b>, Jiahui Chen, Ren Liu, Zhibing Wang, Jie Bao, Yu Zheng, Yingcai Wu',
      journal: 'IEEE Trans. Vis. Comput. Graph. 26.1 (2020), 800-810. (IEEE VAST 2019)',
      pdf: 'https://zjuidg.org/files/AirVis.pdf',
      video: 'https://youtu.be/orjRmmGVT-4',
      doi: '10.1109/TVCG.2019.2934670'
    },
    {
      teaser: require('./assets/srvis.png').default,
      teaser2x: require('./assets/srvis@2x.png').default,
      title: 'SRVis: Towards Better Spatial Integration in Ranking Visualization',
      authors: '<b>Di Weng</b>, Ran Chen, Zikun Deng, Feiran Wu, Jingmin Chen, Yingcai Wu',
      journal: 'IEEE Trans. Vis. Comput. Graph. 25.1 (2019), 459-469. (IEEE InfoVis 2018)',
      pdf: 'http://zjuidg.org/files/srvis.pdf',
      video: 'https://www.youtube.com/watch?v=lenSZci4gy4',
      demo: 'https://srvis.zjuidg.org/',
      doi: '10.1109/TVCG.2018.2865126'
    },
    {
      teaser: require('./assets/reach.png').default,
      teaser2x: require('./assets/reach@2x.png').default,
      title: 'HomeFinder Revisited: Finding Ideal Homes with Reachability-Centric Multi-Criteria Decision Making',
      authors: '<b>Di Weng</b>, Heming Zhu, Jie Bao, Yu Zheng, Yingcai Wu',
      journal: 'Proc. of the ACM CHI 2018',
      pdf: 'http://zjuidg.org/files/reach.pdf',
      video: 'https://youtu.be/WcjMXAfuygg',
      doi: '10.1145/3173574.3173821'
    },
    {
      teaser: require('./assets/smartadp.png').default,
      teaser2x: require('./assets/smartadp@2x.png').default,
      title: 'SmartAdP: Visual Analytics of Large-scale Taxi Trajectories for Select&shy;ing Billboard Locations',
      authors: 'Dongyu Liu, <b>Di Weng</b>, Yuhong Li, Jie Bao, Yu Zheng, Huamin Qu, Yingcai Wu',
      journal: 'IEEE Trans. Vis. Comput. Graph. 23.1 (2017): 1-10. (IEEE VAST 2016)',
      pdf: 'http://zjuidg.org/files/smartadp.pdf',
      video: 'https://www.youtube.com/watch?v=Nkdup4YcX0A',
      doi: '10.1109/TVCG.2016.2598432',
      demo: 'http://smartadp.urban-computing.cn/'
    }
  ],

  awards: [
    {
      year: 2019,
      entries: [
        {
          where: 'National Scholarship'
        },
        {
          where: 'China Scholarship Council (CSC) Scholarship'
        },
        {
          where: 'Lu Zengyong CAD&CG Tech Award',
          what: 'Third Prize'
        }
      ]
    },
    {
      year: 2018,
      entries: [
        {
          where: 'Wen Chixiang Ph.D. Scholarship'
        },
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
