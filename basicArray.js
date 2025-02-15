function basicArray( numbs) {
let sum = 0;
for( const numb of numbs){
    console.log(numb);
    sum = sum + numb;
}
   return sum; 
}
const arreeee = [11, 22, 33, 44, 55, 66];
const sum = basicArray(arreeee);
console.log('sum of numbers is :', sum);
