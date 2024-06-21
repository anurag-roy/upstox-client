import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-fetch',
  input: 'openapi.json',
  output: 'src/client',
  services: {
    asClass: true,
  },
  types: {
    enums: 'typescript',
  },
});
