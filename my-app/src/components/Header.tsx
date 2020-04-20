import React from 'react';

import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Resume, Experience, ProfileLink } from '../types';
import { kStringMaxLength } from 'buffer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 600,
    // borderBottomWidth: 2,
    backgroundColor: '#D2D2D2',
    // borderBottomColor: '#112131',
    // borderBottomStyle: 'solid',
    alignItems: 'stretch',
    padding: 40,
  },
  headerRight: {
    flexWrap: 'nowrap',
    marginTop: 3,
  },
  contactsRow: {
    flexDirection: 'row',
    flexGrow: 9,
    flexWrap: 'wrap',
  },
  contactItem: {
    paddingHorizontal: 20,
  },
  contactItemText: {
    fontSize: 9,
    // fontFamily: 'Roboto Light'
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    // justifySelf: 'flex-end',
  },
  name: {
    fontSize: 20,
    fontWeight: 'light',
    // textTransform: 'uppercase',
    letterSpacing: -2,
    // fontFamily: 'Roboto',
  },
  subtitle: {
    fontSize: 10,
    // justifySelf: 'flex-end',
    textTransform: 'uppercase',
    // fontFamily: 'Lato',
  },
});

type HeaderProps = Partial<Resume>;

export default ({ name, links, tagline, contacts }: HeaderProps) => (
  <View style={styles.container} wrap={true}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subtitle}>{tagline}</Text>
    </View>
    <View>
      <View style={styles.headerRight}>
        <View style={styles.contactsRow}>
          {[contacts?.email, contacts?.number, contacts?.location].map(text => <View style={styles.contactItem}>
            <Text style={styles.contactItemText}>{text}</Text>
          </View>
          )}
        </View>

        <View style={styles.contactsRow}>
          {links?.map(link => <View style={styles.contactItem}>
            <Text style={styles.contactItemText}>{link.url}</Text>
          </View>
          )}
        </View>
      </View>
    </View>

  </View>
);
