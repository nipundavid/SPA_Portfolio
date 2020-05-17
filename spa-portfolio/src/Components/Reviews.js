import React, { useContext } from "react";
import { InfoContext } from "./Context";
import ReviewCard from "../Components/Pages/ReviewCard";

const Reviews = () => {
  const [data, setData] = useContext(InfoContext);
  return (
    <div>
      {data.rev.map((person) => (
        <ReviewCard
          key={person.id}
          name={person.name}
          avatar={person.avatar}
          comment={person.comment}
        />
      ))}
    </div>
  );
};

export default Reviews;
