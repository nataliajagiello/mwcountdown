import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    TextInput
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
    formatDateTime,
} from './api';

const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'white'
    },
    text: {
        height: 40,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10
    },
    button: {
        height: 50,
        backgroundColor: 'green',
        borderColor: 'darkgreen',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    borderTop: {
        borderColor: 'green',
        borderTopWidth: 0.5
    }
})

class EventForm extends Component {
    state = {
        title: null,
        date: '',
        showDatePicker: false
    }
    handleAddPress = () => {
        this.props.navigation.navigate('list')
    }

    handleChangeTitle = (value) => {
        this.setState ({
            title: value
        })
    }

    handleDatePress = () => {
        this.setState ({
            showDatePicker: true
        })
    }

    handleDatePicked = (date) => {
        this.setState ({
            date,
        })
        this.handleDatePickerHide();
    }

    handleDatePickerHide = () => {
        this.setState ({
            showDatePicker: false
        })
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.fieldContainer}>
                    <TextInput 
                        style={styles.text}
                        placeholder="Event title"
                        spellCheck={false}
                        value={this.state.title}
                        onChangeText={this.handelChangeTitle}
                    />
                    <TextInput
                        style={[styles.text, styles.borderTop]}
                        placeholder="Event date"
                        spellCheck={false}
                        value={formatDateTime(this.state.date)}
                        editable={!this.state.showDatePicker}
                        onFocus={this.handleDatePress}
                    />
                    <DateTimePicker
                        isVisible={this.state.showDatePicker}
                        mode="datetime"
                        onConfirm={this.handleDatePicked}
                        onCancel={this.handleDatePickerHide}
                    />
                </View>

                <TouchableHighlight
                    style={styles.button} 
                    onPress={this.handleAddPress}>
                    <Text style={styles.buttonText}>Add</Text>
                 </TouchableHighlight>
            </View>
        );
    }
}

export default EventForm;