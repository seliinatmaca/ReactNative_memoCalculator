import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

// define your styles
const usersScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 10,
  },
});

const userCardStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 1000,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  email: {
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
    marginTop: 10,
  },
});
export {usersScreenStyle, userCardStyle};
