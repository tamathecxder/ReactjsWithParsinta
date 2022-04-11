import React from 'react'

function Card() {
    return (
        <div className="card">
            <img src="https://placekitten.com/g/300/200" alt="Cat picture" className="card-img-top" />
            <div className="card-body">
                <h4>The first post</h4>
                <small className="text-muted">Published 14-04-2022</small>
            </div>
        </div>
    )
}

export default Card;