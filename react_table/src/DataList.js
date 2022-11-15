import React, {useState, useEffect} from "react";

function DataList (){
    const [userList, setUserList] = useState([]);

  useEffect (()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(result => setUserList(result))
    .catch(error => console.log(error))
  }, [])
  
    return (
        <div>DataList</div>
    )
}

export default DataList;