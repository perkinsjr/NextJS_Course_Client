import ReactPlayer from "react-player";
import { PseudoBox } from "@chakra-ui/core";

const YouTubeSerializer = (props) => {
  const { url } = props.node;
  return (
    <PseudoBox className="player-wrapper">
      <ReactPlayer class="react-player" url={url} width="100%" height="100%" />
    </PseudoBox>
  );
};
export default YouTubeSerializer;
