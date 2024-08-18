import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import ResourceCard from "./ResourceCard";

interface Resource {
  label: string;
  description: string;
  links: string[];
  image: string;
  videos: {
    title: string;
    description: string;
    link: string;
    "further-details": string;
  }[];
  text: string;
}

const ResourceContent = ({ resource }: { resource: Resource | null }) => {
  return (
    <div className="container px-20">
      <Breadcrumb pageName="Resource" />

      {resource ? (
        <div className="grid grid-cols-1">
          <ResourceCard
            description={resource.description}
            title={resource.label}
            links={resource.links}
            imgSrc={resource.image}
            videos={resource.videos}
            resourceText={resource.text}
          />
        </div>
      ) : (
        <div>Please select a resource to display</div>
      )}
    </div>
  );
};

export default ResourceContent;
