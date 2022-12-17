import React from "react";
import BoardCard from "./BoardCard";

function BoardContainer({ boards, onDelete }) {

  return (
    <div className=" font bg-amber-400 mr-20	 ml-56 mb-24 md:px-10  grid md:gap-x-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {boards.map((board) => (
        <BoardCard  key={board.boardId} board={board} onDelete={onDelete} />
      ))}

    </div>
  );
}

export default BoardContainer;

