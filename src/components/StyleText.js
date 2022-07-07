import React from "react"
import { View, StyleSheet, Text } from "react-native"
import theme from "../theme/theme"

const styles = StyleSheet.create({
    fontNormal: {
        fontSize:16
    },
    fontBig: {
        fontSize:18
    },
    fontSmall: {
        fontSize:14
    },
    fontBold: {
        fontWeight: 'bold'
    },
    colorWhite: {
        color: 'white'
    },
    colorBlack: {
        color: 'black'
    }
})

const StyleText = ({children, color, fontWeight, fontSize, ...restOfProps}) => {
    const textStyle = [
        styles.text,
        color == 'black' && styles.colorBlack,
        color == 'white' && styles.colorWhite,
        fontWeight == 'bold' && styles.fontBold,
        fontSize == 'normal' && styles.fontNormal,
        fontSize == 'big' && styles.fontBig,
        fontSize == 'small' && styles.fontSmall,
        
    ]
    return (
        <Text style={textStyle} {...restOfProps}> 
            {children} 
        </Text>
    )
}

export default StyleText