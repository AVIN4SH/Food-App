import React from "react";
import Thali from "./assets/ThaliImage.jpg";
import Noodles from "./assets/NoodlesImages.jpg";
import Cholebhature from "./assets/CholeBhatooreImage.jpg";
import Dosa from "./assets/DosaImage.jpg";
import Paneer from "./assets/ButterPaneerImage.jpg";
import Daal from "./assets/DaalImage.jpg";
import HalfStar from "./assets/halfStar.png";
import FullStar from "./assets/fullStar.png";

//Future Feature: create a array of objects in json file like we get in real time data and then use props and useState() Hook to create dynamic card and only return 1 card from this function and take use of reusable components to render these 6 or many cards.

function Body() {
  return (
    <div className="body-container">
      <div class="search">
        <input type="text" placeholder="Search" />
      </div>

      <div className="restaurant-container grid grid-rows-2 grid-flow-col gap-4">
        <div className="restaurant-card">
          <img src={Thali} alt="Indian Thali Special" className="card-image" />
          <h3 className="card-heading">Indian Special Thali</h3>
          <div className="ratings">
            <p>Ratings:</p>
            <img src={FullStar} alt="Star" />
            <img src={FullStar} alt="Star" />
            <img src={FullStar} alt="Star" />
            <img src={FullStar} alt="Star" />
            <img src={HalfStar} alt="Star" />
          </div>
          <p>
            Indian thali is a wholesome meal that packs an assortment of food
            items on a single salver. Each region has its own unique take on
            thali that takes you on a gastronomic journey of the country. Here
            are some of our favourite Indian thalis.
          </p>
        </div>
        <div className="restaurant-card">
          <img src={Daal} alt="Indian Thali" className="card-image" />
          <h3 className="card-heading">Daal Tadka</h3>
          <div className="ratings">
            <p>Ratings:</p>
            <img src={FullStar} alt="Star Rating" />
            <img src={FullStar} alt="Star Rating" />
            <img src={FullStar} alt="Star Rating" />
            <img src={FullStar} alt="Star Rating" />
          </div>
          <p>
            Daal Tadka is a classic Indian dish that combines cooked lentils
            with a flavorful tempering of spices and herbs. This comforting dish
            is a staple in many Indian households, celebrated for its simplicity
            and rich taste.
          </p>
        </div>
        <div className="restaurant-card">
          <img src={Cholebhature} alt="Indian Thali" className="card-image" />
          <h3 className="card-heading">Chole Bhature</h3>
          <div className="ratings">
            <p>Ratings:</p>
            <img src={FullStar} alt="Star Rating" />
            <img src={FullStar} alt="Star Rating" />
            <img src={FullStar} alt="Star Rating" />
            <img src={FullStar} alt="Star Rating" />
            <img src={HalfStar} alt="Star Rating" />
          </div>
          <p>
            Chole Bhatoore is a popular North Indian dish featuring spicy
            chickpea curry served with fluffy, deep-fried bread. This hearty and
            satisfying meal is a street food favorite, known for its robust
            flavors and delightful contrast of textures.
          </p>
        </div>
        <div className="restaurant-card">
          <img src={Noodles} alt="Indian Thali" className="card-image" />
          <h3 className="card-heading">Noodles</h3>
          <div className="ratings">
            <p>Ratings:</p>
            <img src={FullStar} alt="Star Rating" />
            <img src={FullStar} alt="Star Rating" />
            <img src={FullStar} alt="Star Rating" />
            <img src={FullStar} alt="Star Rating" />
          </div>
          <p>
            Chinese noodles are a staple of Chinese cuisine, offering a
            delightful blend of flavors and textures. From stir-fried chow mein
            to soupy ramen, every bite is an adventure. Our selection of Chinese
            noodles promises an authentic taste experience.
          </p>
        </div>
        <div className="restaurant-card">
          <img src={Dosa} alt="Indian Thali" className="card-image" />
          <h3 className="card-heading">Dosa</h3>
          <div className="ratings">
            <p>Ratings:</p>
            <img src={FullStar} alt="Star Rating" />
            <img src={FullStar} alt="Star Rating" />
            <img src={FullStar} alt="Star Rating" />
            <img src={FullStar} alt="Star Rating" />
          </div>
          <p>
            Dosa is a beloved South Indian crepe made from fermented rice and
            lentil batter, typically served with a variety of chutneys and
            sambar. This crispy and savory delight is a cornerstone of South
            Indian cuisine, offering a perfect blend of taste and texture.
          </p>
        </div>
        <div className="restaurant-card">
          <img src={Paneer} alt="Indian Thali" className="card-image" />
          <h3 className="card-heading">Butter Paneer</h3>
          <div className="ratings">
            <p>Ratings:</p>
            <img src={FullStar} alt="Star Rating" />
            <img src={FullStar} alt="Star Rating" />
            <img src={FullStar} alt="Star Rating" />
            <img src={FullStar} alt="Star Rating" />
            <img src={FullStar} alt="Star Rating" />
          </div>
          <p>
            Butter Paneer is a rich and creamy North Indian dish made with
            tender paneer cubes simmered in a luscious tomato-based gravy.
            Infused with aromatic spices and a hint of sweetness, this dish is a
            favorite among vegetarians and non-vegetarians alike.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;