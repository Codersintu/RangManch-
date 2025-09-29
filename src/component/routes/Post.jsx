import React, { useState } from "react";
import Imag from "../image/Imag";
import UserInteraction from "../UserInteraction";
import { Link } from "react-router-dom";
import Comment from "../Comment";
import EmojiPicker from "emoji-picker-react";
function Post() {
  const [emojiopen, setEmojiopen] = useState(false);
  return (
    <div className="w-full h-screen flex justify-center ">
      <div className="max-w-4xl max-h-[500px] flex gap-2 md:gap-4 shadow-sm p-2 ">
        <Link to="/">
          <div className="md:w-10 w-7  cursor-pointer">
            <Imag src="../general/backarr.png" />
          </div>
        </Link>
        <div className="md:flex-row gap-2 flex flex-col">
          <div className="flex-1">
            <Imag src="../pin/pin1.jpeg" w={736} alt="" />
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <UserInteraction />
            {/* profile section */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 cursor-pointer">
                <Imag src="../pin/pin1.jpeg" />
              </div>
              <p>Sintu Mahto</p>
            </div>
            {/* comment section */}
            <Comment />
            <form className="flex items-center w-full bg-gray-100 p-1 rounded-2xl">
              <input
                type="text"
                className="bg-gray-100 w-full outline-none p-1"
                placeholder="Add Comments"
              />
              <div className="relative">
                <div className="cursor-pointer" onClick={() => setEmojiopen(!emojiopen)}>
                  🥰
                </div>
                {emojiopen == true ?
                  <div className="absolute right-0 bottom-10">
                    <EmojiPicker />
                  </div>
                : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
