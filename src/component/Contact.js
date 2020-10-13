import React from 'react';

//Class Component
class Contact extends React.Component{
    render(){
        return(
            <React.Fragment>
            <p>Contact</p>
            <style jsx>{`
            p {
                color: green;
            }
            `}</style>
            </React.Fragment>
        );
    }
}

export default Contact;