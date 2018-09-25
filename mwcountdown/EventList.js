import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import EventCard from './EventCard';

const styles = StyleSheet.create({
    content: {
        marginTop: 20,  
        flex: 1,   
    },
    contentHeader: {
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
    }
});

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now(),
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
        return (
            <View style={styles.content}> 
            <Text style={styles.contentHeader}>Coming soon...</Text>
            <FlatList
                data={this.state.events}
                renderItem={({ item }) => <EventCard event={item}/>}
                keyExtractor={item => item.id}
            />
            </View>
        );
    }
}

export default EventList;