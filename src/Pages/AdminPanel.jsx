import React, { useState } from "react";
import {blogsData} from "../data/blogs.js"; 

export default function AdminPanel() {
  const [blogs, setBlogs] = useState(blogsData); 
  const [form, setForm] = useState({ id: "", title: "", image: "", content: "" });
  const [editMode, setEditMode] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Create new blog
  const handleCreate = () => {
    if (!form.title || !form.content) return alert("Please fill required fields");
    const newBlog = { ...form, id: blogs.length + 1 };
    setBlogs([...blogs, newBlog]);
    setForm({ id: "", title: "", image: "", content: "" });
  };

  // Update blog
  const handleUpdate = () => {
    setBlogs(blogs.map((b) => (b.id === Number(form.id) ? form : b)));
    setForm({ id: "", title: "", image: "", content: "" });
    setEditMode(false);
  };

  // Delete blog
  const handleDelete = (id) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  // Load blog into form for editing
  const handleEdit = (blog) => {
    setForm(blog);
    setEditMode(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>

      {/* Form */}
      <div className="mb-6 space-y-3">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="content"
          placeholder="Blog Content"
          value={form.content}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {editMode ? (
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Update Blog
          </button>
        ) : (
          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Create Blog
          </button>
        )}
      </div>

      {/* Blog List */}
      <h3 className="text-xl font-semibold mb-2">All Blogs</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-4 border rounded shadow flex flex-col justify-between"
          >
            <h4 className="font-bold">{blog.title}</h4>
            <p className="text-sm text-gray-600">
              {blog.content.substring(0, 80)}...
            </p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => handleEdit(blog)}
                className="px-3 py-1 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog.id)}
                className="px-3 py-1 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
