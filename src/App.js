import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Models from './components/Models';
import Forum from './components/Forum';
import './App.css';

function Home() {
  return (
    <>
      <section
        className="hero-section"
        style={{
          background: "url(/oncobackground.png) center bottom/cover no-repeat"
        }}
      >
        <h2 className="hero-headline">Unlocking The Future of Medical AI.</h2>
      </section>
      <main>
        {/* Tools Built For You Section */}
        <section className="tools-section">
          <h2 className="section-title">Tools Built For You.</h2>
          <div className="tool-card">
            <div className="tool-card-title">
              ↳ <span>Explore AI Models for Cancer and Disease Diagnosis</span>
            </div>
            <div className="tool-card-desc">
              Access a public library of advanced AI models designed to revolutionize cancer and disease detection, diagnosis, and treatment planning.
            </div>
            <div className="tool-card-link">
              <button className="tool-btn">→ Browse Models</button>
            </div>
          </div>
          <div className="tool-card">
            <div className="tool-card-title">
              ↳ <span>Collaborate and Innovate in Real-Time</span>
            </div>
            <div className="tool-card-desc">
              Engage with a global community of researchers, developers, and medical professionals through interactive forums. Share insights, exchange ideas, and drive innovation in AI-powered medicine.
            </div>
            <div className="tool-card-link">
              <button className="tool-btn">→ Join The Conversation</button>
            </div>
          </div>
          <div className="tool-card">
            <div className="tool-card-title">
              ↳ <span>Shape the Future of Healthcare AI</span>
            </div>
            <div className="tool-card-desc">
              Contribute to the development and refinement of AI models, ensuring they remain at the forefront of medical advancements. Participate in discussions about ethical AI, transparency, and cutting-edge research.
            </div>
            <div className="tool-card-link">
              <button className="tool-btn">→ Start Contributing</button>
            </div>
          </div>
        </section>
        {/* What Sets Us Apart Section */}
        <section className="sets-apart-section">
          <h2 className="section-title">What Sets Us Apart.</h2>
          <div className="sets-apart-grid">
            <div className="apart-card">
              <div className="apart-title">Collaborative AI Development</div>
              <div className="apart-desc">
                OncoVisionAI fosters a community-driven approach where developers, researchers, and healthcare professionals collaborate on cutting-edge AI models for cancer detection. This open platform encourages shared knowledge, accelerating innovation in medical AI.
              </div>
              <div className="apart-icon"></div>
            </div>
            <div className="apart-card">
              <div className="apart-title">Comprehensive Disease Models</div>
              <div className="apart-desc">
                OncoVisionAI provides access to a wide range of AI models for various cancers and diseases, offering a one-stop platform for exploring advanced diagnostic tools. Each model is continuously improved through community contributions and real-world feedback.
              </div>
              <div className="apart-icon"></div>
            </div>
            <div className="apart-card">
              <div className="apart-title">Interactive Learning + Support</div>
              <div className="apart-desc">
                OncoVisionAI combines advanced AI technology with interactive forums, allowing users to engage in discussions, share insights, and stay updated on the latest breakthroughs. This supportive environment helps drive progress in AI and medical research.
              </div>
              <div className="apart-icon"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ModelDetail() {
  const { modelId } = useParams();
  // Convert modelId to display name
  const displayName = modelId
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace('Ms', 'MS')
    .replace('Ai', 'AI');
  return (
    <div className="models-page" style={{justifyContent: 'center', alignItems: 'center'}}>
      <div className="model-detail-card" style={{background: '#fff', borderRadius: 28, padding: '48px 40px', fontFamily: 'Mitr, sans-serif', fontSize: '2rem', color: '#111', minWidth: 320, minHeight: 120, boxShadow: '0 2px 12px rgba(0,0,0,0.04)'}}>
        {displayName}
      </div>
    </div>
  );
}

function ForumArticle() {
  const { articleId } = useParams();
  return (
    <div style={{ color: '#fff', fontFamily: 'Inter, Mitr, sans-serif', padding: 40, marginTop: 70 }}>
      <h1>{articleId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</h1>
      <p>Article content coming soon...</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/models" element={<Models />} />
        <Route path="/models/:modelId" element={<ModelDetail />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/:articleId" element={<ForumArticle />} />
      </Routes>
    </Router>
  );
}

export default App;
