// IMPORT PACKAGE REFERENCES

import {combineReducers} from 'redux';

// IMPORT REDUCERS

import {FetchIssuesReducer} from './FetchIssueReducer';

// EXPORT APP REDUCER

export const AppReducer = combineReducers({issue: FetchIssuesReducer});