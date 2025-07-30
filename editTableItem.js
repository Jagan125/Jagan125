import React, { useState } from 'react';

function EditableItem({ item, updateItem }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(item.name);

    const handleUpdate = () => {
        updateItem(item.id, newName);
        setIsEditing(false);
    };

    return isEditing ? (
        <>
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
            />
            <button onClick={handleUpdate}>Save</button>
        </>
    ) : (
        <>
            {item.name}
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
    );
}

export default EditableItem;