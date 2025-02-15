
const birayniKhors = ['taijul', 'shakib', 'taj', 'taijul', 'raj', 'shakib', 'topu', 'milon', 'shakib', 'raj', 'milon', 'topu', 'fahim'];
function noDuplicate(array) {
    const singel = [];
    for (const nam of birayniKhors) {
        if (singel.includes(nam) === false) {
            singel.push(nam);
        }
    }
return singel;
}

const singlearray = noDuplicate(birayniKhors);
console.log('singel persone is :', singlearray);




