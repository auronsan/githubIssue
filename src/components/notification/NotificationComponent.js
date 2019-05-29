import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// COMPONENT

import {openModalNotifcation, closeModalNotification, fetchNotifications, clearNotifications} from '../state/actions/NotificationAction';

import {Loading} from '../globals/loading';
import {NotificationItem} from './NotificationItem';

class NotificationComponent extends Component {

    componentDidMount() {
        //console.log(this.props);
        this.props.fetchNotifications();
    }

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
    }

    toggleModal() {
        if(this.props.modal) {
            return  this.props.closeModalNotification();
        }
        return this.props.openModalNotifcation();
    }
    clearNotifications() {
        this.props.clearNotifications();
        this.props.fetchNotifications();
    }
    render() {
        return (
            <div className={"notification__container " + (this.props.modal ? 'open' : '')} >
                <i className="fas fa-bell" onClick={this.toggleModal.bind(this)}></i>
                {this.props.notificationList && <div className="notification__label-count">{this.props.notificationList.length}</div>}
                {!this.props.notificationList && <div className="notification__label-count">0</div>}  
                <div className="notification__content">
                <div className="notification__content-header">
                {this.props.modal && this.props.notificationList  && this.props.notificationList.length > 0 && 
                <button className="notification__content__clear-filter" onClick={this.clearNotifications.bind(this)}>Clear all</button>
                }
                </div>
                <div className="notification__content-body">
                {this.props.modal && this.props.notificationList && this.props.notificationList.map((item, key) => {
                    return <NotificationItem notif={item} key={key} />
                })}
               
                {this.props.modal && !this.props.notificationList && <div className="notification__no-content"> No Notifications </div>}
                </div>
                </div>
            </div>
        );
    }
}

NotificationComponent.propTypes = {
    modal: PropTypes.bool.isRequired,
    openModalNotifcation: PropTypes.func.isRequired,
    closeModalNotification: PropTypes.func.isRequired,
    fetchNotifications: PropTypes.func.isRequired,
    clearNotifications: PropTypes.func.isRequired,
    notificationList: PropTypes.array,
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const {modal , notificationList} = state.notification;
    return {
        modal,
        notificationList
    };
};

const mapDispatchToProps = dispatch => (bindActionCreators({
    openModalNotifcation,
    closeModalNotification,
    fetchNotifications,
    clearNotifications,
}, dispatch));

const hoc = connect(mapStateToProps, mapDispatchToProps)(NotificationComponent);

// EXPORT COMPONENT

export {hoc as NotificationComponent};