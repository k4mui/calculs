function ID(id){return document.getElementById(id);}
function IH(id){return ID(id).innerHTML;}
function SP(v){ID('pri-screen').innerHTML=v;}
function SA(v){ID('ans-screen').innerHTML=v;}

function append(e) {
    var str = IH('pri-screen');
    var d = e.innerHTML;
    if (str === '0') {
        SP(d==='0'?'0':d);
    } else {
        SP(str+d);
    }
}
function result() {
    var expr = IH('pri-screen');
    if (expr==='0') {return;}
    try {
        SA(eval(expr));
        SP('0');
    } catch(e) {
        alert(e.message);
        SP('0');
    }
}
function all_cancel() {
    SP('0');
}
function cancel_entry() {
    var str = IH('pri-screen');
    str = str.slice(0, -1);
    SP(str.length?str:'0');
}