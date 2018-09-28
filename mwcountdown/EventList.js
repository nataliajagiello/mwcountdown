import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button'

const styles = StyleSheet.create({

});

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt
                })),
            });
        }, 1000);
        
        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date),
        }));
        this.setState({events});
    }

    render() {
        return [
            <FlatList
                data={this.state.events}
                renderItem={({ item }) => <EventCard event={item}/>}
                keyExtractor={item => item.id}
            />
        ];
    }
}

export default EventList;