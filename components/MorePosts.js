import PostPreview from "../components/PostPreview";
import { Box, Heading, SimpleGrid } from "@chakra-ui/core";

export default function MorePosts({ posts }) {
  return (
    <Box>
      <Heading as="h3" mt={6} mb={6} size="xl" textAlign="left">
        More Posts
      </Heading>
      <SimpleGrid justifyContent="center" columns={{ sm: 1, md: 2 }} gap={6}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
