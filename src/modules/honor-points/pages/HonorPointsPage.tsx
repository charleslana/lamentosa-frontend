import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React, { useEffect, useState } from 'react';
import { formatNumber } from '../../../shared/utils/Utils';

function HonorPointsPage() {
  const [honorPoints, setHonorPoints] = useState(0);

  useEffect(() => {
    requestHonorPoints();
  }, []);

  const requestHonorPoints = () => {
    setHonorPoints(0);
  };

  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h1 className='title text-center text-bold'>Pontos de Honra</h1>
        <div className='alert'>
          <h3>Você possui {formatNumber(honorPoints)} ponto(s) de Honra</h3>
        </div>
        <h4>Sobre</h4>
        <div className='alert text-start'>
          <p>
            Pontos de honra são usados para ganhar prestígio na raça ou para se
            tornar um renegado.
          </p>
          <br />
          <p className='text-bold'>
            <strong className='green'>+100</strong> (ou mais) pontos de honra:
          </p>
          <p>
            - Você recebe 20 por cento a mais no desconto do clã para o treino
            de atributos.
          </p>
          <p>
            - Você se torna um Herói e seu nome é listado na página dos Heróis
            em "Jornal".
          </p>
          <br />
          <p className='text-bold'>
            <strong className='red'>-100</strong> (ou menos) pontos de honra:
          </p>
          <p>
            - Você pode usar apenas 80 por cento do desconto do clã para o
            treino de atributos.
          </p>
          <p>- Você não pode usar nenhum bônus da Tormentus War.</p>
          <p>
            - Você se torna um Renegado e seu nome é listado na página de
            Renegados em "Jornal".
          </p>
          <p>
            - Você pode atacar sua própria raça, se tiver nível 50+ pode
            envenenar e sabotar também. - Sua raça também pode te atacar,
            envenenar e sabotar.
          </p>
        </div>
        <h4>Como ganhar ou perder pontos</h4>
        <div className='alert text-start'>
          <p>
            <strong className='red'>-5 pontos</strong> se você não atacar na
            Tormentus War.
          </p>
          <p>
            <strong className='red'>-3 pontos</strong> se você não atacar em uma
            batalha de clãs.
          </p>
          <p>
            <strong className='green'>+2 pontos</strong> em uma vitória coletiva
            na Tormentus War (somente se você estiver no campo).
          </p>
          <p>
            <strong className='green'>+1 pontos</strong> em uma vitória coletiva
            na batalha dos clãs (somente se você estiver no campo).
          </p>
          <p>
            <strong className='green'>+6 pontos</strong> quando o seu clã ganhar
            uma guerra (todos os membros).
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HonorPointsPage;
