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

function generateTier() {
    $("#classes-nav").append(
        '<li class="nav-item"><a href="https://docs.google.com/spreadsheets/d/1Ywl9GcfySXodGA_MtqU4YMEQaGmr4eMAozrM4r00KwI/edit#gid=0" target="_blank">Tiers</a></li>'
    );
}

function generateGuide() {
    generateTab("#classes-nav","#classes-tab-ctn",'guide','Guide',true);
    var div = document.createElement('div');
    $(div).addClass("guide-content list-col");
    classes.forEach(c => {
        $(div).append('<div class="classes-item"><a href="' + c.url +'">' + c.name + '</a></div>');
    });
    $('#guide').append(div);
}

function generateEnh(enh) {
    generateTab("#classes-nav","#classes-tab-ctn",'enh','Enhancement',false);
    var div = document.createElement('div');
    $(div).addClass("enh-content");
    enh.forEach(e => {
        var d = document.createElement('div');
        $(d).addClass("dark-box list-col");
        $(d).append('<h1>' + e.name + '</h1>');
        e.classes.forEach(c => {
            $(d).append('<div class="classes-item">' + c + '</div>');
        });
        $(div).append(d);
    });
    $("#enh").append(div);
}

function generateTop10() {
    generateTab("#classes-nav", "#classes-tab-ctn", 'top', 'Top 10s', false);
    $("#top").addClass("dark-box");
    generateTabContainer("#top", 'top-classes-nav', 'top-classes-ctn');
    var isActive = true;
    topclasses.forEach(t =>{
        generateTab("#top-classes-nav", "#top-classes-ctn", t.id, t.name, isActive);
        isActive = false;
        var desc = document.createElement('p');
        $(desc).append(t.description);
        
        var toplist = document.createElement('ul');
        t.classes.forEach(c => {
            $(toplist).append('<li>' + c + '</li>');
        });
        $('#' + t.id).append(desc);
        $('#' + t.id).append(toplist);
    });
}

function generateMana() {
    generateTab("#classes-nav","#classes-tab-ctn",'mana','Mana Regen',false);
    var div = document.createElement('div');
    $(div).addClass("mana-content");
    mana.forEach(e => {
        var ctn = document.createElement('div');
        $(ctn).addClass("dark-box");
        $(ctn).append('<h1>' + e.name + '</h1>');
        $(ctn).append(e.description);
        if(e.hasOwnProperty('classes')){
            var d = document.createElement('div');
            $(d).addClass("list-col");
            e.classes.forEach(c => {
                $(d).append('<div class="classes-item">' + c + '</div>');
            });
            $(ctn).append(d);
        }
        $(div).append(ctn);
    });
    $("#mana").append(div);
}

var enh ="";
$(document).ready(function () {
    $('head').append('<link rel="stylesheet" type="text/css" href="classes.css">');
    $('.inner-content').append('<div class="classes bg"><div id="classes-ctn" class="ctn-box container"></div></div>');
    generateTabContainer('#classes-ctn', 'classes-nav', 'classes-tab-ctn');

    generateTier();
    generateGuide();
    generateEnh(Enhancement);
    generateTop10();
    generateMana();
});