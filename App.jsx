import { Icon } from 'react-native-elements';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [LightTheme, SetLightTheme] = useState()

  function SwitchTheme(){
    if(LightTheme)

      SetLightTheme(false)
    else
      SetLightTheme(true)
   }

  return (
    <View style={LightTheme ? styles.container : styles.container_dark}> 

      <Text style={LightTheme ? styles.texto : styles.texto_dark} >Clique em mim</Text>
      <TouchableOpacity onPress={SwitchTheme} style={LightTheme ? styles.botao : styles.botao_dark}>
      <Icon
        name={LightTheme ? 'sunny' : 'nightlight'}
        type='material'
        color='#FFFC31'
        />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_dark: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 20,
  },
botao_dark: {
  backgroundColor: '#fff',
  padding: 15,
  borderRadius: 20,
},
texto: {
  color: "#000",
  fontSize: 20,
},
texto_dark:{ 
  color: "#fff",
  fontSize: 20 
}
});


// const [contador, AtaualizarContador] = useState(0)

// function handleCount(){
//   AtaualizarContador(contador + 100)
// }
