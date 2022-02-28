import AchievementsPage from '../modules/achievements/pages/AchievementsPage';
import BattlefieldEnemiesPage from '../modules/battlefield/pages/BattlefieldEnemiesPage';
import BattlefieldPage from '../modules/battlefield/pages/BattlefieldPage';
import BattlefieldRenegadesPage from '../modules/battlefield/pages/BattlefieldRenegadesPage';
import BlacksmithCombinePage from '../modules/blacksmith/pages/BlacksmithCombinePage';
import BlacksmithPage from '../modules/blacksmith/pages/BlacksmithPage';
import BloodCrystalsPage from '../modules/blood-crystals/pages/BloodCrystalsPage';
import BossPage from '../modules/boss/pages/BossPage';
import CemeteryPage from '../modules/cemetery/pages/CemeteryPage';
import ChangeBreedPage from '../modules/change-breed/pages/ChangeBreedPage';
import ChangeCharacterNamePage from '../modules/change-character-name/pages/ChangeCharacterNamePage';
import ChangeGenderPage from '../modules/change-gender/pages/ChangeGenderPage';
import ClanListPage from '../modules/clan/pages/ClanListPage';
import ClanPage from '../modules/clan/pages/ClanPage';
import ContactPage from '../modules/contact/pages/ContactPage';
import CreateClanPage from '../modules/clan/pages/CreateClanPage';
import DailyTasksHistoricPage from '../modules/daily-tasks/pages/DailyTasksHistoricPage';
import DailyTasksPage from '../modules/daily-tasks/pages/DailyTasksPage';
import EditProfilePage from '../modules/edit-profile/pages/EditProfilePage';
import EnchantmentPage from '../modules/enchantment/pages/EnchantmentPage';
import ExchangeStonesPage from '../modules/exchange-stones/pages/ExchangeStonesPage';
import GrimoirePage from '../modules/grimoire/pages/GrimoirePage';
import HeroesPage from '../modules/heroes/pages/HeroesPage';
import HomePage from '../modules/home/pages/HomePage';
import HonorPointsPage from '../modules/honor-points/pages/HonorPointsPage';
import ItemsUniquePage from '../modules/items-unique/pages/ItemsUniquePage';
import KhepriArenaPage from '../modules/khepri-arena/pages/KhepriArenaPage';
import LeadershipPage from '../modules/leadership/pages/LeadershipPage';
import Loading from '../shared/components/Loading';
import LoginPage from '../modules/login/pages/LoginPage';
import ManualPage from '../modules/manual/pages/ManualPage';
import MarketPage from '../modules/market/pages/MarketPage';
import MasterPage from '../modules/master/pages/MasterPage';
import MessagesPage from '../modules/messages/pages/MessagesPage';
import Modal from '../shared/components/Modal';
import NotFoundPage from '../shared/pages/NotFoundPage';
import PremiumMarketPage from '../modules/market/pages/PremiumMarketPage';
import RankingPage from '../modules/ranking/pages/RankingPage';
import React from 'react';
import RegionsPage from '../modules/regions/pages/RegionsPage';
import RegisterPage from '../modules/register/pages/RegisterPage';
import RenegadesPage from '../modules/renegades/pages/RenegadesPage';
import ReportsPage from '../modules/reports/pages/ReportsPage';
import routes from './routes';
import ScrollToTop from '../shared/components/ScrollToTop';
import SearchPlayerPage from '../modules/search-player/pages/SearchPlayerPage';
import SentinelsPage from '../modules/sentinels/pages/SentinelsPage';
import StatusPage from '../modules/status/pages/StatusPage';
import TemplePage from '../modules/temple/pages/TemplePage';
import TermsOfServicePage from '../shared/pages/TermsOfServicePage';
import TormentusPage from '../modules/tormentus/pages/TormentusPage';
import TormentusScorePage from '../modules/tormentus/pages/TormentusScorePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function index() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.register} element={<RegisterPage />} />
        <Route path={routes.termsOfService} element={<TermsOfServicePage />} />
        <Route path={routes.status} element={<StatusPage />} />
        <Route path={routes.grimoire} element={<GrimoirePage />} />
        <Route path={routes.sentinels} element={<SentinelsPage />} />
        <Route path={routes.dailyTasks} element={<DailyTasksPage />} />
        <Route
          path={routes.dailyTasksHistoric}
          element={<DailyTasksHistoricPage />}
        />
        <Route path={routes.achievements} element={<AchievementsPage />} />
        <Route path={routes.exchangeStones} element={<ExchangeStonesPage />} />
        <Route path={routes.honorPoints} element={<HonorPointsPage />} />
        <Route path={routes.market} element={<MarketPage />} />
        <Route path={routes.premiumMarket} element={<PremiumMarketPage />} />
        <Route path={routes.blacksmith} element={<BlacksmithPage />} />
        <Route
          path={routes.blacksmithCombine}
          element={<BlacksmithCombinePage />}
        />
        <Route path={routes.enchantment} element={<EnchantmentPage />} />
        <Route path={routes.cemetery} element={<CemeteryPage />} />
        <Route path={routes.temple} element={<TemplePage />} />
        <Route path={routes.master} element={<MasterPage />} />
        <Route path={routes.regions} element={<RegionsPage />} />
        <Route path={routes.battlefield} element={<BattlefieldPage />} />
        <Route path={`${routes.reports}/:id`} element={<ReportsPage />} />
        <Route
          path={routes.battlefieldEnemies}
          element={<BattlefieldEnemiesPage />}
        />
        <Route
          path={routes.battlefieldRenegades}
          element={<BattlefieldRenegadesPage />}
        />
        <Route path={routes.tormentus} element={<TormentusPage />} />
        <Route path={routes.khepriArena} element={<KhepriArenaPage />} />
        <Route path={routes.clan} element={<ClanPage />} />
        <Route path={routes.clanList} element={<ClanListPage />} />
        <Route path={routes.createClan} element={<CreateClanPage />} />
        <Route path={routes.ranking} element={<RankingPage />} />
        <Route path={routes.tormentusScore} element={<TormentusScorePage />} />
        <Route path={routes.leadership} element={<LeadershipPage />} />
        <Route path={routes.itemsUnique} element={<ItemsUniquePage />} />
        <Route path={routes.boss} element={<BossPage />} />
        <Route path={routes.heroes} element={<HeroesPage />} />
        <Route path={routes.renegades} element={<RenegadesPage />} />
        <Route path={routes.searchPlayer} element={<SearchPlayerPage />} />
        <Route path={routes.messages} element={<MessagesPage />} />
        <Route path={routes.manual} element={<ManualPage />} />
        <Route path={routes.contact} element={<ContactPage />} />
        <Route path={routes.bloodCrystals} element={<BloodCrystalsPage />} />
        <Route
          path={routes.changeCharacterName}
          element={<ChangeCharacterNamePage />}
        />
        <Route path={routes.editProfile} element={<EditProfilePage />} />
        <Route path={routes.changeGender} element={<ChangeGenderPage />} />
        <Route path={routes.changeBreed} element={<ChangeBreedPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Modal />
      <ScrollToTop />
      <Loading />
    </Router>
  );
}

export default index;
