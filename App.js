import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Button } from 'react-native-paper';
const frases = [
	'Siga os bons e aprenda com eles.',
	'O bom-senso vale mais do que muito conhecimento.',
	'O riso é a menor distância entre duas pessoas.',
	'Deixe de lado as preocupações e seja feliz.',
	'Realize o óbvio, pense no improvável e conquiste o impossível.',
	'Acredite em milagres, mas não dependa deles.',
	'A maior barreira para o sucesso é o medo do fracasso.',
	'Tomar uma atitude é o primeiro passo para dar vida ao sonho.'
]
export default function App() {
	const objImages = {
		inteiro: require('./images/biscoito.png'),
		quebrado: require('./images/biscoitoQuebrado.png')
	};
	const [imagem, setImagem] = useState(objImages.inteiro);
	const [frase, setFrase] = useState('');
	const [texto, setTexto] = useState('Quebrar biscoito');
	function handleBiscoito(){
		if(imagem == objImages.inteiro){
			quebrarBiscoito();
		}else{
			resetarBiscoito();
		}
	}
	function quebrarBiscoito() {
		setImagem(objImages.quebrado);
		setFrase(frases[Math.floor(Math.random() * frases.length)]);
		setTexto('Resetar biscoito')
	}
	function resetarBiscoito(){
		setImagem(objImages.inteiro);
		setFrase('');
		setTexto('Quebrar biscoito')
	}
  	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Image
				style={styles.tinyLogo}
				source={imagem}
			/>
			<Text style={styles.text}>{frase}</Text>
			<Button mode="contained" color="#718a5b" onPress={handleBiscoito}>
				{texto}
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edfdff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
	  height: 250,
	  width: 250,
	  marginBottom: 55,
  },text: {
	  fontSize: 25,
	  marginBottom: 55,
	  marginLeft: 20,
	  marginRight: 20,
	  height: 60,
	  textAlign: 'center',
	  
  }
});
