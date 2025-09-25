# Bharat Pashudhan - Static Website

This is the static HTML version of the Bharat Pashudhan application, converted from the original Node.js/Express application.

## File Structure

```
bharatpashudhan/
├── index.html              # Home page
├── login.html              # Login page
├── register.html           # Animal registration form
├── about.html              # About us and contact page
├── css/
│   ├── styles.css          # Main styles for home page
│   ├── login.css           # Login page styles
│   ├── register.css        # Registration form styles
│   └── about.css           # About page styles
├── js/
│   ├── register.js         # Registration form functionality
│   └── about.js            # Contact form functionality
├── public/                 # Static assets (images, etc.)
│   ├── bharat_pashudhan_logo.png
│   ├── BHARAT-PASHUDHAN.jpg
│   ├── cow.png
│   ├── farmer.png
│   ├── form_background.jpg
│   ├── image.png
│   ├── loginbackground.jpg
│   ├── nddb_logo.png
│   └── newDAHD_logo.png
└── README_STATIC.md        # This file
```

## Features

### Home Page (index.html)
- Header with navigation
- Key statistics display
- 3-step process explanation
- Information cards with images
- Footer with contact information

### Login Page (login.html)
- Clean login form with glassmorphism design
- Background image with blur effect
- Responsive design

### Registration Page (register.html)
- Multi-step form with progress indicator
- Image upload functionality
- Breed detection simulation
- Form validation
- Responsive design

### About Page (about.html)
- Information about Bharat Pashudhan
- Contact form
- Contact details
- Responsive design

## How to Use

1. Open `index.html` in any web browser
2. Navigate between pages using the navigation menu
3. All functionality is client-side (no server required)

## Dependencies

- Bootstrap 5.3.3 (CDN)
- Font Awesome 6.4.0 (CDN)
- No additional dependencies required

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- No JavaScript framework dependencies

## Notes

- All images are referenced from the `public/` directory
- External CDN resources are used for Bootstrap and Font Awesome
- The site is fully static and can be hosted on any web server
- Original Node.js files can be removed after verification
