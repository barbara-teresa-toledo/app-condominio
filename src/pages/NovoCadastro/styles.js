import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%'
    },
    containerMain: {
        flex: 1,
        backgroundColor: '#ebebeb',
        paddingHorizontal: '2%',
        paddingVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});

export default styles