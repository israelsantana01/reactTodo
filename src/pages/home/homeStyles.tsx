import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors';

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

export default styles;