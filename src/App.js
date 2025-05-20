import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Models from './components/Models';
import Forum from './components/Forum';
import './App.css';

function Home() {
  const navigate = useNavigate();

  const handleBrowseModelsClick = () => {
    // Temporarily use full page reload for debugging scrolling issue
    window.location.href = '/models';
  };

  const handleStartContributingClick = () => {
     // Keep a small delay for navigating to the form section
     setTimeout(() => navigate('/models#submit-form'), 100);
  };

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
              <button className="tool-btn" onClick={handleBrowseModelsClick}>→ Browse Models</button>
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
              <button className="tool-btn" onClick={() => navigate('/forum')}>→ Join The Conversation</button>
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
              <button className="tool-btn" onClick={handleStartContributingClick}>→ Start Contributing</button>
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

function LungCancerCommunity() {
  return (
    <div className="lung-cancer-page">
      <div className="lung-cancer-content-wrap">
        <h1 className="lung-cancer-title">Lung Cancer Model</h1>
        <div className="lung-cancer-subtitle">-Early detection of lung cancer through AI-driven analysis of medical imaging.</div>
        <div className="lung-cancer-creator-box">
          <div className="lung-cancer-creator-title">Creator(s)</div>
          <div>Dr. Emily Carter, Lead Researcher, Department of Oncology, Stanford University</div>
          <div>Dr. Liam Hayes, AI Specialist, Stanford AI Lab</div>
        </div>
        <div className="lung-cancer-main-layout">
          {/* Images and Button Column */}
          <div className="lung-cancer-images-column">
            <div className="lung-cancer-image-title">Images & Figures:</div>
            <div className="lung-cancer-images">
              <img src="/lungcancerctimg.png" alt="Lung CT Scans" className="lung-cancer-img" />
              <img src="/lungcancergraphimg.png" alt="Lung Cancer Graph" className="lung-cancer-img" />
            </div>
            <div className="lung-cancer-access-button-wrap">
              <a href="#" className="lung-cancer-access-button">Access The Model Here</a>
            </div>
          </div>
          {/* Text Column */}
          <div className="lung-cancer-text-column">
            <div className="lung-cancer-section lung-cancer-dataset-section">
              <div className="lung-cancer-section-title">Dataset</div>
              <div className="lung-cancer-section-text">
                The model was trained using the Lung Cancer Imaging Dataset (LCID), sourced from public datasets on Kaggle and anonymized hospital records. The dataset consists of 50,000+ CT scans from lung cancer patients, covering stages 1 to 4 of the disease.<br />
                • Data Types: CT scans, patient demographics, clinical history<br />
                • Preprocessing: Image normalization, segmentation, and labeling to identify tumor locations.
              </div>
            </div>
            <div className="lung-cancer-section">
              <div className="lung-cancer-section-title">Model Description</div>
              <div className="lung-cancer-section-text">
                The model utilizes a Convolutional Neural Network (CNN) to analyze and classify lung CT scans. The network is designed to detect signs of malignancy by examining patterns in lung tissue, focusing on nodules and tumor regions.<br />
                The model was trained for binary classification: lung cancer vs. no cancer.<br />
                • Input: 3D CT scan slices<br />
                • Architecture: 18-layer CNN with dropout and batch normalization to prevent overfitting.
              </div>
            </div>
            <div className="lung-cancer-section">
              <div className="lung-cancer-section-title">Accuracy and Performance</div>
              <div className="lung-cancer-section-text">
                Accuracy: 92%<br />
                Sensitivity: 89%<br />
                Specificity: 94%<br />
                AUC (Area Under Curve): 0.96<br />
                In clinical trials, the model outperformed existing diagnostic methods by providing faster and more accurate results in detecting early-stage lung cancer.
              </div>
            </div>
          </div>
        </div>
      </div>
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
        <Route path="/model/lung-cancer" element={<LungCancerCommunity />} />
      </Routes>
    </Router>
  );
}

export default App;
