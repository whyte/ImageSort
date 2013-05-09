//
var images = document.querySelectorAll('.image'), el = null;

for (var i = 0; i < images.length; i++) {
  el = images[i];
	
  el.setAttribute('draggable', 'true');

  addEvent(el, 'dragstart', function (e) {
    e.dataTransfer.effectAllowed = 'copy'; // only dropEffect='copy' will be dropable
    e.dataTransfer.setData('Image', this.id); // required otherwise doesn't work
  });
}

function dropimage(target, event) {
    var image = event.dataTransfer.getData('Image');
    target.appendChild(document.getElementById(image)); 
}
