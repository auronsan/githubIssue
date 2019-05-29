import {FETCH_NOTIFICATIONS_FULFILLED, OPEN_MODAL_NOTIFICATIONS, CLOSE_MODAL_NOTIFICATIONS, CLEAR_NOTIFICATIONS} from '../actions/NotificationAction';

// INITIALIZE STATE

const initialState = {
    modal: false,
    notificationList : []
};

// REDUCER

export const NotificationReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_NOTIFICATIONS_FULFILLED:
            return {
                ...state,
                notificationList: action.payload
            };
        case OPEN_MODAL_NOTIFICATIONS:
            return {
                ...state,
                modal: true,
            };
        case CLOSE_MODAL_NOTIFICATIONS:
            return {
                ...state,
                modal: false,
            };
        case CLEAR_NOTIFICATIONS:
            return {
                ...state,
                modal: false,
            };
        default:
            return state;
    }
};