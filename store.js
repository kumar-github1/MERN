const mobile = [{
    id: 1,
    name: 'Samsung Galaxy S25 Ultra',
    image: 'https://m.media-amazon.com/images/I/71-d7XDbhIL._AC_UY218_.jpg',
    operatingSystem: 'Android 16',
    camera: '12 MP',
    battery: '5000 mAh'
},
{
    id: 2,
    name: 'Iphone 15 pro max',
    image: 'https://m.media-amazon.com/images/I/61giwQtR1qL._AC_UY218_.jpg',
    operatingSystem: 'IOS 11',
    camera: '12 MP',
    battery: '5000 mAh'
}
    , {
    id: 3,
    name: 'OnePlus 9 Pro',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/r/r/-original-imagdm3mhu4hu4xx.jpeg?q=70',
    operatingSystem: 'Android 16',
    camera: '12 MP',
    battery: '5000 mAh'
}

]
let cartData = [];
function storeData(prodid) {
    if (localStorage.length == 0) {
        localStorage.setItem('cartData', JSON.stringify([]));
        cartData = [];
    }
    cartData.push(mobile[prodid - 1]);
    localStorage.setItem('cartData', JSON.stringify(cartData));
}


for (let i = 0; i < mobile.length; i++) {
    document.getElementById('root').innerHTML += `<div id='container'><img src=${mobile[i].image} alt= ${mobile[i].name} />
    <div>
    <h2>${mobile[i].name}</h2>
    <h3>${mobile[i].operatingSystem}</h3>
    <h4>${mobile[i].camera}</h4>
    <h5>${mobile[i].battery}</h5>
    <button class="buynow" onclick="storeData(${mobile[i].id})"}> Buy Now</button>
    </div>
    </div>`


}