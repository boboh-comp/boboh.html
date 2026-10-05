const ariellePhoto = document.querySelector('.foto-1');

if (ariellePhoto) {
    const defaultImage = ariellePhoto.dataset.default;
    const altImage = ariellePhoto.dataset.alt;

    ariellePhoto.src = defaultImage || ariellePhoto.src;

    ariellePhoto.addEventListener('click', () => {
        const isAlt = ariellePhoto.dataset.mode === 'alt';
        const nextImage = isAlt ? defaultImage : altImage;

        ariellePhoto.dataset.mode = isAlt ? 'default' : 'alt';

        setTimeout(() => {
            ariellePhoto.src = nextImage || ariellePhoto.src;
            document.body.classList.toggle('dark-theme');
        }, 800);
    });
}
