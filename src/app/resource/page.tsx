"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ResourceContent from "@/components/ResourceContent";
import { useState } from "react";

const ResourcePage = () => {
  // State to keep track of the selected resource
  const [selectedResource, setSelectedResource] = useState({
    label: "Resource Name",
    description: "Resource Description",
    links: ["link1", "link2"],
    image: "https://via.placeholder.com/150",
    videos: [
      {
        title: "video title",
        description: "video description",
        link: "video url",
        "further-details": "longer video text",
      },
    ],
    text: "resource text",
  });
  console.log(selectedResource);

  return (
    <DefaultLayout setSelectedResource={setSelectedResource}>
      <ResourceContent resource={selectedResource} />
    </DefaultLayout>
  );
};

export default ResourcePage;
