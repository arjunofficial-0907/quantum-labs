import React, { useState } from "react";
import { addProject } from "../api/projectService";
import { PlusCircle, Upload, X } from "lucide-react";

const AddProject = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    discount_price: "",
    category_id: "",
    rating: "",
    reviews_count: "",
  });

  const [techStack, setTechStack] = useState([]);   // FIXED NAME
  const [techInput, setTechInput] = useState("");

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const categories = [
    { id: 1, name: "Python" },
    { id: 2, name: "Java" },
    { id: 3, name: "Machine Learning" },
    { id: 4, name: "Artificial Intelligence" },
    { id: 5, name: "Web Development" },
    { id: 6, name: "App Development" },
    { id: 7, name: "Mern Stack" },
  ];

  const handleTechAdd = (e) => {
    if (e.key === "Enter" && techInput.trim()) {
      e.preventDefault();
      setTechStack([...techStack, techInput.trim()]);
      setTechInput("");
    }
  };

  const removeTech = (item) => setTechStack(techStack.filter((t) => t !== item));

  const submit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("adminToken");
    if (!token) return alert("Please login as admin");

    if (!form.title || !form.description || !form.price || !form.category_id || !imageFile) {
      alert("All fields are required");
      return;
    }

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    data.append("image", imageFile);
    data.append("tech_stack", JSON.stringify(techStack));  // FIXED

    try {
      await addProject(data, token);
      alert("Project Added Successfully");
      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.detail || "Error adding project");
      console.log(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <form
        onSubmit={submit}
        className="p-8 bg-white rounded-xl shadow-xl border space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
          <PlusCircle className="w-8 h-8 text-green-600" />
          Add New Project
        </h2>

        {/* Title */}
        <div>
          <label className="font-medium text-gray-700">Project Title</label>
          <input
            type="text"
            className="mt-1 border px-3 py-2 w-full rounded-md"
            placeholder="Enter project name"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-medium text-gray-700">Description</label>
          <textarea
            className="mt-1 border px-3 py-2 w-full rounded-md"
            placeholder="Project description"
            rows="3"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>

        {/* Category */}
        <div>
          <label className="font-medium text-gray-700">Category</label>
          <select
            className="mt-1 border px-3 py-2 w-full rounded-md"
            onChange={(e) => setForm({ ...form, category_id: e.target.value })}
          >
            <option value="">Select Category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        {/* Price & Discount */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-medium text-gray-700">Price</label>
            <input
              type="number"
              className="mt-1 border px-3 py-2 w-full rounded-md"
              placeholder="₹"
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Discount Price</label>
            <input
              type="number"
              className="mt-1 border px-3 py-2 w-full rounded-md"
              placeholder="₹"
              onChange={(e) => setForm({ ...form, discount_price: e.target.value })}
            />
          </div>
        </div>

        {/* Rating & Reviews */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="font-medium text-gray-700">Rating</label>
            <input
              type="number"
              step="0.1"
              min="1"
              max="5"
              placeholder="4.5"
              className="mt-1 border px-3 py-2 w-full rounded-md"
              onChange={(e) => setForm({ ...form, rating: e.target.value })}
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Reviews Count</label>
            <input
              type="number"
              placeholder="21"
              className="mt-1 border px-3 py-2 w-full rounded-md"
              onChange={(e) => setForm({ ...form, reviews_count: e.target.value })}
            />
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <label className="font-medium text-gray-700">Tech Stack</label>
          <input
            type="text"
            className="mt-1 border px-3 py-2 w-full rounded-md"
            placeholder="Press Enter to add"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            onKeyDown={handleTechAdd}
          />

          <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map((t, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex items-center gap-2"
              >
                {t}
                <X
                  onClick={() => removeTech(t)}
                  className="w-4 h-4 cursor-pointer text-red-500"
                />
              </span>
            ))}
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="font-medium text-gray-700">Project Image</label>
          <div className="mt-2 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer bg-gray-50 hover:bg-gray-100">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="imageUpload"
              onChange={(e) => {
                setImageFile(e.target.files[0]);
                setPreview(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <label htmlFor="imageUpload" className="cursor-pointer flex flex-col items-center gap-2">
              <Upload className="w-10 h-10 text-gray-500" />
              <p className="text-gray-600">Click to Upload Image</p>
            </label>
          </div>

          {preview && (
            <img
              src={preview}
              className="mt-4 rounded-lg shadow-md h-44 object-cover w-full"
              alt="preview"
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md w-full text-lg font-semibold shadow-md"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
