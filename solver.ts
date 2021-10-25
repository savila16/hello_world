class Person {
    age: number;
    name: string;

    constructor (name: string, age: number){
        this.name = name
        this.age = age
    }

    toString (): string {
        return `Pessoa ${this.name} ${this.age}`;
    }
}

class Motorcycle {
  person: Person | null;
  power: number;
  time: number;

  constructor (power: number){
      this.person = null
      this.power = power
      this.time = 0;
  }

  buy (time: number): void {
      this.time += time
  }

  drive (time: number): void {
      if (this.person != null){
          if (this.person.age <= 10){
              if (this.time > 0){
                  if (time <= this.time){
                    this.time -= time
                  } else {
                      console.log ("A criança andou " + (time - this.time)+ "minutos e o tempo acabou!")
                      this.time = 0
                  }
              } else {
                  console.log ("o tempo acabou!")
              }
          } else {
              console.log ("Quem está na motoca não tem idade suficiente para pilotar")
          }
      } else {
          console.log ("Não tem ninguém na motoca")
      }
  }

  honk (): void{
      if (this.person != null){
          let pem = "P"
          for (let i = 0; i <this.power; i++){
              pem += "E"
          }
           console.log (pem+ "M")
      } else {
          console.log ("não tem ninguém na motoca, então não tem como buzinar!")
      }
  }

  in (person: Person):boolean {
      if (this.person != null){
          console.log ("Já tem uma pessoa na motoca!")
          return false
      }
      this.person = person 

      console.log (`A pessoa que se chama ${this.person.name} que tem ${this.person.age} anos, está na motoca`)

      return true
  }

  out (): Person {
    if (this.person != null){
        let personOut = this.person
        this.person = null
        console.log ("Quem estava na motoca saiu!")
        return personOut
    } else {
        console.log ("A moto está sem ninguém!")
    }
  }

  toString ():  string {
      return `Pessoa que está na motoca ${this.person}; Potência da motoca ${this.power}; Tempo da motoca ${ this.time}`
  }
}

console.log("---------------------")

let motoca = new Motorcycle(1);
console.log(motoca);
//power: 1, minutos: 0, person: null
motoca.honk();
//fail: motoca vazia
motoca.in(new Person("marcos", 4));
console.log(motoca);
//power: 1, minutos: 0, person: [marcos:4]
motoca.honk();
//Pem
motoca.in(new Person("marisa", 2));
//fail: motoca ocupada
console.log(motoca);
//power: 1, minutos: 0, person: [marcos:4]

console.log("---------------------")

//case subindo e buzinando
motoca = new Motorcycle(5);
console.log(motoca);
//power: 5, minutos: 0, person: null
motoca.in(new Person("marcos", 4));
console.log(motoca);
//power: 5, minutos: 0, person: [marcos:4]
motoca.honk();
//Peeeeem

console.log("---------------------")

//case subindo e trocando
motoca = new Motorcycle(7);
motoca.in(new Person("heitor", 6));
console.log(motoca);
//power: 7, minutos: 0, person: [heitor:6]
let heitor: Person = motoca.out();
console.log(heitor);
//[heitor:6]
motoca.out();
//fail: motoca vazia
motoca.in(new Person("suzana", 8));
console.log(motoca);
//power: 7, minutos: 0, person: [suzana:8]

console.log("---------------------")

//case passeando
motoca = new Motorcycle(7);
motoca.in(new Person("suzana", 8));
motoca.drive(10);
//fail: time zerado
motoca.buy(40);
console.log(motoca);
//power: 7, minutos: 40, person: [suzana:8]
motoca.drive(20);
console.log(motoca);
//power: 7, minutos: 20, person: [suzana:8

console.log("---------------------")

//case nem grande nem pequeno
motoca = new Motorcycle(7);
motoca.buy(20);
motoca.in(new Person("andreina", 23));
motoca.drive(15);
//fail: muito grande para andar de motoca
console.log(motoca);
//power: 7, minutos: 20, person: [andreina:23]

console.log("---------------------")

//case acabou o time
motoca = new Motorcycle(7);
motoca.buy(20);
motoca.in(new Person("andreina", 6));
motoca.drive(15);
console.log(motoca);
//power: 7, minutos: 5, person: [andreina:6]
motoca.drive(10);
//fail: andou 5 min e acabou o time