function sum(...n){
    let sum_n = 0;
    for( let element of n){
        if(element>0) {
            sum_n=sum_n + element;
        }
    }
    console.log(sum_n);
}
sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8,)