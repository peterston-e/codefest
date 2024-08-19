"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Welcome from "@/components/Dashboard/Welcome";

export default function Home() {
  // Define a function that matches the expected type
  const handleSetSelectedResource = (resource: any) => {
    // set resource as null as DefaultLayout expects a resource
    resource = null;
    console.log(resource);
  };
  
  return (
    <>
      <DefaultLayout setSelectedResource={handleSetSelectedResource}>
        <Welcome />
      </DefaultLayout>
    </>
  );
}
