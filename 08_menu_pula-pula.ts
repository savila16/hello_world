import readline = require('readline-sync');
let input = (): string => readline.question();
let write = (x: any) => process.stdout.write("" + x);

class Kid {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
   public toString() {
        return `${this.name} tem ${this.age} anos`;
    }
}

class Trampoline {
    playing: Array<Kid>;
    waiting: Array<Kid>;

    constructor() {
        this.playing = [];
        this.waiting = [];
    }

    arrive(kid: Kid) {
        this.waiting.push(kid);
    }

    in() {
        let kid: Kid = this.waiting.shift();
        this.playing.push(kid);
    }

    out() {
        let kid = this.playing.shift();
        return kid;
    }

    remove(name: string) {
        for (let i = 0; i < this.playing.length; i++) {
            if (this.playing[i].name == name) {
                this.playing.splice(i, 1);
            }
        }

        for (let i = 0; i < this.waiting.length; i++) {
            if (this.waiting[i].name == name) {
                this.waiting.splice(i, 1);
            }
        }
    }
    public toString() {
        return `Crianças que estão esperando na fila: ${this.waiting} \n Crianças que estão no pula-pula ${this.playing}`
    }
}

class IO {

    mostrar_help() {
        write("Comandos: \n");
        write("arrive <name> <age>: coloca uma criança no pula-pula \n");
        write("in: coloca a primeira criança que estava na fila de espera do pula-pula \n");
        write("out: tira uma criança do pula_pula \n");
        write("remove <name>: para remover uma criança \n");
        write("show: mostra o pula-pula \n")
        write("end: sair \n");
    }

    shell() {
        let trampoline = new Trampoline;

        this.mostrar_help();

        while (true) {
            let line = input();
            let words = line.split(" ");

            if (words[0] == "end") {
                break
            } else if (words[0] == "arrive") {
                trampoline.arrive(new Kid(words[1], +words[2]));
            } else if (words[0] == "show") {
                write(" " + trampoline);
            } else if (words[0] == "in") {
                trampoline.in();
            } else if (words[0] == "out") {
                trampoline.out();
            } else if (words[0] == "remove") {
                trampoline.remove(words[1])
            } else {
                write("comando inválido \n")
            }
        }
    }
}

let io = new IO();
io.shell();
