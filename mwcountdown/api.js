//import moment from 'moment';
//import uuid from 'uuid';

/* this code does not work
import Expo from 'expo';
const { manifest } = Expo.Constants;
const api = manifest.packagerOpts.dev
? manifest.debuggerHost.split(':').shift().concat(':3000')
: 'productionurl';

const url = `http://${api}/events`;

*/
export function getEvents() {
    return fetch(url) 
    .then(response => response.json())
    .then(events => events.map(e => ({
        ...e,
        date: new Date(e.Date)
    })));
}

export function saveEvents(title, date) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() { 
          resolve('foo');
        }, 1);
      });
    /*
    return fetch(url, {
        method:'POST',
        body: JSON.stringify({
            title,
            date,
            id: uuid(),
        }),
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }) 
    .then(response => response.json())
    .catch(err => console.error());
    */
}


export function formatDate(dateString) {
    const parsed = moment(new Date(dateString));

    if(!parsed.isValid() ){
        return dateString;
    }

    return parsed.format('D MMM YYYY');
}

export function formatDateTime(dateString) {
    const parsed = moment(new Date(dateString));

    if(!parsed.isValid() ){
        return dateString;
    }

    return parsed.format('D MMM YYYY HH:mm');
}

export function getCountdownParts(eventDate) {
    const duration = moment.duration(moment(new Date(eventDate)).diff(new Date()));
    return {
        days: parseInt(duration.as('days')),
        hours: duration.get('hours'),
        minutes: duration.get('minutes'),
        seconds: duration.get('seconds'),
    }
}