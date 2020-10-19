import React from 'react';

const QuestionName = ({name, funcSetName}) => {
    
    return (
        <section className="name-section">
            <label htmlFor="input-text" className="label">What's your name?</label>
            <input
                id="input-text"
                type="text"
                value={name}
                onChange={event => funcSetName(event.target.value)}
                required
            ></input>
        </section>
    )
}

export default QuestionName;
