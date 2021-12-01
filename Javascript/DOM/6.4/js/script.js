'use strict';

function setStyle(fontColor, fontSize) {
    let nodes = document.getElementsByClassName('listNumbers')[0].childNodes;
    nodes.forEach(item => {
        if (item.nodeType == 1) {
            /* 1й вариант
            item.style['color'] = fontColor;
            item.style['font-size'] = fontSize; */
            item.setAttribute('style', `color: ${fontColor}; font-size: ${fontSize}`); // 2й вариант
        }
    });

}

setStyle('red', '32px');