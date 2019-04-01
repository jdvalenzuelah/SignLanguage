var letters = [
    {'letter':'A', 'image':'media/A.jpg'},
    {'letter':'B', 'image':'media/B.jpeg'},
    {'letter':'C', 'image':'media/C.jpg'},
    {'letter':'CH', 'image':'media/CH.jpg'},
    {'letter':'D', 'image':'media/D.gif'},
    {'letter':'E', 'image':'media/E.jpg'},
    {'letter':'F', 'image':'media/F.gif'},
    {'letter':'G', 'image':'media/G.jpg'},
    {'letter':'H', 'image':'media/H.jpg'},
    {'letter':'I', 'image':'media/I.jpg'},
    {'letter':'J', 'image':'media/J.gif'},
    {'letter':'K', 'image':'media/K.jpg'},
    {'letter':'L', 'image':'media/L.jpg'},
    {'letter':'LL', 'image':'media/LL.gif'},
    {'letter':'M', 'image':'media/M.jpg'},
    {'letter':'N', 'image':'media/N.jpg'},
    {'letter':'Ñ', 'image':'media/Ñ.jpg'},
    {'letter':'O', 'image':'media/O.jpg'},
    {'letter':'P', 'image':'media/P.jpg'},
    {'letter':'Q', 'image':'media/Q.jpg'},
    {'letter':'R', 'image':'media/R.jpg'},
    {'letter':'RR', 'image':'media/RR.gif'},
    {'letter':'S', 'image':'media/S.gif'},
    {'letter':'T', 'image':'media/T.jpeg'},
    {'letter':'U', 'image':'media/U.jpg'},
    {'letter':'V', 'image':'media/V.jpeg'},
    {'letter':'W', 'image':'media/W.jpg'},
    {'letter':'X', 'image':'media/X.jpeg'},
    {'letter':'Y', 'image':'media/Y.jpeg'},
    {'letter':'Z', 'image':'media/Z.jpeg'},
];

//Lista de los dias de la semana
var days = [
    {'day':'Domingo', 'image':'diasSemana/Domingo.gif'},
    {'day':'Lunes', 'image':'diasSemana/Lunes.gif'},
    {'day':'Martes', 'image':'diasSemana/Martes.gif'},
    {'day':'Miercoles', 'image':'diasSemana/Miercoles.gif'},
    {'day':'Jueves', 'image':'diasSemana/Jueves.gif'},
    {'day':'Viernes', 'image':'diasSemana/Viernes.gif'},
    {'day':'Sabado', 'image':'diasSemana/Sabado.gif'}
]
var active = 0; 

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });

//Handle the image changes
function changeImage_Albaeto(id) {
    switch(id){
        case "left":
            if (active > 0) {
                active -= 1;
            } else {
                active = letters.length - 1;
            }
        break;

        case "right":
            if (active < letters.length-1) {
                active += 1;
            } else {
                active = 0;
            }
        break;

        default:
            active = parseInt(id, 10);
        break;

    }
    document.getElementById("pages").innerHTML = "";
    paginationFiller();
}

//Function day of the week
function changeImage_days(id){
    switch(id){
        case "left":
            if (active > 0) {
                active -= 1;
            } else {
                active = days.length - 1;
            }
        break;

        case "right":
            if (active < days.length-1) {
                active += 1;
            } else {
                active = 0;
            }
        break;

        default:
            active = parseInt(id, 10);
        break;
    }
    document.getElementById("pages").innerHTML = "";
    paginationFiller_Days();
}

//Generates the pagination for the letters
function paginationFiller() {
    // Modifying an HTML element: adding an <li>
    var liClass = "waves-effect";
    for(var i = 0; i < letters.length; i++) {
        if(i == active){
            liClass = "active blue";
        } else {
            liClass = "waves-effect";
        }
        document.getElementById("pages").innerHTML += '<li onclick="changeImage('+ i +')"jumpTo value= "'+ i +'" class="'+ liClass +'"><a href="#!">'+ letters[i].letter  +'</a></li>';
    }
    var image = document.getElementById('letter');
    var title = document.querySelector('.letter');
    image.src = letters[active].image;
    title.innerText = letters[active].letter; 
}

//Generates the pagination for the letters
function paginationFiller_Days() {
    // Modifying an HTML element: adding an <li>
    var liClass = "waves-effect";
    for(var i = 0; i < days.length; i++) {
        if(i == active){
            liClass = "active blue";
        } else {
            liClass = "waves-effect";
        }
        document.getElementById("pages").innerHTML += '<li onclick="changeImage_days('+ i +')"jumpTo value= "'+ i +'" class="'+ liClass +'"><a href="#!">'+ days[i].day  +'</a></li>';
    }
    var image = document.getElementById('day');
    image.src = days[active].image;
}


/*
<li class="active"><a href="#!">1</a></li>
<li class="waves-effect"><a href="#!">2</a></li>
*/