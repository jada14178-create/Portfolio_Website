// ===============================
// LIGHTBOX FUNCTIONALITY
// ===============================
const thumbs = document.querySelectorAll('.thumb');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        const imgSrc = thumb.dataset.img || 'https://via.placeholder.com/600';
        const img = document.createElement('img');
        img.src = imgSrc;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
        lightbox.style.display = 'flex';
    });
});

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.style.display = 'none';
});
