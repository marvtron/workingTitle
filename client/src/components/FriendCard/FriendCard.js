import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import axios from 'axios';

class FriendCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            results: []
            };
        }
    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=8')
        .then(res => this.setState({
             results: res.data, isLoaded:true
        })
        );
    }              
    render() {
        const { error, isLoaded } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
        return(
                <div className="card-friends" style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                    {this.state.results.results.map(result => ( 
                        <Card style={{ width: '18rem', textTransform:'capitalize' }}>
                        <Card.Img className="center-align"variant="top" src={result.picture.large} alt="placeholder" style={{width:'50%', marginLeft:'60px'}} />
                        <Card.Body className='center-align'>
                            <Card.Title>{result.name.first} {result.name.last}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush center-align">
                            <ListGroupItem>Username: {result.login.username}</ListGroupItem>
                            <ListGroupItem>City: {result.location.city}</ListGroupItem>
                            <ListGroupItem>Age: {result.dob.age}</ListGroupItem>
                        </ListGroup>
                        <hr></hr>
                        <Card.Body className='center-align socials' style={{paddingBlock:'30px', marginTop:'25px'}}>
                        <div className ='socials center-align'>
                            <Button simple>
                            <i className="fab fa-facebook-square"></i>
                            </Button>
                            <Button simple>
                            <i className="fab fa-twitter" />
                            </Button>
                            <Button simple >
                            <i className="fab fa-youtube" />
                            </Button>
                        </div>
                        </Card.Body>
                        </Card>

                    )
                )
            }
        </div>

        )}       
    }
}

    

export default FriendCard;