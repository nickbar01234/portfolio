import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const LINKS = [
  {
    icon: faGithub,
    link: "https://github.com/nickbar01234",
  },
  {
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/nick-huy-doan/",
  },
];

const MediaLink = () => {
  return (
    <div className="flex flex-col gap-y-4 items-center">
      {LINKS.map((data) => (
        <a key={data.link} href={data.link} target="_blank">
          <FontAwesomeIcon
            icon={data.icon}
            size="xl"
            className="cursor-pointer hover:text-active"
          />
        </a>
      ))}
      <div className="w-[1px] h-16 bg-text" />
    </div>
  );
};

export default MediaLink;
