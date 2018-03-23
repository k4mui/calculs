var answer = 0;

function ID(id) {
    return document.getElementById(id);
}

function append(btn) {
    var currentData = ID('pri-screen').innerHTML;
    if (currentData.length===22) {
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
        return;
    }
    if (currentData==='0') {
        ID('pri-screen').innerHTML='A';
    } else {
        ID('pri-screen').innerHTML=currentData+'A';
    }
}

function getResult() {
    var expr = ID('pri-screen').innerHTML;
    expr = expr.split('A').join(answer.toString());
    answer = eval(expr);
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