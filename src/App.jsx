import { ColorModeContext, useMode } from "./theme"
//CssBaseline reset css to default.
//ThemeProvider pass the theme to material UI.
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Sidebar from "./scenes/global/Sidebar"
import Dashboard from "./scenes/dashboard"

import Contacts from "./scenes/contacts"
import Invoices from "./scenes/invoices"
import Form from "./scenes/form"
import Calendar from "./scenes/calendar"
import FAQ from "./scenes/faq"
import Request from "./scenes/submitRequest"

import Pie from "./scenes/pie"
import Line from "./scenes/line"
import Chat from "./scenes/chat"
import Admin from "./scenes/admin"
import UserProfile from "./components/UserProfile"
import UserSign from "./scenes/SignIn&Up/UserSign"
import { useSelector } from "react-redux"
import PublicRoute from "./components/PublicRoute"
import PrivateRoute from "./components/PrivateRoute"
import PrivateRouteAdmin from "./components/PrivateRouteAdmin"
import AdminDashboard from "./scenes/adminDashboard"
import Team from "./scenes/team"
import AdminRequestList from "./scenes/adminRequestList"
import ProfileForm from "./scenes/profileForm"
import AdminInvoices from "./scenes/adminInvoices"
//import Spinner from "./components/Spinner"
function App() {
  const [theme, colorMode] = useMode()
  const { loading } = useSelector((state) => state.alert)
  const abc = localStorage.getItem("token")
  const { user } = useSelector((state) => state.user)

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            {window.location.pathname == "/login" ? <UserSign /> : <Sidebar />}
            <main className="content">
              <Routes>
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute>
                      <Contacts />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/invoices"
                  element={
                    <PrivateRoute>
                      <Invoices />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/form"
                  element={
                    <PrivateRoute>
                      <Form />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/calendar"
                  element={
                    <PrivateRoute>
                      <Calendar />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/faq"
                  element={
                    <PrivateRoute>
                      <FAQ />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/request"
                  element={
                    <PrivateRoute>
                      <Request />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/chat"
                  element={
                    <PrivateRoute>
                      <Chat />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/pie"
                  element={
                    <PrivateRoute>
                      <Pie />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/line"
                  element={
                    <PrivateRoute>
                      <Line />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PublicRoute>
                      <UserSign />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/admin-dashboard"
                  element={
                    <PrivateRouteAdmin>
                      <AdminDashboard />
                    </PrivateRouteAdmin>
                  }
                />
                <Route
                  path="/team"
                  element={
                    <PrivateRouteAdmin>
                      <Team />
                    </PrivateRouteAdmin>
                  }
                />{" "}
                <Route
                  path="/request-list"
                  element={
                    <PrivateRouteAdmin>
                      <AdminRequestList />
                    </PrivateRouteAdmin>
                  }
                />{" "}
                <Route
                  path="/profile-form"
                  element={
                    <PrivateRouteAdmin>
                      <ProfileForm />
                    </PrivateRouteAdmin>
                  }
                />
                <Route
                  path="/admin-invoice"
                  element={
                    <PrivateRouteAdmin>
                      <AdminInvoices />
                    </PrivateRouteAdmin>
                  }
                />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  )
}

export default App
