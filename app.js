
function enable_text(check) {
    if (check) {
        document.getElementById("first-input").disabled = false;
        document.getElementById("second-input").disabled = false;
    } else {
        document.getElementById("first-input").disabled = true;
        document.getElementById("second-input").disabled = true;
    }
}

// 3x / ((x+1)(x+2)) intervalos 0 1 

// TODO INDEFINIDAS NAO PRECISA PRA JS
// 2x / (x^2-5x+6)
// 2x / ((x-1)(x-2)(x-4))
let toggleButton = false;

function trigger() {
    toggleButton = !toggleButton;
    document.getElementById('button-id').click() = true;
    alert(document.getElementById('button-id').click())
    return toggleButton;
}





