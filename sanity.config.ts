import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'roccos-cms',
  title: 'Roccos CMS',
  projectId: 'v7eypfph',
  dataset: 'production',
  basePath: '/studio', // Base route for the Studio
  
  // Add and configure plugins
  plugins: [
    structureTool({
      name: 'default',
      title: 'Content',
    }),
    visionTool({
      defaultApiVersion: '2023-05-03',
      defaultDataset: 'production',
    }),
  ],

  // Schema configuration
  schema: {
    types: schemaTypes,
  },


  // Studio customization
  studio: {
    components: {
      // You can customize studio components here
    },
  },

  // Development tools
  form: {
    // Custom form components go here
  },
})
