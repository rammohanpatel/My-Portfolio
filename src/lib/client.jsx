import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'e2pdecua',
    dataset: 'production',
    apiVersion: "2023-10-21",
    useCdn: false,
    token: 'sk8rM4ykXxBmuYjWcIbPiRu5WymrghHhDVgMpEeVs6fEOCDsY8TwPMB26ihQT9YjxEF6rJPCEBQRWbfMnO1sWMwZnJgrgghCvFKhfOOtpOBrI8J24Rnc2z33JUhitqwsmMxSWjUQXU01Qkib2e2egOdjlt1naAc17H07psku64DTMbWQNK8p',
    ignoreBrowserTokenWarning: true
  })
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);