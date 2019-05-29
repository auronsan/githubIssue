// IMPORT PACKAGE REFERENCES

import {combineReducers} from 'redux';

// IMPORT REDUCERS

import {FetchIssuesReducer} from './FetchIssueReducer';
import {HighlightReducer} from './HighlightIssueReducer';

// EXPORT APP REDUCER

export const AppReducer = combineReducers({issue: FetchIssuesReducer, highlightItem: HighlightReducer});