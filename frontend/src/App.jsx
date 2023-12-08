import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import Contact from "./pages/Contact";
import CreateProject from "./pages/CreateProject";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin/project/new" element={<CreateProject />} />
      </Route>
    )
  );

  return (
    <main className="dark:bg-dark">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
