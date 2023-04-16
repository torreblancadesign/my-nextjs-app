
import React from 'react';
import CustomComponent from './CustomComponent';

const Index = () => {
    return (
        <CustomComponent
            time={new Date().toLocaleTimeString()}
            date={new Date().toLocaleDateString()}
            weather="sunny"
            backgroundColor="blue, yellow"
        />
    );
}

export default Index;