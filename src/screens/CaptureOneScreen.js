import React, { useContext } from "react"
import { View, StyleSheet, Button, Text } from "react-native"
import theme from "../theme/theme"
import CaptureText from "../components/CaptureText";
import AppContext from "../context/AppContext";
import StyleText from "../components/StyleText";

const CaptureOneScreen = ({ navigation }) => {
    const { state } = useContext(AppContext)
    return (
        <View style={styles.container}>
            <View style={styles.padding}>
                <View style={styles.box}>
                    <View style={styles.content}>
                        <StyleText color="black" fontWeight="bold">Departamento:</StyleText>
                        <StyleText style={styles.text} color="black" >{state.step1.departamento}</StyleText>
                    </View>
                    <View style={styles.content}>
                        <StyleText color="black" fontWeight="bold">Municipio:</StyleText>
                        <StyleText style={styles.text} color="black">{state.step1.municipio}</StyleText>
                    </View>
                    <View style={styles.content}>
                        <StyleText color="black" fontWeight="bold">Zona:</StyleText>
                        <StyleText style={styles.text} color="black" >{state.step1.zona}</StyleText>
                        <StyleText color="black" fontWeight="bold">Puesto:</StyleText>
                        <StyleText style={styles.text} color="black" >{state.step1.puesto}</StyleText>
                    </View>
                    <View style={styles.content}>
                        <StyleText color="black" fontWeight="bold">Lugar:</StyleText>
                        <StyleText style={styles.text} color="black" >{state.step1.lugar}</StyleText>
                    </View>
                </View>
                <CaptureText  step="1" />
                <View style={styles.top}>
                    <Button
                        disabled={!state.step1IsValid}
                        title="Siguiente"
                        onPress={() =>
                            navigation.navigate('step2')
                        }
                    />
                </View>
            </View>
        </View>
    );
};

export default CaptureOneScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.app.backgroundColor,
        flex: 1,
    },
    box: {
        backgroundColor: 'white',
        padding: 15,
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
