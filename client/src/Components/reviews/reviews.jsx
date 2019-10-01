import React from 'react';
import './reviews.css';

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewContacts: []
        }    
    }
    
    componentDidMount(){
        let dataURL = '/api/contacts';
        fetch(dataURL)
        .then(res => res.json())
        .then(details => {
            this.setState({
                viewContacts: details
            });
        })
    };

    render(){
        console.log('state - ', this.state);
        if (this.state.viewContacts.length == 0){
            return <div>loading...</div>
        }
        return(
            <div>
                <h1>Reviews</h1>
                {
                    this.state.viewContacts.map(({ first_name, last_name, topic, email, contact_comment }) => (
                        <div className="reviews">
                            <p className="title">First Name:</p> 
                            <p>{ first_name }</p>
                            <p className="title">Last Name:</p>
                            <p>{ last_name }</p>
                            <p className="title">Email:</p> 
                            <p>{ email }</p>
                            <p className="title">Comment: </p>
                            <p>{ contact_comment }</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Reviews