import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import PropTypes from 'prop-types';

const ListItem = ({singleMedia}) => {
    const item = singleMedia;
    return (
      <TouchableOpacity>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: item.thumbnails.w160}}
        ></Image>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  ListItem.propTypes = {
    singleMedia: PropTypes.object,
  };
  
  export default ListItem;