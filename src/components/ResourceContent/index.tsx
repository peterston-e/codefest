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
  resourceText: string;
}

const ResourceContent = ({ resource }: { resource: Resource | null }) => {
  return (
    <div className="container mx-auto max-w-270">
      <Breadcrumb pageName="Resource" />

      {resource ? (
        <div className="mt-4 grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <ResourceCard
              description={resource.description}
              title={resource.label}
              links={resource.links}
              imgSrc={resource.image}
              videos={resource.videos}
              resourceText={resource.resourceText}
            />
          </div>
        </div>
        
      ) : (
        <div>Please select a resource to display</div>
      )}
    </div>
  );
};

export default ResourceContent;
