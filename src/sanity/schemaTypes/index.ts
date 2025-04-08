import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import news from './news'
import faq from './faq'
import service from './service'

export const schemaTypes = [project, news, faq, service]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [],
}
