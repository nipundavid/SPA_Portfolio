import React, { useContext } from "react";
import { InfoContext } from "../Context";
import Info from "../Info";

const Home = () => {
  const [data, setData] = useContext(InfoContext);
  return (
    <div className="container">
      <div className="row mt-5">
        {data.info.map((item) => (
          <Info
            key={item.id}
            img={item.img}
            headerTitle={item.headerTitle}
            headerSubtitle={item.headerSubtitle}
            headerText={item.headerText}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
