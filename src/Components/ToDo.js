import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ toDo, markDoneHandler, setUpdateData, deleteTaskHandler }) => {
  //   const [toDo] = useState(JSON.parse(localStorage.getItem("toDo")));
  return (
    <>
      {toDo && toDo.length ? "" : "No Tasks"}
      {toDo &&
        toDo
          //   .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((tasks, index) => {
            return (
              <React.Fragment key={tasks.id}>
                <div className="col taskBg">
                  <div className={tasks.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{tasks.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <span>
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        onClick={() => {
                          markDoneHandler(tasks.id);
                        }}
                      />
                    </span>
                    {!tasks.status && (
                      <span>
                        <FontAwesomeIcon
                          icon={faPen}
                          onClick={() => {
                            setUpdateData({
                              id: tasks.id,
                              title: tasks.title,
                              status: tasks.status ? true : false,
                            });
                          }}
                        />
                      </span>
                    )}

                    <span>
                      <FontAwesomeIcon
                        onClick={() => deleteTaskHandler(tasks.id)}
                        icon={faTrashCan}
                      />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};

export default ToDo;
