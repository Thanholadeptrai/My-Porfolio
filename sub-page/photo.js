var elem = document.querySelector('#photo');
var msnry = new Masonry(elem, {
  itemSelector: '.item',
  columnWidth: '.item',
  percentPosition: true
});