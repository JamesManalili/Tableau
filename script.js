// tableauEmbed.js
var divElement = document.getElementById('viz1714730678161');
var vizElement = divElement.getElementsByTagName('object')[0];
if (divElement.offsetWidth > 800) {
    vizElement.style.minWidth = '420px';
    vizElement.style.maxWidth = '1350px';
    vizElement.style.width = '100%';
    vizElement.style.minHeight = '587px';
    vizElement.style.maxHeight = '1287px';
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
} else if (divElement.offsetWidth > 500) {
    vizElement.style.minWidth = '420px';
    vizElement.style.maxWidth = '1350px';
    vizElement.style.width = '100%';
    vizElement.style.minHeight = '587px';
    vizElement.style.maxHeight = '1287px';
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
} else {
    vizElement.style.width = '100%';
    vizElement.style.height = '1027px';
}
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);
