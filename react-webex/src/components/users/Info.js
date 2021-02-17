import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const UserInfo = (props) => {
  const [info, setInfo] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const changeHandler = (e) => {
    e.persist();
    setSearchTitle(e.target.value);
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/info/`)
      .then((res) => {
        setInfo(
          res.data.filter((info) => {
            if (searchTitle === "") {
              return info;
            } else if (
              info.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return info;
            } else {
              return null;
            }
          })
        );
      })
      .catch((err) => console.log("search not working", err));
  }, [searchTitle]);

  return (
    <>
      <div>
        <div>
          <form>
            <input
              onChange={changeHandler}
              type="text"
              placeholder="Search Titles"
              value={searchTitle}
            />
          </form>
        </div>

        <div>
          {info.map((info) => (
            <div key={info.id}>
              <div key={info.id}>
                <p>Title: {info.title}</p>
                <p>Description: {info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserInfo;
