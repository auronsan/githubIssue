// IMPORT PACKAGE REFERENCES

import React from 'react';

import {IssueComponent} from '../issue/IssueComponent';
import {NotificationComponent} from '../notification/NotificationComponent.js';


export const HomePage = () => (
    <main>
        <div className="header animated fadeIn">
            <span>QuodAI Challenge</span>
            <NotificationComponent/>
        </div>
         <div className="body">
         <IssueComponent/>
         </div>
    </main>
);
