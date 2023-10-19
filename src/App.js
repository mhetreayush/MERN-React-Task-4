import useFetchUserData from "./hooks/useFetchUserData";

const tableFields = [
  { name: "S. No", colSpan: 1 },
  { name: "Profile Pic", colSpan: 1 },
  { name: "Name", colSpan: 1 },
  { name: "Last Name", colSpan: 1 },
  { name: "Gender", colSpan: 1 },
  { name: "Email", colSpan: 2 },
  { name: "Username", colSpan: 1 },
  { name: "Domain", colSpan: 1 },
  { name: "IP", colSpan: 1 },
  { name: "University", colSpan: 2 },
];

const userFields = [
  "id",
  "image",
  "firstName",
  "lastName",
  "gender",
  "email",
  "username",
  "domain",
  "ip",
  "university",
];

const App = () => {
  const { isLoading, error, data } = useFetchUserData();

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div className="min-h-screen min-w-screen p-4 ">
      <h1 className="text-2xl font-semibold text-center my-4">Dummy Data</h1>
      <table className="p-2 rounded-md border-white border">
        <tr className="grid grid-cols-12">
          {tableFields.map((field, index) => {
            return (
              <th
                key={index}
                style={{
                  gridColumn: `span ${field.colSpan}`,
                }}
                className="border border-white p-1"
              >
                {field.name}
              </th>
            );
          })}
        </tr>
        {!isLoading ? (
          data?.users?.map((user, idx) => (
            <tr className="grid grid-cols-12 gap-y-4">
              {userFields.map((field, index) => {
                return (
                  <td
                    key={index}
                    style={{
                      gridColumn: `span ${tableFields[index].colSpan}`,
                    }}
                    className="border-r border-white p-1"
                  >
                    {index !== 1 ? (
                      <p>{user[field]}</p>
                    ) : (
                      <img
                        src={user[field]}
                        alt={user?.username}
                        className="w-5"
                      />
                    )}
                  </td>
                );
              })}
            </tr>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </table>
    </div>
  );
};

export default App;
