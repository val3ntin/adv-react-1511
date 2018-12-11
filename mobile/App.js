import React from 'react';
import { StyleSheet, Button, View, ScrollView } from 'react-native'
// import Auth from './components/auth'
import { events } from './fixtures'
import EventsSectionList from './components/event-section-list'
import EventCard from './components/event-card'

const eventList = Object.entries(events).map(([ id, event ]) => ({ id, ...event }))

export default class App extends React.Component {

  state = {
    showEventList : false,
    showEventCard: false
  }

  toggleEventList = () => {
    this.setState({showEventList: !this.state.showEventList})
  }

  toggleEventCardDisplay = () => {
    this.setState({showEventCard: !this.state.showEventCard})
  }

  render() {

    const btnEventListTitle = this.state.showEventList ? 'close events list' : 'open events list'
    const btnEventCardTitle = this.state.showEventCard ? 'close events card' : 'open events card'

    return (
      <ScrollView>
        <View style={{paddingTop: 50}}>
          <Button
            style={{
              fontSize: 20
            }}
            onPress={this.toggleEventList}
            title={btnEventListTitle}
          />
          <Button
            style={{
              fontSize: 20
            }}
            onPress={this.toggleEventCardDisplay}
            title={btnEventCardTitle}
          />
        </View>
      <View style={styles.container}>

          {this.state.showEventList && <EventsSectionList events = {eventList}/> }
          {this.state.showEventCard && <EventCard events = {eventList}/> }
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
