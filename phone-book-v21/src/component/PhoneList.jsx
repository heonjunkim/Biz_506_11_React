import React from "react";
import "../css/PhoneList.css";

const PhoneList = ({ phoneBooks, deletePhoneBooks, editableBooks }) => {
    const [name,setName] = useState("");
    const [number,setNumber] = useState("");


    /**
     * tr tag를 클릭했을때 사용할 event 핸들러
     * 
     */
  const trOnClick = (e) => {
    console.log(e.target.className);
    const className = e.target.className;
    const closest = e.target.closest("TR");
  };

  // delete 칼럼이 아닌 부분을 클릭하면
  // edit 모드로 전환시키기
  editableBooks(id);

  const onNameChange =(e) => {
      setName(e.target.value);
  }
  const onNumberChange = (e) => {
      setNumber(e.target.value);
  }

  const phoneList = phoneBooks.map((phone,index) => {
      if(phone.isEdit) {           

        setName = phone.name;
        setNumber = phone.number;
      } else {        
        return (
    <tr
     key={phone.id}
     onClick={trOnClick}
     data-id={phone.id}
     data-name={phone.name}
    >
        <td>{index +1}</td>
        <td>
            <input value ={name} onChange = {onNameChange}/>
        </td>
        <td>
        <input value ={number} onChange = {onNameChange}/>
        </td>
        <td className="update-ok"></td>
    </tr>
  );
};

export default PhoneList;
