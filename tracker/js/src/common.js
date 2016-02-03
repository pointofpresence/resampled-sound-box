function include(filename) {
    var head = document.getElementsByTagName("head")[0],
        s = document.createElement("script");

    s.type = "text/javascript";
    s.src = filename;
    head.appendChild(s);
}
