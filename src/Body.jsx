import React from "react";
import Thali from "./assets/ThaliImage.jpg";
import Noodles from "./assets/NoodlesImages.jpg";
import Cholebhature from "./assets/CholeBhatooreImage.jpg";
import Dosa from "./assets/DosaImage.jpg";
import Paneer from "./assets/ButterPaneerImage.jpg";
import Daal from "./assets/DaalImage.jpg";
import HalfStar from "./assets/halfStar.png";
import FullStar from "./assets/fullStar.png";
import useOnlineStatus from "./useOnlineStatus";

//Future Feature: create a array of objects in json file like we get in real time data and then use props and useState() Hook to create dynamic card and only return 1 card from this function and take use of reusable components to render these 6 or many cards.

//! Whenever state variable changes, React triggers a reconcilation cycle i.e; re-renders the component (Although React re-renders the entire component, it modifies only the value of state variable in the DOM.).

function Body() {
  //below 2 lines utilize a custom hook we created and checks if user is offline or online.
  //if user is offline this message is returned:
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === "False") {
    return (
      <h1 className="text-8xl text-center text-red-500 min-w-full min-h-96 flex flex-col justify-center">
        Oops! You're Offline, please check your Internet Connection
      </h1>
    );
  }
  //if user if online this message is returned.
  return (
    <div className="bg-[#212121] text-white p-6 flex flex-col items-center">
      <div className="w-full flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search"
          className="border-2 border-black rounded-full p-2 w-full max-w-xl"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="p-2 border border-black rounded-xl w-full hover:border-gray-600 hover:bg-[#2d2d2d] hover:scale-105 transition-transform">
          <img
            src={Thali}
            alt="Indian Thali Special"
            className="rounded-lg w-full h-48 object-cover"
          />
          <h3 className="text-2xl text-center mt-2">Indian Special Thali</h3>
          <div className="flex items-center mt-2">
            <p className="mr-2">Ratings:</p>
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={HalfStar} alt="Star" className="w-4 h-4" />
          </div>
          <p className="text-wheat text-justify mt-2">
            Indian thali is a wholesome meal that packs an assortment of food
            items on a single salver...
          </p>
        </div>

        <div className="p-2 border border-black rounded-xl w-full hover:border-gray-600 hover:bg-[#2d2d2d] hover:scale-105 transition-transform">
          <img
            src={Daal}
            alt="Daal Tadka"
            className="rounded-lg w-full h-48 object-cover"
          />
          <h3 className="text-2xl text-center mt-2">Daal Tadka</h3>
          <div className="flex items-center mt-2">
            <p className="mr-2">Ratings:</p>
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
          </div>
          <p className="text-wheat text-justify mt-2">
            Daal Tadka is a classic Indian dish that combines cooked lentils
            with a flavorful tempering...
          </p>
        </div>

        <div className="p-2 border border-black rounded-xl w-full hover:border-gray-600 hover:bg-[#2d2d2d] hover:scale-105 transition-transform">
          <img
            src={Cholebhature}
            alt="Chole Bhature"
            className="rounded-lg w-full h-48 object-cover"
          />
          <h3 className="text-2xl text-center mt-2">Chole Bhature</h3>
          <div className="flex items-center mt-2">
            <p className="mr-2">Ratings:</p>
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={HalfStar} alt="Star" className="w-4 h-4" />
          </div>
          <p className="text-wheat text-justify mt-2">
            Chole Bhatoore is a popular North Indian dish featuring spicy
            chickpea curry served with fluffy...
          </p>
        </div>

        <div className="p-2 border border-black rounded-xl w-full hover:border-gray-600 hover:bg-[#2d2d2d] hover:scale-105 transition-transform">
          <img
            src={Noodles}
            alt="Noodles"
            className="rounded-lg w-full h-48 object-cover"
          />
          <h3 className="text-2xl text-center mt-2">Noodles</h3>
          <div className="flex items-center mt-2">
            <p className="mr-2">Ratings:</p>
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
          </div>
          <p className="text-wheat text-justify mt-2">
            Chinese noodles are a staple of Chinese cuisine, offering a
            delightful blend of flavors and textures...
          </p>
        </div>

        <div className="p-2 border border-black rounded-xl w-full hover:border-gray-600 hover:bg-[#2d2d2d] hover:scale-105 transition-transform">
          <img
            src={Dosa}
            alt="Dosa"
            className="rounded-lg w-full h-48 object-cover"
          />
          <h3 className="text-2xl text-center mt-2">Dosa</h3>
          <div className="flex items-center mt-2">
            <p className="mr-2">Ratings:</p>
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
          </div>
          <p className="text-wheat text-justify mt-2">
            Dosa is a beloved South Indian crepe made from fermented rice and
            lentil batter, typically served with...
          </p>
        </div>

        <div className="p-2 border border-black rounded-xl w-full hover:border-gray-600 hover:bg-[#2d2d2d] hover:scale-105 transition-transform">
          <img
            src={Paneer}
            alt="Butter Paneer"
            className="rounded-lg w-full h-48 object-cover"
          />
          <h3 className="text-2xl text-center mt-2">Butter Paneer</h3>
          <div className="flex items-center mt-2">
            <p className="mr-2">Ratings:</p>
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
            <img src={FullStar} alt="Star" className="w-4 h-4" />
          </div>
          <p className="text-wheat text-justify mt-2">
            Butter Paneer is a rich and creamy North Indian dish made with
            tender paneer cubes simmered in a luscious...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;