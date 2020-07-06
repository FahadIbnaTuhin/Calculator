var resultField = $("#result");

function insertNumber(value) {
    var existingNumber = resultField.val();
    resultField.val(existingNumber + value);
}
function clearResulat() {
    resultField.val("");
}
function calculate() {
    var result = eval(resultField.val());
    resultField.val(result);
}
function deleteNumbers() {
    var lastvalue = resultField.val()

    if (lastvalue != "") {
        resultField.val(lastvalue.slice(0, -1));
    }
}
function plusMinus() {
    var lastInt = resultField.val()
    if (lastInt > 0) {
        resultField.val(-lastInt);
    } else {
        resultField.val(-lastInt);
    }
}