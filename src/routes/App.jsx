import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function App() {
  //const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
