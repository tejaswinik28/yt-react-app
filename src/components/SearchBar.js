import React, { useState } from "react";

const SearchBar = ({onFormSubmit}) => {

    const [term, setTerm] = useState('');

    const onTextInput = (event) => {
       setTerm(event.target.value);
       
     };

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
      
        //Make sure we call callback from parent component
    };

    return (
        <div className="ui segment search-bar">
          <form className="ui form" onSubmit={onSubmit}>
            <div className="field">
                <label>Video Search</label>
                <input  value={term} type='text' onChange={(event) => {setTerm(event.target.value);}} />
            </div>
          </form>
        </div>
      
    );

};



export default SearchBar;