import { useState } from "react";
import Styles from './FollowButton.module.css'
export default function FollowButton() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          if (show === false) {
            setShow(true);
          } else {
            setShow(false);
          }
        }}
       className={Styles.btn}

      >
        {show ? "Follow" : "Following"}
      </button>
    </>
  );
}
