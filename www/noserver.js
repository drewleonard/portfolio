//////////////////////
// INITIAL SETTINGS //
//////////////////////

var initialized = false;

var hover = d3.select('.container-left-hover'),
    leftTitle = document.getElementById('container-left-title'),
    hoverItem = null;

var hoverDuration = 0,
    hoverDurationTarget = 250;

////////////////////////
// SETTING DIMENSIONS //
////////////////////////

function setDimensions(w) {

    // var target = document.getElementById('container-left-hover');
    console.log(w);

}

//////////////////////
// COVER LEFT HOVER //
//////////////////////

function positionHover(hoverItem) {

    hoverItem = hoverItem.getBoundingClientRect();

    ////////////////
    // DIMENSIONS //
    ////////////////

    var step = 10,
        w = hoverItem.width + (step * 2),
        h = hoverItem.height + (step * 2),
        x = hoverItem.x - step,
        y = hoverItem.y - step;

    function position(n) {
        return n + "px";
    }

    hover
        .transition()
        .duration(hoverDuration)
        .style('width', position(w))
        .style('height', position(h))
        .style('left', position(x))
        .style('top', position(y));

    if (initialized === false) {
        setDimensions(w);
        hoverDuration = hoverDurationTarget;
    }

}

function containerLeftItemClick() {

    var clicked = this;
    positionHover(clicked);

}

///////////////////
// INTERACTIVITY //
///////////////////

function interactivity() {

    d3.selectAll('.container-left-item')
        .on('click', containerLeftItemClick);

    d3.selectAll('.container-left-title')
        .on('click', containerLeftItemClick);

}

//////////////////
// INITIALIZING //
//////////////////

function initialize() {

    positionHover(leftTitle);
    interactivity();

    initialized = true;

}

initialize();