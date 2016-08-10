/**
 * Created by Barnabeeeeee on 12/04/15.
 */

function showonlyone(thechosenone) {
    $('.newboxes').each(function(index) {
        if ($(this).attr("id") == thechosenone) {
            $(this).show(200);
        }
        else {
            $(this).hide(600);
        }
    });
}


function wireframe() {
    var e = document.getElementById('x3dd');
    e.runtime.togglePoints(true);
    e.runtime.togglePoints(true);
}

//var cnum = 1;



function showonlyone(thechosenone) {
    $('.selector').each(function(index) {
        if ($(this).attr("class") == thechosenone) {
            $(this).fadeIn(200);
        }
        else {
            $(this).fadeOut(600);
        }
    });
}

