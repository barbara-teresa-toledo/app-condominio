import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ebebeb',
    },
    containerHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '18%',
        minHeight: 80,
    },
    containerMain: {
        flex: 1,
        paddingHorizontal: '2%',
        paddingTop: '2%',
        position: 'absolute',
        top: 80
    },
    containerButtonsPrincipal:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerButtonsSecundario:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor: '#fefefe',
        paddingVertical: 10
    },
});

export default styles