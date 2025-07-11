import React, { useState } from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // logic

  //React Router Dom 으로 페이지 이동하는 방법두가지
  //l. Link
  //2. Navigate
  const history = useNavigate();
  const handleStart = () => {
    console.log("info페이지로 이동");
    history("/info");
  };

  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-chef-green-500 fixed -z-10 -left-60 -top-96"></i>
      <div className="fixed left-0 top-1/2 transform -translate-y-1/3 -z-10">
        <img src="./images/hero.svg" alt="hero" />
      </div>
      <div className="h-full flex flex-col">
        {/* TODO:Title 컴포넌트 */}
        {
          <Title
            mainTitle={"다인,다빈's 키쑥쑥 쉐프"}
            subTitle={
              "다인이랑 다빈이가 먹고 키가 쑥쑥 자랄 수 있는 레시피 대공개!! 냉장고에 있는 재료로 뭐 해먹을지 고민되시나요? 남은 재료만 넣으면 맛있는 레시피가 나옵니다!"
            }
          />
        }

        {/* START:Button 영역 */}
        <Button
          text="Get started"
          color="bg-chef-green-500"
          onClick={handleStart}
        />
        {/* END:Button 영역 */}
      </div>
    </div>
  );
};

export default Home;
