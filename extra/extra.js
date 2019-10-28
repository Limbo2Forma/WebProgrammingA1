function generateTabContainer(parentId, navId, ctnId) {
    $(parentId).append('<ul id="' + navId + '" class="nav nav-tabs nav-justified"></ul>');
    $(parentId).append('<div id="' + ctnId + '" class="tab-content"></div>');
}

function generateTab(navId, ctnId, href, title, isActive) {
    var nav = '<li class="nav-item"><a class="' + (isActive ? 'active' : '') + '"data-toggle="tab" href="#' + href + '">' + title + '</a></li>';
    var ctn = '<div id="' + href + '" class="tab-pane fade ' + (isActive ? 'in active show' : '') + '"></div>';
    $(navId).append(nav);
    $(ctnId).append(ctn);
}

function showFeedbackAlert() {
    var id = document.getElementById("acc-id-feedback").value;
    var msg = ""
    if (id == '') {
        id = 'Anonymous';
    }
    if (id.length < 2) {
        msg = 'Invalid character id';
    } else {
        msg = 'Thank you, ' + id + ' for your feedback\n';
        var liked = document.getElementById("like").value;
        if (liked == '') {
            liked = 'none';
        }
        var disliked = document.getElementById("dislike").value;
        if (disliked == '') {
            disliked = 'none';
        }
        msg = msg + 'You liked:\n' + liked;
        msg = msg + '\n You disliked:\n' + disliked;
    }
    alert(msg);
}

function generateFeedback() {
    generateTab("#classes-nav", "#classes-tab-ctn", 'feedback', 'Feedback', true);
    var form = document.createElement('div');
    $(form).addClass("form-group");
    $('#feedback').append(form);
    $(form).append('<label for="acc-id-feedback">Your Id (optional): </label>');
    $(form).append('<input type="text" class="form-control" id="acc-id-feedback">');
    $(form).append('<label for="like">What do you like ? </label>');
    $(form).append('<textarea class="form-control" rows="5" id="like"></textarea>');
    $(form).append('<label for="dislike">What do you dislike ? </label>');
    $(form).append('<textarea class="form-control" rows="5" id="dislike"></textarea>');
    $(form).append('<button type="button" class="btn-info btn-right-corner" text-right onclick="showFeedbackAlert()">Submit</button>');
}

function showSuggestionAlert() {
    var id = document.getElementById("acc-id-suggestion").value;
    var msg = ""
    if (id == '') {
        id = 'Anonymous';
    }
    if (id.length < 2) {
        msg = 'Invalid character id';
    } else {
        var link = document.getElementById("link").value;
        if (link != '') {
            msg = 'Thank you, ' + id + ' for your suggestion at page ' + link;
            var change = document.getElementById("change").value;
            if (change == '') {
                change = 'none';
            } else {
                msg = msg + '\nThe below proposed change has been recorded:\n' + change;
            }
        } else {
            msg = 'No specific link to change';
        }
    }
    alert(msg);
}

function generateSuggestion() {
    generateTab("#classes-nav", "#classes-tab-ctn", 'suggestion', 'Suggestion', false);

    var form = document.createElement('div');
    $(form).addClass("form-group");
    $(form).append('<label for="acc-id-suggestion">Your Id (optional): </label>');
    $(form).append('<input type="text" class="form-control" id="acc-id-suggestion">');
    $(form).append('<label for="link">What page would you propose change ? </label>');
    $(form).append('<input type="text" class="form-control" id="link">');
    $(form).append('<label for="change">What would you want to change ? </label>');
    $(form).append('<textarea class="form-control" rows="5" id="change"></textarea>');
    $(form).append('<button type="button" class="btn-info btn-right-corner" text-right onclick="showSuggestionAlert()">Submit</button>');
    $('#suggestion').append(form);
}

function getLocation() {
    var g = document.getElementById("geolocation");

    function showPosition(position) {
        g.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                g.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                g.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                g.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                g.innerHTML = "An unknown error occurred."
                break;
        }
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    } else {
        g.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    var data = ev.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }

function generateMiscelanous() {
    generateTab("#classes-nav", "#classes-tab-ctn", 'misc', 'Miscelanous', false);
    $('#misc').append('<h1>Geolocation Test</h1>');
    $('#misc').append('Can we get your location for educational purpose ?  ');
    $('#misc').append('<button type="button" class="btn-info" text-right onclick="getLocation()">Give Location</button>');
    $('#misc').append('<div id="geolocation"></div>');
    $('#misc').append('<div id="geolocation"></div>');
}

$(document).ready(function () {
    $('head').append('<link rel="stylesheet" type="text/css" href="extra.css">');
    $('.inner-content').append('<div class="classes bg"><div id="classes-ctn" class="ctn-box container"></div></div>');
    generateTabContainer('#classes-ctn', 'classes-nav', 'classes-tab-ctn');

    generateFeedback();
    generateSuggestion();
    generateMiscelanous();
});