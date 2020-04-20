import React, { ReactChild, ReactNode } from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'Roboto',
  },
});

type ListProps = {
  children?: ReactNode[],
}

type ItemProps = {
  children?: ReactNode,
}

const List = ({ children }: ListProps) => {
  return <div>{children}</div>
};

export const Item = ({ children }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

export default List;
