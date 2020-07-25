import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import Todos from '../../models/Todos.model';
import tempData from '../../../tempData';
import colors from '../../../Colors';


const Home = () => {
  const [todoData, setTodoData] = React.useState<Todos[]>([]);

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
        <TouchableOpacity style={styles.addList}>
          <AntDesign name="plus" size={16} color={colors.blue} />
        </TouchableOpacity>

        <Text style={styles.add}>Add List</Text>
      </View>

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

const styles = StyleSheet.create({
  /* Header and Button */
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 38,
    fontWeight: '800',
    color: colors.black,
    paddingHorizontal: 64
  },

  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    color: colors.blue,
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8
  },

  /* List */
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: 'center',
    width: 200
  },
  listTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 18
  },
  count: {
    fontSize: 48,
    fontWeight: '200',
    color: colors.white
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.white,

  }
})

export default Home;