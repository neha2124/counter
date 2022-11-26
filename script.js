const increase = document.querySelector('.increment')
const decrease = document.querySelector('.decrement')
const clear = document.querySelector('.clear')
const num = document.querySelector('.number')
const err = document.querySelector('.err')
console.log(increase)
let count = 0;
increase.onclick= function(){
    count++;
    num.innerHTML = count

}
decrease.onclick = function (){
    if(count > 0){
        count --;
        num.innerHTML = count;
    }else{
        err.innerHTML = 'Error : Cannot go below 0'
    }
}
clear.onclick = function () {
    count = 0;
    num.innerHTML = count
    err.innerHTML = ""
}