import React from 'react';
import Form from '../library/renderer/FormRenderer';
import form from '../json-data/Employee.json'

const Home = () => {
    const submitFunc = (event) => {
        // event.preventDefault();
        console.log(event);
    }
    return (
        <div className='Home'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 card'>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;