import Image from "next/image";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import myData from "../../data/data.json";
import courseImage from "./courseImage.jpg";

const HomePage = () => {
  const modules = myData[0].modules;
  return (
    <div className="container px-6 lg:px-10">
      <Breadcrumb pageName="HomePage" />

      {myData[0].title && (
        <div className="my-8 text-5xl sm:text-5xl md:text-6xl lg:text-7xl">Welcome to {myData[0].title}</div>
      )}
      {myData[0].description && (
        <div className="mb-8">{myData[0].description}</div>
      )}

      {modules && (
        <div>
          <ul>
          <div className="mb-5.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {modules.map((module, index) => (
              <li key={index}>
                {myData[0].image && (
                  <Image
                    src={courseImage}
                    alt={myData[0].title || "Module image"}
                  />
                )}
                <h3 className="text-title-md font-bold text-primary py-4">{module.title}</h3>
                <p className="text-md text-black dark:text-white">{module.description}</p>
              </li>
            ))}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
