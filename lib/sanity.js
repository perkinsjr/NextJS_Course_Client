import sanityClient from "@sanity/client";

const options = {
  dataset: "production",
  projectId: "YOUR_KEY",
  useCdn: true,
};

export default sanityClient(options);
