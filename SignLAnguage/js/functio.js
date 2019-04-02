//lista de los numeros
//Lista de los dias de la semana
var numbers = [
    {'number':'1', 'image':'diasSemana/1.jpeg'},
    {'number':'2', 'image':'diasSemana/2.jpeg'},
    {'number':'3', 'image':'diasSemana/3.jpeg'},
    {'number':'4', 'image':'diasSemana/4.jpeg'},
    {'number':'5', 'image':'diasSemana/5.jpeg'},
    {'number':'6', 'image':'diasSemana/6.jpeg'},
    {'number':'7', 'image':'diasSemana/7.jpeg'},
    {'number':'8', 'image':'diasSemana/8.jpeg'},
    {'number':'9', 'image':'diasSemana/9.jpeg'},
    {'number':'10', 'image':'diasSemana/10.jpg'},
    {'number':'11', 'image':'diasSemana/11.gif'},
    {'number':'12', 'image':'diasSemana/12.gif'},
    {'number':'13', 'image':'diasSemana/13.gif'},
    {'number':'14', 'image':'diasSemana/14.gif'},
    {'number':'15', 'image':'diasSemana/15.gif'},
    {'number':'16', 'image':'diasSemana/16.gif'},
    {'number':'17', 'image':'diasSemana/17.gif'},
    {'number':'18', 'image':'diasSemana/18.gif'},
    {'number':'19', 'image':'diasSemana/19.gif'},
    {'number':'21', 'image':'diasSemana/21.gif'},
    {'number':'22', 'image':'diasSemana/22.gif'},
    {'number':'23', 'image':'diasSemana/23.gif'}
];

var active = 0; 

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });

//Handle the image changes
function changeImage_numbers(id) {
    switch(id){
        case "left":
            if (active > 0) {
                active -= 1;
            } else {
                active = numbers.length - 1;
            }
        break;

        case "right":
            if (active < numbers.length-1) {
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
    paginationFiller_numbers();
   }


//Generates the pagination for the letters
function paginationFiller_numbers() {
    // Modifying an HTML element: adding an <li>
    var liClass = "waves-effect";
    for(var i = 0; i < numbers.length; i++) {
        if(i == active){
            liClass = "active blue";
        } else {
            liClass = "waves-effect";
        }
        document.getElementById("pages").innerHTML += '<li onclick="changeImage_numbers('+ i +')"jumpTo value= "'+ i +'" class="'+ liClass +'"><a href="#!">'+ numbers[i].number  +'</a></li>';
    }
    var image = document.getElementById('number');
    image.src = numbers[active].image;
 
}