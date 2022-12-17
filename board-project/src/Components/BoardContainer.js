import React from "react";
import BoardCard from "./BoardCard";

function BoardContainer({ boards, onDelete }) {

  return (
    <div className="font p-20 mr-20 ml-72 mb-24 md:px-3  grid md:gap-x-3 md:grid-cols-1s lg:grid-cols-2 xl:grid-cols-3">
      {boards.map((board) => (
        <BoardCard  key={board.boardId} board={board} onDelete={onDelete} />
      ))}

    </div>
  );
}

export default BoardContainer;

