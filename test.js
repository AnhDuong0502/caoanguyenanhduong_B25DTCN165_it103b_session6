let namestudent="Qúy, Nam ,Lan,Hùng,Nam";

let students=namestudent.split(`,`);

let reve =students.reverse();
console.log(students);
let instu=students.includes(`Lan`);
if(instu===true){
    console.log(`Tên Lan tồn tại trong mảng`);
}else{
    console.log(`Tên Lan không tồn tại trong mảng`);
}
let index= students.indexOf(`Nam`);
if(index===-1){
    console.log(`Tên không có trong mảng`);
}else{
 
    console.log(`Tên ở vị trí index = ${index}`);
}
