import React from 'react';
import { Card, CardTitle, CardBody, CardImg, CardText } from 'reactstrap';
import LoadComments from './LoadComments';
import CommentForm from './CommentForm';
import { baseUrl } from '../../redux/baseUrl';

const DishDetail = props => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name}></CardImg>
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle tag="h4">{props.dish.name}</CardTitle>
                    <CardText>
                        <span style={{ fontWeight: "bold" }}>Description: </span>{props.dish.description}
                    </CardText>
                    <CardText>
                        <span style={{ fontWeight: "bold" }}>Price: </span>{props.dish.price}/-<br />
                    </CardText>
                    <CardText>
                        <span style={{ fontWeight: "bold" }}>Label: </span>{props.dish.label}<br />
                    </CardText>
                    <CardText>
                        <span style={{ fontWeight: "bold" }}>Category: </span>{props.dish.category}
                    </CardText>
                    <hr />
                    <CardTitle tag="h4" style={{ textDecoration: "underline", color: "#39a6a3" }}>All Comments:</CardTitle>
                    <LoadComments comments={props.comments}
                        commentIsLoading={props.commentIsLoading} />
                    <CommentForm dishId={props.dish.id}
                        addComment={props.addComment}
                    />

                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;