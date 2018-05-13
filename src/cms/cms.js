import CMS from 'netlify-cms'

import MenuPreview from "./preview-templates/menu";
import LocationsPreview from "./preview-templates/locations";

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('menu', MenuPreview)
CMS.registerPreviewTemplate('locations', LocationsPreview)
