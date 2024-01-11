import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import theme from "../theme";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import SortPrinciplePicker from "./SortPrinciplePicker";
import { useState } from "react";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.mainBackground,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  orderBy,
  setOrderBy,
  orderDirection,
  setOrderDirection,
}) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories ? repositories.edges.map((edge) => edge.node) : [];

  const handleNavigateToRepository = (item) => {
    navigate(`/repositories/${item.id}`);
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => handleNavigateToRepository(item)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <SortPrinciplePicker
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          orderDirection={orderDirection}
          setOrderDirection={setOrderDirection}
        />
      )}
    />
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED_AT" || "RATING_AVERAGE");
  const [orderDirection, setOrderDirection] = useState("DESC" || "ASC");
  const [searchKeyword, setSearchKeyword] = useState("");
  const { repositories } = useRepositories(orderBy, orderDirection, searchKeyword);

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      orderDirection={orderDirection}
      setOrderDirection={setOrderDirection}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
    />
  );
};

export default RepositoryList;
