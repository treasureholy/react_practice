import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

function Form() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          dispatch({
            type: "ADD_REVIEW",
            payload: {
              id: shortid.generate(),
              name,
              content,
            },
          });

          setName("");
          setContent("");
        }}
      >
        <label>이름</label>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <label>내용</label>
        <input
          type="text"
          placeholder="댓글을 입력하세요"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          required
        />
        <button>등록</button>
      </form>
    </div>
  );
}

export default Form;
