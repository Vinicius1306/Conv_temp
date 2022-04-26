document.getElementById('limpar').onclick = clearForm;

const C = document.getElementById("Celsius");
const F = document.getElementById("Fahrenheit");
const K = document.getElementById("Kelvin");
const R = document.getElementById("Rankine");

const inputs = document.getElementsByClassName("input");

for(let i = 0; i < inputs.length; i++){
    let input = inputs[i];

    input.addEventListener("input", function (e){
        let value = parseFloat(e.target.value);

        document.getElementById('limpar').onclick = clearForm;

        switch(e.target.name){
            case "celsius":
                F.value = value * 1.8 + 32;
                K.value = value + 273.15;
                R.value = (value + 273.15) * 1.8;
            break;
            case "fahrenheit":
                C.value = (value - 32) / 1.8;
                K.value = value - 32 * 1.8 + 273;
                R.value = value + 459.67;
                break;
            case "kelvin":
                C.value = value - 273.15;
                F.value = ((value - 273.15) * 1.8) + 32;
                R.value = value * 1.8
            break;
            case "rankine":
                C.value = (value / 1.8) - 273.15;
                F.value = value - 459.67;
                K.value = value / 1.8;
            break;

        }
       
    });

    function clearForm(){
        document.getElementById("Celsius").value = "";
        document.getElementById("Fahrenheit").value = "";
        document.getElementById("Kelvin").value = "";
        document.getElementById("Rankine").value = "";
    }

}