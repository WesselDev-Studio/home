var countDownDateCuber2 = new Date("Jun 8, 2024 12:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDateCuber2 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("cuber2-timer").innerHTML = "Cuber 2: Ice Age:  " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("cuber2-timer").innerHTML = "Cuber 2: Ice Age: " + "EXPIRED";
    }
}, 1000);