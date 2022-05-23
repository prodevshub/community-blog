import React from 'react';
import { useParams } from 'react-router-dom';

export default function Post() {
    const { id } = useParams(1);
    return (
        <>
            <h2>Post Page</h2>
            <div>{id}</div>
        </>

    );
}
