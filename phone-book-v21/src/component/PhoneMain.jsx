import React, { useEffect } from "react";
import PhoneList from "./PhoneList";
import PhoneInsert from "./PhoneInsert";
import "../css/PhoneMain.css";

function PhoneMain(props) {
  setPhoneBooks([
    ...phoneBooks,
    {
      id: nextid.current++,
      name: name,
      number: number,
      isEdit: false,
    },
  ]); // end setPhoneBooks
  // insertPhoneBook

    const nexid= useRef(phoneBooks.length);
    

      /**
     * Effect의 두 번째 파라메터를 빈값([])으로 설정을 하면
     * 프로젝트가 시작될때(화면이 rendering 될때) 한번만 이벤트가 작동된다.
     */

    useEffect(()=> {
      const localStorageBooks = window.localStorage.getItem("phoneBooks");
      setPhoneBooks(JSON.parse(localStorageBooks));
    }, []);
};
    /**
     * 리액트의 시스템 이벤트
     * phoneBooks 데이터를 감시하고 있다가 
     * 변화가 생기면 내부의 코드를 실행하라
     */
    useEffect(()=> {
          // 추가된 데이터가 없으면 전체 phoneBooks를 브라우져의 localStorage에 저장
        // 1. 배열 데이터를 문자열화 시키기
        const stringPhoneBook = JSON.stringify(phoneBooks);
        //2. localstorage에 phoneBooks라는 이름으로 저장하기
        window.localStorage.setItem("phoneBooks", stringPhoneBook);
    }, [phoneBooks]);


  /*
    id값을 기준으로 phone books에서 전화번호를 제거하기
    전체리스트에서 id에 해당하는 전화번호만 제거한 새로운 
    리스트를 만들고 그 리스트를 phoneBooks에 setting
    array.filter() 함수를 사용하여 삭제할 id가 있는 데이터만 
    제거된 새로운 리스트를 만든다
    */
  const deletePhoneBooks = (id) => {
    const deleteAfterBooks = phoneBooks.filter((phone) => {
      console.log(phone.id, id);
      // 동등비교연산자는 값과 type 모두 같아야 true
      // phone.id에 담긴 값은 숫자 , id에 받아온 값은 문자열
      // 둘의 type을 일치시켜줘야 한다.
      return phone.id !== Number(id);
    });
    setPhoneBooks(deleteAfterBooks);
  };

  const editableBooks = (id) => {
      const edittBooks = phoneBooks.map(phone=> {
          if(phone.id === Number(id)) {
              return {...phone, isEdit : true};
          } else {
              return {...phone, isEdit : false};
          }
      });
      setPhoneBooks(editBooks);
  };

  return (
    <div className="phoneMain">
      <h3>나만의 전화번호부</h3>
      <PhoneList phoneBooks={phoneBooks} 
      deletePhoneBooks={deletePhoneBooks}
      editableBooks={editableBooks} />
      <PhoneInsert insertPhoneBook={insertPhoneBook} />
    </div>
  );
}

export default PhoneMain;
