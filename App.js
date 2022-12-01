

import React, {useState} from 'react';

import {
  Button,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Form } from './src/components/Form';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const nuevoUsuario= ()=>{ console.log('nuevo usuario');}

const App = () => {
  const [modalVisible, setModalVisible ] =useState(false);
  console.log(modalVisible);
  setTimeout(()=>{
    setModalVisible(true)
  }, 3000);
  const newUser=()=>{
    console.log('Click modal');
  }
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <View style={backgroundStyle}>
     <Text
        style={styles.sectionTitle}> App quemados {''}
    <Text
        style={styles.sectionTitleBold}>UAM</Text>
      </Text>
      <Pressable 
        onPress={()=> setModalVisible(true)}
        style={styles.btnNuevoUsuario}
        
      >
      {/* <Button title='Nuevo usuario'></Button> */}
      <Text style={styles.btnTxtNuevoUsuario}> Nueva cita </Text>
      </Pressable>
      <Form modalVisible={modalVisible}/>
      </View>
  );
};
const styles = StyleSheet.create({
  sectionTitleBold: {
    fontWeight: '900',
    color: '#6D28D9'  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 30,
    color: '#374151'
  },
  btnNuevoUsuario:{
    backgroundColor:'#6D28D9',
    padding: 20,
    marginTop:20,
    marginHorizontal:20 ,
    borderRadius:10
  },
  btnTxtNuevoUsuario:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize:20,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
