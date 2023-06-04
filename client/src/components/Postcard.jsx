import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Avatar from 'boring-avatars';
import { ALL_POSTS } from '../utils/queries';

const TruncatedText = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
};

const getReadingTime = (article) => {
    const wordsPerMinute = 250;
    const wordCount = article.split(' ').length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

const Postcard = () => {
  const [expanded, setExpanded] = useState(false);

  const { loading, data } = useQuery(ALL_POSTS);

  const article =
    "React JS is a widely used JavaScript library for building user interfaces. Whether you're a beginner or an experienced developer, having access to quality React JS resources is essential for mastering this framework. From official documentation and tutorials to online courses, blogs, and forums, there's no shortage of learning materials. The React JS ecosystem is rich with tools and libraries, such as React Router for navigation, Redux for state management, and Styled Components for styling. Stay updated with the latest trends and best practices by following influential React JS experts and attending virtual conferences. Happy coding!";

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const truncatedArticle = TruncatedText({ text: article, maxLength: 100 });
  const readingTime = getReadingTime(article);

  return (
    <div className="bg-yellow-800 w-screen h-screen">
      {/* ... rest of the component code ... */}
      <div className="rounded-2xl relative p-6 bg-white my-8 mx-4 md:mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl shadow-md text-left mt-32">
        <div className="rounded-t-md h-16 w-full bg-yellow-100 absolute top-0 left-0 flex">
          <h2 className="text-2xl text-gray-700 flex-1 mt-6 mx-4">React Resources</h2>
          <div className="flex items-center mt-6 mx-4 text-gray-500 text-sm">
            <span className="font-light">By @cbarnes0</span>
          </div>
          <span className="w-16 h-16 mt-4 mr-8 z-10">
            <Avatar
              size= {60}
              name="Maria Mitchell"
              variant="beam"
              colors={["#C1DDC7", "#F5E8C6", "#BBCD77", "#DC8051", "#F4D279"]}
            />
          </span>
        </div>
      <div className="mt-16">
        <p>{expanded ? article : truncatedArticle}</p>
        <div className="flex flex-row justify-between">
          <p className="mt-16 text-gray-400">{readingTime} minute read</p>
          <p className="mt-16 text-extrabold underline cursor-pointer hover:text-gray-400" onClick={toggleExpand}>
            {expanded ? 'X' : 'EXPAND'}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Postcard;