export default {
  title: 'Scoop Search',
  subtitle: 'Search Scoop packages easily, copy install commands. Install',
  search: {
    placeholder: 'Enter package name to search, e.g.: git, vscode, pnpm...',
    button: 'Search',
    commandNote: 'Equivalent to command:',
    emptyPrompt: 'Please enter search keywords'
  },
  bucket: {
    title: 'Official Buckets',
    officialTitle: 'Official Buckets',
    thirdPartyTitle: 'Third-Party Buckets',
    customTitle: 'Custom Buckets',
    selectAll: 'Select All',
    deselectAll: 'Deselect All',
    reset: 'Reset Defaults',
    clearCache: 'Clear Cache',
    cacheCleared: 'Local cache cleared',
    addCustom: 'Add Custom Bucket',
    customPlaceholder: 'Enter owner/repo, e.g.: user/my-bucket',
    customAddBtn: 'Add',
    customAlreadyExists: 'Bucket already exists',
    customInvalid: 'Invalid format, must be owner/repo',
    remove: 'Remove'
  },
  token: {
    button: 'API Config',
    title: 'GitHub API Configuration',
    desc: 'Configuring a personal GitHub Token increases the hourly rate limit from 60 to 5,000 requests. The token is only saved in your local browser and never uploaded.',
    placeholder: 'Enter GitHub Token (ghp_... or github_pat_...)',
    save: 'Save',
    clear: 'Clear',
    test: 'Check Rate Limit',
    help: 'How to get a Token?',
    helpDesc: 'Go to GitHub -> Settings -> Developer settings -> Personal access tokens to generate a token with no extra permissions (no scopes required for public repos).',
    saved: 'Token saved',
    cleared: 'Token cleared',
    statusTitle: 'Current Rate Limit Status',
    statusLimit: 'Total Limit: ',
    statusRemaining: 'Remaining: ',
    statusReset: 'Reset Time: ',
    unauthenticated: 'No Token Configured (Guest mode, 60 req/hr)',
    authenticated: 'Token Configured (User mode, 5,000 req/hr)',
    testFailed: 'Test failed, please check if the token is valid or network is available'
  },
  results: {
    title: 'Search Results',
    count: 'items',
    sortByName: 'By Name',
    sortByBucket: 'By Bucket',
    noDescription: 'No description',
    copyCommand: 'Copy Install Command',
    copyAddBucket: 'Copy Add Bucket Command',
    copyFullCommand: 'Copy Full Commands (Add + Install)',
    homepage: 'Homepage',
    noResults: {
      title: 'No matching packages found',
      subtitle: 'Try changing your search terms or enabling more buckets'
    },
    searchFailed: 'Search failed, please try again later',
    copied: 'Command copied to clipboard',
    apiLimit: 'Note: <span class="text-amber-600 dark:text-amber-400 font-medium">GitHub API has rate limits</span>. If limited, click API Config to set your personal token.',
    rateLimitWarning: 'GitHub API rate limit exceeded! Please configure your GitHub token to continue.',
    configTokenBtn: 'Configure GitHub Token',
    moreBuckets: 'For more repositories, see: <a href="https://rasa.github.io/scoop-directory/by-stars.html" target="_blank">https://rasa.github.io/scoop-directory/by-stars.html</a>'
  },
  footer: {
    authorName: 'Charles Chin',
    authorLink: 'https://eallion.com',
    slogan: 'Scoop Search Online Tool',
    rights: '<a href="https://eallion.com" target="_blank">eallion</a>'
  }
};
