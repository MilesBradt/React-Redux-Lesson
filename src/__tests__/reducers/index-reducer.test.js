import rootReducer from '../../reducers/index.js';
import { createStore } from 'redux';

let store = createStore(rootReducer);

test('Check that initial state of ticketListReducer matches root reducer', () => {
    expect(store.getState().masterTicketList).toEqual(ticketListReducer(undefined, {
        type: null
    }));
});

test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, {
        type: null
    }));
});

test('Check that initial state of ticketListReducer matches root reducer', () => {
    const action = {
        type: 'ADD_TICKET',
        names: 'Ryan & Aimen',
        location: '4b',
        issue: 'Redux action is not working correctly.',
        id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterTicketList).toEqual(ticketListReducer(undefined, action));
});

test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
        type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
});

describe("rootReducer", () => {

    test('Should return default state if no action type is recognized', () => {
        expect(rootReducer({}, {
            type: null
        })).toEqual({
            masterTicketList: {},
            formVisibleOnPage: false
        });
    });

    

});