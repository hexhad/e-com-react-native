import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card:{
        backgroundColor:"white",
        marginVertical:10,
        marginHorizontal:20,
        // elevation:10,
        borderRadius:3,
        overflow:'hidden',
        padding:10,
    },
    title:{
        fontSize:15
    },
    desc:{
        fontSize:10
    },
    image:{
        width:'100%',
        height:150,
        borderRadius:3,
        overflow:'hidden',
        marginTop:10,
        borderColor:'#000',
        borderWidth:2
    },
})