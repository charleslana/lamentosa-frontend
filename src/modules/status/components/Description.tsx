import React, { useState } from 'react';

interface IProps {
  description: string;
}

function Description(props: IProps) {
  const [description, setDescription] = useState(props.description);

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
