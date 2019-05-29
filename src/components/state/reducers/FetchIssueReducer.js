import {FETCH_ISSUES_PENDING, FETCH_ISSUES_FULFILLED, FETCH_ISSUES_REJECTED} from '../actions/IssueActions';

// INITIALIZE STATE

const initialState = {
    issues: [],
    fetching: false,
    fetched: false,
    failed: false,
    currentPage: 1
};

// REDUCER

export const FetchIssuesReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_ISSUES_PENDING:
            return {
                ...state,
                issues: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_ISSUES_FULFILLED:
            return {
                ...state,
                issues: action.payload.data,
                currentPage: action.payload.currentPage,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_ISSUES_REJECTED:
            return {
                ...state,
                issues: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};