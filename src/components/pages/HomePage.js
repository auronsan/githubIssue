// IMPORT PACKAGE REFERENCES

import React from 'react';

import {IssueComponent} from '../Issue/IssueComponent';

export const HomePage = () => (
    <main>
        <div className="jumbotron jumbotron-fluid text-dark bg-light animated fadeIn">
            <h1 className="display-6 text-center">React-Redux</h1>
            <p className="lead text-center">Github Issue list</p>
            <hr className="my-4"/>
        </div>
        <IssueComponent/>
    </main>
);
