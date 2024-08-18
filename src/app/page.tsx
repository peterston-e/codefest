"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

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
        {/* <ECommerce /> */}
        <h1>Hello World</h1>
      </DefaultLayout>
    </>
  );
}
