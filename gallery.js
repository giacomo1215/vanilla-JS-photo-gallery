class VanillaGallery {
    constructor(config) {
        this.mainImage = document.getElementById(config.mainImageId);
        this.thumbnailGallery = document.getElementById(config.thumbnailsId);
        this.imagesEndpoint = config.imagesEndpoint;
        
        this.init();
    }

    init() {
        fetch(this.imagesEndpoint)
            .then(response => response.json())
            .then(data => this.renderGallery(data))
            .catch(error => console.error('Error loading gallery:', error));
    }

    renderGallery(images) {
        if (images.length > 0) {
            this.mainImage.src = images[0].href;
            
            const thumbnailsHtml = images.map(image => 
                `<div class="gallery-thumbnail">
                    <img src="${image.href}" 
                         alt="Thumbnail" 
                         class="thumbnail shadow-sm rounded"
                         loading="lazy">
                </div>`
            ).join('');

            this.thumbnailGallery.innerHTML = thumbnailsHtml;
            
            this.attachEventListeners();
        }
    }

    attachEventListeners() {
        this.thumbnailGallery.addEventListener('click', (e) => {
            const thumbnail = e.target.closest('.gallery-thumbnail img');
            if (thumbnail) {
                this.mainImage.src = thumbnail.src;
            }
        });
    }
}
