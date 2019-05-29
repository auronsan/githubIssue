import React from 'react';
import {Truncate} from '../../utils/truncate';

export const IssueItem = (props) => (
    <div className="issue__item">
        <a href={props.issue.user.html_url} target="_blank" rel="noopener noreferrer">
            <div
                className="issue__item-avatar"
                title={props.issue.user.login}
                style={{
                backgroundImage: `url(${props.issue.user.avatar_url})`
            }}></div>
        </a>
        <div className="issue__body">
            <a
                href={props.issue.url}
                target="_blank"
                rel="noopener noreferrer"
                className="issue__body-title">{props.issue.title}</a>
            <span className="issue__body-content">
                <Truncate text={props.issue.body}/>
            </span>
        </div>
        <div className="issue__legend">
            {props.issue.state && <span className="issue__item-label">{props.issue.state}</span>}
            {props.issue.labels && props
                .issue
                .labels
                .map((item, key) => <span
                    key={key}
                    className="issue__item-label"
                    style={{
                    backgroundColor: `#${item.color}`
                }}>{item.name}</span>)}
        </div>
    </div>
);
