import CMS from 'netlify-cms'

import MenuPreview from "./preview-templates/menu";

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('menu', MenuPreview)
