function run(){
    let htmlCode = document.getElementById('html-code').value;
    let cssCode = document.getElementById('css-code').value;
    let jsCode = document.getElementById('js-code').value;
    let output = document.getElementById('output');
    
    
    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode)
}

var html_link = document.querySelector('.html');
var css_link = document.querySelector('.css');
var js_link = document.querySelector('.js');
var output_link = document.querySelector('.output');
 
 
var html_edit = document.querySelector('.left');
var css_edit = document.querySelector('.top');
var js_edit = document.querySelector('.bottom');
var output_edit = document.querySelector('.right');

output_link.addEventListener('click', html_hide);
css_link.addEventListener('click', js_hide);
js_link.addEventListener('click', css_hide);
html_link.addEventListener('click', output_hide);
function html_hide(){
    html_edit.style.display ="none";
    output_edit.style.display ="block";
    css_edit.style.display ="none";
    js_edit.style.display ="none";
    html_link.style.background ="#FF00B7";
    output_link.style.background ="#005BFF";
    css_link.style.background ="#FF005E";
    js_link.style.background ="#0022FF";
}
function output_hide(){
    html_edit.style.display ="block";
    output_edit.style.display ="none";
    css_edit.style.display ="none";
    js_edit.style.display ="none";
    html_link.style.background ="#005BFF";
    output_link.style.background ="#FF00B7";
    css_link.style.background ="#FF005E";
    js_link.style.background ="#0022FF";
}
function css_hide(){
    html_edit.style.display ="none";
    output_edit.style.display ="none";
    css_edit.style.display ="none";
    js_edit.style.display ="block";
    html_link.style.background ="#005BFF";
    output_link.style.background ="#FF00B7";
    css_link.style.background ="#FF005E";
    js_link.style.background ="#0022FF";
}

function js_hide(){
    html_edit.style.display ="none";
    output_edit.style.display ="none";
    css_edit.style.display ="block";
    js_edit.style.display ="none";
    html_link.style.background ="#005BFF";
    output_link.style.background ="#FF00B7";
    css_link.style.background ="#FF005E";
    js_link.style.background ="#0022FF";
}
