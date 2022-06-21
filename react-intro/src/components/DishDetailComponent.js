import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup } from 'reactstrap'

class DishDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    renderComments(dish) {
        if (dish !== null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ListGroup type="unstyled">
                        {dish.comments.map(item => {
                            return (
                                <li key={item.id}>
                                    <p>{item.comment}</p>
                                    <p>--{item.author},{item.date}</p>
                                </li>)
                        })}           
                    </ListGroup>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const dish = this.props.detailedDish;
        return (        
            <div key={dish.id} className="col">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle >{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>                 
                    </Card>
                </div> 
                <div className="col">
                    {this.renderComments(dish)}
                </div>
            </div>
           
            
        );
    }
};

export default DishDetail; 