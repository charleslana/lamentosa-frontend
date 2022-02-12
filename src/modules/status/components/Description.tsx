import React, { useState } from 'react';

function Description() {
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(description.trim());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Descrição:</label>
        <div>
          <textarea
            cols={40}
            rows={10}
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type='submit' disabled={!description}>
          Atualizar
        </button>
      </form>
    </>
  );
}

export default Description;
