import {getNotification, clearNotification} from '../../../services/IssueService';

// FETCH ISSUES ACTION NAMES

export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS';
export const FETCH_NOTIFICATIONS_FULFILLED = 'FETCH_NOTIFICATIONS_FULFILLED';
export const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS';
export const OPEN_MODAL_NOTIFICATIONS = 'OPEN_MODAL_NOTIFICATIONS';
export const OPEN_MODAL_NOTIFICATIONS_FULFILLED = 'OPEN_MODAL_NOTIFICATIONS_FULFILLED';
export const CLOSE_MODAL_NOTIFICATIONS = 'CLOSE_MODAL_NOTIFICATIONS';
export const CLOSE_MODAL_NOTIFICATIONS_FULFILLED = 'CLOSE_MODAL_NOTIFICATIONS_FULFILLED';

// ACTION GENERATORS

const fetchNotificationsAction = () => ({type: FETCH_NOTIFICATIONS, payload: getNotification()});
const clearNotificationsAction = () => ({type: CLEAR_NOTIFICATIONS, payload : clearNotification()});
const openModalNotifcationAction = () => ({type: OPEN_MODAL_NOTIFICATIONS, payload: {}});
const closeModalNotificationAction = () => ({type: CLOSE_MODAL_NOTIFICATIONS, payload: {}});

// EXPORT ACTIONS

export {fetchNotificationsAction as fetchNotifications, 
    openModalNotifcationAction as openModalNotifcation, 
    closeModalNotificationAction as closeModalNotification,
    clearNotificationsAction as clearNotifications, };