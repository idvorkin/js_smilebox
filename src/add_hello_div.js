function add_hello_div() {
    var div = document.createElement('div');
    div.id = "hello";
    document.getElementsByTagName('body')[0].appendChild(div);
}
