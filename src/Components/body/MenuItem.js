import React from 'react';
import { Card, CardTitle, CardBody, CardImg, CardImgOverlay } from 'reactstrap';
import { baseUrl } from '../../redux/baseUrl';

const MenuItem = props => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody style={{ position: "relative" }}>
                    <CardImg
                        width="100%"
                        alt={props.dish.name}
                        src={baseUrl + props.dish.image}
                        style={{ opacity: "0.6" }}
                    >
                    </CardImg>
                    <CardImgOverlay>
                        <CardTitle tag="h3" style={{
                            color: "#000000", position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            cursor: "pointer"
                        }} onClick={props.DishSelect}>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;