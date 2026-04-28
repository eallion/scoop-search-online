export default {
  title: 'Scoop 软件搜索',
  subtitle: '实时搜索 Scoop 软件包，复制安装命令，轻松管理您的 Windows 软件。安装',
  search: {
    placeholder: '输入要搜索的软件名称，例如：git, vscode, pnpm...',
    button: '搜索',
    commandNote: '搜索过程等同于命令：',
    emptyPrompt: '请输入搜索关键词'
  },
  bucket: {
    title: '官方 Buckets',
    officialTitle: '官方 Buckets',
    thirdPartyTitle: '第三方 Buckets'
  },
  results: {
    title: '搜索结果',
    count: '个',
    sortByName: '按名称',
    sortByBucket: '按源',
    noDescription: '无描述',
    copyCommand: '复制安装命令',
    homepage: '主页',
    noResults: {
      title: '未找到匹配的软件',
      subtitle: '请尝试更改搜索关键词或添加更多的 bucket 源'
    },
    searchFailed: '搜索失败，请稍后重试',
    copied: '命令已复制到剪贴板',
    apiLimit: '注意：<span class="text-amber-600 dark:text-amber-400 font-medium">GitHub API 有请求速率限制</span>，频繁搜索可能导致暂时无法获取结果',
    moreBuckets: '更多仓库请参考：<a href="https://rasa.github.io/scoop-directory/by-stars.html" target="_blank">https://rasa.github.io/scoop-directory/by-stars.html</a>'
  },
  footer: {
    authorName: '大大的小蜗牛',
    authorLink: 'https://eallion.com',
    slogan: 'Scoop 软件搜索工具',
    rights: '<a href="https://eallion.com" target="_blank">eallion</a>'
  }
};
