// let backgroundColors = ['grey','lightgrey','darkgrey'];
let backgroundColors =  ['red', 'blue', 'green', 'yellow', 'violet', 'purple', 'orange'];
let textColors = ['red', 'blue', 'green', 'yellow', 'violet', 'purple', 'orange'];
let elementTags = ['myHeading1', 'mySubheading1', 'mySubheading2', 'myParagraph1', 'myParagraph2', 'myParagraph3']

function changeTextColor( id, colours, delay) {
    var element = document.getElementById( id );
    var innerFunction = setInterval( function() {
        element.style.color = colours[Math.floor(Math.random() * colours.length)];
    }, delay);
}

function changeBackgroundColor( id, colours, delay ) {
    var element = document.getElementById( id );
    var innerFunction = setInterval( function() {
        element.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];
    }, delay);
}

function getRandom() {
    let lowerDelay = 20;
    let upperDelay = 40;
    return Math.floor(Math.random() * upperDelay ) + lowerDelay;
}

function playSoundFromUrl(url) {
    var sound = new Audio(url);
    sound.play();
}

playSoundFromUrl('http://pub.keygenmusic.org/mp3/Razor1911/Razor1911%20-%20Half-Life%20Blue%20Shift%20Cracktro.mp3');
changeBackgroundColor( 'body', backgroundColors, getRandom() );

for ( let i = 0; i < elementTags.length; i++ ) {
    changeTextColor( elementTags[i], textColors, getRandom() );
    changeBackgroundColor( elementTags[i], backgroundColors, getRandom() );
}

