import React, {useState} from "react";
import {View, TextInput, TouchableOpacity,ScrollView, Text, StyleSheet} from "react-native";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";

//La fonction (composant) prend l'objet navigation en paramètre pour acceder a la fonction navigate
//<TouchableOpacity style={styles.buttonValider} onPress={() => navigation.navigate("HomeSwipes")}>
function EntrepriseForm({navigation}){


    //Creation d'un objet qui reprend toutes les valeurs de la collection entreprise (db.json)
    //Toutes les valeurs sont initialisées et stockée dans l'objet initEntrepriseData{}
    const initEntrepriseData = {
        id:null,
        nom:"",
        email:"",
        telephone:"",
        domaine:"",
        password:"",
        password_repeat:""
    }

    //Les hooks
    //Creer une entreprise dans db.json let entreprise = Objet initEntrepriseData
    const [entreprise, setEntreprise] = useState(initEntrepriseData);
    //Booleen par defaut est false (formulaire non valider) let valider = false
    const [valider, setValider] = useState(false);

    //Test de react-hook-form
    //useForm =
    /*
    useForm est un hook (crochet) personnalisé pour gérer facilement
     les formulaires. Il prend des arguments optionnels .
     https://react-hook-form.com/api/useform
     */
    const control = useForm();
    const handleSubmit = useForm();

    //SON EQUIVALENT ES5
    //const { control, handleSubmit } = useForm();

    //la constante onSubmit = function data()
    const onSubmit =  data => {
        //On creer un nouvelle objet similaire a initEntrepriseData pour le remplir
        //Chaque nouvelle valeur entrée dans le formulaire est egale a la valeur de l'objet initial
        //Creation de la requète http axios + methode + url (backend json-server) + promesse
        axios.post("http://localhost:3000/entreprises", data)
            //Creation de la promesse (.then() retourne resolve et .catch() retourne reject
            .then(response => {
                //On rempli l'objet entreprise avec le mutateur (setter) setEntreprise du hook
                setEntreprise({
                    id: response.data.id,
                    nom: response.data.nom,
                    email: response.data.email,
                    telephone: response.data.telephone,
                    domaine: response.data.domaine,
                    password: response.data.password,
                    password_repeat: response.data.password_repeat
                });
                //Le booleen valider passe a true
                setValider(true);
                //Debug pour tester le retour des valeur de la collection json
                console.log(response.data);
                //On retourne la fonction data
                return data
            })
            //Sinon on declenche une erreur + un debug
            .catch(err => {
                console.log("Erreur lors de la creation du profil entreprise ! " + err);
            });
    }

    //1- si le hook valider retourne true = on affiche le block de code (bouton pour acceder au swipe)
    //Sinon on affiche le formulaire de creation d'une entreprise
    /*
    if(valider === true){
        block1 = bouton pour acceder au swipe
    }else{
        block 2 = formulaire de creation d'une entreprise
    }
     */

    return(
        <ScrollView>
            {valider ? (
                <View style={styles.container}>
                    <Text style={styles.title}>Vous êtes inscrits</Text>
                    <TouchableOpacity style={styles.buttonValider} onPress={() => navigation.navigate("HomeSwipes")}>
                        <Text style={styles.textBtnValider}>
                            COMMENCER
                        </Text>
                    </TouchableOpacity>
                </View>
            ):(
                <View style={styles.container}>
                    <Text style={styles.title}>
                        ENTREPRISE
                    </Text>
                    {/*Composant de react-hook-form <Controller>*/}
                    <Controller
                        {/*
                            Cet element indique que le formualire est un composant controllé: https://fr.reactjs.org/docs/forms.html
                        */}
                        control={control}
                        {/*
                            Ceci est un accessoire de rendu . Une fonction qui renvoie un élément React et offre la possibilité d'attacher des événements
                            et une valeur dans le composant. Cela simplifie l'intégration avec des composants contrôlés externes avec des noms
                            d'accessoires non standard. Fournit , , , et la composante des enfants,
                            et aussi un objet qui contient l' état d'entrée spécifique. onChange onBlur name ref value field State
                        */}
                        render={({
                                     field:{onChange, onBlur, value}
                                 }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                {/*
                                    La validation se déclenchera sur l' changement d' événement à chaque entrée et conduira à plusieurs re-rendus.
                                    Attention : cela a souvent un impact significatif sur les performances.
                                */}
                                onChangeText={value => onChange(value)}
                                placeholder={'NOM'}
                                placeholderTextColor="white"
                                {/*
                                La valeur du champ. elle est envoyée a onChangeText={value => onChange(value)}
                                */}
                                value={value}
                            />
                        )}
                        {/*Ciblez une seule entrée par son nom.*/}
                        name="nom"/>


                    <Controller
                        control={control}
                        render={({
                                     field:{onChange, onBlur, value}
                                 }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                placeholder={'EMAIL'}
                                placeholderTextColor="white"
                                value={value}
                            />
                        )}
                        name="email"/>


                    <Controller
                        control={control}
                        render={({
                                     field:{onChange, onBlur, value}
                                 }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                placeholder={'TELEPHONE'}
                                placeholderTextColor="white"
                                value={value}
                            />
                        )}
                        name="telephone"/>


                    <Controller
                        control={control}
                        render={({
                                     field:{onChange, onBlur, value}
                                 }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                placeholder={'NOM DOMAINE'}
                                placeholderTextColor="white"
                                value={value}
                            />
                        )}
                        name="domaine"/>

                    <Controller
                        control={control}
                        render={({
                                     field:{onChange, onBlur, value}
                                 }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                placeholder={'MOT DE PASSE'}
                                placeholderTextColor="white"
                                value={value}
                            />
                        )}
                        name="password"/>


                    <Controller
                        control={control}
                        render={({
                                     field:{onChange, onBlur, value}
                                 }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                placeholder={'CONFIRMER MOT DE PASSE'}
                                placeholderTextColor="white"
                                value={value}
                            />
                        )}
                        name="password_repeat"/>

                    {/*Au click on lance handleSubmit = Cette fonction recevra les données du formulaire si la validation du formulaire est réussie.*/}
                    {/*Cette fonction prend en paramètre la const onSubmit = fonction data soit :  Creation de la requète http axios + methode + url (backend json-server) + promesse*/}
                    <TouchableOpacity style={styles.buttonValider} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.textBtnValider}>
                            VALIDER
                        </Text>
                    </TouchableOpacity>
                </View>
            )}


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: "#1f1e1e",
    },
    title:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#ef6e05",
        borderRadius: 40,
        padding: 20,
        width:300,
        color: "white",
        fontSize:24,
        textAlign:"center",
        marginTop:20
    },
    input: {
        width: 300,
        height: 60,
        padding: 10,
        borderWidth: 1,
        borderBottomColor: 'white',
        marginBottom: 10,
        color:"white",
        fontSize:20,
        marginTop:20
    },
    buttonValider:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#ef6e05",
        borderRadius: 40,
        padding: 20,
        width:300,
        marginTop:20
    },
    textBtnValider:{
        color: "white",
        fontSize:24,
        textAlign:"center"
    },
});

export default EntrepriseForm