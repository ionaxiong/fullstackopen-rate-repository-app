import { RepositoryListContainer } from "../../components/RepositoryList";
import { render } from "@testing-library/react-native";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      // Add your test code here
      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      const fullName = getAllByTestId("fullName");
      const description = getAllByTestId("description");
      const language = getAllByTestId("language");
      const forksCount = getAllByTestId("forksCount");
      const stargazersCount = getAllByTestId("stargazersCount");
      const ratingAverage = getAllByTestId("ratingAverage");
      const reviewCount = getAllByTestId("reviewCount");

      expect(fullName[0]).toHaveTextContent("jaredpalmer/formik");
      expect(description[0]).toHaveTextContent("Build forms in React, without the tears");
      expect(language[0]).toHaveTextContent("TypeScript");
      expect(forksCount[0]).toHaveTextContent("1.6k");
      expect(stargazersCount[0]).toHaveTextContent("21.9k");
      expect(ratingAverage[0]).toHaveTextContent("88");
      expect(reviewCount[0]).toHaveTextContent("3");

      expect(fullName[1]).toHaveTextContent("async-library/react-async");
      expect(description[1]).toHaveTextContent("Flexible promise-based React data loader");
      expect(language[1]).toHaveTextContent("JavaScript");
      expect(forksCount[1]).toHaveTextContent("69");
      expect(stargazersCount[1]).toHaveTextContent("1.8k");
      expect(ratingAverage[1]).toHaveTextContent("72");
      expect(reviewCount[1]).toHaveTextContent("3");
    });
  });
});
