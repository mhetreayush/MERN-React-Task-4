import { useQuery } from "react-query";

const useFetchUserData = () => {
  const query = useQuery("userData", () =>
    fetch("https://dummyjson.com/users").then((res) => res.json())
  );
  return query;
};

export default useFetchUserData;
