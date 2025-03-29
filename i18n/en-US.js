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
    title: 'Default Buckets',
    customTitle: 'Add Custom Bucket',
    addPlaceholder: 'Enter GitHub repository path, e.g.: user/repo',
    addButton: 'Add',
    invalidFormat: 'Please enter a valid GitHub repository path in format: user/repo',
    alreadyExists: 'This bucket already exists'
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
    apiLimit: 'Note: GitHub API has rate limits, frequent searches may temporarily fail to get results'
  },
  footer: {
    authorName: 'Charles Chin',
    authorLink: 'https://eallion.com',
    slogan: 'Scoop Search Online Tool',
    rights: '<a href="https://eallion.com" target="_blank">eallion</a>'
  }
};
