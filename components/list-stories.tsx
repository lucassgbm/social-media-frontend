import { useState } from "react";
import Stories from 'react-insta-stories';

export default function ListStories() {

  const [stories, setStories] = useState([{
    image: `/imgs/story.jpg`,
    caption: "Delicious 😋",
    captionColor: "white",
    type: "imageCaptionPost",
  }]);

  const [categoryItems, setCategoryItems] = useState([
    { name: "Your Story", iconName: "add_circle" },
    { name: "Travel", iconName: "flight" }]);

  const getStoriesObject = stories.map((item) => {
    return {
      content: () => (
        <div className="story-container bg-black w-screen h-screen flex items-start justify-center">
          <div
            className="w-full h-full bg-black max-w-screen-md flex items-center justify-center flex-col bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div
              className="mt-12 caption text-5xl font-bold"
              style={{ color: item.captionColor }}
            >
              <span>{item.caption}</span>
            </div>
          </div>
        </div>)
    }
  });

  const redirectToStory = (categoryItem: Object) => {
    console.log("Redirect to story: ", categoryItem);
  }

  const renderCategoryItem = () => {
    return categoryItems.map((categoryItem) => {
      return (
        <div
          className="flex justify-center items-center flex-col mt-4 cursor-pointer"
          key={categoryItem.name + categoryItem.iconName}
          onClick={() => redirectToStory(categoryItem)}
        >
          <div className="category-outer-circle flex justify-center items-center">
            <div className="category-inner-circle flex justify-center items-center">
              <i className="material-icons text-4xl">{categoryItem.iconName}</i>
            </div>
          </div>
          <div className="font-bold">{categoryItem.name}</div>
        </div>
      );
    });
  }
  return (
    <div>
      <div className="header text-white flex justify-center items-center text-3xl font-bold">
        <div>Stories Feed</div>
        <div
          className="fixed top-3 right-4 cursor-pointer"
          onClick={() => console.log(true)}
        >
          <i className="material-icons text-4xl">info</i>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 w-screen flex justify-center items-center max-w-screen-md">
          {renderCategoryItem()}
        </div>
      </div>
    </div>
    // <Stories
    //   stories={getStoriesObject}
    //   defaultInterval={1500}
    //   width={432}
    //   height={768}
    // />
  );

}