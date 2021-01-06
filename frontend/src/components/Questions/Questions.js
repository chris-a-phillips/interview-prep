import React from 'react';

const Questions = ({ category }) => {

    console.log(`hello from ${category}`)


    return (
        <div>
            {category}
        </div>
    );
};

export default Questions;