const DrawerInitiator = {
    init({
        hamburger,
        navLinks,
        links,
        drawer,
        content,
    }) {
        hamburger.addEventListener('click', (event) => {
            this._toggleDrawer(event, drawer, navLinks, links);
        });

        content.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });
    },

    _toggleDrawer(event, drawer, navLinks, links) {
        event.stopPropagation();
        navLinks.classList.toggle('open');
        links.forEach((link) => {
            link.classList.toggle('fade');
        });
        drawer.classList.toggle('toggle');
    },

    _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('open');
    },
};

export default DrawerInitiator;