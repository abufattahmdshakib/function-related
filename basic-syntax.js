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

function number(a, b, c, d, e) {
    const total = a + b + c + d + e ;
    console.log(total);
    const gun = total * a;
    console.log(gun);
    const vag = total / gun;
    if ( vag < 50 ){
        console.log('temon kichu na ektu paknami');
    }
    else {
        console.log('temon kichu na betha paichi');
    }
}
number(8, 5, 6, 4, 7)