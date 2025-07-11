import React, { useState } from "react";
import PrevButton from "../components/PrevButton";
import InfoInput from "../components/InfoInput";
import AddButton from "../components/AddButton";
import Button from "../components/Button";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const Info = ({ sendIngredientList }) => {
  // logic
  // TODO: set함수 추가하기
  const [ingredientList, setIngredientList] = useState([]); // 사용자가 입력할 재료 목록

  //React Router Dom 으로 페이지 이동하는 방법두가지
  //l. Link
  //2. Navigate
  const history = useNavigate();
  const handleNext = () => {
    console.log("chat페이지로 이동");
    sendIngredientList(ingredientList);
    history("/chat");
  };

  const addIngredient = () => {
    console.log("재료 추가하기");
    //input박스 추가
    const id = Date.now();

    const newItem = {
      id,
      label: `ingredient_${id}`,
      text: "재료명",
      value: "", //사용자가 입력할 값
    };
    setIngredientList((prev) => [...prev, newItem]); //이전거 계속 추가
  };

  const handleRemove = (selectedId) => {
    //선택된거 이외의 것들만 불러온다( 선택되지 않은!==  조건) )
    const filterList = ingredientList.filter(
      (ingredient) => ingredient.id !== selectedId
    );
    // 선택되지 않은 것들만 재 세팅하니깐 삭제 기능이 됨
    setIngredientList(filterList);
    console.log("🚀 ~ handleRemove ~ filterList:", filterList);
  };

  const handleChange = (userValue, selectedId) => {
    //  console.log("🚀 ~ handleChange ~ userValue:", userValue);
    setIngredientList((prev) =>
      prev.map((ingredient) =>
        ingredient.id === selectedId
          ? { ...ingredient, value: userValue }
          : { ...ingredient }
      )
    );
  };

  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-chef-green-500 fixed -z-10 -left-60 -top-104"></i>
      {/* START:뒤로가기 버튼 */}
      <PrevButton />
      {/* END:뒤로가기 버튼 */}
      <div className="h-full flex flex-col">
        {/* TODO:Title 컴포넌트 */}
        <Title mainTitle={"당신의 냉장고를 알려주세요"} />

        {/* START:form 영역 */}
        <div className="mt-20 overflow-auto">
          <form>
            {/* START:input 영역 */}
            <div>
              {ingredientList.map((item) => (
                <InfoInput
                  key={item.id}
                  content={item}
                  onRemove={handleRemove}
                  onChange={handleChange}
                />
              ))}
            </div>
            {/* END:input 영역 */}
          </form>
        </div>
        {/* END:form 영역 */}
        {/* START:Add button 영역 */}
        <AddButton onClick={addIngredient} />
        {/* END:Add button 영역 */}
        {/* START:Button 영역 */}
        <Button text="Next" color="bg-chef-green-500" onClick={handleNext} />
        {/* END:Button 영역 */}
      </div>
    </div>
  );
};

export default Info;
