/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  NativeSyntheticEvent,
  Pressable,
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

export interface TodoType {
  id: string;
  content: string;
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [todoItem, setTodoItem] = useState<TodoType>({
    id: '',
    content: '',
  });

  const onChangeText = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    setTodoItem({
      ...todoItem,
      content: e.nativeEvent.text,
    });
  };

  const handleResetInput = (): void => {
    setTodoItem({id: '', content: ''});
  };

  const addTodo = (data: TodoType): void => {
    if (data.id) {
      const updatedTodos = todos.map(todo =>
        todo.id === data.id ? {...todo, content: data.content} : todo,
      );
      setTodos(updatedTodos);
      handleResetInput();
      return;
    }
    setTodos([
      ...todos,
      {id: Date.now().toString(), content: todoItem.content},
    ]);
    handleResetInput();
  };

  const deleteTodo = (todoId: string): void => {
    const deleteItem = todos.filter(todo => todo.id !== todoId);
    setTodos(deleteItem);
    handleResetInput();
  };

  const editTodo = (todoId: string): void => {
    const editItem = todos.filter(todo => todo.id === todoId);
    setTodoItem({id: editItem[0].id, content: editItem[0].content});
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
          value={todoItem.content}
          onSubmitEditing={() => addTodo(todoItem)}
          returnKeyType="done"
        />
      </View>
      <View>
        {todos.map(todo => (
          <View
            key={todo.id}
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Pressable onPress={() => editTodo(todo.id)}>
              <Text style={{fontSize: 22, color: 'black'}}>{todo.content}</Text>
            </Pressable>
            <Pressable
              onPress={() => deleteTodo(todo.id)}
              style={{
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#5555FF',
                width: 30,
                borderRadius: 50,
                position: 'absolute',
                right: 20,
              }}>
              <Text style={{color: 'white', fontWeight: '600'}}>X</Text>
            </Pressable>
          </View>
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
