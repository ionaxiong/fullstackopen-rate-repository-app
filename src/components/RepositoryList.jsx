import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import theme from "../theme";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import SortPrinciplePicker from "./SortPrinciplePicker";
import { useState } from "react";
import TextInput from "./TextInput";

// import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.mainBackground,
  },
  listHeaderComponent: {
    backgroundColor: theme.colors.mainBackground,
  },
  textInput: {
    borderColor: theme.colors.transparent,
    backgroundColor: theme.colors.itemBackground,
    borderRadius: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  orderBy,
  setOrderBy,
  orderDirection,
  setOrderDirection,
  searchKeyword,
  setSearchKeyword,
}) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories ? repositories.edges.map((edge) => edge.node) : [];

  const handleNavigateToRepository = (item) => {
    navigate(`/repositories/${item.id}`);
  };

  return (
    <>
      <View style={styles.listHeaderComponent}>
        <TextInput
          style={styles.textInput}
          inlineImageLeft="search_icon"
          placeholder="Search"
          value={searchKeyword}
          onChangeText={(text) => setSearchKeyword(text)}
        />
        <SortPrinciplePicker
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          orderDirection={orderDirection}
          setOrderDirection={setOrderDirection}
        />
      </View>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleNavigateToRepository(item)}>
            <RepositoryItem item={item} />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED_AT" || "RATING_AVERAGE");
  const [orderDirection, setOrderDirection] = useState("DESC" || "ASC");
  const [searchKeyword, setSearchKeyword] = useState("");
  // const [debouncedSearchKeyword] = useDebounce(searchKeyword, 1000);
  // const submitSearchKeyword = Platform.OS === "web" ? debouncedSearchKeyword : searchKeyword;
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
