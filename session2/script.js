let index = 0;
const images = ['https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/03/kingpin-daredevil.jpg', 'https://4kwallpapers.com/images/walls/thumbs_3t/21603.jpg']
const corousalImg = document.getElementsByClassName('corousal-img');
console.log(corousalImg);
corousalImg[index].style.opacity = '1';

function next() {
    corousalImg[index].style.opacity = '0.5';
    corousalImg[index].style.scale = '1';
    index = (index + 1) % images.length;
    document.getElementById('container').style.backgroundImage = `url("${images[index]}")`;
    corousalImg[index].style.opacity = '1';
    corousalImg[index].style.scale = '1.2';

}
function prev() {
    corousalImg[index].style.opacity = '0.5';
    corousalImg[index].style.scale = '1';
    index = (index - 1 + images.length) % images.length;
    document.getElementById('container').style.backgroundImage = `url("${images[index]}")`;
    corousalImg[index].style.opacity = '1';
    corousalImg[index].style.scale = '1.2';

}