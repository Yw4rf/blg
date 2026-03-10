import type { SiteConfig, BadgeOptions } from './types';

export const site: SiteConfig = {
  /**
   *  TITLES NAMES SECTION
   */
  title: 'S1nnf',
  titleDefault: 'S1nnf',
  siteName: 'S1nnf',
  author: 'S1nnf',
  
  /**
   * SEO  
   */
  description: 'Cybersecurity Enthusiast focused on SOC, DFIR, Hands-on Penetration Testing, and active CTF Player.',
  url: 'https://s1nnf.netlify.app',
  keywords: 'S1nnf, Cybersecurity, Tobias Gabriel F., Hacking, Ethical Hacking, Blue Team Defense, CyberDefenders, HacktheBox, S1nnf',
  lang: 'en-US',
  locale: 'en-US',
  canonical: 'https://s1nnf.netlify.app',

  /**
   *  
   */
  favicon: '',
  avatarPath: '',
  
  /**
   * <head> 
   */
  head: `<meta name="S1nnf" content="S1nnf">
        <script>console.log("S1nnf")</script>`,

  /**
   * NAVBAR SECTION NAV
   */
  nav: [
    { title: 'Home', path: '/', icon: 'home' },
    { title: 'Blog', path: '/archives/', icon: 'archive' },
    { title: 'Tags', path: '/tags/', icon: 'tag' },
    { title: 'Categories', path: '/categories/', icon: 'folder' },
    { title: 'Projects', path: '/projects/', icon: 'link' },
    
  ],

  /**
   * TEXT TYPING 
   */
  textyping: [
    'Cybersecurity Enthusiast',
    'SOC, DFIR, Threat Hunting',
    'Computer Networks student'
  ],

  /**
   * WAILINE COMMENTS SECTION
   */
  comment: {
    waline: {
      serverURL: 'https://RHZbJvipWf8nQyIXcj8uH6tN-MdYXbMMI.api.lncldglobal.com', // 你的Waline服务器地址 //我加白名单了,别让我在日志里逮到你用(╯▔皿▔)╯
      lang: 'en-US', // 语言设置
      emoji: ['https://unpkg.com/@waline/emojis@1.1.0/weibo'], // 表情包设置
      requiredFields: [], // 必填项
      reaction: false, // 文章反应
      meta: ['nick', 'mail', 'link'], // 评论者的元数据
      wordLimit: 200, // 字数限制
      pageSize: 10 // 评论分页大小
    }
  },

  /**
   * SOCIAL LINKS SECTION CONTACT
   */
  medialinks: [
    { title: 'Telegram', url: 'https://t.me/s1nnf', icon: 'telegram' },
    { title: 'Gmail', url: 'mailto:yw4rf@protonmail.com', icon: 'gmail' },
    { title: 'Github', url: 'https://github.com/s1nnf', icon: 'github' },
  ],

  /**
   * PROYECTS SECTION
   */
  friendlinks_title: 'Projects',
  friendlinks_description: 'Explore a few of my projects.',
  /**  friendlinks: [
    {
      title: 'Astro',
      url: 'https://astro.build/',
      avatar: 'https://astro.build/favicon.svg',
      description: 'The web framework for content-driven websites'
    },
  
  ],
  */

  /**
   * FOOTER SECTION
   *  
   */
  footer: {
    //  
    buildtime: '2025-05-01T10:00:00', 

    // COPYRIGHT CC
    copyright: {
      enabled: true, 
      startYear: 2025, 
      customText: '' 
    },
  }
}
