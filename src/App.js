import { LoginComponent } from "./components/LoginComponent";
import "./assets/style/style.scss";
import { useState } from "react";
import { Profile } from "./pages/profile/Profile";

function App() {
  const [view, setView] = useState("LOGIN");
  const [person, setPerson] = useState("LOGIN");
  const [data, setData] = useState({
    document: "DNI",
    number: "",
    phone: "",
    license: "",
  });

  return (
    <>
      {view === "LOGIN" ? (
        <LoginComponent
          data={data}
          setData={setData}
          setView={setView}
          setPerson={setPerson}
        />
      ) : (
        <Profile person={person} data={data} />
      )}
    </>
  );
}

export default App;
