
const albums = document.querySelectorAll('.album');

albums.forEach(album => {
    album.addEventListener('click', () => {
        album.classList.toggle('expanded');
    });
});

const menuButton = document.querySelector('.mobile-menu-btn');
const menuMobile = document.querySelector('.mobile-menu');
const menuOptions = document.querySelectorAll('.mobile-menu li a');

menuButton.addEventListener('click', () => {
    menuMobile.classList.toggle('active')
})

for (option of menuOptions) {
    option.addEventListener('click', () => {
        if(menuMobile.classList.contains('active')) {
            menuMobile.classList.toggle('active')
        }
    })
}