let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");
let count =0;
let totalCount=0;
function increment(){
    count++;
    countEl.innerText = count;
}
function decrement(){
        count--;
        countEl.innerText = count;
}

function reset(){
    count = 0;
    countEl.innerText = count;
    totalCount = 0;
    totalEl.innerText = totalCount;
}

function save(){
    totalCount+=count;
    totalEl.innerText = totalCount;
    count = 0;
    countEl.innerText = count;
}