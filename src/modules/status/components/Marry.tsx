import React, { useState } from 'react';

function Marry() {
  const [name, setName] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(name);
  };

  return (
    <>
      <h3>Procure alguém para casar-se</h3>
      <p>
        Aqui você pode encontrar alguém para se casar. Para fazer uma proposta
        você precisa gastar 1000 vitórias de grimório.
      </p>
      <p>
        Você não pode enviar mais de 1 proposta para a mesma pessoa, se ela o
        rejeitar apenas siga com sua vida, não insista.
      </p>
      <p>
        O casamento é para sempre, depois de feito não será possível se separar
        ou encontrar outro cônjuge! Ao se casar com alguém, você e seu cônjuge
        vão receber a conquista "Soulmate" e também +100 pontos de vida total!
      </p>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <div>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value.trim())}
          ></input>
        </div>
        <button type='submit' disabled={!name}>
          Procurar
        </button>
      </form>
    </>
  );
}

export default Marry;
