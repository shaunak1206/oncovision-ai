import React from 'react';
import '../App.css';

export default function About() {
  return (
    <div className="about-page">
      <section className="about-section">
        <h1 className="about-title">Our Purpose.</h1>
        <p className="about-desc">
          The purpose of the OncoVisionAI website is to democratize access to cutting-edge AI technologies in medicine, offering a public platform where users can explore, utilize, and contribute to AI models for cancer and disease diagnosis. It fosters collaboration through forums, enabling researchers, developers, and medical professionals to discuss advancements, share insights, and collectively drive innovation in healthcare AI. The platform aims to accelerate medical breakthroughs, promote ethical AI use, and make impactful healthcare solutions widely accessible.
        </p>
      </section>
      <section className="about-section">
        <h1 className="about-title">How We Built OncoVisionAI.</h1>
        <p className="about-desc">
          OncoVisionAI was built with the collective power of innovation, collaboration, and a shared vision for transforming healthcare. From designing an intuitive interface in Figma to training our AI models with Kaggle datasets on Google Colab, every step was shaped by teamwork and a commitment to accessibility. Using React and CSS, we crafted a seamless and responsive platform that invites users to explore, learn, and contribute. This project reflects the dedication of a community united by the belief that AI can create a brighter future in medicine.
        </p>
      </section>
    </div>
  );
}