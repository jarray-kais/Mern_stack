
import "./App.css";
import { Route,Routes } from 'react-router-dom';
import ListPlayers from "./components/ListPlayers";
import AddPlayer from "./components/AddPlayer";
// import { useState } from "react";
import PlayerStatus from "./components/PlayerStatus";
import Nav from "./components/nav";

function App() {
  //const [listPageIsActive, setListPageIsActive] = useState(true);
  //const [managePlayerStatusTabIsActive, setManagePlayerStatusTabIsActive] = useState(false);
  return (
    <div>
      <Nav
        //managePlayerStatusTabIsActive={managePlayerStatusTabIsActive}
        // setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
      />
      <Routes>
      <Route path="/players/list" elemment={<ListPlayers 
          //listPageIsActive={listPageIsActive}
          // setListPageIsActive={setListPageIsActive}
          // setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
        />}
        />
        <Route path="/players/addplayer" elemment={<AddPlayer
          //listPageIsActive={listPageIsActive}
          // setListPageIsActive={setListPageIsActive}
          // setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
          />}
        />
           <Route path="/status/game/:gameId" elemment={<PlayerStatus
          // setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
          />}
            />
      </Routes>
    </div>
  );
}

export default App;
