let funVal;
const optionValueOne = ["Meter", "Kilometre", "Centimeters", "Millimetre", "Micrometre", "Mile", "Foot", "Inch"]
const optionValueTwo = ["Celsius", "Farenhite", "Kalvin"];
const optionValueThree = ["Litres", "Mililitres", "Gallons"];
loadFunction = () =>{
    funVal = "Length";
        $("#card2").removeClass("onclickcard2");
        $("#card3").removeClass("onclickcard3");
        $("#card1").addClass("onclickcard1 img");
        $("#convert1").show(1000, () => {
           optionEnterSelectOne(optionValueOne);
        });
        $("#convert2").show( () => {
            optionEnterSelectTwo(optionValueOne);
        });

}
$(document).ready(() => {
    $("#card1").on('click',() => {
        funVal = "Length";
        $("#card2").removeClass("onclickcard2");
        $("#card3").removeClass("onclickcard3");
        $("#card1").addClass("onclickcard1 img");
        $("#convert1").show(1000, () => {
           optionEnterSelectOne(optionValueOne);
        });
        $("#convert2").show( () => {
            optionEnterSelectTwo(optionValueOne);
        });
    });
    $("#card2").on('click', () => {
        funVal = "Volume";
        $("#card1").removeClass("onclickcard1");
        $("#card3").removeClass("onclickcard3");
        $("#card2").addClass("onclickcard2 img");
        $("#convert1").show(1000, () => {
            optionEnterSelectOne(optionValueTwo);
        });
        $("#convert2").show(1000, () => {
            optionEnterSelectTwo(optionValueTwo);
        });
    });
    $("#card3").on('click', () => {
        funVal = "Temperature";
        $("#card2").removeClass("onclickcard2");
        $("#card1").removeClass("onclickcard1");
        $("#card3").addClass("onclickcard3 img");
        $("#convert1").show(1000, () => {
            optionEnterSelectOne(optionValueThree);
        });
        $("#convert2").show(1000, () => {
            optionEnterSelectTwo(optionValueThree);
        });
    });
});

optionEnterSelectOne = (optionValue) => {
    $('#convert1').empty();
    $.each(optionValue, function (index, value) {
        var addOption = `<option id="fromOption">${value}</option>`;
        $('#convert1').append(addOption);
    });
}
optionEnterSelectTwo = (optionValue) => {
    $('#convert2').empty();
    $.each(optionValue, function (index, value) {
        var addOption = `<option id="toOption" >${value}</option>`;
        $('#convert2').append(addOption);
    });
}


let optionTextOne;
let optionTextTwo;
let value = 0;

