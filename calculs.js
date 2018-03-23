var answer = 0;

function ID(id) {
    return document.getElementById(id);
}

function append(btn) {
    var currentData = ID('pri-screen').innerHTML;
    if (currentData.length===22) {
        alert('Exceeds maximum length of 22');
        return;
    }
    if (currentData==='0') {
        ID('pri-screen').innerHTML=btn.innerHTML;
    } else {
        ID('pri-screen').innerHTML=currentData+btn.innerHTML;
    }
}

function appendAnswer() {
    var currentData = ID('pri-screen').innerHTML;
    if ((currentData+'A').length>=22) {
        alert('Exceeds maximum length of 22');
        return;
    }
    if (currentData==='0') {
        ID('pri-screen').innerHTML='A';
    } else {
        ID('pri-screen').innerHTML=currentData+'A';
    }
}

function keyAction(e) {
    if (e.keyCode==13 || (!e.shiftKey && e.keyCode == 187)) {
        getResult();
    } else if (e.keyCode >= 48 && e.keyCode <= 57 && !e.shiftKey) { 
        ID('b'+(e.keyCode-48).toString()).click();
    } else if (e.keyCode >= 96 && e.keyCode <= 105 && !e.shiftKey) { 
        ID('b'+(e.keyCode-96).toString()).click();
    } else if (e.keyCode==107 || (e.shiftKey && e.keyCode == 187)) {
        ID('ba').click();
    } else if (e.keyCode==109 || e.keyCode==189) {
        ID('bs').click();
    } else if (e.keyCode==110) {
        ID('bp').click();
    } else if (e.keyCode==111 || e.keyCode==191) {
        ID('bd').click();
    } else if (e.keyCode==106 || (e.shiftKey && e.keyCode==56)) {
        ID('bm').click();
    } else if (e.keyCode==57 && e.shiftKey) {
        ID('bl').click();
    } else if (e.keyCode==48 && e.shiftKey) {
        ID('br').click();
    }
}

function getResult() {
    var expr = ID('pri-screen').innerHTML;
    expr = expr.split('A').join(answer.toString());
    try {
        answer = eval(expr);
    } catch(err) {
        alert(err);
    }
    ID('ans-screen').innerHTML = 'Ans = ' + answer;
    ID('pri-screen').innerHTML = '0';
}

function allCancel() {
    ID('pri-screen').innerHTML='0';
    answer = 0;
    ID('ans-screen').innerHTML = 'Ans = ' + answer;
}

function cancelEntry() {
    var currentData = ID('pri-screen').innerHTML;
    if (currentData.length===1) {
        ID('pri-screen').innerHTML = '0';
    } else {
        ID('pri-screen').innerHTML = currentData.slice(0, -1);
    }
}