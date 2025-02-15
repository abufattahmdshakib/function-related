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