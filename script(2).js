function sum(...n){
    let n_sum=0;
    for(let elements of n){
        n_sum=n_sum + elements;
    }
    console.log(n_sum);

}
sum(10, 50, 6, 7, 8, 11, 6, 3, 9)