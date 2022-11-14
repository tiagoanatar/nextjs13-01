'use client'

import { FormEvent, useState } from "react";

export const SampleForm = () => {
  const intialState: FormResponse = {
    name: "",
    task: "",
  };

  const [formData, setForm] = useState({ ...intialState });
  const [tasks, setTasks] = useState<FormResponse[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)
    setTasks((prev) => ([...prev, formData]))
  };

  return (
    <>
      <h3>List of Tasks</h3>
      {tasks.length > 0
        ? tasks.map((item) => (
            <div className="task-item">
              <h6>{item.name}</h6>
              <p>{item.task}</p>
            </div>
          ))
        : "no task avalible"}
      <hr />
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Insert task name"
          />
        </p>
        <p>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            onChange={(e) =>
              setForm((prev) => ({ ...prev, task: e.target.value }))
            }
            placeholder="Insert task description"
          />
        </p>
        <input type="submit" value="Send" />
      </form>
      <h6>Form Data Preview</h6>
      {formData.name} / {formData.task}
      <hr />
    </>
  );
};

interface FormResponse {
  name: string;
  task: string;
}
