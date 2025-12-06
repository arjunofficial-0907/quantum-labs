import React, { useEffect, useState } from "react";
import { getProjects, deleteProject } from "../api/projectService";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const loadProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadProjects();
  }, []);

  const remove = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("adminToken");
      await deleteProject(id, token);
      loadProjects();
    } catch (err) {
      alert("Delete failed");
      console.log(err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Projects</h2>
        <a
          href="/add-project"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Add Project
        </a>
      </div>

      {projects.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No projects found</p>
      ) : (
        <div className="mt-6 space-y-4">
          {projects.map((p) => (
            <div
              key={p.id}
              className="border rounded-lg p-4 flex justify-between items-center shadow-sm"
            >
              <div>
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.category_name || "No Category"}</p>
                <p className="mt-1 text-gray-700">
                  ₹{p.discount_price ? p.discount_price : p.price}{" "}
                  {p.discount_price && (
                    <span className="line-through text-red-500 text-sm ml-2">
                      ₹{p.price}
                    </span>
                  )}
                </p>
              </div>

              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                onClick={() => remove(p.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
