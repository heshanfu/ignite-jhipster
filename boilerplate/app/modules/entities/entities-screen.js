import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux' // eslint-disable-line

import styles from './entities-screen.styles'
import RoundedButton from '../../shared/components/rounded-button/rounded-button' // eslint-disable-line

class EntitiesScreen extends React.Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <Text style={{ textAlign: 'center' }}>JHipster Entities will appear below</Text>
        {/* ignite-jhipster-entity-screen-needle */}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // for developer convenience
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // for developer convenience
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntitiesScreen)
