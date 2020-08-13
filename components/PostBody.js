import BlockContent from "@sanity/block-content-to-react";
import YouTubeSerializer from "../serializers/YoutubeSerializer";
import BlockSerializer from "../serializers/BlockSerializer";
import CodeSerializer from "../serializers/CodeSerializer";
import ImageSerializer from "../serializers/ImageSerializer";
import ListSerializer from "../serializers/ListSerializer";
import ListItemSerializer from "../serializers/ListItemSerializer";

export default function PostBody({ content }) {
  return (
    <BlockContent
      blocks={content}
      serializers={{
        types: {
          block: BlockSerializer,
          code: CodeSerializer,
          image: ImageSerializer,
          youtube: YouTubeSerializer,
        },
        list: ListSerializer,
        listItem: ListItemSerializer,
      }}
    />
  );
}
