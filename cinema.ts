import readline = require('readline-sync');
let input = (): string => readline.question();
let write = (x: any) => process.stdout.write("" + x);

class Client {
    name: string;
    fone: string;

    constructor(name: string, fone: string) {
        this.name = name;
        this.fone = fone;
    }
    toString() {
        return `o cliente ${this.name} cujo telefone é ${this.fone} fez uma reserva`;
    }
}

class Sala {
    cadeiras: Array<Client | null>;
    capacidade: number;

    constructor(capacidade: number) {
        this.cadeiras = [];
        this.capacidade = capacidade;
        for (let i = 0; i < this.capacidade; i++) {
            this.cadeiras.push(null);
        }
    }

    toString() {
        let saida = '[ '
        for (let i = 0; i < this.cadeiras.length; i++) {
            if (this.cadeiras[i] == null) {
                saida += '- '
            } else {
                saida += this.cadeiras[i].name + ' ';
            }
        }
        return saida += ']';
    }

    reservar(name: string, fone: string, indice: number): boolean {
        let cliente = new Client(name, fone);

        if (this.cadeiras[indice] != null) {
            write("essa cadeira já está ocupada!");
            return false;
        }
        for (let i = 0; i < this.cadeiras.length; i++) {
            if (this.cadeiras[i] != null && this.cadeiras[i].name == name) {
                write("essa pessoa já está na sala!")
                return false;
            }
        }
        this.cadeiras[indice] = cliente;
        return true;
    }

    cancelar(name: string): boolean {
        for (let i = 0; i < this.cadeiras.length; i++) {
            if (this.cadeiras[i] != null) {
                if (this.cadeiras[i].name == name) {
                    this.cadeiras[i] = null;
                    write("cancelar reserva")
                    return true;
                }
            }
        }
        write("a pessoa não está aqui!");
        return false;
    }
}

class IO {
    create_sala(): Sala {
        write("Digite a capacidade da sua sala: ");
        let capacidade = +input();
        let sala: Sala = new Sala(capacidade);
        return sala;
    }

    mostrar_help() {
        write("Comandos: \n");
        write("init <capacidade>: inicialização de uma nova sala \n");
        write("show: mostrar sala \n");
        write("reservar <name> <fone> <index>: reservar um lugar \n");
        write("cancelar <name>: cancelar uma reserva \n");
        write("end: sair \n");
    }

    shell() {
        let sala: Sala = this.create_sala();

        this.mostrar_help();

        while (true) {
            let line = input();
            let words = line.split(" ");

            if (words[0] == "end") {
                break
            } else if (words[0] == "init") {
                let capacidade = +words[1];
                sala = new Sala(capacidade);
            } else if (words[0] == "show") {
                write("" + sala + "\n");
            } else if (words[0] == "reservar") {
                sala.reservar(words[1], words[2], +words[3]);
            } else if (words[0] == "cancelar") {
                sala.cancelar(words[1]);
            } else {
                write("Comando não válido! \n");
            }
        }
    }
}

let io = new IO();
io.shell();