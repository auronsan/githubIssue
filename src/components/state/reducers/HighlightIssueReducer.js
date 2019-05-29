import {ISSUE_HIGHLIGHT_FULFILLED, ISSUE_UNHIGHLIGHTED_FULFILLED, FETCH_ISSUE_HIGHLIGHT_FULFILLED} from '../actions/HighlightActions';

// INITIALIZE STATE

const initialState = {
    highlightItem: {}
};

// REDUCER

export const HighlightReducer = (state = initialState, action) => {
    switch (action.type) {
        case ISSUE_HIGHLIGHT_FULFILLED:
            return {
                ...state,
                highlightItem: action.payload
            };
        case ISSUE_UNHIGHLIGHTED_FULFILLED:
            return {
                ...state,
                highlightItem: action.payload
            };
        case FETCH_ISSUE_HIGHLIGHT_FULFILLED:
            return {
                ...state,
                highlightItem: action.payload
            };
        default:
            return state;
    }
};