import React from 'react';

function Button() {
  return (
    <div>
      <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', margin: '5px', border: 'none', borderRadius: '5px' }}>
        Create
      </button>
      <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', margin: '5px', border: 'none', borderRadius: '5px' }}>
        Read
      </button>
      <button style={{ backgroundColor: 'orange', color: 'white', padding: '10px 20px', margin: '5px', border: 'none', borderRadius: '5px' }}>
        Update
      </button>
      <button style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', margin: '5px', border: 'none', borderRadius: '5px' }}>
        Delete
      </button>
    </div>
  );
}

export default Button;

