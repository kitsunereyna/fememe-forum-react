import React from "react";
import { getAuthFromLocalStorage } from "./api/user";
import { AuthResponse } from "./dto/user";
import Routing from "./route/Routing";
import { useUserStore } from "./store/userStore";

function App() {
  const fillUserState = useUserStore(state => state.fillUserState);

  React.useEffect(() => {
    const authRes = (getAuthFromLocalStorage() as AuthResponse) || null;

    if (authRes !== null) {
      fillUserState(authRes.token, authRes.user);
    }
  }, [fillUserState]);
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
