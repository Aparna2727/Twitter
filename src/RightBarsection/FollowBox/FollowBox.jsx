import { useState } from "react";
import FollowButton from "./FollowButton";
import Styles from "./Follow.module.css"
import {VscVerifiedFilled} from 'react-icons/vsc'
export default function FollowBox() {


    const content = [
        {
          image:
            "https://pbs.twimg.com/profile_images/1565985672501927936/d-r-h241_400x400.jpg",
          name: "Narendra Modi",
          userName: "@narendramodi",
          dots: "Follow",
          dots3: "Following",
        },
        {
          image:
            "https://pbs.twimg.com/profile_images/977218088662745088/f-GpMOPN_400x400.jpg",
          name: "Adah Sharma"  ,
          userName: "@adah_sharma",
          dots: "Follow",
          dots3: "Following",
        },
        {
          image:
            "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
          name:  " Elon Musk",
          userName: "@elonmusk",
          dots: "Follow",
          dots3: "Following",
        },
        {
          image:
            "https://pbs.twimg.com/profile_images/1317154509768986625/WcGmrrQY_400x400.jpg",
          name: "Katherine Hay",
          userName: "@KeHay",
          dots: "Follow",
          dots3: "Following",
        },
        {
          image:
            "https://www.gspeakers.com/wp-content/uploads/2022/06/9a7f42_c87b976043d64b7a910ffa11d857fc5emv2-1.jpg",
          name: "Aleissia Laidacker",
          userName: "@Aleissia",
          dots: "Follow",
          dots3: "Following",
        },
        {
          image:
            "https://www.bravotv.com/sites/bravo/files/2023/01/bravo_topchef_s20_digital_bravotv_1920x1080_1.jpg",
          name: "Bravo Top Chef",
          userName: "@BravoTopChef",
          dots: "Follow",
          dots3: "Following",
        },
      ];
  const [shows, setShows] = useState(false);
 const handleShows=()=>{
  setShows(!shows)
 }
 const displayShows=shows? content: content.slice(0,3)
  return (
    <>
      <div className={Styles.mainbox}>
        <h3 style={{paddingLeft:"1rem",fontSize:"30px"}}>Who to follow </h3>

        {displayShows.map((element) => (
          <div className={Styles.contentmain}>
            <div className={Styles.content}>
            <p> <img
                className={Styles.image}
                src={element.image}
                width="60em"
                height="60em"
                
              /></p> 
            </div>
            <div className={Styles.para}>
              <p className={Styles.username}>{element.name}<VscVerifiedFilled className={Styles.vericon} size={20} color="royalblue"/></p>
              <p className={Styles.username2}>{element.userName}</p>
            </div>
            <div style={{ paddingTop: "1.5em" }}>
              <FollowButton />
            </div>
          </div>
        ))}
        <h4 className={Styles.ShowMore} onClick={handleShows}>{shows ? 'Show Less' : 'Show More'}</h4>
      </div>
    </>
  );
}
