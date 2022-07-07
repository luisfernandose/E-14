import React, { useContext } from "react"
import { View, StyleSheet, Button, Text } from "react-native"
import theme from "../theme/theme"
import CaptureText from "../components/CaptureText";
import AppContext from "../context/AppContext";
import StyleText from "../components/StyleText";

const CaptureTwoScreen = ({ navigation, route }) => {
    const { state } = useContext(AppContext)

    return (
        <View style={styles.container}>
            <View style={styles.padding}>
                {state?.step2.map((element, index) => (
                    <View style={styles.box} key={index}>
                        <View style={styles.content}>
                            <StyleText color="black" fontWeight="bold">{index + 1}</StyleText>
                            <StyleText style={styles.text} color="black">{element.nombre}</StyleText>
                        </View>
                    </View>
                ))}
                <CaptureText step="2" />
                <View style={styles.top}>
                </View>
            </View>
        </View>
    );
};

export default CaptureTwoScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.app.backgroundColor,
        flex: 1,
    },
    box: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom:15
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        marginLeft: 10
    },
    padding: {
        padding: 20
    },
    top: {
        marginTop: 20
    }
});
