var elem = document.querySelector('#photo');
var msnry = new Masonry(elem, {
  itemSelector: '.item',
  columnWidth: '.item',
  percentPosition: true
});

// Chờ toàn bộ ảnh load xong rồi mới layout
imagesLoaded(elem, function() {
  msnry.layout();
});