
import React from 'react';
import type { InstagramPost } from '../types';

interface InstagramCardProps {
  post: InstagramPost;
}

const InstagramCard: React.FC<InstagramCardProps> = ({ post }) => {
  return (
    <a
      href={post.postUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-square w-full overflow-hidden rounded-lg"
      aria-label={`View Instagram post: ${post.caption}`}
    >
      <img
        src={post.imageUrl}
        alt={post.caption}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 p-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-sm">{post.caption}</p>
      </div>
    </a>
  );
};

export default InstagramCard;
