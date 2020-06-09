import React from 'react';
import './App.css';
import Item from './components/Item';

export default function App() {
    return (
        <div className="App">
            <Item title={'block-1'} />
            <Item title={'bock-2'} />
        </div>
    );
};
