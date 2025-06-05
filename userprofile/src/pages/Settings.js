import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";

const Settings = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: user.name, email: user.email });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    alert("✅ Profile Updated!");
  };

  return (
    <div className="page">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:  
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>

        <label>
          Email:  
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Settings;
