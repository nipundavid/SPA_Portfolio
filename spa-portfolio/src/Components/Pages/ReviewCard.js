import React from "react";

const ReviewCard = ({ name, avatar, comment }) => {
  return (
    <div className="media mt-5">
      <img className="mr-3" src={avatar} alt={name} style={{ width: "40px" }} />
      <div className="media-body">
        <h5 className="mt-0">{name}</h5>
        <p>{comment}</p>
      </div>
    </div>
  );
};
export default ReviewCard;
