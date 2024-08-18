"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ResourceContent from "@/components/ResourceContent";
import { useState, useEffect } from "react";

const ResourcePage = () => {
  // State to keep track of the selected resource
  // session storage needed to be added as the resource was reset to null the first time anything was selected
  // Initialize state from sessionStorage or set to null if not found
  const [selectedResource, setSelectedResource] = useState(() => {
    const savedResource = sessionStorage.getItem("selectedResource");
    return savedResource ? JSON.parse(savedResource) : null;
  });
  console.log(selectedResource);

  // Save to sessionStorage whenever the selectedResource changes
  useEffect(() => {
    if (selectedResource) {
      sessionStorage.setItem(
        "selectedResource",
        JSON.stringify(selectedResource),
      );
    } else {
      // Clean up if null
      sessionStorage.removeItem("selectedResource");
    }
  }, [selectedResource]);

  return (
    <DefaultLayout setSelectedResource={setSelectedResource}>
      <ResourceContent resource={selectedResource} />
    </DefaultLayout>
  );
};

export default ResourcePage;
