function generateContent(faction) {
    var d = document.createElement("div");
    $(d).addClass(faction.title);
    $(d).addClass("bg");

    $(d).append('<div class="ctn-box"></div>');
    var box = $(d).find(".ctn-box");

    $(box).append('<h3>' + faction.title + '</h3>');

    $(box).append('<div class="ctn"></div>');
    var ctn = $(d).find(".ctn");
    faction.links.forEach(l => {
        var add = '<div class="ctn-item"><a href="' + l.url +'"><img src="' + l.pic + '" alt="' + l.alt + '"><div> ' + l.alt + '</div></a></div>';
        ctn.append(add);
    });

    $(".inner-content").append(d);
}

function generateLegion(){
    $(".inner-content").append('<div class="legion bg"><div class="ctn-box"><h3>Legion</h3><div class="ctn" style="align-items: center;"></div></div></div>');
    var ctn = $(".legion").find(".ctn");
    ctn.append('<div class="ctn-item"><a href="../classes/class-pages/guide.html#legion-revenant">\
        <img src="../classes/class-pages/legion-revenant/female.png" alt="Legion Revenant"><div>Legion Revenant</div></a></div>');
    ctn.append('<div style="height: 85%;"><div class="legion-btn"><a href="">Join Legion</a></div><div class="legion-btn"><a href="">Legion Tokens</a></div></div>');
    ctn.append('');
}

$(document).ready(function () {
    $('head').append('<link rel="stylesheet" type="text/css" href="major.css">');

    generateContent(nation);
    generateLegion();
    generateContent(evil);
    generateContent(good);
    generateContent(chaos);
    generateContent(others);
});