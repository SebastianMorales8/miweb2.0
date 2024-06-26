document.addEventListener('DOMContentLoaded', function () {
    var aboutLink = document.getElementById('about-link');
    var contactLink = document.getElementById('contact-link');
    var aboutTooltip = document.getElementById('about-tooltip');
    var contactTooltip = document.getElementById('contact-tooltip');

    function showTooltip(link, tooltip) {
        var rect = link.getBoundingClientRect();
        tooltip.style.top = rect.bottom + window.scrollY + 'px';
        tooltip.style.left = rect.left + 'px';
        tooltip.classList.add('visible');
    }

    function hideTooltip(tooltip) {
        tooltip.classList.remove('visible');
    }

    aboutLink.addEventListener('mouseover', function () {
        showTooltip(aboutLink, aboutTooltip);
    });

    aboutLink.addEventListener('mouseout', function () {
        hideTooltip(aboutTooltip);
    });

    contactLink.addEventListener('mouseover', function () {
        showTooltip(contactLink, contactTooltip);
    });

    contactLink.addEventListener('mouseout', function () {
        hideTooltip(contactTooltip);
    });
});