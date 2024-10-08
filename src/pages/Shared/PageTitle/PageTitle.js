import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title, pageColor }) => {
    return (
        <>
            <Helmet>
                <title>{title} : Fruits Valley</title>
                <body class={pageColor} />
            </Helmet>

        </>
    );
};

export default PageTitle;
