document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.classList.toggle('active');

        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});