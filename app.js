let countdown = new Date("29 august, 2024 20:02:01").getTime();
let x = setInterval (function () {
    let now = new Date().getTime();
    let distance = countdown - now;

    let days = Math.floor((distance / (1000*60*60*24)));
    let hour = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    let minute = Math.floor((distance % (1000*60*60)) / (1000*60));
    let second = Math.floor((distance % (1000*60)) / (1000));

    document.getElementById("demo").innerHTML = days + "d" + hour + "h" + minute + "m" + second + "s";

    if(distance < 0){
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Expired";
    }
}, 1000)