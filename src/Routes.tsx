import { Route, Routes } from "react-router-dom";
import { Tariff } from "./components/Tariff/Tariff";
import { NegotiatedRates } from "./components/Tariff/NegotiatedRates";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { NoPermission } from "./components/Common/NoPermission";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tariff" element={<Tariff />} />
      <Route path="/negotiatedRates" element={<NegotiatedRates />} />
      <Route path="*" element={<NoPermission />} />
    </Routes>
  );
};

export default AppRoutes;
