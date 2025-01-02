import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminHeroForm = ({ initialFormData, onClose }) => {
  const [formData, setFormData] = useState({
    heroTitle: '',
    heroPara: '',
    heroImage: '',
  });

  useEffect(() => {
    if (initialFormData) {
      setFormData(initialFormData);
    } else {
      // Reset form when initialFormData is null (for new entries)
      setFormData({
        heroTitle: '',
        heroPara: '',
        heroImage: '',
      });
    }
  }, [initialFormData]);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(initialFormData);

    try {
      let response;
      
      if (initialFormData?._id) {
        // Update existing hero
        response = await axios.put(
          `http://localhost:9000/api/admin/updateHero/${initialFormData._id}`,
          formData
        );
      } else {
        // Create new hero
        response = await axios.post(
          'http://localhost:9000/api/admin/addHero',
          formData
        );
      }

      if (response.data && response.data.success) {
        alert(`Hero content ${initialFormData ? 'updated' : 'created'} successfully!`);
        
        // Reset form for new entries
        if (!initialFormData) {
          setFormData({
            heroTitle: '',
            heroPara: '',
            heroImage: '',
          });
          

        }
        
        // Close form and refresh list
        if (onClose) {
          onClose();
        }
      } else {
        alert('Failed to save hero content');
      }
    } catch (error) {
      // Handle errors
      if (error.response) {
        // Server responded with an error
        console.error('Error response:', error.response.data);
        alert(`Error: ${error.response.data.message || 'Failed to save hero content'}`);
      } else if (error.request) {
        // Request made but no response
        console.error('Error request:', error.request);
        alert('No response from server');
      } else {
        // Other errors
        console.error('Error message:', error.message);
        alert('Error saving hero content');
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <form onSubmit={handleSubmit} className="needs-validation">
        {/* Hero Title */}
        <div className="mb-3">
          <label className="form-label text-secondary">Hero Title</label>
          <input
            type="text"
            name="heroTitle"
            value={formData.heroTitle}
            onChange={handleChange}
            className="form-control form-control-lg bg-light border-0"
            placeholder="Enter Hero Title"
            required
          />
        </div>

        {/* Hero Paragraph */}
        <div className="mb-3">
          <label className="form-label text-secondary">Hero Paragraph</label>
          <textarea
            name="heroPara"
            value={formData.heroPara}
            onChange={handleChange}
            className="form-control form-control-lg bg-light border-0"
            rows="4"
            placeholder="Enter Hero Paragraph"
            required
          />
        </div>

        {/* Hero Image URL */}
        <div className="mb-4">
          <label className="form-label text-secondary">Hero Image URL</label>
          <input
            type="text"
            name="heroImage"
            value={formData.heroImage}
            onChange={handleChange}
            className="form-control form-control-lg bg-light border-0"
            placeholder="Enter Hero Image URL"
            required
          />
        </div>

        {/* Form Buttons */}
        <div className="d-flex gap-2">
          <button 
            type="submit" 
            className="btn btn-primary btn-lg flex-grow-1"
          >
            {initialFormData ? 'Update' : 'Create'} Hero Content
          </button>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="btn btn-outline-secondary btn-lg"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <style>
        {`
          .form-control:focus {
            box-shadow: none;
            border-color: #0d6efd;
          }
          .form-control-lg {
            padding: 0.75rem 1.25rem;
          }
          .bg-light {
            background-color: #f8f9fa !important;
          }
        `}
      </style>
    </div>
  );
};

export default AdminHeroForm;