import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import React from 'react';
import TabBarDailyTasks from '../components/TabBarDailyTasks';
import { formatDate } from '../../../shared/utils/Utils';

function DailyTasksHistoricPage() {
  const hasTaskFinish = true;

  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <h2 className='title text-center text-bold'>Tarefas Diárias</h2>
        <TabBarDailyTasks />
        {!hasTaskFinish ? (
          <div className='alert'>
            <p>Ainda não existe histórico.</p>
          </div>
        ) : (
          <div className='table-responsive'>
            <table>
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Reivindicado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-bold'>1</td>
                  <td>{formatDate(new Date('2022-02-16 09:48'))}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default DailyTasksHistoricPage;
