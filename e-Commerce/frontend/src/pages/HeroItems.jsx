import { useState, useEffect } from 'react';
import AdminHeroForm from './AdminHeroForm';

const HeroItems = () => {
  const [heroItems, setHeroItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchHeroItems();
  }, []);

  const fetchHeroItems = async () => {
    try {
      const response = await fetch('http://localhost:9000/api/admin/getHero');
      const result = await response.json();
      if (result.success) {
        setHeroItems(result.data);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to fetch hero items');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        const response = await fetch(`http://localhost:9000/api/admin/deleteHero/${id}`, {
          method: 'DELETE'
        });
        const result = await response.json();
        if (result.success) {
          setHeroItems(heroItems.filter(item => item._id !== id));
          alert('Item deleted successfully');
        } else {
          alert('Failed to delete item');
        }
      } catch (err) {
        alert('Error deleting item');
      }
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setSelectedItem(null);
    fetchHeroItems(); // Refresh the list after form closes
  };

  // Function to set initial form data for editing
  const handleEdit = (item) => {
    // Set the form data with the selected item's values
    const formData = {
        _id: item._id, // Use the item's ID for editing
      heroTitle: item.heroTitle,
      heroPara: item.heroPara,
      heroImage: item.heroImage
    };
    setSelectedItem(formData);
    setShowForm(true);
  };

  if (isLoading) return <div className="text-center p-5">Loading...</div>;
  if (error) return <div className="alert alert-danger m-3">{error}</div>;

  return (
    <div className="container-fluid">
      {/* Show/Hide Form Button */}
      {!showForm && (
        <button 
          className="btn btn-outline-primary mb-4"
          onClick={() => {
            setSelectedItem(null); // Reset selected item for new entry
            setShowForm(true);
          }}
        >
          Add New Hero Item
        </button>
      )}

      {/* Reusable Form Component */}
      {showForm && (
        <div className="card shadow-sm border-0 mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="card-title m-0">{selectedItem ? 'Update' : 'Add'} Hero Item</h3>
              <button 
                className="btn btn-outline-secondary btn-sm"
                onClick={handleFormClose}
              >
                Cancel
              </button>
            </div>
            {/* Pass the formData as initial values when editing */}
            {/* <h1>`${selectedItem}`</h1> */}
            <AdminHeroForm
              initialFormData={selectedItem} // Pass the selected item data
              onClose={handleFormClose} // Provide the onClose prop
            />
          </div>
        </div>
      )}
      
      {/* Hero Items Grid */}
      <div className="row g-4">
        {heroItems.map((item) => (
          <div key={item._id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm hover-card">
              <div className="position-relative overflow-hidden">
                <img 
                  src={item.heroImage} 
                  className="card-img-top"
                  alt={item.heroTitle}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                {/* Floating Action Buttons */}
                <div className="action-buttons">
                  <button
                    className="btn btn-outline-light btn-sm me-2"
                    onClick={() => handleEdit(item)} // Use handleEdit instead
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.heroTitle}</h5>
                <p className="card-text text-secondary">{item.heroPara}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .hover-card {
            transition: transform 0.2s ease-in-out;
          }
          .hover-card:hover {
            transform: translateY(-5px);
          }
          .action-buttons {
            position: absolute;
            top: 10px;
            right: 10px;
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
            display: flex;
          }
          .hover-card:hover .action-buttons {
            opacity: 1;
          }
          .btn-outline-light {
            backdrop-filter: blur(4px);
            background-color: rgba(255, 255, 255, 0.1);
          }
          .btn-outline-danger {
            backdrop-filter: blur(4px);
            background-color: rgba(255, 255, 255, 0.1);
          }
          .btn-outline-light:hover,
          .btn-outline-danger:hover {
            background-color: rgba(255, 255, 255, 0.2);
          }
        `}
      </style>
    </div>
  );
};

export default HeroItems;