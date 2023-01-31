import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';

const ListItem = ({singleMedia, navigation}) => {
  const item = singleMedia;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Single', item);
      }}
    >
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={{uri: uploadsUrl + item.thumbnails?.w160}}
        ></Image>
      </View>
      <View style={styles.box}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  box: {
    flex: 1,
    width: 200,
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    minHeight: 100,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
