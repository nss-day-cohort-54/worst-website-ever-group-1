
const tooltip = new (function () {
    const node = document.createElement('img');
    node.className = 'tooltip';
    node.setAttribute('hidden', '');
    node.setAttribute('src', 'images/hotdogman.gif')
    document.body.appendChild(node);

    this.follow = function (event) {
        node.style.left = event.clientX + window.scrollX + 'px';
        node.style.top = event.clientY + window.scrollY + 'px';
    };

    this.show = function (event) {
        node.textContent = event.target.dataset.tooltip;
        node.removeAttribute('hidden');
    };

    this.hide = function () {
        node.setAttribute('hidden', '');
    };
})();

const links = document.querySelectorAll('body');

links.forEach(link => {
    link.onmouseover = tooltip.show;
    link.onmousemove = tooltip.follow;
    // link.onmouseout = tooltip.hide;
});