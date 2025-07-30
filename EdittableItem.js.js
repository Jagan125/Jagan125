import React, { useState } from 'react';
function AddItemForm({ addItem }){
    const [itemName, setItemName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (itemName.trim()) {
        addItem(itemName);
        setItemName('');
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Add new item"
        />
        <button type="submit">Add Item</button>
        </form>
    );
}
export default AddItemForm;
