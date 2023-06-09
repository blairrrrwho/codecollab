import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Avatar from 'boring-avatars';
import { ALL_POSTS } from '../utils/queries';

const PostCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  const getReadingTime = (article) => {
    const wordsPerMinute = 250;
    const wordCount = article.split(' ').length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const truncatedArticle = truncateText(post.postText, 100);
  const readingTime = getReadingTime(post.postText);

  return (
    <div key={post._id} className="bg-yellow-800 w-screen h-screen">
      <div className="rounded-2xl relative p-6 bg-white mx-4 md:mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl shadow-md text-left mb-16">
        <div className="rounded-t-md h-16 w-full bg-yellow-100 absolute top-0 left-0 flex">
          <h2 className="text-2xl text-gray-700 flex-1 mt-6 mx-4">{post.postTitle}</h2>
          <div className="flex items-center mt-6 mx-4 text-gray-500 text-sm">
            <span className="font-light">By @{post.username}</span>
          </div>
          <span className="w-16 h-16 mt-4 mr-8 z-10">
            <Avatar
              size={60}
              name={post.username}
              variant="beam"
              colors={["#C1DDC7", "#F5E8C6", "#BBCD77", "#DC8051", "#F4D279"]}
            />
          </span>
        </div>
        <div className="mt-16">
          <p>{expanded ? post.postText : truncatedArticle}</p>
          <div className="flex flex-row justify-between">
            <div>
              <p className="mt-16 text-gray-400">{readingTime} minute read</p>
              <p className="text-xs text-gray-400">{post.createdAt}</p>
            </div>
            <div>
              <p className="mt-16 text-extrabold underline cursor-pointer hover:text-gray-400" onClick={toggleExpand}>
                {expanded ? 'X' : 'EXPAND'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Postcard = () => {
  const [allPosts, setAllPosts] = useState([]);

  const { loading, data } = useQuery(ALL_POSTS, {
    onCompleted: (data) => {
      setAllPosts(data.allPosts);
    },
  });

  const reversedPosts = allPosts.slice().reverse();

  return (
    <>
      {reversedPosts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </>
  );
};

export default Postcard;
