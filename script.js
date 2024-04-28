//your code here
function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}
function allowDrop(event) {
    event.preventDefault();
}
function drop(event) {
    event.preventDefault();
    var dragId = event.dataTransfer.getData('text');
    var dropId = event.target.id;
    var dragImage = document.getElementById(dragId).style.backgroundImage;
    var dropImage = document.getElementById(dropId).style.backgroundImage;
    document.getElementById(dragId).style.backgroundImage = dropImage;
    document.getElementById(dropId).style.backgroundImage = dragImage;
}