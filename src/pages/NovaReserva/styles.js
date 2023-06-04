import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '10%',
        minHeight: 70,
    },
    containerMain: {
        flex: 1,
        backgroundColor: '#fefefe',
        paddingHorizontal: '2%',
        paddingVertical: '5%'
    },
});

export default styles