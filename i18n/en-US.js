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
    thirdPartyTitle: 'Third-Party Buckets'
  },
  results: {
    title: 'Search Results',
    count: 'items',
    sortByName: 'By Name',
    sortByBucket: 'By Bucket',
    noDescription: 'No description',
    copyCommand: 'Copy Install Command',
    homepage: 'Homepage',
    noResults: {
      title: 'No matching packages found',
      subtitle: 'Try changing your search terms or adding more buckets'
    },
    searchFailed: 'Search failed, please try again later',
    copied: 'Command copied to clipboard',
    apiLimit: 'Note: <span class="text-amber-600 dark:text-amber-400 font-medium">GitHub API has rate limits</span>, frequent searches may temporarily fail to get results',
    moreBuckets: 'For more repositories, see: <a href="https://rasa.github.io/scoop-directory/by-stars.html" target="_blank">https://rasa.github.io/scoop-directory/by-stars.html</a>'
  },
  footer: {
    authorName: 'Charles Chin',
    authorLink: 'https://eallion.com',
    slogan: 'Scoop Search Online Tool',
    rights: '<a href="https://eallion.com" target="_blank">eallion</a>'
  }
};
