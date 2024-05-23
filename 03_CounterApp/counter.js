let counter = 0;
let value = document.getElementById('value');
value.value = counter;
let add = document.querySelector('button');
add.addEventListener('click',()=>{
    counter++;
    value.value = counter;
    console.log(counter);
})