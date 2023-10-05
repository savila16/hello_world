import { StyleSheet } from "react-native";

const estilosProva = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 50,
        backgroundColor: "black"
    },

    card: {
        flex:1,
        flexDirection:"row",
        backgroundColor: "black",
        margin:5, 
        padding: 5
        // height: 200
       // borderColor:"antiquewhite"
    },
        
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },

    compra: {
        fontSize: 20,
        textAlign: "left",
        color: "white", 
        marginLeft: 8,
        fontWeight: "bold",
        // flexDirection: "row",
        // justifyContent: "space-around"
        alignItems: "center"
    },

    valor: {
        fontSize: 20,
        textAlign: "right",
        marginLeft: 50,
        fontSize: 20,
        // justifyContent: "flex-end",
        color: "white",
        // justifyContent: "space-between"
    },

    horario: {
        fontSize: 20,
        // textAlign: "center",
        color: "white",
        // backgroundColor: "black"
    },

    sectionlist: {
        fontSize: 20,
        // textAlign: "center",
        color: "white",
        // backgroundColor: "black"
    },
    
})

export default estilosProva