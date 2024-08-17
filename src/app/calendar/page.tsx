import HomePage from "@/components/HomePage";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "ResourceAdmin",
  description: "ResourceAdmin - your centralized dashboard for seamlessly managing and organizing both school-endorsed and personal resources in one efficient platform.",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  );
};

export default CalendarPage;
