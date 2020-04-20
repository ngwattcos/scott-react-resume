import React from 'react';

import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Resume, Experience, ProfileLink } from '../types';
import { kStringMaxLength } from 'buffer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 40,
    flexWrap: 'wrap',
    width: 600,
  },
  columnsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 520,
    // backgroundColor: '#ffffff'
  },
  leftColumn: {
    flexWrap: 'nowrap',
    width: 400,
    paddingRight: 30,
    // backgroundColor: '#E0E0E0',
  },
  rightColumn: {
    flexWrap: 'nowrap',
    // width: 300,
  },
  majorView: {
    paddingBottom: 5,
  },
  section: {
    paddingBottom: 5,
  },
  heading: {
    fontSize: 20,
    paddingBottom: 10,
    color: '#2C70BA',
  },
  entry: {
    paddingBottom: 11,
  },
  role: {
    paddingBottom: 5,
  },
  entryCompany: {
    fontSize: 10,
    paddingBottom: 3,
    letterSpacing: 1,
  },
  roleTitle: {
    fontSize: 9,
    paddingBottom: 4,
    letterSpacing: 1.5,
    color: '#444444',
  },
  itemSummary: {
    fontSize: 9,
    lineHeight: 1.3,
    fontWeight: 'light',
  },
  itemText: {
    fontSize: 9,
    lineHeight: 1.3,
    fontWeight: 'light',
  }
});

type BodyProps = Partial<Resume>;

export default ({ experiences, projects, education, skills, hackathons, interests }: BodyProps) => (
  <View style={styles.container} wrap={true}>
    <View style={styles.leftColumn}>
      <View>
        <View style={styles.columnsContainer}>

          <View style={styles.leftColumn}>
            <View style={styles.section}>
              <Text style={styles.heading}>Experience</Text>
              {experiences?.map(exp =>
                <View style={styles.entry}>
                  <Text style={styles.entryCompany}>{exp.company}</Text>
                  <View>
                    {exp.roles.map(role =>
                      <View style={styles.role}>
                        <Text style={styles.roleTitle}>{role.title}</Text>
                        <Text style={styles.itemSummary}>{role.summary}</Text>
                        <View>
                          {role.details?.map(detail =>
                            <Text style={styles.itemText}>&nbsp;&nbsp;{`· ${detail}`}</Text>
                          )}
                        </View>
                      </View>
                    )}
                  </View>
                </View>
              )}

            </View>
            <View style={styles.section}>
              <Text style={styles.heading}>Experience</Text>
            </View>
          </View>

          <View style={styles.rightColumn}>
            {/* <Text>Right</Text> */}
            <Text style={styles.heading}>Education</Text>
            <View style={{ flexWrap: 'nowrap' }}>
              {education?.majors.map(major =>
                <View style={{ ...styles.majorView, ...{ flexWrap: 'wrap' } }}>
                  <View>
                    <Text style={{ fontStyle: 'bold', fontSize: 9 }}>{`${major.name}, ${major.degree}`}</Text>
                  </View>
                </View>
              )}

              <View>
                {education?.courses.map(course => <Text style={styles.itemText}>{course}</Text>)}
              </View>
            </View>
          </View>


        </View>

      </View>
    </View>

  </View>
);
