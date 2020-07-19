// Player state
var micEnabled = false;
var crowdEnabled = false;

var camEnabled = false;
var outlinesEnabled = false;

// UI state
var controlModeActive = false;
var headerVisible = false;
var audioNavVisible = false;
var videoNavVisible = false;
var activeHeaderItem = null;
var activeAudioNavItem = 0;
var activeVideoNavItem = 0;

// Confirm
var KEY_ENTER = 13;
// Cancel
var KEY_COMMA = 39;
// Left
var KEY_A = 97;
// Up
var KEY_W = 119;
// Down
var KEY_S = 115;
// Right
var KEY_D = 100;

var HEADER_AUDIO = 1;
var HEADER_VIDEO = 2;

var MAX_HEADER = 2;
var MAX_AUDIO = 3;
var MAX_VIDEO = 3;

var MIC_ON = 0;
var MIC_OFF = 1;
var CROWD_ON = 2;
var CROWD_OFF = 3;

var CAM_ON = 0;
var CAM_OFF = 1;
var OUTLINE_ON = 2;
var OUTLINE_OFF = 3;

$(document).keypress(function(e) {
    //$("#menu-1").toggleClass("transition-in");
    //$("header").toggleClass("transition-in");
    handleKeypress(e);
    render();
});

function handleKeypress(e) {
    if (!controlModeActive) {
        initializeControlMode();
    } else {
        if (headerVisible) {
            handleHeaderKeypress(e);
        } else {
            if (audioNavVisible) {
                handleAudioKeypress(e);
            } else {
                handleVideoKeypress(e);
            }
        }
    }
}

function handleHeaderKeypress(e) {
    switch (e.which) {
        case KEY_ENTER:
            selectControlItem();
            break;
        case KEY_COMMA:
            dismissHeader();
            break;
        case KEY_W:
            focusHeader();
            break;
        case KEY_A:
            moveHeaderLeft();
            break;
        case KEY_D:
            moveHeaderRight();
            break;
      }
}

function selectControlItem() {
    switch (activeHeaderItem) {
        case HEADER_AUDIO:
            headerVisible = false;
            audioNavVisible = true;
            activeAudioNavItem = 0;
            break;
        case HEADER_VIDEO:
            headerVisible = false;
            videoNavVisible = true;
            activeVideoNavItem = 0;
            break;
    }
}

function dismissHeader() {
    headerVisible = false;
    controlModeActive = false;
    activeHeaderItem = null;
}

function focusHeader() {
    if (activeHeaderItem == null) {
        activeHeaderItem = 1;
    }
}

function moveHeaderLeft() {
    if (activeHeaderItem != null && activeHeaderItem > 0) {
        activeHeaderItem = activeHeaderItem - 1;
    }
}

function moveHeaderRight() {
    if (activeHeaderItem != null && activeHeaderItem < MAX_HEADER) {
        activeHeaderItem = activeHeaderItem + 1;
    }
}

function handleAudioKeypress(e) {
    switch (e.which) {
        case KEY_ENTER:
            selectAudioItem();
            break;
        case KEY_COMMA:
            dismissAudioMenu();
            break;
        case KEY_W:
            moveAudioUp();
            break;
        case KEY_S:
            moveAudioDown();
            break;
      }
}

function selectAudioItem() {
    switch (activeAudioNavItem) {
        case MIC_ON:
            micEnabled = true;
            break;
        case MIC_OFF:
            micEnabled = false;
            break;
        case CROWD_ON:
            crowdEnabled = true;
            break;
        case CROWD_OFF:
            crowdEnabled = false;
            break;
      }
}

function dismissAudioMenu() {
    headerVisible = true;
    audioNavVisible = false;
}

function moveAudioUp() {
    if (activeAudioNavItem > 0) {
        activeAudioNavItem = activeAudioNavItem - 1;
    }
}

function moveAudioDown() {
    if (activeAudioNavItem < MAX_AUDIO) {
        activeAudioNavItem = activeAudioNavItem + 1;
    }
}

function handleVideoKeypress(e) {
    switch (e.which) {
        case KEY_ENTER:
            selectVideoItem();
            break;
        case KEY_COMMA:
            dismissVideoMenu();
            break;
        case KEY_W:
            moveVideoUp();
            break;
        case KEY_S:
            moveVideoDown();
            break;
      }
}

function selectVideoItem() {
    switch (activeVideoNavItem) {
        case CAM_ON:
            camEnabled = true;
            break;
        case CAM_OFF:
            camEnabled = false;
            break;
        case OUTLINE_ON:
            outlinesEnabled = true;
            break;
        case OUTLINE_OFF:
            outlinesEnabled = false;
            break;
      }
}

function dismissVideoMenu() {
    headerVisible = true;
    videoNavVisible = false;
}

function moveVideoUp() {
    if (activeVideoNavItem > 0) {
        activeVideoNavItem = activeVideoNavItem - 1;
    }
}

function moveVideoDown() {
    if (activeVideoNavItem < MAX_VIDEO) {
        activeVideoNavItem = activeVideoNavItem + 1;
    }
}

function initializeControlMode() {
    controlModeActive = true;
    headerVisible = true;
    audioNavVisible = false;
    videoNavVisible = false;
    activeHeaderItem = null;
}

function render() {
    if (headerVisible) {
        $("header").addClass("transition-in");
    } else {
        $("header").removeClass("transition-in");
    }
    if (audioNavVisible) {
        $("#audio-menu").addClass("transition-in");
    } else {
        $("#audio-menu").removeClass("transition-in");
    }
    if (videoNavVisible) {
        $("#video-menu").addClass("transition-in");
    } else {
        $("#video-menu").removeClass("transition-in");
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

    if (camEnabled) {
        $("#cam-on").addClass("enabled");
        $("#cam-off").removeClass("enabled");
    } else {
        $("#cam-on").removeClass("enabled");
        $("#cam-off").addClass("enabled");
    }

    if (outlinesEnabled) {
        $("#outlines-on").addClass("enabled");
        $("#outlines-off").removeClass("enabled");
    } else {
        $("#outlines-on").removeClass("enabled");
        $("#outlines-off").addClass("enabled");
    }
    switch (activeVideoNavItem) {
        case CAM_ON:
            $("#cam-on").addClass("active");
            $("#cam-off").removeClass("active");
            $("#outlines-on").removeClass("active");
            $("#outlines-off").removeClass("active");
            break;
        case CAM_OFF:
            $("#cam-on").removeClass("active");
            $("#cam-off").addClass("active");
            $("#outlines-on").removeClass("active");
            $("#outlines-off").removeClass("active");
            break;
        case OUTLINE_ON:
            $("#cam-on").removeClass("active");
            $("#cam-off").removeClass("active");
            $("#outlines-on").addClass("active");
            $("#outlines-off").removeClass("active");
            break;            
        case OUTLINE_OFF:
            $("#cam-on").removeClass("active");
            $("#cam-off").removeClass("active");
            $("#outlines-on").removeClass("active");
            $("#outlines-off").addClass("active");
            break;            
        default:
            $("#cam-on").addClass("active");
            $("#cam-off").removeClass("active");
            $("#outlines-on").removeClass("active");
            $("#outlines-off").removeClass("active");
    }
}