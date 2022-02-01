const base = process.env.NODE_ENV === 'production' ? '/single' : '';
const { resolve } = require('path');

module.exports = {
  title: 'vibe',
  description: '',
  // 扫描srcIncludes里面的 *.md文件
  srcIncludes: ['src'],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'vibe'
    [`single`]: resolve('./src'),
  },
  base,
  themeConfig: {
    // logo: '../logo.svg',
    repo: '/single',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};
