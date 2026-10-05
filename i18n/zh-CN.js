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
    thirdPartyTitle: '第三方 Buckets',
    customTitle: '自定义 Buckets',
    selectAll: '全选',
    deselectAll: '全不选',
    reset: '恢复默认',
    clearCache: '清理缓存',
    cacheCleared: '本地缓存已清空',
    addCustom: '添加自定义 Bucket',
    customPlaceholder: '输入 owner/repo，例如：user/my-bucket',
    customAddBtn: '添加',
    customAlreadyExists: '该 Bucket 已存在',
    customInvalid: '格式错误，必须为 owner/repo 格式',
    remove: '移除'
  },
  token: {
    button: 'API 配置',
    title: 'GitHub API 配置',
    desc: '配置个人的 GitHub Personal Access Token 可将每小时请求限额从 60 次提升至 5,000 次。Token 仅保存在您的本地浏览器中，绝不会被上传。',
    placeholder: '输入您的 GitHub Token (ghp_... 或 github_pat_...)',
    save: '保存',
    clear: '清除',
    test: '测试连通性与查询配额',
    help: '如何获取 Token？',
    helpDesc: '前往 GitHub -> Settings -> Developer settings -> Personal access tokens 生成一个无任何额外权限（无需勾选任何 Scope）的公开访问 Token 即可。',
    saved: 'Token 已保存',
    cleared: 'Token 已清除',
    statusTitle: '当前 API 配额状态',
    statusLimit: '总限额：',
    statusRemaining: '剩余可用：',
    statusReset: '重置时间：',
    unauthenticated: '未配置 Token（访客模式，60次/小时）',
    authenticated: '已配置 Token（用户模式，5,000次/小时）',
    testFailed: '测试失败，请检查 Token 是否有效或网络是否通畅'
  },
  results: {
    title: '搜索结果',
    count: '个',
    sortByName: '按名称',
    sortByBucket: '按源',
    noDescription: '无描述',
    copyCommand: '复制安装命令',
    copyAddBucket: '复制添加源命令',
    copyFullCommand: '复制完整命令 (加源+安装)',
    homepage: '主页',
    noResults: {
      title: '未找到匹配的软件',
      subtitle: '请尝试更改搜索关键词或勾选更多的 bucket 源'
    },
    searchFailed: '搜索失败，请稍后重试',
    copied: '命令已复制到剪贴板',
    apiLimit: '注意：<span class="text-amber-600 dark:text-amber-400 font-medium">GitHub API 有请求速率限制</span>，若频繁搜索受限，请点击右上角配置个人 Token',
    rateLimitWarning: '已触发 GitHub API 速率限制！当前 IP 额度已用尽，请配置个人 Token 解除限制。',
    configTokenBtn: '配置 GitHub Token',
    moreBuckets: '更多仓库请参考：<a href="https://rasa.github.io/scoop-directory/by-stars.html" target="_blank">https://rasa.github.io/scoop-directory/by-stars.html</a>'
  },
  footer: {
    authorName: '大大的小蜗牛',
    authorLink: 'https://eallion.com',
    slogan: 'Scoop 软件搜索工具',
    rights: '<a href="https://eallion.com" target="_blank">eallion</a>'
  }
};
