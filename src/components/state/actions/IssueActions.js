import {fetchIssuesList} from '../../../services/IssueService';

// FETCH ISSUES ACTION NAMES

export const FETCH_ISSUES = 'FETCH_ISSUES';
export const FETCH_ISSUES_PENDING = 'FETCH_ISSUES_PENDING';
export const FETCH_ISSUES_FULFILLED = 'FETCH_ISSUES_FULFILLED';
export const FETCH_ISSUES_REJECTED = 'FETCH_ISSUES_REJECTED';

// ACTION GENERATORS

const fetchIssueListAction = (page) => ({type: FETCH_ISSUES, payload: fetchIssuesList(page)});

// EXPORT ACTIONS

export {fetchIssueListAction as fetchIssueList};