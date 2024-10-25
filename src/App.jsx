import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/pengunjung/Home';
import GuestLayout from './layouts/GuestLayout';
import TrainingList from './pages/public/training/TrainingList';
import TrainingDetail from './pages/public/training/TrainingDetail';
import ManageTraining from './pages/admin/training/ManageTraining';
import AddTraining from './pages/admin/training/AddTraining';
import PostList from './pages/admin/post/PostList';
import PostDetail from './pages/public/post/PostDetail';
import TrainingSubList from './pages/public/training/TrainingSubList';
import AddTrainingVideo from './pages/admin/training/AddTrainingVideo';
import ProductList from './pages/public/product/ProductList';
import LodgingList from './pages/public/lodging/LodgingList';
import CitizenReport from './pages/admin/report/CitizenReport';
import VisitorsReport from './pages/admin/report/VisitorsReport';
import CitizenReportDetail from './pages/admin/report/CitizenReportDetail';
import FinancialReport from './pages/admin/report/FinancialReport';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GuestLayout><Home /></GuestLayout>} />
        <Route path="/training" element={<GuestLayout><TrainingList /></GuestLayout>} />
        <Route path="/training/:id" element={<GuestLayout><TrainingSubList /></GuestLayout>} />
        <Route path="/training/:id/:videoId" element={<GuestLayout><TrainingDetail /></GuestLayout>} />
        <Route path="/training/:id/new" element={<GuestLayout><AddTrainingVideo /></GuestLayout>} />
        <Route path="/training/manage" element={<GuestLayout><ManageTraining /></GuestLayout>} />
        <Route path="/training/new" element={<GuestLayout><AddTraining /></GuestLayout>} />

        <Route path="/posts" element={<GuestLayout><PostList /></GuestLayout>} />
        <Route path="/post/:id" element={<GuestLayout><PostDetail /></GuestLayout>} />

        <Route path="/product/" element={<GuestLayout><ProductList /></GuestLayout>} />

        <Route path="/penginapan/" element={<GuestLayout><LodgingList /></GuestLayout>} />

        <Route path="/report/citizen" element={<GuestLayout><CitizenReport /></GuestLayout>} />
        <Route path="/report/citizen/:id" element={<GuestLayout><CitizenReportDetail /></GuestLayout>} />
        <Route path="/report/visitors" element={<GuestLayout><VisitorsReport /></GuestLayout>} />
        <Route path="/report/financial" element={<GuestLayout><FinancialReport /></GuestLayout>} />
      </Routes>
    </Router>
  )
}

export default App
