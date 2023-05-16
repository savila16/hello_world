import Questao01B from "./Questao01B"
const { useState } = require("react");

const Questao01A = () =>{

    const [medias_calculadas, setMedias] = useState([])

    const alunos = [
        { nome: "joao", notas: {ap1: 8.4, ap2: 5.4 }},
        { nome: "maria", notas: {ap1: 6.7, ap2: 3.5 }},
        { nome: "cleide", notas: {ap1: 7.3, ap2: 9.2 }},
    ]

    const aprovados = () =>{
        // aqui é para acontecer a lógica dos alunos que passaram. Eles seriam calculados por esse if, e adicionados no vetor [alunos_aprovados] com o push
        let alunos_aprovados = []
        for (let i =0; i < medias_calculadas.length; i++){
            if (medias_calculadas => 6){
                alunos_aprovados.push
            }
        }
    }

    return(
        <div>
            <Questao01B alunos={alunos} médias ={medias_calculadas}/>
            <h2>alunos aprovados = {alunos_aprovados}</h2>
        </div>
    )
}

export default Questao01A