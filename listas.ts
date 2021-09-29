//typescript - tipagem
let l1: number [] = [2,3,4];
console.log (l1);

let l2: string []= ["Sávila", "Letícia", "João"];
console.log (l2);

//iteração - javascript
console.log (l1.length);
for (let i = 0; i < l1.length; i++){
    console.log (i, l1 [i]);
}

//for..in
//nesse caso, a cada repetição, o i vai assumir um índice e não o valor 
for (let i in l1){
    console.log (i, l1 [i]);
}

// for..of - vai ser utilizado para quando precisarmos apenas dos valores 
for (let elemento of l1){
    console.log (elemento);
}

// tipagem 

//for
console.log (l1.length);
for (let i: number = 0; i < l1.length; i++){
    console.log (i, l1 [i]);
}

//não é possível fazer tipagem no for..in e for..of

// operações sobre listas
let lista: number [] = [10, 20, 30, 40];

//para inserir elementos
lista.push (50);
console.log (lista); 

// remover elementos
lista.splice (2, 3);
console.log (lista);
