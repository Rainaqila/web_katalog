const c = document.getElementById('carousel');
const images = ["preorder.jpg", "preorder2.jpg","fashion2.jpeg"];

setInterval(() => {
    const rImg = images[Math.round(Math.random() * 2)];

    c.src = './assets/images/' + rImg;
}, 1500);