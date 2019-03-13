function add() {
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);
    var z = document.getElementById('z').value;
    var result;
    switch (z) {
        case '+' : {
            result = x+y;
            break;
        }
        case '*' : {
            result = x*y;
            break;
        }
        case '-' : {
            result = x-y;
            break;
        }
        case '/' : {
            result = x/y;
            break;
        }
    }
      document.getElementById('result').innerHTML = result;
//    return false;
}

document.getElementById('go').addEventListener('click', add);