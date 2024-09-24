// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(actvty= "go to the office"){
    return `This Monday, I will ${actvty}.`
}

function wrapAdjective(string = "*") {
    return function (act = "special"){
        return `You are ${string}${act}${string}!`

    }
}
wrapAdjective("%")("a dedicated programmer");