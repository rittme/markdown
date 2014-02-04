document.addEventListener('keyup', function (e) {
  if (e.keyCode == 'O'.charCodeAt(0) && e.ctrlKey && e.altKey) {
    open();
  } else if (e.keyCode == 'S'.charCodeAt(0) && e.ctrlKey && e.altKey) {
    save();
  }
});


function initPage() {
  editor = document.getElementById('editDiv');
  console.log("loaded");
  editor.focus();
}

function load() {
  console.log("Content loaded");
  if (localStorage.contents) {
      editor.innerText = localStorage.contents;
    }
}

function save() {
  console.log("Content saved");
  localStorage.contents = editor.innerHTML;
}