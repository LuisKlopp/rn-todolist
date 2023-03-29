import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {TodoType} from '../../App';
import {Dimensions} from 'react-native';

const TodoItem = ({
  content,
  id,
  todos,
  setTodos,
}: {
  content: string;
  id: string;
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}) => {
  const deleteTodo = (todoId: string): void => {
    const deleteItem = todos.filter(todo => todo.id !== todoId);
    setTodos(deleteItem);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <Text style={{fontSize: 18}}>{content}</Text>
      <Pressable
        onPress={() => deleteTodo(id)}
        style={{
          height: 20,
          justifyContent: 'center',
          position: 'absolute',
          right: 13,
        }}>
        <Text>X</Text>
      </Pressable>
    </View>
  );
};

export default TodoItem;
