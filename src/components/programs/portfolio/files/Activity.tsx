import { Component } from "@/type";
import { hash } from "@/utils";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Activity: Component = () => {
  return null;
};

Activity.displayName = "Activity";
Activity.id = hash(Activity.displayName);
Activity.path = "src/components/programs/portfolio/files/Activity.tsx";
Activity.Icon = function Icon(style) {
  return <FontAwesomeIcon icon={faHeart} className={`text-keyword ${style}`} />;
};

export default Activity;
