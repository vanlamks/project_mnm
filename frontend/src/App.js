import React from "react";
import { Routes, Route } from "react-router-dom";  // Chỉ dùng Routes, không dùng Router
import DangNhap from "./pages/Login";
import DangKy from "./pages/Register";
import QuenMatKhau from "./pages/ForgotPw";
import TrangChu from "./pages/Home";
import LocationDetail from "./pages/LocationDetail";
import ChaoGaNgon from "./pages/chaoga";  
import SuonBiCha from "./pages/suonbicha";
import SalmonSushi from "./pages/SalmonSushi";
import PhoVietDetail from "./pages/PhoViet";
import Review from "./pages/review";
import RestaurantDetail from "./pages/ChaobaHao";
import Profile from "./pages/profile";
import Chatbot from "./pages/Chatbot";
import EditProfile from './pages/editprofile';
import TimKiem from "./pages/timkiem";
import PhongViDetail from "./pages/phongvi";
import IkaiSushiDetail from "./pages/sushi";
import IzakayaUnatotoDetail from "./pages/Izakaya";
import MaisonDetail from "./pages/Maison";
import PhoHangPhoDetail from "./pages/Hangpho";
import NhaHangAnDo from "./pages/nhahangando";
import OcGio from "./pages/ocngon";
import PhoVietj from "./pages/Pho";
import Supluon from "./pages/Supluon";
import Oclen from "./pages/oclen";
import LauCuaDong from "./pages/laucuadong";
import Chaoluon from "./pages/chaoluon";
function App() {
  return (
    <Routes>
      <Route path="/dangnhap" element={<DangNhap />} />
      <Route path="/dangky" element={<DangKy />} />
      <Route path="/quenmatkhau" element={<QuenMatKhau />} />
      <Route path="/" element={<TrangChu />} />
      <Route path="/local" element={<LocationDetail />} />
      <Route path="/chaoga" element={<ChaoGaNgon />} />
      <Route path="/suonbicha" element={<SuonBiCha />} />
      <Route path="/sushi" element={<SalmonSushi />} />
      <Route path="/reviews" element={<Review />} />
      <Route path="/chao" element={<RestaurantDetail />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/suathongtin" element={<EditProfile />} />
      <Route path="/timkiem" element={<TimKiem />} />
      <Route path="/phongvi" element={<PhongViDetail />} />
      <Route path="/sushiikai" element={<IkaiSushiDetail />} />
      <Route path="/izakaya" element={<IzakayaUnatotoDetail/>} />
      <Route path="/maison" element={<MaisonDetail />} />
      <Route path="/phohangpho" element={<PhoHangPhoDetail />} />
      <Route path="/phoviet" element={<PhoVietDetail />} />
      <Route path="/nhahangando" element={<NhaHangAnDo />} />
      <Route path="/ocngon" element={<OcGio />} />
      <Route path="/ctpho" element={<PhoVietj />} />
      <Route path="/supluon" element={<Supluon />} />
      <Route path="/oclen" element={<Oclen />} />
      <Route path="/laucuadong" element={<LauCuaDong />} />
      <Route path="/chaoluon" element={<Chaoluon />} />
    </Routes>
  );
}

export default App;
