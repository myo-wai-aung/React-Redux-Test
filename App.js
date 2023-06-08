//import { useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';


const counterReducer = (state=0, action) => {

  console.log(action.type);
  //console.log(state);


  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}


 const store = createStore(counterReducer);


console.log(store.getState());

export default function App() {
 // const [state, dispatch] = useReducer(counterReducer, 0)

  return (
    <View style={styles.container}>
        <Text style={styles.text}>{store.getState()}</Text>
      <View style={styles.aa}>
        <Button
          onPress={() => store.dispatch({ type: "INCREMENT" })}
          title="plus"
          style={styles.btn}
        />

        <Button
          onPress={() => store.dispatch({ type: 'DECREMENT' })}
          title="minus"
          style={styles.btn}
        />

        <Button
          onPress={() => store.dispatch({ type: 'ZERO' })}
          title="zero"
          style={styles.btn}
        />
      </View>
        
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  aa: {
    flexDirection: 'row',
  },

  text: {
    fontSize: 30,
    top: -30
  },

  btn: {
    
  }
})

