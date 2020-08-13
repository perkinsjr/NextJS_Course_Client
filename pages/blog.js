import Container from "../components/Container";
import { Heading, SimpleGrid, Box, Text } from "@chakra-ui/core";
import { getAllPostsFromHome } from "../lib/api";
import PostPreview from "../components/PostPreview";
import { NextSeo } from "next-seo";
export default function blog({ allPosts }) {
  const posts = allPosts;
  console.log(posts);
  return (
    <Container>
      <NextSeo
        title="Blog | James Perkins | Developer | Youtuber"
        description="Blog Page for James Perkins"
      />
      <Heading as="h3" mt={6} mb={6} size="xl" textAlign="center">
        Blog Posts.
      </Heading>
      <SimpleGrid
        width="100%"
        maxWidth="1200px"
        px={6}
        mt={[0, 8]}
        mx="auto"
        columns={{ sm: 1, md: 2, lg: 3 }}
        gap={6}
      >
        {posts &&
          posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
      </SimpleGrid>
    </Container>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPostsFromHome();
  return {
    props: { allPosts },
  };
}
