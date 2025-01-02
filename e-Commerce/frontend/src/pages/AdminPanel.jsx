import { useState } from 'react';
import { Home, Layout, Image, MessageSquare, ShoppingBag, Users, Settings } from 'lucide-react';
import HeroItems from './HeroItems';
import MarqueeSection from './MarqueeSection';

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    // { id: 'hero', label: 'Hero-add ', icon: <Layout size={20} /> },
    { id: 'heroSection', label: 'Hero', icon: <Layout size={20} /> },
    { id: 'marqueeSection', label: 'Marquee', icon: <ShoppingBag size={20} /> },
    { id: 'categories', label: 'Categories', icon: <Image size={20} /> },
    { id: 'testimonials', label: 'Testimonials', icon: <MessageSquare size={20} /> },
    { id: 'customers', label: 'Customers', icon: <Users size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'heroSection':
        return <HeroItems />
      case 'marqueeSection':
        return <MarqueeSection />
      case 'dashboard':
        return <DashboardPlaceholder />;
      default:
        return <ComingSoon section={activeSection} />;
    }
  };

  return (
    <div className="min-vh-100 d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white" style={{ width: '300px', minHeight: '100vh' }}>
        <div className="p-4 border-bottom border-secondary">
          <h1 className="h4 mb-0">Admin Panel</h1>
        </div>
        <div className="p-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`btn w-100 text-start mb-2 d-flex align-items-center ${
                activeSection === item.id
                  ? 'btn-primary'
                  : 'btn-dark text-white-50 hover-light'
              }`}
              style={{ 
                transition: 'all 0.3s',
                padding: '12px 20px',
                borderRadius: '8px'
              }}
            >
              <span className="me-3">{item.icon}</span>
              <span style={{ fontSize: '15px' }}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 bg-light">
        <div className="p-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardPlaceholder = () => (
  <div className="row g-4">
    {['Total Sales', 'Active Users', 'Products'].map((title) => (
      <div key={title} className="col-md-6 col-lg-4">
        <div className="card h-100">
          <div className="card-body d-flex flex-column">
            <h3 className="card-title h5 mb-3">{title}</h3>
            <div className="display-6 mt-auto text-primary">
              {Math.floor(Math.random() * 1000)}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ComingSoon = ({ section }) => (
  <div className="card">
    <div className="card-body text-center py-5">
      <h2 className="h4 mb-3">
        {section.charAt(0).toUpperCase() + section.slice(1)} Section
      </h2>
      <p className="text-muted mb-0">This section is coming soon!</p>
    </div>
  </div>
);

export default AdminPanel;