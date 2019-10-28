function generateTabContainer(parentId, navId, ctnId) {
    $(parentId).append('<ul id="' + navId + '" class="nav nav-tabs nav-justified nav-tab-class"></ul>');
    $(parentId).append('<div id="' + ctnId + '" class="tab-content"></div>');
}

function generateTab(navId, ctnId, href, title, isActive) {
    var nav = '<li class="nav-item"><a class="' + (isActive ? ' active' : '') + '"data-toggle="tab" href="#' + href + '">' + title + '</a></li>';
    var ctn = '<div id="' + href + '" class="tab-pane fade ' + (isActive ? 'in active show' : '') + '"></div>';
    $(navId).append(nav);
    $(ctnId).append(ctn);
}

function generatePreview() {
    generateTab("#classes-nav","#classes-tab-ctn",'preview','Preview',true);
    var div = document.createElement('div');
    $(div).addClass("preview-content");
    generateTabContainer(div,"preview-nav","preview-ctn");
    $('#preview').append(div);
    
    generateTab("#preview-nav","#preview-ctn",'male','Male',true);
    generateTab("#preview-nav","#preview-ctn",'female','Female',false);

    $("#male").append('<img class="class-img" src="' + folder +'/male.png"></img>')
    $("#female").append('<img class="class-img" src="' + folder +'/female.png"></img>')
}

function generateTiers() {
    generateTab("#classes-nav","#classes-tab-ctn",'tiers','Tiers',false);
    tiers.forEach(t => {
        var div = document.createElement('div');
        $(div).addClass("tiers");
        $(div).append('<div class="tier-category">' + t.name + '</div>');
        $(div).append('<div class="' + t.rating + ' rating">' + t.rating + '</div>');
        $("#tiers").append(div);
    });
}

function generateAccordion(parentId, array, haveIcon, href) {
    var i = 0;
    var accordion = document.createElement('div');
    array.forEach(e => {
        var div = document.createElement('div');
        div.setAttribute("class","accordion-item");
        var id = href + i;
        $(div).append('<div class="accordion-title"><a class="card-link" data-toggle="collapse" href="#' + id +'">' + e.title + '</a></div>'); 
        var ctn = document.createElement('div');
        ctn.setAttribute("id",id);
        $(ctn).addClass('accordion-ctn collapse');
        if (haveIcon) {
            if (i < 5) {
                $(ctn).append('<img src=' + icon[i] + '></img>');
            } else $(ctn).append('<img src=' + icon[5] + '></img>');
            $(ctn).append('<div class="accordion-p">' + e.description + '</div>');
        } else {
            $(ctn).append('<div class="accordion-p" style="width: 100%">' + e.description + '</div>');
        }
        i++;
        $(div).append(ctn);
        $(accordion).append(div);
    });
    $(parentId).append(accordion);
}

const icon = [folder + "/aa.png",folder + "/a1.png",folder + "/a2.png",folder + "/a3.png",folder + "/a4.png",folder + "/passive.png"];

function generateOverview() {
    generateTab("#classes-nav","#classes-tab-ctn",'overview','Overview',false);
    $("#overview").append('<h2>Enhancement</h2>');
    $("#overview").append(overview.enh);
    $("#overview").append('<h2>Mana Model</h2>');
    $("#overview").append(overview.mana);
    $("#overview").append('<h2>Abilities</h2>');
    generateAccordion('#overview',overview.abilities,true,"o");
}

function generateObtaining() {
    generateTab("#classes-nav","#classes-tab-ctn",'obtaining','Obtaining',false);
    var i1 = 0;
    obtaining.forEach(o => {
        $("#obtaining").append('<h2>' + o.method + '</h2>');
        $("#obtaining").append('<p>' + o.description + '</p>');
        var id = i1 + 'ov';
        if(o.hasOwnProperty('quests')){
            generateAccordion('#obtaining',o.quests,false,id);
        }
        i1++;
    });
}

function generateUsing() {
    generateTab("#classes-nav","#classes-tab-ctn",'using','Using',false);
    using.forEach(u => {
        $("#using").append('<h2>' + u.purpose + '</h2>');
        $("#using").append(u.description);
    });
}

var folder = window.location.href;

$(document).ready(function () {
    $('head').append('<link rel="stylesheet" type="text/css" href="./guide-temp.css">');
    folder = folder.split("#")[1];
    $('body').prepend('<script src="' + folder + '/data.js" ></script>')
    
    document.title = title;
    $('#header-title').append(document.title);
    
    $('.inner-content').append('<div class="classes bg" style="background-image: url(' + folder +'/bg.jpg)"><div id="classes-ctn" class="ctn-box container"></div></div>');
    generateTabContainer('#classes-ctn', 'classes-nav', 'classes-tab-ctn');

    generatePreview();
    generateTiers();
    generateOverview();
    generateObtaining();
    generateUsing();
});
