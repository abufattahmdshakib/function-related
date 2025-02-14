// function dhaka() {
//     console.log('ami vat khabo');
//     console.log('ami vat khai na');
//     console.log('tumi kothai jaw')
// }
// dhaka();

// function sum (x , y ,z) {
//     const results = x + y + z ;
//     return results ; 
// }
// const total = sum ( 'shakib', ' , ' ,'labonno');
// console.log( total);

// function macherTorkari(mach, shobji, mosla) {
//     console.log('tel gorom korun');
//     console.log('mosla furan');
//     console.log('shobji den');
//     console.log('mach den');
//     return 'susadhu macher torkari prostut';
// }
// const results = macherTorkari('a' , 'b' ,'c');
// console.log( results);

// function number(a, b, c, d, e) {
//     const total = a + b + c + d + e ;
//     console.log(total);
//     const gun = total * a;
//     console.log(gun);
//     const vag = total / gun;
//     if ( vag < 50 ){
//         console.log('temon kichu na ektu paknami');
//     }
//     else {
//         console.log('temon kichu na betha paichi');
//     }
// }
// number(8, 5, 6, 4, 7)

// function tenTimes(numbers) {
//     console.log( numbers * 10);
//     return numbers;
// }
// tenTimes(20)
// const boll = tenTimes(200);
// console.log(boll);

// function enTimes(numbers) {
//     console.log( numbers * 13);
//     return numbers;
// }
// enTimes(boll);

// function iseven( number) {
//     console.log( number * 10);
//     if (number % 2 ===0) {
//        return console.log(true);
//     }
// else{
//     return console.log(false);
// }

// }

// iseven(101)
// iseven(104)
// iseven(138)
// iseven(18)
// iseven(15)


// function basicArray( numbs) {
// let sum = 0;
// for( const numb of numbs){
//     console.log(numb);
//     sum = sum + numb;
// }
//    return sum; 
// }
// const arreeee = [11, 22, 33, 44, 55, 66];
// const sum = basicArray(arreeee);
// console.log('sum of numbers is :', sum);



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
oddNumbers(numbers);






