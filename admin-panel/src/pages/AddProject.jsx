import React, { useState } from "react";
import { addProject } from "../api/projectService";

const AddProject = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    discount_price: "",
    category_id: "",
  });

  const [techStack, setTechStack] = useState([]);
  const [techInput, setTechInput] = useState("");

  const [imageFile, setImageFile] = useState(null);

  const categories = [
    { id: 1, name: "Python" },
    { id: 2, name: "Java" },
    { id: 3, name: "Machine Learning" },
    { id: 4, name: "Artificial Intelligence" },
    { id: 5, name: "Web Development" },
    { id: 6, name: "App Development" },
    { id: 7, name: "Mern Stack"}
  ];

  const handleTechAdd = (e) => {
    if (e.key === "Enter" && techInput.trim() !== "") {
      e.preventDefault();
      setTechStack([...techStack, techInput.trim()]);
      setTechInput("");
    }
  };

  const removeTech = (item) => {
    setTechStack(techStack.filter((t) => t !== item));
  };

  const submit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("adminToken");
    if (!token) {
      alert("Please login as admin");
      return;
    }

    if (!form.title || !form.description || !form.price || !form.category_id || !imageFile) {
      alert("All fields are required");
      return;
    }

    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    data.append("price", form.price);
    data.append("discount_price", form.discount_price);
    data.append("category_id", form.category_id);
    data.append("image", imageFile);

    // append tech stack
    techStack.forEach((item) => data.append("tech_stack", item));

    try {
      await addProject(data, token);
      alert("Project Added Successfully");
      window.location.href = "/";
    } catch (err) {
      console.log(err.response?.data || err);
      alert(err.response?.data?.detail || "Error adding project");
    }
  };

  return (
    <form onSubmit={submit} className="p-8 space-y-4 max-w-xl mx-auto border rounded-xl shadow-lg bg-white mt-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Add New Project</h2>

      <input
        type="text"
        placeholder="Project Title"
        className="border px-3 py-2 w-full rounded-md"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <textarea
        placeholder="Description"
        className="border px-3 py-2 w-full rounded-md"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <select
        className="border px-3 py-2 w-full rounded-md"
        onChange={(e) => setForm({ ...form, category_id: e.target.value })}
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Price"
          className="border px-3 py-2 w-full rounded-md"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          type="number"
          placeholder="Discount Price"
          className="border px-3 py-2 w-full rounded-md"
          onChange={(e) => setForm({ ...form, discount_price: e.target.value })}
        />
      </div>

      {/* Tech Stack Input */}
      <div>
        <input
          type="text"
          placeholder="Add Tech & press Enter (React, Node, MongoDB...)"
          value={techInput}
          onChange={(e) => setTechInput(e.target.value)}
          onKeyDown={handleTechAdd}
          className="border px-3 py-2 w-full rounded-md"
        />

        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((t, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-200 rounded-full flex items-center gap-2">
              {t}
              <button type="button" className="text-red-500" onClick={() => removeTech(t)}>
                ✖
              </button>
            </span>
          ))}
        </div>
      </div>

      <input
        type="file"
        accept="image/*"
        className="border px-3 py-2 w-full rounded-md"
        onChange={(e) => setImageFile(e.target.files[0])}
      />

      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md w-full font-semibold">
        Add Project
      </button>
    </form>
  );
};

export default AddProject;
