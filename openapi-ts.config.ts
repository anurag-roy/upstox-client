import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'openapi.json',
  output: 'src/client',
  services: {
    asClass: true,
  },
  types: {
    enums: 'typescript',
  },
});
