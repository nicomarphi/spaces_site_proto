# Shopify NY Custom Storefront

A modern, responsive homepage for Shopify NY built with React, Vite, and Tailwind CSS.

## Features

- **Hero Statement**: Full-screen section with bold messaging
- **Event Carousel**: Horizontally scrollable event posters with RSVP functionality
- **Sizzle Reel**: Video section with call-to-action
- **Upcoming Events Grid**: Grid layout displaying all upcoming events
- **Our Space CTA**: Information about hosting events at Shopify NY
- **Newsletter Signup**: Email capture form
- **Footer**: Complete footer with links, hours, and social media

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Mock Data** - Local JSON file for events data

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── HeroStatement.jsx
│   ├── EventCarousel.jsx
│   ├── SizzleReel.jsx
│   ├── UpcomingEventsGrid.jsx
│   ├── OurSpaceCTA.jsx
│   ├── NewsletterSignup.jsx
│   └── Footer.jsx
├── data/
│   └── events.json
├── App.jsx
├── main.jsx
└── index.css
```

## Event Data

Events are stored in `src/data/events.json` with the following structure:
- `title`: Event name
- `date`: Event date
- `status`: "upcoming", "sold_out", or "past"
- `splashUrl`: RSVP link
- `posterImage`: Event poster image URL
- `tag`: Event category (Workshop, Pop-Up, Panel, etc.)

## Customization

### Adding New Events
Edit `src/data/events.json` to add or modify events.

### Styling
All styling uses Tailwind CSS classes. Modify component files to adjust styles.

### Video Content
Replace the placeholder video in `SizzleReel.jsx` with actual video content.

### Images
Replace placeholder images with actual Shopify NY assets.

## Future Enhancements

- Connect to Shopify Hydrogen for dynamic data
- Add animations and transitions
- Implement actual newsletter signup functionality
- Add event filtering and search
- Create individual event pages

## License

© 2024 Shopify Inc. All rights reserved.
