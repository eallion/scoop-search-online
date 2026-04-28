# Scoop search online

- https://scoop.eallion.com

`scoop search <app>`

## scoop bucket known list

### Official Buckets

- https://github.com/ScoopInstaller/Main
- https://github.com/ScoopInstaller/Extras
- https://github.com/ScoopInstaller/Versions
- https://github.com/ScoopInstaller/Nonportable
- https://github.com/matthewjberger/scoop-nerd-fonts
- https://github.com/ScoopInstaller/Nirsoft
- https://github.com/niheaven/scoop-sysinternals
- https://github.com/ScoopInstaller/PHP
- https://github.com/ScoopInstaller/Java
- https://github.com/Calinou/scoop-games

### Third-Party Buckets

- https://github.com/chawyehsu/dorado
- https://github.com/hoilc/scoop-lemon
- https://github.com/cmontage/scoopbucket-third
- https://github.com/lvyuemeng/scoop-cn
- https://github.com/eallion/funle [wip]
- https://github.com/tldrw/scoop-security
- https://github.com/Scoopforge/Extras-CN
- https://github.com/Scoopforge/Extras-Plus
- https://github.com/TheRandomLabs/Scoop-Spotify

## Internationalization (i18n)

This project supports multiple languages through the i18n system:

- English (en-US): [i18n/en-US.js](i18n/en-US.js)
- Chinese (zh-CN): [i18n/zh-CN.js](i18n/zh-CN.js)

To add a new language:

1. Create a new file in the `i18n` directory with the language code (e.g., `i18n/fr-FR.js`)
2. Export a default object with the translation keys
3. Add the language to the `messages` object in [i18n/index.js](i18n/index.js)
4. Add the language option to the language selector in [index.html](index.html)

## Development

This project now uses a modern build system with pnpm and Tailwind CSS.

### Prerequisites

- Node.js 24 or higher
- pnpm 10 or higher

### Setup

1. Install dependencies:

   ```
   pnpm install
   ```

2. Build the project:

   ```
   pnpm run build
   ```

3. For development with automatic rebuilding:

   ```
   pnpm run dev
   ```

### Project Structure

- `src/input.css`: Main CSS file with Tailwind directives
- `dist/output.css`: Generated Tailwind CSS file
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration
- `package.json`: Project dependencies and scripts
