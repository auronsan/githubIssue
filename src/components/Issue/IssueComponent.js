import React, {Component} from 'react';
import {IssueItem} from './IssueItem';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// COMPONENT

import {fetchIssueList} from '../state/actions/IssueActions';
import {highlightIssue, unHighlightIssue, fetchHighLight} from '../state/actions/HighlightActions';
import {fetchNotifications} from '../state/actions/NotificationAction';

import {Loading} from '../globals/loading';

class IssueComponent extends Component {

    componentDidMount() {
        this.props.fetchIssueList();
        this
            .props
            .fetchHighLight();
    }

    next() {
        const next_page = this.props.currentPage + 1;
        this
            .props
            .fetchIssueList(next_page);
    }

    fetchIssues() {
        this
            .props
            .fetchIssueList();
    }
    hightlight(item) {
        if (this.props.highlightItem && this.props.highlightItem.id === item.id) {
            this
                .props
                .unHighlightIssue(item);
            return this
                .props
                .fetchNotifications();
        }
        this
            .props
            .highlightIssue(item);
        return this
            .props
            .fetchNotifications();
    }
    render() {
        return (
            <div>
                {/*<button
                    onClick={this
                    .fetchIssues
                    .bind(this)}>fetch now</button>*/}
                {this.props.fetching && <Loading/>}
                {this.props.fetched && <div className="issue__container">
                    {this
                        .props
                        .issues
                        .map((item, key) => <div
                            onClick={this
                            .hightlight
                            .bind(this, item)}
                            key={key}>
                            <IssueItem
                                issue={item}
                                hightlight={this.props.highlightItem && this.props.highlightItem.id === item.id}/></div>)}
                </div>}
                {this.props.fetched && <button
                    onClick={this
                    .next
                    .bind(this)}>next</button>}
            </div>
        );
    }
}

IssueComponent.propTypes = {
    fetchIssueList: PropTypes.func.isRequired,
    highlightIssue: PropTypes.func.isRequired,
    unHighlightIssue: PropTypes.func.isRequired,
    fetchHighLight: PropTypes.func.isRequired,
    fetchNotifications: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    issues: PropTypes.array.isRequired,
    currentPage: PropTypes.number,
    highlightItem: PropTypes.object
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const {fetching, fetched, failed, issues, currentPage} = state.issue;
    const {highlightItem} = state.highlightItem;
    return {
        fetching,
        fetched,
        failed,
        issues,
        currentPage,
        highlightItem
    };
};

const mapDispatchToProps = dispatch => (bindActionCreators({
    fetchIssueList,
    highlightIssue,
    unHighlightIssue,
    fetchHighLight,
    fetchNotifications
}, dispatch));

const hoc = connect(mapStateToProps, mapDispatchToProps)(IssueComponent);

// EXPORT COMPONENT

export {hoc as IssueComponent};