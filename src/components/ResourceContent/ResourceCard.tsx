import React from "react";

interface ResourceCardProps {
  title: string;
  description: string;
  links: string[];
  imgSrc: string;
  videos: {
    title: string;
    description: string;
    link: string;
    "further-details": string;
  }[];
  resourceText: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  links,
  imgSrc,
  videos,
  resourceText,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mt-4 flex items-end justify-between">
        <div className="grid grid-cols-1">
          <h4 className="text-title-md font-bold text-primary">{title}</h4>
          <p className="text-md py-4 font-medium text-black dark:text-white">
            {description}
          </p>
          <p className="py-4 text-title-md font-bold text-primary">Links</p>
          <p className="py-4">
            {links.map((link, index) => (
              <div key={index}>
                <a href={link} target="_blank">
                  {link}
                </a>
                <br></br>
              </div>
            ))}
          </p>
          <p className="py-4 text-title-md font-bold text-primary">Image</p>
          <img src={imgSrc} alt="placeholder" />
          <p className="py-4 text-title-md font-bold text-primary">Videos</p>
          <div>
            {videos.map((video, index) => (
              <div key={index}>
                <p className="py-4 text-title-sm font-medium text-black dark:text-white">
                  {video.title}
                </p>
                <p className="text-md py-4 font-medium text-black dark:text-white">
                  {video.description}
                </p>
                <p>
                  <a href={video.link}>{video.link}</a>
                </p>
                <p className="text-md py-4 font-medium text-black dark:text-white">
                  {video["further-details"]}
                </p>
              </div>
            ))}
            <p className="py-4 text-title-md font-bold text-primary">
              More resource details
            </p>
            <p className="text-md py-4 font-medium text-black dark:text-white">
              {resourceText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
