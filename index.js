var sf = false;
var lo = false;
var sy = false;

function hour(timeZone) {
    let date = new Date();
    let hh = date.getHours() + timeZone;
    if (hh < 0){
        hh += 24;
    }
    hh = (hh < 10) ? "0" + hh : hh;
    return hh;
}

function currentTime() {
    let date = new Date(); 
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    if (sf) {
        hh = hour(-9);
        let time = hh + ":" + mm + ":" + ss;
        document.getElementById('show-time').innerHTML = `<h1>${time}</h1>`;
    } else if (lo) {
        hh = hour(-1);
        let time = hh + ":" + mm + ":" + ss;
        document.getElementById('show-time').innerHTML = `<h1>${time}</h1>`;
    } else if (sy) {
        hh = hour(8);
        let time = hh + ":" + mm + ":" + ss;
        document.getElementById('show-time').innerHTML = `<h1>${time}</h1>`;
    }
    var t = setTimeout(function(){ currentTime() }, 1000);
}

let sfButton = document.getElementById('sanfrancisco')
sfButton.addEventListener("click", evt => {
    sf = true;
    lo = false;
    sy = false;
    currentTime();
})

let loButton = document.getElementById('london')
loButton.addEventListener("click", evt => {
    sf = false;
    lo = true;
    sy = false;
    currentTime();
})

let syButton = document.getElementById('sydney')
syButton.addEventListener("click", evt => {
    sf = false;
    lo = false;
    sy = true;
    currentTime();
})