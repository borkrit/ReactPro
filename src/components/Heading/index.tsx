import React from 'react';


interface IHeading {
    element:string 
}

const Heading: React.FC<IHeading> = ({ children,element}) => {
    return (
        <>
            {React.createElement(element,[],children)}
        </>   
    ); 
};

export default Heading;