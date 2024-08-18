import ResourcePage from "@/components/resource";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "School of Node | Resource Page",
  description: "This is the resource page ",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <ResourcePage />
    </DefaultLayout>
  );
};

export default CalendarPage;
