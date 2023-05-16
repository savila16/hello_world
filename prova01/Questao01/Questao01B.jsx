import { useEffect } from "react"

function Questao01B ({alunos}) {
    let medias_calculadas = []

    useEffect(()=>{
        //esse "for" vai percorrer o vetor de alunos, e um por um ele irá calcular as médias
        //ao percorrer e calcular, serão colocadas as médias dos alunos com o push no vetor vazio que foi criado anteriomente, denomidado de medias_calculadas
            for (let i = 0; i < alunos.length; i++){
               medias_calculadas.push ((alunos[i].notas.ap1 + alunos[i].notas.ap2)/2)
            }
        }
        ,
        [medias_calculadas]
    )

    return(
        <div>

        </div>
    )
}

export default Questao01B