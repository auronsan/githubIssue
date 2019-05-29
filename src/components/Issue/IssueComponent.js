import React, {Component} from 'react';
import {IssueItem} from './IssueItem';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// COMPONENT

import {fetchIssueList} from '../state/actions/IssueActions';
import {Loading} from '../globals/loading';

class IssueComponent extends Component {

    componentDidMount() {
        //this.props.fetchIssueList();
    }

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
    }

    next() {
        const current_page = this.props.currentPage + 1;
        this
            .props
            .fetchIssueList(current_page);
    }

    fetchNow() {
        this
            .props
            .fetchIssueList();
    }

    render() {
        return (
            <div>
                <button
                    onClick={this
                    .fetchNow
                    .bind(this)}>fetch now</button>
                {this.props.fetching && <Loading/>}
                {this.props.fetched && <div className="issue__container">
                    {this
                        .props
                        .issues
                        .map((item, key) => <IssueItem issue={item} key={key}/>)}
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
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    issues: PropTypes.array.isRequired,
    currentPage: PropTypes.number
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const {fetching, fetched, failed, issues, currentPage} = state.issue;
    return {fetching, fetched, failed, issues, currentPage};
};

const mapDispatchToProps = dispatch => (bindActionCreators({
    fetchIssueList
}, dispatch));

const hoc = connect(mapStateToProps, mapDispatchToProps)(IssueComponent);

// EXPORT COMPONENT

export {hoc as IssueComponent};