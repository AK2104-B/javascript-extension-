
const f=document.getElementById("form");
const q=document.getElementById("quary");
const google="http://www.google.com/search?q=site%3A+";
const site="g.com"
function submitted(event){
    event.preventDefault();
    const url=google +site + "+" + q.value;
    const win=window.open(url,"_blank");
    win.focus();
}
f.addEventListener("submit",submitted);