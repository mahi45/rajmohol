import React from 'react';
import dateFormat from 'dateformat';
import Loading from './Loading';

const LoadComments = props => {
    console.log(props);
    if (props.commentIsLoading) {
        return <Loading />
    } else {
        return (
            props.comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <h6><span style={{ fontWeight: "bold" }}>Author: </span>{comment.author}</h6>
                        <p><span style={{ fontWeight: "bold" }}>Rating: </span>{comment.rating}</p>
                        <p><span style={{ fontWeight: "bold" }}>Comment: </span>{comment.comment}</p>
                        <p><span style={{ fontWeight: "bold" }}>Date: </span>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                        <hr />
                    </div>
                );
            })
        );
    }

}

export default LoadComments;