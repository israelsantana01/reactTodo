import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { Modalize } from 'react-native-modalize';

import Todos from '../../models/Todos.model';
import tempData from '../../../tempData';
import colors from '../../../Colors';

import styles from './homeStyles';

const Home = () => {
  const [todoData, setTodoData] = React.useState<Todos[]>([]);
  const modalizeRef = React.useRef<Modalize>(null);

  function organizeState() {
    for (let todo of todoData) {
      let completedCount = 0;
      let uncompletedCount = 0;

      for (let todoItem of todo.todos) {

        if (todoItem.completed) {
          completedCount++;
        } else {
          uncompletedCount++
        }
      }

      todo.uncompleted = completedCount;
      todo.completed = uncompletedCount;
    }
  }
  organizeState();

  function openModalize() {
    modalizeRef.current?.open();
  }

  function closeModalize() {
    modalizeRef.current?.close();
  }

  React.useEffect(() => {
    setTodoData(tempData);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.title}>
          Todo <Text style={{ fontWeight: '300', color: colors.blue }}>Lists</Text>
        </Text>
      </View>

      <View style={{ marginVertical: 48 }}>
        <TouchableOpacity
          style={styles.addList}
          onPress={() => openModalize()}
        >
          <AntDesign name="plus" size={16} color={colors.blue} />
        </TouchableOpacity>

        <Text style={styles.add}>Add List</Text>
      </View>

      <Modalize
        ref={modalizeRef}
        snapPoint={574}
      >
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
          <TouchableOpacity
            style={{ position: 'absolute', top: 64, right: 32 }}
          >
            <AntDesign 
              name='close' 
              size={24} 
              color={colors.black} 
              onPress={() => closeModalize()} 
            />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </Modalize>

      <View style={{ height: 275, paddingLeft: 32 }}>
        <FlatList
          data={todoData}
          keyExtractor={item => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={
                [
                  styles.listContainer,
                  {
                    backgroundColor: item.color,
                    alignItems: 'center'
                  }
                ]}
            >

              <Text style={styles.listTitle}>{item.name} Title</Text>

              <View style={{ alignItems: 'center' }}>
                <Text style={styles.count}>{item.uncompleted}</Text>
                <Text style={styles.subtitle}>Remaining</Text>
                <Text style={styles.count}>{item.completed}</Text>
                <Text style={styles.subtitle}>Completed</Text>
              </View>

            </View>
          )}
        />
      </View>
    </View>
  )
}

export default Home;