import { View, Text, Image, Button } from "react-native"
import { useState } from "react"

const Questao01 = () => {

    //tentei utilizar a lógica do pokemon do semestre passado e não consegui, e a do ? também não deu certo :(
        
    const [foto, setFoto] = useState ("")
    return (
        <View>
             <Image
                source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
                style= {{width: 100, height: 100}}
            />

            <Button 
                title="passar foto"
                onPress={
                    ()=> {

                    }
                }
            />
        </View>
    )
}

export default Questao01