var IndexController = function () {

};

IndexController.prototype.createTable = function () {
    $('#alert').hide();
    document.getElementById('insert-table').innerHTML = '';
    $.getJSON("https://kde.link/test/get_field_size.php",
        function(data){
            var get_width = data.width;
            var get_height = data.height;
            var div = document.getElementById('insert-table');
            var mass = empty_array(get_height, get_width);
            var j = 0;
            for(var i = 0; i < get_height * get_width; i = i + 2){
                if(i <= 19){
                    mass[i] = "https://kde.link/test/" + j + ".png";
                    mass[i + 1] = mass[i];
                    j++;
                }
                if(i > 19 && i <= 39){
                    if(i == 20)
                        j= 0;
                    mass[i] = "https://kde.link/test/" + j + ".png";
                    mass[i + 1] = mass[i];
                    j++;
                }
                if(i > 39 && i <= 59){
                    if(i == 40)
                        j = 0;
                    mass[i] = "https://kde.link/test/" + j + ".png";
                    mass[i + 1] = mass[i];
                    j++;
                }
                if(i > 59){
                    if(i == 60)
                        j = 0;
                    mass[i] = "https://kde.link/test/" + j + ".png";
                    mass[i + 1] = mass[i];
                    j++;
                }
            }
            var tmp = 0;
            var shuffled_mass = shuffleArray(mass);
            var tbl = document.createElement("table");
            var tblBody = document.createElement("tbody");
            for(var current_row = 1; current_row <= get_height; current_row++){
                var row = document.createElement("tr");
                for(var current_cell = 1; current_cell <= get_width; current_cell++){
                    var cell = document.createElement("td");
                    row.appendChild(cell);
                    $(cell).addClass('image1');
                    cell.id = tmp;
                    var image_to_insert = new Image();
                    image_to_insert.src = shuffled_mass[tmp];
                    $(image_to_insert).addClass('image2');
                    cell.appendChild(image_to_insert);
                    tmp++;
                }
                tblBody.appendChild(row);
            }
            tbl.appendChild(tblBody);
            div.appendChild(tbl);
            $(tbl).on('click', 'td', function(){
                var id_td = $(this).attr('id');
                gameplay(id_td);
            });
            tbl.setAttribute("border", "1");
            tbl.setAttribute("align", "center");
        });

};

var counter = 0;
var open_cards = [];

function gameplay(index_td){
    var td_remove = document.getElementById(index_td);
    $(td_remove).removeClass('image1');
    $(td_remove).off('click');
    open_cards[counter] = index_td;
    counter++;
    if(counter == 2){
        var td_1 = document.getElementsByTagName('td')[open_cards[0]];
        var td_2 = document.getElementsByTagName('td')[open_cards[1]];
        var image_1 = td_1.childNodes[0];
        var image_2 = td_2.childNodes[0];
        if(image_1.src == image_2.src){
            var tds = document.getElementsByTagName('table')[0].getElementsByTagName('td');
                $(tds).off();

            setTimeout(function(){
                td_1.removeChild(image_1);
                td_2.removeChild(image_2);
                var imgs = document.getElementsByTagName('img');
                if(imgs.length == 0){
                    $('#alert').show();
                }
            },1000);
            counter = 0;
            open_cards = [];
        } else {
            $('td').unbind();
            setTimeout(function(){
                $(td_1).addClass('image1');
                $(td_2).addClass('image1');
            },1000);
            counter = 0;
            open_cards = [];
        }
    }
};

function shuffleArray(mass){
    for(var j, x, i = mass.length; i; j = Math.floor(Math.random() * i), x = mass[--i], mass[i] = mass[j], mass[j] = x);
    return mass;
}

function empty_array(g_height, g_width){
    var empty_mass = [];
    for(var j = 0; j < g_height * g_width; j++){
        empty_mass[j] = "";
    }
    return empty_mass;
}

IndexController.prototype.init = function () {

    var that = this;

    $('.create-table').on('click', function () {
        that.createTable();
        return false;
    });
};

$(function () {
    var indexController = new IndexController();
    indexController.init();
});