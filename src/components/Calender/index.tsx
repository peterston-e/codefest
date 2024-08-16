import Image from "next/image";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import myData from "../../data/data.json";
import courseImage from "./courseImage.jpg";

const Calendar = () => {
  const modules = myData[0].modules;
  return (
    <div className="">
      <Breadcrumb pageName="Calendar" />
      {myData[0].title && <div>Welcome to {myData[0].title}</div>}
      {myData[0].description && <div>{myData[0].description}</div>}
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

export default Calendar;
