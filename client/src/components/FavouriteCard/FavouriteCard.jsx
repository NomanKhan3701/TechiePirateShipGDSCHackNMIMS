import React from 'react'
import "./FavouriteCard.scss"
const FavouriteCard = (props) => {
    return (
        <div className="post-card">
            <div className="image">
                <img src={props.img} alt="" />
            </div>
            <div className="footer">
                <div className="title">
                    {props.name}
                </div>
                <div className="favourite-desc">
                    {props.desc}
                </div>
                <div className="favourite-status">
                    Price: ${props.price}
                </div>
            </div>
        </div>
    )
}

export default FavouriteCard