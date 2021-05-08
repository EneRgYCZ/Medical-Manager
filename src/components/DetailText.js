import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DetailText = ({ title, content }) => {
     return <>
          <Text style={styles.DetailText}>
               {title}
          </Text>

          <Text style={styles.ContentText}>
               {content}
          </Text>
     </>;
};

const styles = StyleSheet.create({
     ContentText: {
          fontSize: 18,
          paddingLeft: 13,
          color: '#ffffff',
          fontWeight: 'bold'
     },

     DetailText: {
          fontSize: 18,
          paddingTop: 13,
          paddingLeft: 13,
          color: '#ffffff',
     },
});

export default DetailText;