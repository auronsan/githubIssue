// IMPORT PACKAGE REFERENCES

import React from 'react';

import {IssueComponent} from '../issue/IssueComponent';
import {NotificationComponent} from '../notification/NotificationComponent.js';


export const HomePage = () => (
    <main>
        <div className="header animated fadeIn">
            <h1>React-Redux</h1>
            <p>Github Issue list</p>
            <NotificationComponent/>
            <hr/>
        </div>
         <div className="body">
         <IssueComponent/>
         </div>
    </main>
);
