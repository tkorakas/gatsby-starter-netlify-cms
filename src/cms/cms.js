import CMS from 'netlify-cms'

import EventsPagePreview from './preview-templates/EventsPagePreview'
import PlacesPagePreview from './preview-templates/PlacesPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('events', EventsPagePreview)
CMS.registerPreviewTemplate('about', PlacesPagePreview)
