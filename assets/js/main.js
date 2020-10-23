// var countDownDate = new Date("Nov 8, 2020 00:00:00").getTime();
// var x = setInterval(function() {
//   var now = new Date().getTime();
//   var distance = countDownDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);

let dropdown = document.getElementById('dropdown')
let click = document.getElementById('drop-btn')
let isOpen = false

click.addEventListener('click', ()=>{
    if(isOpen){
        click.style.transform = 'rotate(0deg)'
        dropdown.style.transform = 'translateX(150%)'
        isOpen = false
    }else{
        click.style.transform = 'rotate(180deg)'
        dropdown.style.transform = 'translateX(0)'
        isOpen = true
    }
})