"use client";
import HomePage from "@/components/HomePage";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const Home = () => {
  // Define a function that matches the expected type
  const handleSetSelectedResource = (resource: any) => {
    // set resource as null ad DefaultLayout expects a resource
    resource = null;
    console.log(resource);
  };
  return (
    <DefaultLayout setSelectedResource={handleSetSelectedResource}>
      <HomePage />
    </DefaultLayout>
  );
};

export default Home;
