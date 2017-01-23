export const events = [
    'onafterprint',
    'onbeforeprint',
    'onbeforeunload',
    'onerror',
    'onhaschange',
    'onload',
    'onmessage',
    'onoffline',
    'ononline',
    'onpagehide',
    'onpageshow',
    'onpopstate',
    'onredo',
    'onresize',
    'onstorage',
    'onundo',
    'onunload',
    'onblur',
    'onchange',
    'oncontextmenu',
    'onfocus',
    'onformchange',
    'onforminput',
    'oninvalid',
    'onreset',
    'onselect',
    'onsubmit',
    'onkeydown',
    'onkeypress',
    'onkeyup',
    'onclick',
    'ondblclick',
    'ondrag',
    'ondragend',
    'ondragenter',
    'ondragleave',
    'ondragover',
    'ondragstart',
    'ondrop',
    'onmousedown',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onmouseup',
    'onmousewheel',
    'onscroll',
    'onabort',
    'oncanplay',
    'oncanplaythrough',
    'ondurationchange',
    'onemptied',
    'onended',
    'onerror',
    'onloadeddata',
    'onloadedmetadata',
    'onloadstart',
    'onpause',
    'onplay',
    'onplaying',
    'onprogress',
    'onratechange',
    'onreadystatechange',
    'onseeked',
    'onseeking',
    'onstalled',
    'onsuspend',
    'ontimeupdate',
    'onvolumechange',
    'onwaiting'
];

export function on(dom, eventType, eventHandle) {
    if(dom.addEventListener) {
        dom.addEventListener(eventType, eventHandle);
    } else if(dom.attachEvent) {
        dom.attachEvent('on' + eventType, eventHandle);
    } else {
        dom['on' + eventType] = eventHandle;
    }
}