import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React from 'react';
import TabBarDailyTasks from '../components/TabBarDailyTasks';

function DailyTasksHistoric() {
  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h2 className='title text-center text-bold'>Tarefas Diárias</h2>
        <TabBarDailyTasks />
        <div className='alert'>
          <p>Ainda não existe histórico.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DailyTasksHistoric;
