import Image from "next/image";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import myData from "../../data/data.json";
import courseImage from "./courseImage.jpg";

const HomePage = () => {
  const modules = myData[0].modules;
  return (
    <div className="container px-20">
      <Breadcrumb pageName="HomePage" />

      {myData[0].title && (
        <div className="my-8 text-7xl">Welcome to {myData[0].title}</div>
      )}
      {myData[0].description && (
        <div className="mb-8">{myData[0].description}</div>
      )}
      {myData[0].image && (
        <Image
          src={courseImage}
          alt={myData[0].title || "Calendar image"}
          width={300} // Adjust based on your image size
          height={300} // Adjust based on your image size
        />
      )}
      {modules && (
        <div>
          <h2>Modules</h2>
          <ul>
            {modules.map((module, index) => (
              <li key={index}>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
