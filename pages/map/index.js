import React, { useRef, useEffect, useState } from 'react'

import styles from '../../styles/map.module.scss'
import mapboxgl from 'mapbox-gl'
import MapboxLanguage from '@mapbox/mapbox-gl-language'

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2hpcmluYXByIiwiYSI6ImNrcjZvYjl4bTNocDMycG82d205enNwN24ifQ.tAomZwI2G5_9o9O9DD1D8w'
export default function Map() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(51.38)
  const [lat, setLat] = useState(35.68)
  const [zoom, setZoom] = useState(10)

  useEffect(() => {
    if (map.current) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    })
  })
  return (
    <div>
      <div ref={mapContainer} className='mapContainer' />
    </div>
  )
}
