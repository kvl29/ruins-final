import React from "react";
import "remixicon/fonts/remixicon.css";

export default function TourPost() {
  return (
    <>
      <div className="bg-zinc-800">
        <div id="headerReplace" className="h-32"></div>
        <div className=" px-[150px] py-2.5 space-y-5">
          <h1 className="font-['Noto Sans TC'] text-white text-6xl">
            Grace Hill麗庭莊園
          </h1>
          <div className="flex justify-between">
            <div className="space-x-3">
              <button className="font-['Noto Sans TC'] text-[13px] font-semibold rounded bg-white px-2.5 py-[5px]">
                台北
              </button>
              <button className="font-['Noto Sans TC'] text-[13px] font-semibold rounded bg-white px-2.5 py-[5px]">
                半日
              </button>
              <button className="font-['Noto Sans TC'] text-[13px] font-semibold rounded bg-white px-2.5 py-[5px]">
                中等
              </button>
              <button className="font-['Noto Sans TC'] text-[13px] font-semibold rounded bg-white px-2.5 py-[5px]">
                廢棄社區
              </button>
            </div>
            <div className="text-white space-x-4">
              <span>
                <a className="font-['Noto Sans TC'] text-[15px]" href="#">
                  <i class="ri-heart-3-line ri-lg pr-1"></i>
                </a>
                收藏
              </span>
              <span>
                <a className="font-['Noto Sans TC'] text-[15px]" href="#">
                  <i class="ri-share-forward-fill ri-lg pr-1"></i>
                </a>
                分享
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-auto px-[150px] py-5 justify-start items-center gap-2.5 inline-flex">
          <div></div><img className="w-4/6 grow shrink" src="/images/borou/dry01.jpg" />
          <div className="w-2/6 flex-col justify-start items-start gap-2.5 inline-flex">
            <img className="" src="/images/borou/dry03.jpg" />
            <img className="" src="/images/borou/greenhouse.jpg" />
          </div>
        </div>
        <div className="px-[150px] py-5 text-white grid grid-cols-3 gap-8">
          <div className="space-y-5 col-span-2">
            <h2 className=" text-[26px] font-semibold">活動介紹</h2>
            <p className="text-xl">
              麗庭莊園位於台北內湖的工業園區，前身為婚禮場地。 該酒店於 2005
              年開業，由長興婚禮事業有限公司管理，該公司熱衷於為婚禮和其他活動提供更大、更奢華的空間，顛覆當地市場。
              這項業務起初舉步維艱，但在電視連續劇、音樂錄影帶和新聞中出現後變得更加廣為人知。
              2007年，該空間被租給迪詩，這是一家希望進入台灣豪華婚禮市場的日本婚禮公司。
              原所有者退了一步，將日常營運的控制權交給了日本管理層，業務在接下來的幾年中持續成長。
            </p>
            <p className="text-xl">
              這些照片大部分是在回訪該網站時拍攝的。
              我第一次嘗試格雷斯山是在巫術時刻的最深處，當時我因失眠而焦躁不安，渴望冒險，晚上出去騎馬。
              一時衝動，我跨過一座橋進入內湖，去尋找有關一座廢棄婚禮教堂的報道。
              當我到達時，發現整個複雜的案件都處於陰影之中，夜景很快就展現在我的相機鏡頭上。
            </p>
            <div>
              <img src="/images/borou/dry02.jpg" className="h-auto" alt="" />
              <span className="text-[15px]">
                懸空的陶製花瓶有著精緻的紋路，其中的仙人掌已完全乾枯變白
              </span>
            </div>
            <div>
              <img src="/images/borou/dry01.jpg" className="h-auto" alt="" />
              <span className="text-[15px]">
                從門口看向溫室內部的視角，這是一個頗深的狹長空間
              </span>
            </div>
            <div>
              <img src="/images/borou/dry03.jpg" className="h-auto" alt="" />
              <span className="text-[15px]">
                那天的太陽很強，室內的空氣悶熱有種置身沙漠的錯覺
              </span>
            </div>
            <hr />
            <div id="hostinfo" className="space-y-10">
            <div>
              <img src="" alt="" />
              <h3 className="text-xl">認識你的探險達人 Constantine</h3>
            </div>
            <div>
              <a href="#">
                <i class="ri-star-fill ri-lg pr-1"></i>871則評價
              </a>
              <a href="#">
                <i class="ri-star-fill ri-lg pr-1"></i>身分已驗證
              </a>
            </div>
            <div>
              <p>
                Constantine
                是一位來自世界各地的探險達人，以其無畏的精神和對冒險的熱愛而聞名。專精於廢墟探險、攝影和跑酷，將這些元素結合，打造出令人驚嘆的冒險體驗。
              </p>
              <p>
                他的探險生涯始於年幼時期，對於未知的渴望推動著他穿越危險的地形，發現隱藏在世界各個角落的神秘寶藏。Constantine
                總是保持開放的心態，對於未知的事物充滿好奇心，這讓他成為一位傑出的冒險者。
              </p>
              <p>
                在廢墟探險方面，Constantine
                經常挑戰各種古老、遺忘的建築物和城市废墟。他善於解讀歷史的脈絡，透過攝影捕捉下每一個荒廢建築中散發著的神秘氛圍，讓觀眾能夠透過他的鏡頭感受到時光的流轉。
              </p>
              <p>
                而在跑酷領域他也展現了出色的體能和敏捷度。他喜歡在城市中奔跑、跳躍，挑戰各種極限動作，使跑酷成為他冒險生活中不可或缺的一環。
              </p>
            </div>
            <button className="px-5 py-2.5 border rounded-md">聯絡主揪</button>
          </div>
            <div>
              <h2></h2>
            </div>
          </div>
          <div>
            <div className="w-full px-[60px] py-10 bg-black rounded-lg space-y-10 flex flex-col items-start">
              <div className="flex w-full justify-center">
                <button className="flex px-5 py-2.5 border border-gray-200 rounded-s-md">
                  <div className="flex-col">
                    <span className="block">日期</span>
                    <span>新增日期</span>
                  </div>
                  <i class="ri-arrow-down-s-line"></i>
                </button>
                <button className="flex-col px-5 py-2.5 border rounded-e-md">
                  <span className="block">參加人數</span>
                  <span className="text-gray">1位參加者</span>
                  <i class="ri-arrow-down-s-line"></i>
                </button>
              </div>
              <div className="space-y-5">
                <h2 className="text-[26px] font-semibold">活動詳情</h2>
                <div className="space-y-[15px]">
                  <p>目前參加人數：sdfsdf</p>
                  <p>出發時間：sdfsdf</p>
                  <p>時長：sdf</p>
                  <p>探索難易度：sdf</p>
                  <p>交通方式：sdf</p>
                  <p>集合地點：sdfsdf</p>
                </div>
              </div>
              <div className="w-full justify-center flex">
              <button className="px-5 py-2.5 border rounded-md">
                立即報名
              </button>
              </div>
            </div>
          </div>
          
        </div>
        <hr />
        <div id="rateComment" className="px-[150px] py-2.5 text-white space-x-[30px]">
          <div className="text-[26px] space-x-6">
            <a href="#">
              <i class="ri-star-fill ri-lg pr-1"></i>4.90
            </a>
            <span>871則評價</span>
          </div>
          <div id="commentBox"></div>
          <button className="px-5 py-5 border rounded-md text-xl">顯示全部評價</button>
        </div>
        <div className="px-[150px] py-2.5 space-y-5">
          <h1 className="text-[40px] text-white font-semibold text-center">相似推薦</h1>
          <div id="cardbox" className="flex space-x-7">
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  className="h-auto max-w-full"
                  src="/images/borou/arcade02.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/arcade01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span className="space-x-1">
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/arcade03.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span className="space-x-1">
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/arcade07.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span className="space-x-1">
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
