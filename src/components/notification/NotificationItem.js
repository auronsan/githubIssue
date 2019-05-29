import React from 'react';

import {Truncate} from '../../utils/truncate';

export const NotificationItem = (props) => (
    <div className="notification__content-item">
    <div className="notification__item-title">
    <div className="notification__item-avatar" title={props.notif.user_name} style={{
                backgroundImage: `url(${props.notif.avatar_url})`}}>
    </div>
    <span>{props.notif.highlight ? 'Highlighted' : 'Unhighlighted'}</span>
    </div>
    <div><Truncate text={props.notif.title} maxText={50}/></div>
    </div>
)