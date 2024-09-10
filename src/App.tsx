import {
  Link,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SystemAccess from "./components/SystemAccess";
import CardContainer from "./pages/Settins/CardComponent/CardContainer";
import SettingsMain from "./pages/Settins/SettingsMain";

const Navigation = () => {
  return (
    <div>
      <ul className="flex gap-2">
        <li>
          <Link to={"settings"}>settings</Link>
        </li>
        <li>
          <Link to={"/"}>home</Link>
        </li>
      </ul>
    </div>
  );
};

function App() {
  const AppLayout = () => {
    return (
      <>
        <Navigation />
        <Outlet />
      </>
    );
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path="/" element={<h1>HOME</h1>}></Route>
        <Route path="settings" element={<SettingsMain />}>
          <Route index element={<CardContainer />} />
          <Route path="administrator" element={<SystemAccess />} />
        </Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
