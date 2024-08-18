"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddResource from "@/components/AddResource/AddResource";

const Add = () => {
  // Define a function that matches the expected type
  const handleSetSelectedResource = (resource: any) => {
    // set resource as null as DefaultLayout expects a resource
    resource = null;
    console.log(resource);
  };

  return (
    <DefaultLayout setSelectedResource={handleSetSelectedResource}>
      <AddResource />
    </DefaultLayout>
  );
};

export default Add;
