
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeSwipes from "./components/HomeSwipes";
import Choix from "./components/Choix";
import EntrepriseForm from "./components/EntrepriseForm";

//Const creer le router = native stack navigator stack = empiler
//App.js va dispatcher tous les composants


//Cette fonction retourne 2 propriétés : Screen + Navigator
//Navigator doit contenir des Screen comme enfant

//Navigation container est un composant qui gere la navigation et l'etat des composant
//Il englobe toutes la structure c donc App.js qui appel les autres composants
const Stack = createNativeStackNavigator();

export default function App() {

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Choix" component={Choix}/>
                <Stack.Screen name="EntrepriseForm" component={EntrepriseForm}/>
                <Stack.Screen name="HomeSwipes" component={HomeSwipes}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}




