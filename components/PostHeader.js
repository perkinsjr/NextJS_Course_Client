import AuthorPicture from "../components/AuthorPicture";
import Date from "../components/Date";
import { Stack, Heading } from "@chakra-ui/core";

export default function PostHeader({ title, date, author }) {
  return (
    <>
      <Heading as="h1" mb={6} size="2xl" textAlign="center">
        {title}
      </Heading>
      <Stack isInline>
        <AuthorPicture name={author.name} picture={author.picture} />
        <Date dateString={date} />
      </Stack>
    </>
  );
}
