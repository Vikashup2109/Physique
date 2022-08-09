import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";


export const client = sanityClient({
    projectId: "go0mdkf4",
    dataset: "production",
    apiVersion: "2022-08-07",
    useCdn: true,
    token: "skypHZwP5Cbctm7rQVwQV6IkwkD1VzHK2mTwKSFVt0lHlMElcDpy0cFl5nNkVrTxKfdLMgNkeeIYPcUAJfhnBQWbt5sr8Pcnq0DjJB8iiKNUB1wm4cVUd1vQXRMl9Wdzfvsu0EUhHbf0iEPeEsbZvNxJmfEVzCARnhBkEpPkJsu1wKDb42hX"

})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);