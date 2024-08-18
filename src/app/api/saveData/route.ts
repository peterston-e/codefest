import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const formData = await request.json();
  const filePath = path.join(process.cwd(), "src", "data", "data.json");

  // extract resource data from the form
  const newResource = {
    title: formData.resourceTitle,
    description: formData.resourceDescription,
    // Convert string to array of links
    links: formData.resourceLinks.split(",").map((link: string) => link.trim()),
    image: formData.image,
    videos: [
      {
        title: formData.videoTitle,
        link: formData.videoLink,
        description: formData.videoDescription,
        "further-details": formData.videoText,
      },
    ],
    text: formData.resourceText,
  };

  // read existing data
  let existingData = [];
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, "utf-8"); 
    existingData = JSON.parse(fileData);
  }

  // check which modure needs updating
  const indexOfModule = existingData[0].modules.findIndex(
    (eachModule: any) => eachModule.title === formData.resourceModule,
  );
  // if module doesnt exist
  if (indexOfModule === -1) {
    return NextResponse.json({ message: "Module not found!" }, { status: 404 });
  }

  const chosenResourceModule = existingData[0].modules[indexOfModule];
  // Check if the module has the "Custom resources" section
  const contentIndex = chosenResourceModule["module-content"].findIndex(
    (content: any) => content.title === "Custom resources",
  );
  // Check if the module is Own resources, and save to the first Folder (for now, this will be amended in the future)
  if (formData.resourceModule === "Own resources") {
    // Add new resource to the first Folder section in "Own resources" module
    const folderIndex = chosenResourceModule["module-content"].findIndex(
      (content: any) => content.title === "Folder 1",
    );
    if (chosenResourceModule["module-content"][0]) {
      chosenResourceModule["module-content"][0].resources.push(newResource);
    } else {
      return NextResponse.json(
        { message: "Please set up folders in Own resources!" },
        { status: 404 },
      );
    }
  } else if (contentIndex !== -1) {
    // Add new resource to the "Custom resources" section
    chosenResourceModule["module-content"][contentIndex].resources.push(
      newResource,
    );
    // if "Custome resources" section is not yet created, create it
  } else if (contentIndex === -1) {
    const newCustomResourcesSection = {
      title: "Custom resources",
      description: "This is the description of custom resources",
      video: "",
      image: "",
      resources: [newResource],
    };

    chosenResourceModule["module-content"].push(newCustomResourcesSection);
  } else {
    return NextResponse.json(
      { message: "Custom resources section not found!" },
      { status: 404 },
    );
  }

  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

  return NextResponse.json({
    success: true,
    message: "Data saved successfully",
  });
}
