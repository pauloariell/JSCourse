var xhr = new XMLHttpRequest();
var div = document.querySelector('#json')

xhr.open('GET','https://api.github.com/users/pauloariell');
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4){
        var text = document.createTextNode( xhr.responseText);
        div.appendChild(text);
    }
}