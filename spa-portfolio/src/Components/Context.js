import React, { createContext, useState } from "react";
import { placeInfo, reviews, detailInfo, news } from "../data";

export const InfoContext = createContext();

export const InfoProvider = (props) => {
  const [Data, setData] = useState({
    info: placeInfo,
    rev: reviews,
    dInfo: detailInfo,
    new: news,
  });
  return (
    <div>
      <InfoContext.Provider value={[Data, setData]}>
        {props.children}
      </InfoContext.Provider>
    </div>
  );
};
