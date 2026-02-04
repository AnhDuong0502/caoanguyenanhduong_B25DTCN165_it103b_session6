let money=[100,200,300,400];
 let sum=0;
for(let price of money ){
    console.log(price);
}
for(let index in money){
    console.log(index);
}
for(let i=0;i<money.length;i++){
    if(i%2===0){
        sum+=money[i];

    }
}
console.log(sum);