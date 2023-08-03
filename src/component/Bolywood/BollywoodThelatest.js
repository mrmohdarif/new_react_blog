import React, { useContext } from "react";
import { store1 } from "../../NavigationBar";
import { Link } from "react-router-dom";

export function BollywoodThelatest() {
  const [data23] = useContext(store1);
  console.log("this data23", data23);

  return (
    <>
      <h1 className="bolywood_thelatest">The Latest</h1>

      <div className="the_latest">
        {data23
          .filter((item) => item.categorey === "News")
          .map((data, index) => {
            return (
              <div className="the_latest_image" key={data.id}>
                <Link to={data.path}>
                  <img
                    src={data.urlToImage}
                    alt="the_latest"
                    style={{
                      width: "auto",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    className="img"
                  />
                </Link>

                <p>{data.title}</p>
                <p>{data.publishedAt}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}
