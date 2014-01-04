var file = require('file.js');
var gui = require('nw.gui');

var win = gui.Window.get();

var editor;

win.width = "862px";

function clickInput(id) {
  var event = document.createEvent('MouseEvents');
  event.initMouseEvent('click');
  document.getElementById(id).dispatchEvent(event);
}

document.addEventListener('keyup', function (e) {
  if (e.keyCode == 'O'.charCodeAt(0) && e.ctrlKey) {
    clickInput('open');
  } else if (e.keyCode == 'S'.charCodeAt(0) && e.ctrlKey) {
    clickInput('save');
  } else if (e.keyCode == 27) { // escape
    win.isFullscreen = !win.isFullscreen;
  }
});


function initPage() {

	document.getElementById('open').addEventListener('change', function (e) {
		console.log(this.value);
		file.open(this.value, function (contents){
			var tmp = document.createElement('div');
			editor.innerText = contents;
		});
	});

	document.getElementById('save').addEventListener('change', function (e) {
		file.save(this.value, editor.innerHTML);
	});

  editor = document.getElementById('editDiv');
  console.log("loaded");
  editor.focus();
}