import React, { useState } from 'react'
import myStore from '../ReduxStore/redux_store';

const InputForm = () => {

    const [name, setName] = useState('');

    const dispatchHandler = () => {
        console.log(name);
        myStore.dispatch({
            type: "name",
            username: name,
        });
    };

  return (
    <div>
        <h1>Redux Tutorial - 01</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button type='submit' onClick={dispatchHandler}>Submit</button>
    </div>
  )
}

export default InputForm;
