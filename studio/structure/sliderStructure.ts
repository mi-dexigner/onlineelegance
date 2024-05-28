import {DocumentsIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Sliders')
    .icon(DocumentsIcon)
    .schemaType('slider')
    .child(S.documentTypeList('slider'))
)
