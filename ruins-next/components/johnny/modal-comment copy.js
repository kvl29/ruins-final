import React from "react";
// import img from "./img/90.jpg";
import Image from "next/image";
import img from "./img/90.jpg";

import {
  RiVideoOnFill,
  RiImageFill,
  RiMapPinFill,
  RiPriceTag3Fill,
  RiEmotionLaughFill,
  RiEqualizerLine,
  RiSendPlane2Fill,
  RiDraftLine,
  RiCloseLargeLine,
} from "@remixicon/react";
import { useToggles } from "@/contexts/use-toggles";

export default function CommentModal() {
  const { commentModal, setCommentModal } = useToggles();

  return (
    <>
      {" "}
      {/* <!-- 發文框 --> */}
      <form
        className="    bg-gray-500 bg-opacity-50 fixed backdrop-blur-sm inset-0 flex justify-center items-center z-40"
        id="postModal"
      >
        <div className="bg-292929 w-full pc:w-[700px] px-5 pc:px-10 pt-5 pb-10 rounded-3xl">
          <div className="flex justify-between pb-5 text-white">
            <div className="text-[25px] flex items-center">Comment</div>
            <button onclick="closeModal()">
              <RiCloseLargeLine
                onClick={() => setCommentModal(!commentModal)}
              />
            </button>
          </div>
          <div className="flex-col mb-5">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-5">
                <Image className="size-[35px] rounded-full" src={img} alt="" />
                <span className="text-white text-[20px]">John Doe</span>
              </div>

              <div className="text-white flex gap-10">
                <button>
                  <RiEqualizerLine />
                </button>
                <button>
                  <RiDraftLine />
                </button>
                <button type="submit">
                  <RiSendPlane2Fill />
                </button>
              </div>
            </div>

            <div className="w-full h-full">
              {/* <!-- title --> */}
              <div className="flex justify-center mb-5 text-black">
                <input
                  className="justify-center w-full text-[20px] leading-10 px-10 py-1 rounded-lg outline-none"
                  placeholder="Title Here"
                ></input>
              </div>
              <div className="rounded-lg bg-slate-300">
                <div className="flex justify-center gap-2 pc:gap-5 py-3 text-black">
                  <div className="text-[14px] pc:text-[16px] flex">
                    <RiPriceTag3Fill className="mr-2" />
                    黃曉桂
                  </div>
                  <div className="text-[14px] pc:text-[16px] flex">
                    <RiEmotionLaughFill className="mr-2" />
                    覺得興奮
                  </div>
                  <div className="text-[14px] pc:text-[16px] flex">
                    <RiMapPinFill className="mr-2" />
                    光華商場
                  </div>
                </div>
                {/* <!-- 輸入區域 --> */}
                <textarea
                  type="text"
                  className="w-full h-[150px] outline-none p-10 text-black"
                  placeholder="What are you thinking??"
                ></textarea>
                <div className="flex justify-center py-2 overflow-hidden gap-5">
                  <img
                    className="size-[150px] object-cover rounded-lg"
                    src="../../../各種程式使用圖片/1868140_screenshots_20240117160639_1.jpg"
                    alt=""
                  />
                  <img
                    className="size-[150px] object-cover rounded-lg"
                    src="../../../各種程式使用圖片/1868140_screenshots_20240117160639_1.jpg"
                    alt=""
                  />
                  <img
                    className="size-[150px] object-cover rounded-lg"
                    src="../../../各種程式使用圖片/1868140_screenshots_20240117160639_1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pc:gap-10 justify-center text-white ">
            <button className="flex items-center">
              <RiVideoOnFill className="mr-2 text-[24px]" />
              <span className="hidden pc:flex">VIDEO</span>
            </button>
            <button className="flex items-center">
              <RiImageFill className="mr-2 text-[24px]" />
              <span className="hidden pc:flex">PHOTO</span>
            </button>
            <button className="flex items-center">
              <RiMapPinFill className="mr-2 text-[24px]" />
              <span className="hidden pc:flex">LOCATION</span>
            </button>
            <button className="flex items-center">
              <RiPriceTag3Fill className="mr-2 text-[24px]" />
              <span className="hidden pc:flex">TAGS</span>
            </button>
            <button className="flex items-center">
              <RiEmotionLaughFill className="mr-2 text-[24px]" />
              <span className="hidden pc:flex">FEELING</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}