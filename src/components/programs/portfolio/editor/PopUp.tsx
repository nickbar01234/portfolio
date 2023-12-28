import {
  faDownLeftAndUpRightToCenter,
  faUpRightAndDownLeftFromCenter,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface PopUpProps {
  children?: React.ReactNode;
  setDisplayPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUp = (props: PopUpProps) => {
  const [expand, setExpand] = useState(false);
  const [closeIconVisible, setCloseIconVisible] = useState(false);
  const [expandIconVisible, setExpandIconVisible] = useState(false);

  return (
    <div
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
        expand ? "w-full h-full" : "md:w-3/6 md:h-4/6 w-5/6 h-3/6"
      } bg-bg-variant shadow-lg shadow-comment rounded p-2 whitespace-nowrap z-50 border border-bg-highlight`}
    >
      <div className="flex gap-x-2">
        <i
          className="rounded-full h-3 w-3 bg-keyword cursor-pointer flex justify-center items-center"
          onClick={() => {
            props.setDisplayPopUp(false);
            setExpand(false);
          }}
          onMouseEnter={() => setCloseIconVisible(true)}
          onMouseLeave={() => setCloseIconVisible(false)}
        >
          <FontAwesomeIcon
            icon={faXmark}
            className={`text-bg-highlight w-2 h-2 ${
              closeIconVisible ? "visible" : "invisible"
            }`}
          />
        </i>
        <i
          className="rounded-full h-3 w-3 bg-decl cursor-pointer flex justify-center items-center"
          onClick={() => setExpand((prev) => !prev)}
          onMouseEnter={() => setExpandIconVisible(true)}
          onMouseLeave={() => setExpandIconVisible(false)}
        >
          <div className={expandIconVisible ? "visible" : "invisible"}>
            {expand ? (
              <FontAwesomeIcon
                icon={faUpRightAndDownLeftFromCenter}
                className="w-2 h-2 text-bg-highlight"
                transform={{ flipY: true }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faDownLeftAndUpRightToCenter}
                className="w-2 h-2 text-bg-highlight"
                transform={{ flipY: true }}
              />
            )}
          </div>
        </i>
      </div>
      {props.children}
    </div>
  );
};

export default PopUp;
