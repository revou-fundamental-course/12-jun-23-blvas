const CelciusInput = document.getElementById("Celcius");
const FahrenheitInput = document.getElementById("Fahrenheit");
const FormulaInput = document.getElementById("Formula");
const inputs = document.getElementsByClassName("input");


for (let i=0; i<inputs.length; i++) {
    let input = inputs[i];
    input.addEventListener ("input", function(e) {

       let value = parseFloat (e.target.value);

        switch (e.target.name) {
            case "Celcius":
                FahrenheitInput.value = (value * 1.8) + 32;
                FormulaInput.value = "(" + CelciusInput.value + " * 1.8) + 32 = " + FahrenheitInput.value + " °F";
                break;

             case "Fahrenheit":
                CelciusInput.value = (value - 32) / 1.8;
                FormulaInput.value = "(" + FahrenheitInput.value + " - 32) / 1.8 = " + CelciusInput.value + " °C";
                break;
        }
    });
}