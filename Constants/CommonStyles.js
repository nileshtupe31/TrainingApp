import { StyleSheet } from "react-native";
import { APP_BACKGROUND_COLOR, APP_THEME_COLOR, CONTAINER_COLOR } from "./Colors";


const CommonStyles = StyleSheet.create({
    main:{
        flex:1
    },
    header:{
        flex:1,
        backgroundColor: APP_THEME_COLOR,
    },
    container:{
        flex:9,
        backgroundColor: APP_BACKGROUND_COLOR,
    },
    contentStyle:{
        backgroundColor: CONTAINER_COLOR,
        flex:1,
        margin: '10%',
        borderRadius:10,
        justifyContent:'center',
        alignItems: 'center',
    }
})

export default CommonStyles;