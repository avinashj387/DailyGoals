
function Map() {
  const userData = [
    {
      id: 1,
      name: "aman",
      email: "aman@test.com",
      age: 21
    },
    {
      id: 2,
      name: "ajay",
      email: "ajay@test.com",
      age: 22
    },
    {
      id: 3,
      name: "vijay",
      email: "vijay@test.com",
      age: 23
    },
    {
      id: 4,
      name: "rahul",
      email: "rahul@test.com",
      age: 25
    },
    {
      id: 5,
      name: "sachin",
      email: "sachin@test.com",
      age: 26
    },
    {
      id: 6,
      name: "vishal",
      email: "vishal@test.com",
      age: 27
    }
  ]
  return (
    <div>
      <h1>loops of array object using map function</h1>;
      <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>{
            userData.map((user)=>(
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}
export default Map;