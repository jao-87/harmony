var headerVisible = false;
var audioNavVisible = false;
var activeHeaderItem = null;
var activeAudioNavItem = 0;
var micEnabled = false;
var crowdEnabled = false;

$(document).keypress(function(e) {
    $("#menu-1").toggleClass("transition-in");
    $("header").toggleClass("transition-in");
});

function render() {
    if (headerVisible) {
        $("header").addClass("transition-in");
    } else {
        $("header").removeClass("transition-in");
    }
    if (audioNavVisible) {
        $("#menu-1").addClass("transition-in");
    } else {
        $("#menu-1").removeClass("transition-in");
    }
    switch (activeHeaderItem) {
        case 0:
            $("#back-btn").addClass("active");
            $("#audio-btn").removeClass("active");
            $("#video-btn").removeClass("active");
            $("#control-label").text("Back");
            break;
        case 1:
            $("#back-btn").removeClass("active");
            $("#audio-btn").addClass("active");
            $("#video-btn").removeClass("active");
            $("#control-label").text("Mic & Audio");
            break;
        case 2:
            $("#back-btn").removeClass("active");
            $("#audio-btn").removeClass("active");
            $("#video-btn").addClass("active");
            $("#control-label").text("Camera & Crowd");
            break;            
        default:
            $("#back-btn").removeClass("active");
            $("#audio-btn").removeClass("active");
            $("#video-btn").removeClass("active");
            $("#control-label").text("Options");
      }
    if (micEnabled) {
        $("#mic-on").addClass("enabled");
        $("#mic-off").removeClass("enabled");
    } else {
        $("#mic-on").removeClass("enabled");
        $("#mic-off").addClass("enabled");
    }

    if (crowdEnabled) {
        $("#crowd-on").addClass("enabled");
        $("#crowd-off").removeClass("enabled");
    } else {
        $("#crowd-on").removeClass("enabled");
        $("#crowd-off").addClass("enabled");
    }
    switch (activeAudioNavItem) {
        case 0:
            $("#mic-on").addClass("active");
            $("#mic-off").removeClass("active");
            $("#crowd-on").removeClass("active");
            $("#crowd-off").removeClass("active");
            break;
        case 1:
            $("#mic-on").removeClass("active");
            $("#mic-off").addClass("active");
            $("#crowd-on").removeClass("active");
            $("#crowd-off").removeClass("active");
            break;
        case 2:
            $("#mic-on").removeClass("active");
            $("#mic-off").removeClass("active");
            $("#crowd-on").addClass("active");
            $("#crowd-off").removeClass("active");
            break;            
        case 3:
            $("#mic-on").removeClass("active");
            $("#mic-off").removeClass("active");
            $("#crowd-on").removeClass("active");
            $("#crowd-off").addClass("active");
            break;            
        default:
            $("#mic-on").addClass("active");
            $("#mic-off").removeClass("active");
            $("#crowd-on").removeClass("active");
            $("#crowd-off").removeClass("active");
    }
}