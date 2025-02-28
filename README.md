# Vanilla JS Photo Gallery

A lightweight, dependency-free photo gallery with thumbnail support and main image display.

## Features

- Pure JavaScript implementation
- Responsive thumbnail grid
- Main image display with thumbnail navigation
- Easy to integrate
- Customizable styling

## Installation

```bash
npm install vanilla-js-photo-gallery
```

## Usage

1. Include the CSS and JS files in your HTML:
```html
<link rel="stylesheet" href="gallery.css">
<script src="gallery.js"></script>
```

2. Add the HTML structure:
```html
<div class="gallery-container">
    <img id="mainImage" src="default-image.jpg" alt="Main Image" class="main-image" />
    <div class="thumbnails-container" id="thumbnailGallery"></div>
</div>
```

3. Initialize the gallery:
```javascript
const gallery = new VanillaGallery({
    mainImageId: 'mainImage',
    thumbnailsId: 'thumbnailGallery',
    imagesEndpoint: 'your-images-endpoint'
});
```

## Required JSON Format

The gallery expects your endpoint to return a JSON array of objects with the following structure:

```json
[
    {
        "href": "path/to/image1.jpg"
    },
    {
        "href": "path/to/image2.jpg"
    },
    {
        "href": "path/to/image3.jpg"
    }
]
```

Example endpoint response:
```json
[
    {
        "href": "/images/product1-main.jpg"
    },
    {
        "href": "/images/product1-angle1.jpg"
    },
    {
        "href": "/images/product1-angle2.jpg"
    }
]
```

## License

MIT License - See LICENSE file for details
