import { useState, useEffect } from 'react';
import { Pencil, Trash2, Plus } from 'lucide-react';

const MarqueeSection = () => {
  const [marquees, setMarquees] = useState([]);
  const [newMarqueeText, setNewMarqueeText] = useState('');
  const [editingMarquee, setEditingMarquee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch marquee data
  const fetchMarquees = async () => {
    try {
      const response = await fetch('http://localhost:9000/api/admin/getMarquee');
      const data = await response.json();
      if (data.success) {
        setMarquees(data.data);
      }
    } catch (error) {
      console.error('Error fetching marquees:', error);
    }
  };

  useEffect(() => {
    fetchMarquees();
  }, []);

  // Add new marquee
  const handleAddMarquee = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9000/api/admin/addMarquee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ marqueeText: newMarqueeText }),
      });
      
      if (response.ok) {
        setNewMarqueeText('');
        fetchMarquees();
      }
    } catch (error) {
      console.error('Error adding marquee:', error);
    }
  };

  // Delete marquee
  const handleDeleteMarquee = async (id) => {
    if (window.confirm('Are you sure you want to delete this marquee?')) {
      try {
        const response = await fetch(`http://localhost:9000/api/admin/deleteMarquee/${id}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          fetchMarquees();
        }
      } catch (error) {
        console.error('Error deleting marquee:', error);
      }
    }
  };

  // Update marquee
  const handleUpdateMarquee = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9000/api/admin/updateMarquee/${editingMarquee._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          marqueeText: editingMarquee.marqueeText,
          isActive: editingMarquee.isActive,
        }),
      });
      
      if (response.ok) {
        setEditingMarquee(null);
        setIsModalOpen(false);
        fetchMarquees();
      }
    } catch (error) {
      console.error('Error updating marquee:', error);
    }
  };

  // Toggle active status
  const handleToggleActive = async (marquee) => {
    try {
      // First, set all marquees to inactive
      await Promise.all(
        marquees.map((m) => {
          if (m.isActive) {
            return fetch(`http://localhost:9000/api/admin/updateMarquee/${m._id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ...m,
                isActive: false,
              }),
            });
          }
          return Promise.resolve();
        })
      );

      // Then set the selected marquee to active
      await fetch(`http://localhost:9000/api/admin/updateMarquee/${marquee._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...marquee,
          isActive: true,
        }),
      });

      fetchMarquees();
    } catch (error) {
      console.error('Error toggling active status:', error);
    }
  };

//   return (
//     <div className="container-fluid">
//       {/* Add New Marquee Section */}
//       <div className="card mb-4">
//         <div className="card-body">
//           <h5 className="card-title">Add New Marquee</h5>
//           <form onSubmit={handleAddMarquee} className="d-flex gap-2">
//             <input
//               type="text"
//               className="form-control"
//               value={newMarqueeText}
//               onChange={(e) => setNewMarqueeText(e.target.value)}
//               placeholder="Enter marquee text"
//               required
//             />
//             <button type="submit" className="btn btn-primary">
//               <Plus size={20} className="me-2" />
//               Add Marquee
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Marquee List */}
//       <div className="row">
//         {marquees.map((marquee) => (
//           <div key={marquee._id} className="col-md-6 col-lg-4 mb-3">
//             <div className={`card ${marquee.isActive ? 'border-primary' : ''}`}>
//               <div className="card-body">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     name="marqueeActive"
//                     checked={marquee.isActive}
//                     onChange={() => handleToggleActive(marquee)}
//                   />
//                   <label className="form-check-label">
//                     {marquee.marqueeText}
//                   </label>
//                 </div>
//                 <div className="mt-3 d-flex gap-2 justify-content-end">
//                   <button
//                     className="btn btn-sm btn-outline-primary"
//                     onClick={() => {
//                       setEditingMarquee(marquee);
//                       setIsModalOpen(true);
//                     }}
//                   >
//                     <Pencil size={16} />
//                   </button>
//                   <button
//                     className="btn btn-sm btn-outline-danger"
//                     onClick={() => handleDeleteMarquee(marquee._id)}
//                   >
//                     <Trash2 size={16} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Edit Modal */}
//       {isModalOpen && editingMarquee && (
//         <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Edit Marquee</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={() => {
//                     setIsModalOpen(false);
//                     setEditingMarquee(null);
//                   }}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={handleUpdateMarquee}>
//                   <div className="mb-3">
//                     <label className="form-label">Marquee Text</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={editingMarquee.marqueeText}
//                       onChange={(e) =>
//                         setEditingMarquee({
//                           ...editingMarquee,
//                           marqueeText: e.target.value,
//                         })
//                       }
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <div className="form-check">
//                       <input
//                         type="checkbox"
//                         className="form-check-input"
//                         checked={editingMarquee.isActive}
//                         onChange={(e) =>
//                           setEditingMarquee({
//                             ...editingMarquee,
//                             isActive: e.target.checked,
//                           })
//                         }
//                       />
//                       <label className="form-check-label">Active</label>
//                     </div>
//                   </div>
//                   <div className="modal-footer">
//                     <button
//                       type="button"
//                       className="btn btn-secondary"
//                       onClick={() => {
//                         setIsModalOpen(false);
//                         setEditingMarquee(null);
//                       }}
//                     >
//                       Cancel
//                     </button>
//                     <button type="submit" className="btn btn-primary">
//                       Save Changes
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
return (
    <div className="container-fluid p-4">
      {/* Add New Marquee Section */}
      <div className="card border-0 shadow-sm mb-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="card-body p-4">
          <h5 className="card-title fw-semibold mb-4" style={{ color: '#4a5568' }}>Add New Marquee</h5>
          <form onSubmit={handleAddMarquee} className="d-flex gap-3">
            <div className="flex-grow-1">
              <input
                type="text"
                className="form-control"
                value={newMarqueeText}
                onChange={(e) => setNewMarqueeText(e.target.value)}
                placeholder="Enter marquee text"
                required
                style={{
                  height: '48px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxShadow: 'none',
                  backgroundColor: 'white'
                }}
              />
            </div>
            <button 
              type="submit" 
              className="btn"
              style={{
                height: '48px',
                padding: '0 24px',
                background: '#7c3aed',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#6d28d9'}
              onMouseOut={(e) => e.currentTarget.style.background = '#7c3aed'}
            >
              <Plus size={20} className="me-2" />
              Add Marquee
            </button>
          </form>
        </div>
      </div>

      {/* Marquee List */}
      <div className="row g-4">
        {marquees.map((marquee) => (
          <div key={marquee._id} className="col-md-6 col-lg-4">
            <label 
              className="card h-100 border-0 mb-0"
              style={{
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: marquee.isActive ? '#f0f4ff' : 'white',
                boxShadow: marquee.isActive 
                  ? '0 4px 12px rgba(124, 58, 237, 0.08)' 
                  : '0 2px 8px rgba(0,0,0,0.04)',
                borderRadius: '12px',
              }}
            >
              <input
                type="radio"
                name="marqueeActive"
                className="d-none"
                checked={marquee.isActive}
                onChange={() => handleToggleActive(marquee)}
              />
              <div 
                className="card-body p-4"
                style={{
                  borderLeft: marquee.isActive ? '4px solid #7c3aed' : '4px solid transparent',
                }}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center" style={{ flex: 1 }}>
                    <span 
                      className="me-3" 
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        border: '2px solid #7c3aed',
                        display: 'inline-block',
                        position: 'relative',
                        backgroundColor: marquee.isActive ? '#7c3aed' : 'white',
                        transition: 'all 0.2s ease',
                        flexShrink: 0
                      }}
                    >
                      {marquee.isActive && (
                        <span 
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: 'white'
                          }}
                        />
                      )}
                    </span>
                    <span style={{ 
                      color: '#4a5568',
                      fontWeight: marquee.isActive ? '500' : '400',
                      fontSize: '16px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {marquee.marqueeText}
                    </span>
                  </div>
                  <div className="d-flex gap-2 ms-3" onClick={(e) => e.stopPropagation()}>
                    <button
                      className="btn"
                      onClick={() => {
                        setEditingMarquee(marquee);
                        setIsModalOpen(true);
                      }}
                      style={{ 
                        padding: '6px',
                        color: '#7c3aed',
                        backgroundColor: marquee.isActive ? 'white' : '#f8f9fa',
                        border: 'none',
                        borderRadius: '6px'
                      }}
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      className="btn"
                      onClick={() => handleDeleteMarquee(marquee._id)}
                      style={{ 
                        padding: '6px',
                        color: '#ef4444',
                        backgroundColor: marquee.isActive ? 'white' : '#f8f9fa',
                        border: 'none',
                        borderRadius: '6px'
                      }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isModalOpen && editingMarquee && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0" style={{ borderRadius: '12px' }}>
              <div className="modal-header border-bottom-0" style={{ backgroundColor: '#f8f9fa' }}>
                <h5 className="modal-title fw-semibold" style={{ color: '#4a5568' }}>Edit Marquee</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingMarquee(null);
                  }}
                ></button>
              </div>
              <div className="modal-body p-4">
                <form onSubmit={handleUpdateMarquee}>
                  <div className="mb-4">
                    <label className="form-label" style={{ color: '#718096', marginBottom: '8px' }}>Marquee Text</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editingMarquee.marqueeText}
                      onChange={(e) =>
                        setEditingMarquee({
                          ...editingMarquee,
                          marqueeText: e.target.value,
                        })
                      }
                      required
                      style={{
                        height: '48px',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '16px',
                        boxShadow: 'none'
                      }}
                    />
                  </div>
                  <div className="d-flex justify-content-end gap-3">
                    <button
                      type="button"
                      className="btn"
                      onClick={() => {
                        setIsModalOpen(false);
                        setEditingMarquee(null);
                      }}
                      style={{
                        height: '44px',
                        padding: '0 20px',
                        color: '#718096',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        backgroundColor: 'white'
                      }}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="btn"
                      style={{
                        height: '44px',
                        padding: '0 24px',
                        background: '#7c3aed',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: '500'
                      }}
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

}
;

export default MarqueeSection;