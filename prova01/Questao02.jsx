import { useState } from "react"

const Questao02 = () => {

    //useState: primeiro coloca o nome da variável, e em segundo é o método que irá modificar essa variável
    const [trocar, setTrocar] = useState (false)


    //aqui acontece a lógica do que vai acontecer quando o botão for clicado: vai adicionar +1 no id do pokémon. (Aqui daria para usar o flag, que alternaria entre true e false, mas confesso que não lembro muito bem como utilizar :())
    const acaoBotao = () =>{
        // setTrocar (trocar+1)

        //tentei fazer a lógica do flag na "mão", porém não consegui. 
        if (trocar === true) setTrocar (trocar + 1)
        else setTrocar (trocar -1)

        // if (trocar%2 == 0) setTrocar(false)
        // else setTrocar (true)
    }

    //no trocar do img eu utilizei a crase, o $ e chaves porque adicionei um código js em jsx
    return (
        <div>
            <h1>Pokemon</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${trocar}.png`}
                alt="Pokemon"
                style={{ width: "200px" }} />

             <button onClick={acaoBotao}>
                Trocar Pokemon
             </button>
        </div>
    )
}

export default Questao02