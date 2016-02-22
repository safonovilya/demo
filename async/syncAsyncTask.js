function log(data){
    console.log(data);
}

function A(log){
    setTimeout(function(){
        log('Result A');
    }, Math.random() * 1000)
}

function B(log){
    setTimeout(function(){
        log('Result B');
    }, Math.random() * 1000)
}

function C(log){
    setTimeout(function(){
        log('Result C');
    }, Math.random() * 1000);
}

//-------------------
// don't update code above this comment
// need print in queue A, B, C

A(log);
B(log);
C(log);