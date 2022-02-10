import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import React from 'react';

function TermsOfService() {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <h1 className='text-center'>Regras e Termos de Serviços</h1>
        <h2>Regras</h2>
        <ol>
          <li>Os jogadores não têm direito a uma conta de jogo.</li>
          <li>
            Os jogadores devem aceitar as instruções dadas pelo administrador do
            jogo ou moderadores do fórum.
          </li>
          <li>
            Todos os bugs (defeitos resultantes do cronograma do jogo) devem ser
            reportados à equipe imediatamente. O uso de um bug conhecido
            sujeitará o jogador envolvido ao banimento e todas as contas
            envolvidas no uso do bug.
          </li>
        </ol>
      </main>
      <Footer />
    </>
  );
}

export default TermsOfService;
