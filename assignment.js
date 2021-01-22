

//kilometerToMeter
function kilometerToMeter(kilometer) {
    var Meter = kilometer * 1000;
    return Meter;
}
var result = kilometerToMeter(5);
console.log(result);



//budgetCalculator
function budgetCalculator(Laptop, Mobile, Watch) {

    var Totalcost = Laptop * 500 + Mobile * 100 + Watch * 50;
    return Totalcost;
}
var result = budgetCalculator(1, 2, 1)
console.log(result);




//hotelCost
function hotelCost(day) {

    var cost = 0;
    if (day <= 10) {
        cost = day * 50
    } else if (day <= 20) {
        var first10Days = 10 * 100;
        var remaining = day - 10;
        var second10days = remaining * 80;
        cost = first10Days + second10Days;
    } else {
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remaining = day - 20;
        var third5Days = remaining * 50;
        cost = first10Days + second10Days + third5Days;
    }
    return cost;
}
var Total = hotelCost(25);
console.log(Total);




//megaFriend

function megaFriend(arr) {
    var mega = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (mega.length < element.length) {
            mega = element
        }
    }
    return mega;
}

var friend = ["Sara", "Sohana", "Jannat", "Ferdousi", "Jaber", "Humayraabedin", "Khushbu", "Nabila"]
var result = megaFriend(friend)
console.log(result)
