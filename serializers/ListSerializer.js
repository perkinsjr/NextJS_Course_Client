import { Flex, List } from "@chakra-ui/core";

const ListSerializer = (props) => {
  const { type, children } = props;
  if (type === "bullet") {
    return (
      <Flex mb={8}>
        <List styleType="disc">{children}</List>
      </Flex>
    );
  } else {
    return (
      <Flex mb={8}>
        <List as="ol" styleType="decimal">
          {children}
        </List>
      </Flex>
    );
  }
};

export default ListSerializer;
