import { useEffect, useState } from "react";
//import SubNav1 from "./SubNav1";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Nav from "./nav";
const AddPlayer = (props) => {
  const [name, setName] = useState("");
  const [preferredPosition, setPreferredPosition] = useState("");
  // const {
  //   //listPageIsActive,
  //   //setListPageIsActive,
  //   //setManagePlayerStatusTabIsActive,
  // } = props;
  const navigate=useNavigate()
  useEffect(() => {
    //setListPageIsActive(false);
    //setManagePlayerStatusTabIsActive(false);
  });
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/player", { name, preferredPosition })
      .then((response) => {
        console.log(response.data);
        navigate("/players/list");
      })
      .catch((err) => console.log(err.response));
  };
  return (
    <div>
      <Nav
        //listPageIsActive={listPageIsActive}
        //setListPageIsActive={setListPageIsActive}
      />
      <form onSubmit={(e) => submitHandler(e)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="preferredPosition">Preferred Position</label>
          <input
            type="text"
            id="preferredPosition"
            value={preferredPosition}
            onChange={(e) => setPreferredPosition(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPlayer;