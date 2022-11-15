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
        <div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
                {
                    userList && userList.length > 0 ? 
                    userList.map(usr =>
                       <tr>
                        <td>{usr.id}</td>
                        <td>{usr.name}</td>
                        <td>{usr.username}</td>
                        <td>{usr.email}</td>
                        </tr>
                        )
                        : "Loading"
                }
            </table>

        </div>
    )
}

export default DataList;