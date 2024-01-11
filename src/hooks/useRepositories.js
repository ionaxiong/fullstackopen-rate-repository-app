import { useState } from "react";
// import { useLazyQuery } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (orderBy, orderDirection, searchKeyword) => {
  // ------- Implement the useRepositories hook with Apollo Client -------
  const [repositories, setRepositories] = useState();

  const { error, loading } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection, searchKeyword },
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      setRepositories(data.repositories);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (error) {
    return `Error! ${error.message}`;
  }

  return { repositories, loading };

  // ------- Implement the useRepositories hook with API calls -------
  // const [repositories, setRepositories] = useState();
  // const [loading, setLoading] = useState(false);

  // const fetchRepositories = async () => {
  //   setLoading(true);

  //   const response = await fetch("http://192.168.50.188:5000/api/repositories");
  //   const json = await response.json();

  //   setLoading(false);
  //   setRepositories(json);
  // };

  // useEffect(() => {
  //   fetchRepositories();
  // }, []);
  // return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
