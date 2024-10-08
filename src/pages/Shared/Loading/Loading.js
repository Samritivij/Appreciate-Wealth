import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center my-5'>
            <Spinner className='display-1 fw-bolder' animation="border" variant="danger" />
            <h2 className='text-danger'>Loading</h2>
        </div>
    );
};

export default Loading;
