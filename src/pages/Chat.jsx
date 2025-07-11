import React, { useEffect, useState } from "react";
import MessageBox from "../components/MessageBox";
import PrevButton from "../components/PrevButton";
import { MoonLoader } from "react-spinners";

const Chat = () => {
  // logic

  //env 설정
  const endpoint = process.env.REACT_APP_SERVER_ADDRESS;

  const [value, setValue] = useState(""); //state 변수등록된게있다

  // TODO: set함수 추가하기
  const [messages] = useState([]); // chatGPT와 사용자의 대화 메시지 배열
  const [isInfoLoading] = useState(false); // 최초 정보 요청시 로딩
  const [isMessageLoading] = useState(true); // 사용자와 메시지 주고 받을때 로딩
  const hadleChange = (event) => {
    const { value } = event.target;
    console.log("value==>", value);
    setValue(value);
  };

  const hadleSubmit = (event) => {
    event.preventDefault();
    console.log("메시지 보내기");
  };

  const sendInfo = async () => {
    // 백엔드에게 /recipe API 요청
    //async-awit는 짝꿍
    // 백엔드로 넘겨주는 구문
    const response = await fetch(`${endpoint}/recipe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {},
    });
    console.log(
      "🚀 ~ handleNext ~ response:",
      response,
      "endpoint : ",
      endpoint
    );
    const result = await response.json();
    console.log("🚀 ~ sendInfo ~ result:", result);
  };
  useEffect(() => {
    console.log("컴포넌트가 실행됬을 때 딱 한번 실행");
  }, []);

  // //첫번째 방법
  // useEffect(() => {
  //   console.log("모든 state변경될때마다 실행<- 거의사용되지않음");
  // });
  // //두번째 방법
  // useEffect(() => {
  //   console.log("컴포넌트가 실행됬을 때 딱 한번 실행");
  // }, []);

  // //세번째 방법
  // useEffect(() => {
  //   console.log(
  //     "의존성 배열에 등록된 state값이 변경될 때마다 실행 우리는  value다, 여러개도 가능 <-자주 사용됨  "
  //   );
  // }, [value, messages]);

  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      {isInfoLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-70">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <MoonLoader color="#46A195" />
          </div>
        </div>
      )}

      {/* START: 로딩 스피너 */}
      {/* START:뒤로가기 버튼 */}
      <PrevButton />
      {/* END:뒤로가기 버튼 */}
      <div className="h-full flex flex-col">
        {/* START:헤더 영역 */}
        <div className="-mx-6 -mt-10 py-7 bg-chef-green-500">
          <span className="block text-xl text-center text-white">
            맛있는 쉐프
          </span>
        </div>
        {/* END:헤더 영역 */}
        {/* START:채팅 영역 */}
        <div className="overflow-auto">
          <MessageBox messages={messages} isLoading={isMessageLoading} />
        </div>
        {/* END:채팅 영역 */}
        {/* START:메시지 입력 영역 */}
        <div className="mt-auto flex py-5 -mx-2 border-t border-gray-100">
          <form
            id="sendForm"
            className="w-full px-2 h-full"
            onSubmit={hadleSubmit}
          >
            <input
              className="w-full text-sm px-3 py-2 h-full block rounded-xl bg-gray-100 focus:"
              type="text"
              name="message"
              value={value}
              onChange={hadleChange}
            />
          </form>
          <button
            type="submit"
            form="sendForm"
            className="w-10 min-w-10 h-10 inline-block rounded-full bg-chef-green-500 text-none px-2 bg-[url('../public/images/send.svg')] bg-no-repeat bg-center"
          >
            보내기
          </button>
        </div>
        {/* END:메시지 입력 영역 */}
      </div>
    </div>
  );
};

export default Chat;
