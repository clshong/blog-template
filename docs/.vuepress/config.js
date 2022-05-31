module.exports = {
  title: 'goddits \' s Blog',
  description: 'One small step forward every day',
  // 主题
  theme: 'reco',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  themeConfig: {
    // 作者信息
    author: 'goddits',
    // logo
    logo:'/Avatar.jpg',
    // 备案
    record: '赣ICP备2021008783号',
    recordLink: 'https://beian.miit.gov.cn/#/Integrated/index',
    // 项目开始时间，只填写年份
    startYear: '2019',
    type: 'blog',
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    //头像
    authorAvatar: '/Avatar.jpg',
     // 博客配置
     blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      },
    },
    nav: [
      { text: 'HOME', link: '/',icon: 'reco-home'},
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'Contact',icon: 'reco-bokeyuan',
      items: [
        { text: 'Github', link: 'https://github.com/goddits' },
        { text: '掘金', link: 'https://juejin.cn/user/4046680706782269' }
    ]
    },
  ],
  subSidebar: 'auto'//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
  }
}