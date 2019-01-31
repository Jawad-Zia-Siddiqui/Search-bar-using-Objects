var list = {
      
    "Death Note": "https://www.cartooncrazy.tv/anime/death-note/",
    "Berserk 2016": "https://www.cartooncrazy.tv/anime/berserk-2016/",
    "Shaman King": "https://www.cartooncrazy.tv/anime/shaman-king/",
    "Hellsing":"https://www.cartooncrazy.tv/anime/hellsing/",
    "Parasyte: The Maxim":"https://www.cartooncrazy.tv/anime/parasyte-the-maxim/",
    "Tokyo Ghoul": "https://www.cartooncrazy.tv/anime/tokyo-ghoul/",
    "Black Lagoon":"https://www.cartooncrazy.tv/anime/black-lagoon/",
    "Attack On Titan":"https://www.cartooncrazy.tv/anime/attack-on-titan/",
    "Gangsta":"https://www.cartooncrazy.tv/anime/gangsta/",
    "Overlord":"https://www.cartooncrazy.tv/anime/overlord/"







}




function listCreation() {



    for (key in list) {
        var l1 = document.createElement("li");
        var a1 = document.createElement("a");
        a1.setAttribute("href", list[key]);
        a1.setAttribute("target", "_blank");
        var txt = document.createTextNode(key);
        a1.appendChild(txt);
        l1.appendChild(a1);
        var b1 = document.getElementById("myUL");
        b1.appendChild(l1);
    }
}//<li><a href ="....">Attack....</a></li>
function myFunction() {

    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//onkeyup is an event.. kisi bhe key press hona pa function call ho raha hai