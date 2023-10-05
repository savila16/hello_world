import { View, Text, SectionList, Button } from "react-native"
import Itens from "./Itens"
import estilosProva from "./EstilosQ01"

const Questao01 = () => {
    return (
        <View style={estilosProva.container}>
            <SectionList style={estilosProva.sectionlist}
                sections={Itens}

                renderItem={
                    ({ item }) => {
                        return (
                            <View> 
                                <View style={estilosProva.card}>
                                    <Button  
                                        title="COMPRAR"
                                        // onPress={
                                        //     () => 
                                        // }
                                    />
                                    <Text style={estilosProva.compra}>{item.compra}</Text>
                                    <Text style={ estilosProva.valor}>{item.valor}</Text>

                                </View>

                            <View> 
                                <Text style={estilosProva.horario}>{item.horario}</Text>    
                            </View>
            
                            </View>
                        )
                    }
                }

                // ele que vai colocar a diferenciação entre as sessões
                renderSectionHeader={
                    ({ section }) => {
                        return (
                            // é obrigatorio usar esse section. aí pega ele e . o title que é a letra
                            <Text style={estilosProva.header}>{section.title}</Text>
                        )
                    }
                }
            />
        </View>
    )
}

export default Questao01