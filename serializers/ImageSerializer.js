import { Image } from "@chakra-ui/core";
import { imageBuilder } from "../lib/api";

const ImageSerializer = (props) => {
  const { node } = props;
  return <Image src={imageBuilder.image(node.asset)} loading="eager" />;
};

export default ImageSerializer;
