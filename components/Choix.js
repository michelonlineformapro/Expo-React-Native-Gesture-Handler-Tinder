import React from "react";
import { Button, StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";

//On passe un objet en paramètre de la fonction
function Choix({navigation}){

    return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/maquette/BOUTONS/logoCool.png')}
            />
            <TouchableOpacity style={styles.buttonChoice} onPress={() => navigation.navigate("EntrepriseForm")}>
                <Text style={styles.textBtnChoice}>
                    ENTREPRISE
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonChoice2}>
                <Text style={styles.textBtnChoice2}>
                    INFLUENCEUR
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent: "flex-start",
        backgroundColor: "#1f1e1e",
    },
    logo:{
        width:300,
        height:300
    },
    buttonChoice:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#ef6e05",
        borderRadius: 40,
        padding: 20,
        width:300,
    },
    textBtnChoice:{
        color: "white",
        fontSize:24,
        textAlign:"center"
    },
    buttonChoice2:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#ef6e05",
        borderRadius: 40,
        padding: 20,
        width:300,
        marginTop:40
    },
    textBtnChoice2:{
        color: "white",
        fontSize:24,
        textAlign:"center"
    }

})

export default Choix;