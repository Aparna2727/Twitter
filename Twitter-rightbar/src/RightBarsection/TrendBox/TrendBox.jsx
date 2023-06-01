import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile, faFaceFrown } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import Styles from "./Trend.module.css";

export default function Trendbox() {
  const content = [
    {
      id: 1,

      inIntrseted: false,
      upText: "Sports · Trending",
      midText: "#IPL FINAL",
      botText: "570k Tweets",
    },
    {
      id: 2,
      upText: "Trending in India",
      midText: "भगवान विष्णु",
      botText: "5,104 Tweets",
    },
    {
      id: 3,
      inIntrseted: false,
      upText: "Entertainment·Trending",
      midText: "#SSRajamouli",
      botText: "1,981 Tweets",
    },
    {
      id: 4,

      inIntrseted: false,
      upText: "SPORTS",
      midText: "#INDvsAUS",
      botText: "377k Tweets",
    },
    {
      id: 5,

      inIntrseted: false,
      upText: "Trending in Business & finance",
      midText: "The World Bank",
      botText: "6,154 Tweets",
    },
    {
      id: 6,

      inIntrseted: false,
      upText: "Trending in India",
      midText: "#ViratKohli",
      botText: "45.5K Tweets",
    },
    {
      id: 7,

      inIntrseted: false,
      upText: "Politics · Trending",
      midText: "Karnataka",
      botText: "345K Tweets",
    },
    {
      id: 8,

      inIntrseted: false,
      upText: "Trending in Open-wheel racing",
      midText: "Mick",
      botText: "17.8K Tweets",
    },
  ];
  const [showMore, setShowMore] = useState(3);
  const [list, setList] = useState(content);
  const handleShow = () => {
    setShowMore(showMore + 3);
  };

  function notInterested(element) {
    if (element.inIntrseted === true) {
      element.inIntrseted = false;
      setList([...list]);
    } else {
      element.inIntrseted = true;
      setList([...list]);
    }
  }

  function dataDelete(element) {
    let index = list.indexOf(element);
    console.log(index);
    list.splice(index, 1);
    setList([...list]);
  }

  return (
    <>
      <div className={Styles.Trendbox}>
        <h1
          style={{ paddingLeft: "1rem", backgroundColor: "rgb(255, 251, 251)" }}
        >
          What’s happening{" "}
        </h1>
        {/* <div className={Styles.imgcontainer}>
         <p>UEFA Europa League LIVE</p>
         <h6>Sevilla FC vs AS Roma</h6>
         <img className={Styles.img} src="https://wallpaperaccess.com/full/3441945.jpg" alt="dummy img" />
         </div> */}
        {list.slice(0, showMore).map((item) => (
          <div className={Styles.Trend_main}>
            <div className={Styles.content}>
              <span
                style={{ backgroundColor: "rgb(255, 251, 251)" }}
                className={Styles.content}
              >
                {item.upText}
              </span>
              <span
                style={{ backgroundColor: "rgb(255, 251, 251)" }}
                className={Styles.content1}
              >
                {item.midText}
              </span>
              <span
                style={{ backgroundColor: "rgb(255, 251, 251)" }}
                className={Styles.content}
              >
                {item.botText}
              </span>
            </div>
            <span
              style={{ backgroundColor: "rgb(255, 251, 251)" }}
              className={Styles.poperParent}
            >
              {item.inIntrseted ? (
                <span className={Styles.poper}>
                  <h className={Styles.btn} onClick={() => dataDelete(item)}>
                    <FontAwesomeIcon color="blue" icon={faFaceSmile} /> NOT
                    INTRESTED
                  </h>
                  <h className={Styles.btn} onClick={() => dataDelete(item)}>
                    {" "}
                    <FontAwesomeIcon color="red" icon={faFaceFrown} /> SPAM OR
                    MISLEADING{" "}
                  </h>
                </span>
              ) : (
                " "
              )}
              <FontAwesomeIcon
                icon={faEllipsis}
                onClick={() => notInterested(item)}
              />
            </span>
          </div>
        ))}

        <div>
          <button onClick={handleShow} className={Styles.showmore} size="small">
            Show More{" "}
          </button>
        </div>
      </div>
    </>
  );
}
