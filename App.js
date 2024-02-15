import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={style.boasvindas}>My App</Text> */}
      <StatusBar style="auto" />

      <View style={style.header}>
        <View style={style.avatar}></View>
          <Text style={style.boasvindas}>Kariny</Text>
      </View>

      <View style={style.body}>
        <Text style={style.boasvindas}>Body</Text>
      </View>

      <View style={style.footer}>
        <Text style={style.boasvindas}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  },
  boasvindas: {
    color: '#fff',
    fontSize: 20,
    width: 'auto',
  },
  header: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'green'
  },
  body: {
    flex: 3,
    width: '100%',
    backgroundColor: 'blue',
    lignItems: 'center',
    justifyContent: 'center',
   
  },
  footer: {
    flex: 1,
    width: '100%',
    lignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'purple'
   
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    backgroundColor:'#fff',
    marginHorizontal:10,
  }
});
