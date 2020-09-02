setInterval(() => {
    d = new Date();
    hour = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hourrotate = 30*hour + min/2;
    minrotate = 6*min;
    secrotate = 6*sec;

    hours.style.transform = `rotate(${hourrotate}deg)`;
    minutes.style.transform = `rotate(${minrotate}deg)`;
    seconds.style.transform = `rotate(${secrotate}deg)`;
}, 1000);