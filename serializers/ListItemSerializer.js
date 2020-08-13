import { ListItem } from "@chakra-ui/core";

const ListItemSerializer = (props) => {
  const { node, children } = props;

  return <ListItem>{children}</ListItem>;
};

export default ListItemSerializer;
