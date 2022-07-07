import React, { useState, useContext } from "react"
import AppContext from "../context/AppContext";
import {
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Text,
  Image
} from "react-native"
import StyleText from "./StyleText";
import theme from "../theme/theme";
import TextRecognition from 'react-native-text-recognition';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

const CaptureText = (props) => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState(null);
  const { state, addStep1, resetStep1 } = useContext(AppContext)
  let imageConf = {
    width: 400,
    height: 300
  };
  if(props.step==2) {
    imageConf = {
      width: 200,
      height: 600
    }
  }
  const data = {
    departamento: null,
    municipio: null,
    lugar: null,
    zona: null,
    puesto: null,
    mesa: null
  }


  const convertImageToText = async (uri) => {
    const result = await TextRecognition.recognize(uri);
    return result 
  }

  const openPickerFromLibrary = () => {
    resetStep1()
    ImagePicker.openPicker({
      mediaType: 'photo',
      includeBase64: false,
      cropping: true,
      width: imageConf.width,
      height: imageConf.height
    }).then(async (image) => {
      if (image) {
        const result = await convertImageToText(image.path)

        if(props.step == 1) isValidStep1(result);
        else if(props.step == 2) isValidStep2(result);
        else isValidStep2(result);
        
        setImage(image.path)
      }
    });
  }

  const openPickerFromCamera = () => {
    ImagePicker.openCamera({
      mediaType: 'photo',
      includeBase64: false,
      cropping: true,
      width: imageConf.width,
      height: imageConf.height
    }).then(async (image) => {
      if (image) {
        const result = await convertImageToText(image.path)
        if(props.step == 1) isValidStep1(result);
        else if(props.step == 2) isValidStep2(result);
        else isValidStep2(result);
        
        setImage(image.path)
      }
    });
  }



  const isValidStep1 = (result)=> { 
    result.forEach((item) => {
        if (item.includes('DEPARTAMENT')) {
          data.departamento = item.substring(14)
        } else if (item.includes('MUNICIPI')) {
          data.municipio = item.substring(11)
        } else if (item.includes('ZONA')) {
          data.zona = item.substring(6, item.indexOf("PUESTO"))
          data.puesto = item.substring(item.indexOf("PUESTO") + 8, item.indexOf("MESA"))
          data.mesa = item.substring(item.indexOf("MESA") + 6)
        } else if (item.includes('LUGAR')) {
          data.lugar = item.substring(7)
        }
      })
      let returnValue = true;
      if (Object.keys(data).length === 0) returnValue = false
      Object.values(data).forEach((value) => {
        if (!value) {
          returnValue = false
        }
      })
      if (returnValue) addStep1(data)
      else Alert.alert("Imagen no valida", "Asegurese de capturar la informació que se solicita")
  }

  const isValidStep2 = (result) =>{
    console.log(result);
    result.forEach((item) => {
      console.log(item);
    })
  }

  return (
    <View>
      <View style={styles.fixToText}>
       <View style={styles.buttonLeft}>
       <Button
          title="Tomar Foto"
          onPress={openPickerFromCamera}/>
       </View>
        <View style={styles.buttonLeft}>
        <Button
          title="Obtener Imagen"
          onPress={openPickerFromLibrary}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonLeft: {
   marginLeft: 15,
   marginTop: 20
  }
});

export default CaptureText