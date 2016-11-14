/**
 * Created by nmamikon on 10/26/2016.
 */
import initialState from './initialState';

export default function EventsReducer(state = initialState.events, action) {

    switch (action.type) {
        case 'CREATE_NEW_EVENT':
            return Object.assign([], state, [...state, action.event]);

        default:
            return state;
    }
}
