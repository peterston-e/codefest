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
          <h4 className="pb-2 text-title-md font-bold text-primary">{title}</h4>
          <p className="text-md font-medium text-black dark:text-white">
            {description}
          </p>
          <p className="pt-4 pb-2 text-title-md font-bold dark:text-white">Links</p>
          <p>
            {links.map((link, index) => (
              <div key={index}>
                <a href={link} target="_blank" className="text-blue-600">
                  {link}
                </a>
                <br></br>
              </div>
            ))}
          </p>
          <p className="pt-4 pb-2 text-title-md font-bold dark:text-white">Image</p>
          <img src={imgSrc} alt="placeholder" />
          <p className="pt-4 pb-2 text-title-md font-bold dark:text-white">Videos</p>
          <div>
            {videos.map((video, index) => (
              <div key={index}>
                <p className="pb-2 text-title-sm font-bold text-primary">
                  {video.title}
                </p>
                <p className="text-md font-medium text-black dark:text-white">
                  {video.description}
                </p>
                <p>
                  <a href={video.link} target="_blank" className="text-blue-600">{video.link}</a>
                </p>
                <p className="pb-4 text-md font-medium text-black dark:text-white">
                  {video["further-details"]}
                </p>
              </div>
            ))}
            <p className="pb-2 text-title-md font-bold dark:text-white">
              More resource details
            </p>
            <p className="text-md font-medium text-black dark:text-white">
              {resourceText}
            </p>
          </div>
    </div>
  );
};

export default ResourceCard;
