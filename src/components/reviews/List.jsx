import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function List() {
  const { id } = useParams();

  const reviews = useSelector((state) => {
    return state.reviews;
  });

  const dispatch = useDispatch();

  return (
    <>
      <div>댓글 목록</div>
      <br />
      {reviews.map((review) => {
        return (
          <div key={review.id}>
            {review.name}
            {` : review.content`}
            <button
              onClick={() => {
                dispatch({
                  type: "DELETE_REVIEW",
                  payload: review.id,
                });
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </>
  );
}

export default List;
