import React from "react";

const AddTaskForm = () => {
  return (
    <div>
      <form>
        <div className="form-control">
          <label htmlFor="task">Task</label>
          <input type="text" name="task" id="task" placeholder="add task" />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input type="date" name="day" id="day"/>
        </div>
        <div>
          <button className="btn btn-submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
