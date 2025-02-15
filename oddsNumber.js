
function oddNumbers(numbers) {
    // console.log(numbers);
    const odds = [];
    for( const number of numbers){
        if( number % 2 === 1){
            console.log('odds numbers:', number);
            odds.push(number);
        }
    }
    let sum = 0;
    for( const number of odds){
        sum = sum + number;
    }
    const count  = odds.length;
    console.log('odds size:', count)
    console.log('sum all oddNumbers:', sum);
    console.log('gor odds:', sum / count);

}

const numbers = [71, 23, 22, 25, 65, 54, 67];
 const oddsNumbers = oddNumbers(numbers);