/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import TodoItem from './src/components/TodoItem';
import {
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TargetedEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  useColorScheme,
  View,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const [todos, setTodos] = useState<{id: string; content: string}[]>([]);
  const [inputs, setInputs] = useState<string>('');

  const onChangeText = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    setInputs(e.nativeEvent.text);
    console.log(inputs);
  };

  const addTodo = (): void => {
    setTodos([...todos, {id: Date.now().toString(), content: inputs}]);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20, color: 'black'}}>Todo-List</Text>
      </View>
      <View>
        <TextInput
          placeholder="할일을 입력해주세요."
          style={styles.input}
          onChange={onChangeText}
          value={inputs}
          onSubmitEditing={addTodo}
          returnKeyType="done"
        />
      </View>
      <View>
        {todos.map(todo => (
          <TodoItem key={todo.id} content={todo.content} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default App;
