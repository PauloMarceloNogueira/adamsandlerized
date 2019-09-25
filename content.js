// TODO - Fix CORS to use adamsandlerAPI
// https://github.com/PauloMarceloNogueira/AdamSandlersAPI
const pics = [
  'https://c8.alamy.com/comp/GEG6JX/comedian-adam-sandler-in-the-mid-1980s-marzullomediapunch-GEG6JX.jpg',
  'https://i.ytimg.com/vi/zXZPITOZ7TY/hqdefault.jpg',
  'https://coxrare.files.wordpress.com/2017/02/capture74.png?w=1200&h=627&crop=1',
  'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2015/07/pixels.jpg',
  'https://cinemasips.files.wordpress.com/2014/04/the-wedding-singer-9.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/1c/cc/ea/1ccceaf5c1a7a00a646ba4e490029034.jpg',
  'https://lh6.googleusercontent.com/-gZqnBFiK9z8/TwI5PfwC1ZI/AAAAAAAAARw/OHMqjx7Mrlk/s1600/Adam-Sandler%252520%2525281%252529.jpg',
  'https://cdn1.thr.com/sites/default/files/2015/07/pixels.jpg',
  'https://c8.alamy.com/comp/JM9WJX/adam-sandler-cannes-film-festival-20-05-2017-JM9WJX.jpg',
  'http://www.cheatsheet.com/wp-content/uploads/2015/01/456425784.jpg',
  'https://i.pinimg.com/originals/fb/6f/f2/fb6ff24b6d4998cb270cb69236efd242.jpg',
  'https://www.fromthemovie.com/wp-content/uploads/2019/06/Sunglasses-Adam-Sandler-Murder-Mystery.jpg',
  'https://i.pinimg.com/originals/94/ee/07/94ee079cf3c7bd9b98cd79703b478960.jpg',
  'https://c8.alamy.com/comp/H82HY6/adam-sandler-joe-dirt-la-premier-westwood-la-usa-01-april-2001-H82HY6.jpg',
  'https://ssl.c.photoshelter.com/img-get/I0000zL45SHF4iB0/s/600/600/SANDLER21024-05.jpg',
  'https://i.pinimg.com/originals/92/c0/ec/92c0ec9223a11534a0306a460997d1c7.jpg',
  'https://di2ponv0v5otw.cloudfront.net/posts/2018/01/13/5a5a988d077b9765576538b5/s_5a5a98a9d39ca26bf5a16ff3.jpg',
  'https://c8.alamy.com/comp/H82HY7/adam-sandler-joe-dirt-la-premier-westwood-la-usa-01-april-2001-H82HY7.jpg',
  'https://i.redd.it/3tp1g2yw0ey01.jpg',
  'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1978256582480750',
  'http://www3.pictures.zimbio.com/pc/Adam+Sandler+Adam+Sandler+John+McEnroe+Play+pBEVirMWd5Xl.jpg',
  'https://i.ytimg.com/vi/9LvgzVmAFxo/maxresdefault.jpg',
  'https://i.cbc.ca/1.4569394.1520611915!/fileImage/httpImage/image.jpg_gen/derivatives/original_780/adam-sandler-st-clair.jpg',
  'https://i.ytimg.com/vi/cKKJN6wXIrA/hqdefault.jpg',
  'https://i.dailymail.co.uk/i/pix/2015/03/29/03/2716EDC200000578-0-image-a-80_1427594819547.jpg',
  'https://ichef.bbci.co.uk/news/660/cpsprodpb/7446/production/_102266792_sandler.jpg',
  'http://www.adamsandlerinterviews.com/_Media/282058_10150241998163616_med.jpeg',
  'https://i.ytimg.com/vi/iv6d4754WIE/maxresdefault.jpg',
  'https://www.aceshowbiz.com/images/wennpic/adam-sandler-just-go-with-it-photocall-01.jpg',
  'https://i.ytimg.com/vi/zertZQpKBHk/maxresdefault.jpg'
];
setInterval(() => {
  const images = document.getElementsByTagName('img');
  const arrImages = Array.prototype.slice.call(images);
  for (let index = 0; index < arrImages.length; index++) {
    if (!arrImages[index].getAttribute('changed')) {
      arrImages[index].src = pics[Math.floor(Math.random() * 29)];
      arrImages[index].setAttribute('changed', true);
    }
  }
}, 1000);
