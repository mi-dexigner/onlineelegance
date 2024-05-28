import {portableTextType} from './portableText/portableTextType'
import {portableTextSimpleType} from './portableText/portableTextSimpleType'

const blocks = [portableTextType, portableTextSimpleType]

// import {collectionType} from './documents/collection'
// import {colorThemeType} from './documents/colorTheme'
import { slideType } from './documents/Slider'
import {pageType} from './documents/page'
// import {productType} from './documents/product'
// import {productVariantType} from './documents/productVariant'

const documents = [ slideType,pageType]

// import {homeType} from './singletons/homeType'
// import {settingsType} from './singletons/settingsType'

// const singletons = []

// export const schemaTypes = [...annotations, ...objects, ...singletons, ...blocks, ...documents]
export const schemaTypes = [slideType]
