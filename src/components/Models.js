import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

const diseases = [
  { name: "Lung Cancer", path: "lung-cancer" },
  { name: "Breast Cancer", path: "breast-cancer" },
  { name: "Retinal Disease", path: "retinal-disease" },
  { name: "Skin Cancer", path: "skin-cancer" },
  { name: "Kidney Cancer", path: "kidney-cancer" },
  { name: "Thyroid Disease", path: "thyroid-disease" },
  { name: "Heart Disease", path: "heart-disease" },
  { name: "Multiple Sclerosis", path: "multiple-sclerosis" },
  { name: "Parkinson's Disease", path: "parkinsons-disease" }
];

export default function Models() {
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ name: '', email: '', desc: '', file: null, image: null });
  const fileInput = useRef();
  const imageInput = useRef();
  const formRef = useRef(null);

  useEffect(() => {
    // Scroll to the top on page load/route change if no hash is present
    if (location.pathname === '/models' && !location.hash) {
      window.scrollTo(0, 0);
    } else if (location.pathname === '/models' && location.hash === '#submit-form' && formRef.current) {
       // Scroll to the form if hash is #submit-form and pathname is /models
       const timer = setTimeout(() => {
         formRef.current.scrollIntoView({ behavior: 'smooth' });
       }, 0); // Use 0ms delay
       return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]); // Trigger when the pathname or hash changes

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (files) {
      setForm(f => ({ ...f, [name]: files[0] }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', form.name);
    data.append('email', form.email);
    data.append('desc', form.desc);
    if (form.file) data.append('file', form.file);
    if (form.image) data.append('image', form.image);
    await fetch('/api/submit-model', { method: 'POST', body: data });
    setForm({ name: '', email: '', desc: '', file: null, image: null });
    if (fileInput.current) fileInput.current.value = '';
    if (imageInput.current) imageInput.current.value = '';
    alert('Model submitted!');
  };

  return (
    <div className="models-page">
      <div className="models-grid">
        {diseases.map((disease, idx) => (
          <button
            className="model-card"
            key={disease.path}
            onClick={() => {
              if (disease.name === 'Lung Cancer') {
                navigate('/model/lung-cancer');
              } else {
                navigate(`/models/${disease.path}`);
              }
            }}
            tabIndex={0}
            aria-label={disease.name}
          >
            {disease.name}
          </button>
        ))}
      </div>
      <form className="model-submit-form" onSubmit={handleSubmit} encType="multipart/form-data" id="submit-form" ref={formRef}>
        <div className="model-form-title">Submit Your Own Models.</div>
        <input
          className="model-form-input"
          name="name"
          type="text"
          placeholder="First and Last Name..."
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="model-form-input"
          name="email"
          type="email"
          placeholder="Email Address..."
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="model-form-textarea"
          name="desc"
          placeholder="The model designed, dataset used, and a brief description..."
          value={form.desc}
          onChange={handleChange}
          required
        />
        <div className="model-form-actions">
          <label className="model-form-icon">
            <span>⋮</span>
          </label>
          <label className="model-form-icon">
            <input
              type="file"
              name="file"
              style={{ display: 'none' }}
              ref={fileInput}
              onChange={handleChange}
            />
            <span role="img" aria-label="attach">📎</span>
          </label>
          <label className="model-form-icon">
            <input
              type="file"
              name="image"
              accept="image/*"
              style={{ display: 'none' }}
              ref={imageInput}
              onChange={handleChange}
            />
            <span role="img" aria-label="camera">📷</span>
          </label>
          <button className="model-form-submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
