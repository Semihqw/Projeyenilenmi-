document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.toggle-item');
    const mainTitle = document.getElementById('main-title');

    // Tıklama olayını dinle
    items.forEach(function(item) {
        const title = item.querySelector('h2');
        const content = item.querySelector('.content');

        title.addEventListener('click', function () {
            // İçeriği aç/kapat
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            // Başlık büyütme
            mainTitle.classList.toggle('expand');
        });
    });
});
