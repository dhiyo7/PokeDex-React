import React from 'react';
import { AiTwotoneHeart} from 'react-icons/ai';

const FabButton = () => {
  return (
    <button
      className="fixed bottom-6 w-14 h-14 md:left-16 left-4 p-1 bg-white border text-white rounded-full shadow-lg hover:bg-black focus:outline-none focus:ring flex items-center justify-center focus:ring-blue-300"
    >

      <AiTwotoneHeart className="text-black text-2xl hover:text-white"/>
    </button>
  );
};

export default FabButton;
