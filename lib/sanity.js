import sanityClient from "@sanity/client";

const options = {
  dataset: "production",
  projectId: "4vnmxzp1",
  useCdn: true,
};

export default sanityClient(options);
