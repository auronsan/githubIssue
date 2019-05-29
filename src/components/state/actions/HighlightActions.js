import {highLightIssueItem, unHighlightIssueItem, fetchHighLightIssueList} from '../../../services/IssueService';

// ISSUE_HIGHLIGHT ACTION NAMES
export const ISSUE_HIGHLIGHT = 'ISSUE_HIGHLIGHT';
export const FETCH_ISSUE_HIGHLIGHT = 'FETCH_ISSUE_HIGHLIGHT';
export const FETCH_ISSUE_HIGHLIGHT_FULFILLED = 'FETCH_ISSUE_HIGHLIGHT_FULFILLED';
export const ISSUE_HIGHLIGHT_FULFILLED = 'ISSUE_HIGHLIGHT_FULFILLED';
export const ISSUE_UNHIGHLIGHTED = 'ISSUE_UNHIGHLIGHTED';
export const ISSUE_UNHIGHLIGHTED_FULFILLED = 'ISSUE_UNHIGHLIGHTED_FULFILLED';


// ACTION GENERATORS

const highlightIssueAction = (data) => ({type: ISSUE_HIGHLIGHT, payload: highLightIssueItem(data)});
const unHighlightIssueAction = (data) => ({type: ISSUE_UNHIGHLIGHTED, payload: unHighlightIssueItem(data)});
const fetchHighLightAction = (data) => ({type: FETCH_ISSUE_HIGHLIGHT, payload: fetchHighLightIssueList(data)});

// EXPORT ACTIONS

export {highlightIssueAction as highlightIssue, unHighlightIssueAction as unHighlightIssue, fetchHighLightAction as fetchHighLight};