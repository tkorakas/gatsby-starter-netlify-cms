import React from 'react'
import PropTypes from 'prop-types'
import { PlacesPageTemplate } from '../../templates/places-page'

const PlacesPagePreview = ({ entry, widgetFor }) => (
  <PlacesPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

PlacesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PlacesPagePreview
