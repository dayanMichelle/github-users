import { useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import styles from './styles/App.module.css'
import {Octokit} from 'octokit'
function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handleGetData = async (search) => {
    const octokit = new Octokit({
      auth: process.env.TOKEN,
    });

    const { data } = await octokit.request(`GET /users/${search}`, {
      username: "USERNAME",
    });

    setData(data);
  };
  // const handleGetData = async (search) => {
  //   const response = await fetch('./data.json')
  //   const data = await response.json()
  //   console.log(data)
  //   setData(data);
  // }
  

  return (
    <div className={styles.search}>
      <Search
        setSearch={setSearch}
        handleGetData={handleGetData}
        search={search}
        setData={setData}
      />
      {data.id && <Card data={data} search={search} />}
    </div>
  );
}

export default App;
