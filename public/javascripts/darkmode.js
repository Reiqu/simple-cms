function setCookie(cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (180 * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = 'dark' + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function toggleDarkTheme () {
    var element = document.body;
    element.classList.toggle('darkBody');
    var changefunc = document.getElementById('toggletheme');
    changefunc.onclick = toggleDayTheme;

    setCookie(true);
}
function toggleDayTheme () {
    var element = document.body;
    element.classList.toggle('darkBody');
    var changefunc = document.getElementById('toggletheme');
    changefunc.onclick = toggleDarkTheme;
    setCookie(false);
}
function checkTheme2() {
    var DarkActive = getCookie('dark');
    if (DarkActive == 'true') {
        var element = document.body;
        element.classList.toggle('darkBody');
        var changefunc = document.getElementById('toggletheme');
        changefunc.onclick = toggleDayTheme;
    }
}
