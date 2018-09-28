import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button'
import {
    getEvents,
} from './api';

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

        this.props.navigation.addListener('didFocus', () => {
            getEvents().then(events => this.setState({events}));
        })
        
       const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date),
        }));
        this.setState({events});
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('form');
    }

    render() {
        return [                
            <FlatList
                key="flatlist"
                data={this.state.events}
                renderItem={({ item }) => <EventCard event={item}/>}
                keyExtractor={item => item.id}
            />,
            <ActionButton
            key="fab"
            onPress={this.handleAddEvent}
            buttonColor="green"
            />
        ];
    }
}

export default EventList;