showResultOne = (opt1) => {
    $("#fromNumber").val(null);
    console.log("option1", opt1.value);
    optionTextOne = opt1.value;
}
showResultTwo = (opt2) => {
    $("#toNumber").val(null);
    console.log("option2", opt2.text);
    optionTextTwo = opt2.text;
}
converter = (valNum) => {
    if (funVal = "Length") {
        LengthConverter(valNum);
    }
    if (funVal = "Volume") {
        VolumeConverter(valNum);
    }
    if (funVal = "Temperature") {
        TemperatureConverter(valNum);
    }
}
LengthConverter = (valNum) => {
    console.log(optionTextOne, optionTextTwo);
    switch (optionTextOne) {
        case 'Foot': if (optionTextTwo == "Inch") {
            value = valNum * 12;
        }
        else if (optionTextTwo == "Meter") {
            console.log(valNum / 3.2808);
            value = valNum / 3.2808;
        }
        else if (optionTextTwo == "Kilometre") {
            value = valNum / 3280.8;
        }
        else if (optionTextTwo == "Centimeters") {
            value = valNum / 0.032808;
        }
        else if (optionTextTwo == "Mile") {
            value = valNum * 0.00018939;
        }
        else if (optionTextTwo == "Micrometre") {
            value = valNum * 304800;
        }
        else if (optionTextTwo == "Millimetre") {
            value = valNum * 304.8;
        }
            break;
        case 'Meter': if (optionTextTwo == "Inch") {
            value = valNum * 39.370;
        }
        else if (optionTextTwo == "Foot") {
            value = valNum * 3.2808;
        }
        else if (optionTextTwo == "Kilometre") {
            value = valNum / 1000;
        }
        else if (optionTextTwo == "Centimeters") {
            value = valNum / 0.01;
        }
        else if (optionTextTwo == "Mile") {
            value = valNum * 0.00062137;
        }
        else if (optionTextTwo == "Micrometre") {
            value = valNum * 1000000;
        }
        else if (optionTextTwo == "Millimetre") {
            value = valNum * 1000;

        }
            break;
        case 'Kilometre': if (optionTextTwo == "Meter") {
            value = valNum / 39.370;
        }
        else if (optionTextTwo == "Foot") {
            value = valNum * 0.083333;
        }
        else if (optionTextTwo == "Inch") {
            value = valNum / 39370;
        }
        else if (optionTextTwo == "Centimeters") {
            value = valNum / 0.39370;
        }
        else if (optionTextTwo == "Mile") {
            value = valNum * 0.000015783;
        }
        else if (optionTextTwo == "Micrometre") {
            value = valNum * 25400;
        }
        else if (optionTextTwo == "Millimetre") {
            value = valNum * 25.4;
        }
            break;
        case 'Inch': if (optionTextTwo == "Meter") {
            value = valNum / 39.370;
        }
        else if (optionTextTwo == "Foot") {
            value = valNum * 0.083333;
        }
        else if (optionTextTwo == "Kilometre") {
            value = valNum / 39370;
        }
        else if (optionTextTwo == "Centimeters") {
            value = valNum / 0.39370;
        }
        else if (optionTextTwo == "Mile") {
            value = valNum * 0.000015783;
        }
        else if (optionTextTwo == "Micrometre") {
            value = valNum * 25400;
        }
        else if (optionTextTwo == "Millimetre") {
            value = valNum * 25.4;
        }
            break;
        case 'Centimeters': if (optionTextTwo == "Meter") {
            value = valNum / 39.370;
        }
        else if (optionTextTwo == "Foot") {
            value = valNum * 0.083333;
        }
        else if (optionTextTwo == "Kilometre") {
            value = valNum / 39370;
        }
        else if (optionTextTwo == "Inch") {
            value = valNum / 0.39370;
        }
        else if (optionTextTwo == "Mile") {
            value = valNum * 0.000015783;
        }
        else if (optionTextTwo == "Micrometre") {
            value = valNum * 25400;
        }
        else if (optionTextTwo == "Millimetre") {
            value = valNum * 25.4;
        }
            break;
        case 'Mile': if (optionTextTwo == "Meter") {
            value = valNum / 39.370;
        }
        else if (optionTextTwo == "Foot") {
            value = valNum * 0.083333;
        }
        else if (optionTextTwo == "Kilometre") {
            value = valNum / 39370;
        }
        else if (optionTextTwo == "Centimeters") {
            value = valNum / 0.39370;
        }
        else if (optionTextTwo == "Inch") {
            value = valNum * 0.000015783;
        }
        else if (optionTextTwo == "Micrometre") {
            value = valNum * 25400;
        }
        else if (optionTextTwo == "Millimetre") {
            value = valNum * 25.4;
        }
            break;
        case 'Micrometre': if (optionTextTwo == "Meter") {
            value = valNum / 39.370;
        }
        else if (optionTextTwo == "Foot") {
            value = valNum * 0.083333;
        }
        else if (optionTextTwo == "Kilometre") {
            value = valNum / 39370;
        }
        else if (optionTextTwo == "Centimeters") {
            value = valNum / 0.39370;
        }
        else if (optionTextTwo == "Mile") {
            value = valNum * 0.000015783;
        }
        else if (optionTextTwo == "Mile") {
            value = valNum * 25400;
        }
        else if (optionTextTwo == "Millimetre") {
            value = valNum * 25.4;
        }
            break;
        case 'Millimetre': if (optionTextTwo == "Meter") {
            value = valNum / 39.370;
        }
        else if (optionTextTwo == "Foot") {
            value = valNum * 0.083333;
        }
        else if (optionTextTwo == "Kilometre") {
            value = valNum / 39370;
        }
        else if (optionTextTwo == "Centimeters") {
            value = valNum / 0.39370;
        }
        else if (optionTextTwo == "Mile") {
            value = valNum * 0.000015783;
        }
        else if (optionTextTwo == "Mile") {
            value = valNum * 25400;
        }
        else if (optionTextTwo == "Micrometre") {
            value = valNum * 25.4;
        }
            break;
        default: console.log("invalid input");
        $("#toNumber").val(null);
            break;

    }
    $("#toNumber").val(value);

}
TemperatureConverter = (valNum) => {
    console.log(optionTextOne, optionTextTwo);
    switch (optionTextOne) {
        case 'Celsius': if (optionTextTwo == "Farenhite") {
            value = valNum * 1.8;
        }
        else if (optionTextTwo == "Kalvin") {
            value = valNum + 273.15;
        }
            break;
        case 'Farenhite': if (optionTextTwo == "Celsius") {
            value = (valNum - 30) / 3.2808;
        }
        else if (optionTextTwo == "Kalvin") {
            value = (valNum - 32) * 0.56;
        }
            break;
        case 'Kalvin': if (optionTextTwo == "Farenhite") {
            value = (valNum - 273.15) * 9/5 + 32 ;
        }
        else if (optionTextTwo == "Celsius") {
            value = valNum - 273.15;
        }
            break;

        default: console.log("invalid input");
            break;

    }
    $("#toNumber").val(value);

}
VolumeConverter = (valNum) => {
    console.log(optionTextOne, optionTextTwo);
    switch (optionTextOne) {
        case 'Litres': if (optionTextTwo == "Mililitres") {
            value = valNum * 1000;
        }
        else if (optionTextTwo == "Gallons") {
            value = valNum / 3.785;
        }
            break;
        case 'Mililitres': if (optionTextTwo == "Litres") {
            value = valNum / 1000;
        }
        else if (optionTextTwo == "Gallons") {
            value = valNum / 3785;
        }
            break;
        case 'Gallons': if (optionTextTwo == "Mililitres") {
            value = valNum * 3785;
        }
        else if (optionTextTwo == "Litres") {
            value = valNum * 3.785;
        }
            break;

        default: console.log("invalid input");
            break;

    }
    $("#toNumber").val(value);

}
