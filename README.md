# KJCH's Personal Website

This is a personal website built with Vue 3, Vite, TypeScript, and Tailwind CSS. It features a responsive design, internationalization support, and integration with Google Tag Manager.

## Features

- Responsive design for various screen sizes
- Internationalization (i18n) support for English and Chinese
- Google Tag Manager integration
- Blog section
- Projects showcase
- About page

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Build for production: `npm run build`

## Google Tag Manager Configuration

To configure Google Tag Manager:

1. Sign up for a Google Tag Manager account if you haven't already
2. Create a new container for your website
3. Replace `GTM-XXXXXXX` in `index.html` with your GTM container ID
4. Publish your GTM container

## Customization

- Update the content in `src/locales/en.json` and `src/locales/zh.json` for internationalization
- Modify the color scheme in `tailwind.config.js`
- Add or remove pages by updating the router in `src/main.ts`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).