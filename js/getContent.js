// Code originally from the Web Mobile App Tutorial by Martin White
$(document).ready(function () {

    var objID = 0;
    update(objID);
   //Update HTML page with new cultural object data from the AJAX request

    $("#object1").click(function () {
        update(objID = 0);
    });
    $("#object2").click(function () {
        update(objID = 1);
    });
    $("#object3").click(function () {
        update(objID = 2);
    });
    $("#object4").click(function () {
        update(objID = 3);
    });
    $("#object5").click(function () {
        update(objID = 4);
    });
    $("#object6").click(function () {
        update(objID = 5);
    });
    $("#object7").click(function () {
        update(objID = 6);
    });


    // Swap / Load content
    $('.objImage').hide();

    $('.obj3D').show();

    $('.homeContent').hide();
    $('.contactContent').hide();

    $('#objImage').click(function () {
        $('.objImage').delay(500).fadeIn(500);
        $('.objVideo').fadeOut(500);
        $('.obj3D').fadeOut(500);
        //$('.objSound').fadeOut(500);
        $('.objArx3d').fadeOut(500);
        $('.3dcontrols').css('color','#c0c0c0');
    });
    $('#obj3D').click(function () {
        $('.obj3D').delay(500).fadeIn(500);
        $('.objImage').fadeOut(500);
        $('.objVideo').fadeOut(500);
        //$('.objSound').fadeOut(500);
        $('.objArx3d').fadeOut(500);
        $('.3dcontrols').removeAttr('style');

    });


    $('#homepage').click(function () {
        $('.homeContent').delay(500).fadeIn(500);
        $('.galleryContent').fadeOut(500);
        $('.contactContent').fadeOut(500);

    });
    $('.gallerypage').click(function () {
        $('.galleryContent').delay(500).fadeIn(500);
        $('.contactContent').fadeOut(500);
        $('.homeContent').fadeOut(500);
        $('nav .nav-pills li.navs').removeClass('active');
        $('#gpage').attr('class','active');

    });
    $('#contactpage').click(function () {
        $('.contactContent').delay(500).fadeIn(500);
        $('.homeContent').fadeOut(500);
        $('.galleryContent').fadeOut(500);

    });


    // update active tab
    $(".nav.nav-pills li.navs").on("click",function(){
        $(".nav.nav-pills li.navs").removeClass("active");
        $("#gpage").removeClass("active");
        $(this).addClass("active");
    });


});

function update(objID) {
    //Read the JSON file as an AJAX request 
    $.getJSON('./model/codata1.json', function (jsonObj) {
        //Assign the AJAX requested data in to appropriate <div> tag wrapped in HTML
        //Start by making AJAX request for the selected object name and its description
        $('#name').html('<h4 >' + jsonObj.culturalObjects[objID].name + '</h4>');
        $('#description').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].description + '</p>');

        //Then AJAX request the further information based on the object's metadata
        $('#object').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].object + '</p>');
        $('#materials').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].materials + '</p>');
        $('#cultureGroup').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].cultureGroup + '</p>');
        $('#dimensions').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].dimensions + '</p>');
        $('#productionDate').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].productionDate + '</p>');
        $('#associatedPlaces').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].associatedPlaces + '</p>');
        $('#associatedPeople').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].associatedPeople + '</p>');
        $('#museum').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].museum + '</p>');
        $('#accessionNumber').html('<p style="display:inline">' + jsonObj.culturalObjects[objID].accessionNumber + '</p>');

        //Then  make further AJAX requests for all the media objects belonging to the requested cultural objects, starting with an image of the cultural object,
        //for no other reason than in actual fact the orginal dtabase only contains 1 to 3 images of each object in large, medium and small formats
        $('#imageUrl').html('<a href="' + jsonObj.culturalObjects[objID].imageUrl + '" class="lightbox">' + '<img src="' + jsonObj.culturalObjects[objID].imageUrl + '" alt="Object Image"/>');

        // Object Thumbnails
        for(var x=0; x < $(".thumbnails img").length; x+=1) {
            $('#object'+(x+1)).attr('src', jsonObj.culturalObjects[x].imageUrl);

        }

        //And grab any 3D media objects
        //Every time the user clicks on a X3DOM object
        var file = jsonObj.culturalObjects[objID].x3domUrl;
        //Replace the x3d file in the context (if not already loaded)
        if (file != $('#x3domUrl').attr('url'))
            $('#x3domUrl').attr('url', file);

            //$('#x3domObject').html('<inline id="x3domUrl" nameSpaceName="33dd" onclick="cam9()" url="' + file + '"' + '></inline>');

        // Remaining media objects, e.g. audio and AR trigger images
        //$('#soundUrl').html('<audio width=100% controls>' + '<source src="' + jsonObj.culturalObjects[objID].soundUrl + '"' + ' type=' + '"audio/mpeg"' + '/>' + '</audio> ');
        //$('#arImgUrl').html('<img src="' + jsonObj.culturalObjects[objID].arImageUrl + '"/>')
    })
}


// Camera Switching method that breaks site
var cnum = 1;
//function camm() {
//    if (cnum < 3) {
//        cnum += 1
//    } else {
//        cnum = 1;
//    }
//    document.getElementById('33dd__camera0'+cnum).setAttribute('bind', 'true');
//    console.log(cnum);
//}
function resetCam() {
    //$('#x3domUrl').attr('nameSpaceName', '33dd');
    cnum = 1;
    console.log($('#x3domUrl').attr('nameSpaceName'));
    console.log(cnum);
}
