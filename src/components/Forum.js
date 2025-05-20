import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const posts = [
  {
    id: 'smart-drugs',
    image: '/drugimage.png',
    title: 'Smart Drugs, Smarter Outcomes',
    author: 'Prof. Liam Chen',
    time: '4 hours ago',
    read: '7 min read'
  },
  {
    id: 'ai-pulse',
    image: '/medicaldeviceimage.png',
    title: 'AI: The New Pulse of Devices',
    author: 'Dr. Elena Moritz',
    time: '5 hours ago',
    read: '9 min read'
  },
  {
    id: 'stomach-care',
    image: '/organimage.png',
    title: 'Stomach Care Gets an AI Boost',
    author: 'Dr. Maya Patel',
    time: '8 hours ago',
    read: '4 min read'
  }
];

const communities = [
  {
    id: 'cancer-research-collective',
    image: '/cancerresearchcollectiveimg.png',
    name: 'Cancer Research Collective',
    creator: 'Dr. Liam Hayes',
    members: '15.3k'
  },
  {
    id: 'neurohealth-innovation',
    image: '/neurohealthinnovationimg.png',
    name: 'NeuroHealth Innovation',
    creator: 'Dr. Sophia Grant',
    members: '4.9k'
  },
  {
    id: 'chronic-care-network',
    image: '/chronicnetworkimg.png',
    name: 'Chronic Care Network',
    creator: 'Dr. Emily Carter',
    members: '9.6k'
  }
];

export default function Forum() {
  const navigate = useNavigate();
  return (
    <div className="forum-page">
      <div className="forum-header">
        <div className="forum-title">Latest Posts.</div>
        <div className="forum-see-more" onClick={() => {}}>→ See More</div>
      </div>
      <div className="forum-cards">
        {posts.map(post => (
          <div
            className="forum-card"
            key={post.id}
            onClick={() => navigate(`/forum/${post.id}`)}
            tabIndex={0}
            role="button"
            aria-label={post.title}
          >
            <img src={post.image} alt={post.title} className="forum-card-img" />
            <div className="forum-card-content">
              <div className="forum-card-title">{post.title}</div>
              <div className="forum-card-author">By {post.author}</div>
              <div className="forum-card-meta">
                <span>{post.time}</span>
                <span>{post.read}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="community-section">
        <div className="community-header">
          <div className="community-title">Find Your Community.</div>
          <div className="community-see-more">→ See More</div>
        </div>
        <div className="community-cards">
          {communities.map(comm => (
            <div
              className="community-card"
              key={comm.id}
              tabIndex={0}
              role="button"
              aria-label={comm.name}
            >
              <div className="community-img-wrap">
                <img src={comm.image} alt={comm.name} className="community-img" />
              </div>
              <div className="community-card-content">
                <div className="community-card-title">{comm.name}</div>
                <div className="community-card-creator">Created by {comm.creator}</div>
                <div className="community-card-members">
                  <span className="community-member-icon">👤</span>
                  <span className="community-member-count">{comm.members} Members</span>
                </div>
                <button className="community-join-btn">Join</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
