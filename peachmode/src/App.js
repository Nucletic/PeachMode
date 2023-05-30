import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NewArrivals } from './components/NewArrivals';
import { LatestCollection } from './components/LatestCollection';
import { OnlineDesigner } from './components/OnlineDesigner';
import { SaleHome } from './components/SaleHome';
import { JaipuriKurti } from './components/JaipuriKurti';
import { SummerArrivals } from './components/SummerArrivals';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { ProductPage } from './components/ProductPage';
import { LandingSlider } from './components/LandingSlider';
import { Cart } from './components/Header';
import { Collection } from './components/Collection';
import { Account } from './components/Account';
import { AddressForm } from './components/AddressForm';
import { UpdateAddressForm } from './components/UpdateAddressForm';
import { ContactInformation } from './components/ContactInformation';
import { Admin } from './components/Admin';
import { AdminLogin } from './components/adminLogin';
import { ChangePassword } from './components/changePassword';
import { VerifyOTP } from './components/VerifyOTP';
import { TAndC } from './components/TAndC';
import { ShippingPolicy } from './components/ShippingPolicy';
import { GoodsAndServices } from './components/GoodsAndServices';
import { RefundPolicy } from './components/RefundPolicy';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { PaymentSuccess } from './components/PaymentSuccess';

function App() {
  return (
    <React.Fragment>
      <Router>
        <ScrollToTop />
        <CartWrapper />
      </Router>
    </React.Fragment>
  );
}

const CartWrapper = () => {
  const location = useLocation();
  const hideHeaderUrls = ['/PlaceOrder/ContactInformation', '/PlaceOrder/Shipping', '/admin', '/PaymentSuccess'];
  const shouldHideHeader = hideHeaderUrls.includes(location.pathname);


  React.useEffect(() => {
    if (!shouldHideHeader) {
      window.addEventListener('scroll', () => {
        const header = document.querySelector('.Header');
        if (header) {
          header.classList.toggle('StickyHeader', window.scrollY > 0);
        }
      });
    }
  }, [location.pathname]);

  return (
    <React.Fragment>
      <Cart />
      {!shouldHideHeader && <AnnouncementBar />}
      {!shouldHideHeader && <Header />}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <LandingSlider />
              <NewArrivals />
              <LatestCollection />
              <OnlineDesigner title="Online Designer Boutique" desc="At Peachmode, our motto is to provide modern ethnic designer fashion at the right price. Every design is selected keeping our customers in focus and their needs. New designs are added daily." />
              <SaleHome />
              <SummerArrivals />
              <JaipuriKurti />
            </>
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/products/*" element={<ProductPage />} />
        <Route exact path="/collection/*" element={<Collection />} />
        <Route exact path="/account/*" element={<Account />} />
        <Route exact path="/addNewAddress/*" element={<AddressForm />} />
        <Route exact path="/EditAddress/*" element={<UpdateAddressForm />} />
        <Route exact path="/addAddress/*" element={<AddressForm />} />
        <Route exact path="/PlaceOrder/*" element={<ContactInformation />} />
        <Route exact path="/Admin/*" element={<Admin />} />
        <Route exact path="/Admin/Login" element={<AdminLogin />} />
        <Route exact path="/forgotPassword" element={<ChangePassword />} />
        <Route exact path="/verifyOTP" element={<VerifyOTP />} />
        <Route exact path="/terms-and-conditions" element={<TAndC />} />
        <Route exact path="/shipping-policy" element={<ShippingPolicy />} />
        <Route exact path="/goods-services-tax" element={<GoodsAndServices />} />
        <Route exact path="/refund-policy" element={<RefundPolicy />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/faqs" element={<Faq />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/PaymentSuccess/*" element={<PaymentSuccess />} />
      </Routes>
      {!shouldHideHeader && <Footer />}
    </React.Fragment>
  );
};



const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App;