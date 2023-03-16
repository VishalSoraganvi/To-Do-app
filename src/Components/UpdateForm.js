const UpdateForm = ({
  updateData,
  changeTaskHandler,
  updateTaskHandler,
  cancelUpdateHandler,
}) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg"
            value={updateData && updateData.title}
            onChange={(e) => changeTaskHandler(e)}
          />
        </div>
        <div className="col-auto">
          <button
            className="btn btn-lg btn-success mr-20"
            onClick={updateTaskHandler}
          >
            Update
          </button>
          <button
            className="btn btn-lg btn-warning"
            onClick={cancelUpdateHandler}
          >
            Cancel
          </button>
        </div>
      </div>

      <br />
    </>
  );
};

export default UpdateForm;
