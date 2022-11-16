const moneyChange = (money) => {

let moneys = {
    fiveThousand: 5000,
    twoThousand: 2000,
    oneThousand: 1000,
    fiveHundred: 500,
    twoHundred: 200,
    hundred: 100,
    fifty: 50,
    twenty : 20,
    ten : 10,
    one : 1,
}

let result = []

for ( const key in moneys ) {
    while ( money >= moneys[key]) {
        if (result[key]) {
            result[key]++
        } else {
            result[key] = 1
        }
        money = money - moneys[key]
        console.log(result);
      console.log(`SISA UANG : ${money}`)
    }
}
    return result;
}

moneyChange(123)