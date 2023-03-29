import React from 'react';
import {View, Text} from 'react-native';

const TodoItem = ({content}: {content: string}) => {
  return (
    <View>
      <Text>{content}</Text>
    </View>
  );
};

export default TodoItem;
