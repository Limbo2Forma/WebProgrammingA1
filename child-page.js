const links = [{
    pic: "home-pictures/major.png",
    url: "major-farm/major.html"
},{
    pic: "home-pictures/farm.png",
    url: "major-farm/major.html"
},{
    pic: "home-pictures/scav.png",
    url: "major-farm/major.html"
},{
    pic: "home-pictures/badges.png",
    url: "major-farm/major.html"
},{
    pic: "home-pictures/class.png",
    url: "classes/classes.html"
},{
    pic: "home-pictures/xp.png",
    url: "major-farm/major.html"
},{
    pic: "home-pictures/rep.png",
    url: "major-farm/major.html"
},{
    pic: "home-pictures/gold.png",
    url: "major-farm/major.html"
},{
    pic: "home-pictures/mem.png",
    url: "major-farm/major.html"
},{
    pic: "home-pictures/acs.png",
    url: "major-farm/major.html"
},{
    pic: "home-pictures/boost.png",
    url: "major-farm/major.html"
},{
    pic: "home-pictures/alchemy.png",
    url: "major-farm/major.html"
},{
    pic: "home-pictures/wheel.png",
    url: "major-farm/major.html"
},{
    pic: "home-pictures/pvp.png",
    url: "major-farm/major.html"
},{
    pic: "home-pictures/acro.png",
    url: "major-farm/major.html"
},{
    pic: "home-pictures/command.png",
    url: "major-farm/major.html"
}];

function renderSideMenu(root) {

    links.forEach(l => {
        var div = document.createElement('div');
        $(div).attr("class", "menu-item");

        var a = document.createElement('a');
        $(a).attr("href", root + l.url);
        $(a).attr("class", "menu-img");
        $(a).append('<img src="' + root + l.pic + '" alt="' + l.url + '">');

        $(div).append(a);
        $('.sidebar-header').append(div);
    }); 
    $('.sidebar-header').append('<div class="line"></div><a class="extra" href="' + root + 'extra/extra.html">Extra</a>');
}

function generateHeader(root){
    $('head').append('<link rel="stylesheet" type="text/css" href="' + root + 'common.css">');
    $('head').append('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">');
}

function ChildPage(root) {

    generateHeader(root)
    $('body').append('<div class="wrapper"></div>');

    $('.wrapper').append('<div id="sidebar"><div class="sidebar-header"><h3><a href="index.html">AQWG</a></h3></div></div>');
    renderSideMenu(root);

    $('.wrapper').append('<div id="content"><div id="nav-top" class="container-fluid"><div id="header-title"></div></div></div>');
    $('#header-title').append(document.title);
    $('#nav-top').append('<div class="sidebar-btn"><button type="button" id="open-sidebar" class="btn-info"><i class="fas fa-align-justify"></i></button></div>');
    
    $('#content').append('<div class="inner-content"></div>');
}

var root = document.currentScript.getAttribute('root');

$(document).ready(function () {
    ChildPage(root);
    
    $('#open-sidebar').on('click', function () {
        $('#sidebar, #content, #nav-top, #open-sidebar').toggleClass('open');
    });
});