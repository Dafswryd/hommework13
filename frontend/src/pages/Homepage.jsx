import { Grid, GridItem, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";

export default function Homepage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedBooks = await getAllBooks();
      setBooks(fetchedBooks);
    };
    fetchBooks();
  }, []);

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={6}
      p={6}
      w="100%"
      maxW="1200px"
      mx="auto"
    >
      {books?.books?.map((book) => (
        <GridItem key={`${book.id} ${book.title}`}>
          <Books {...book} />
        </GridItem>
      ))}
    </Grid>
  );
}
