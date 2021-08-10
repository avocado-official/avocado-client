import mapboxgl from 'mapbox-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import React, { useRef, useEffect, useState } from 'react';

import styles from '../../styles/map.module.scss';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpcmluYXByIiwiYSI6ImNrcjZvYjl4bTNocDMycG82d205enNwN24ifQ.tAomZwI2G5_9o9O9DD1D8w';

export default function MapComp() {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(51.38);
	const [lat, setLat] = useState(35.68);
	const [zoom, setZoom] = useState(10);

	useEffect(() => {
		if (map.current) return;

		let language = new MapboxLanguage();

		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: zoom,
		});

		mapboxgl.setRTLTextPlugin(
			'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
		);

		map.current.addControl(language);

		var marker = new mapboxgl.Marker({
			color: '#21897e',
			draggable: true,
		})
			.setLngLat([51.3022811, 35.7740779])
			.addTo(map.current);
	});

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 ">
					<div ref={mapContainer} className={styles.mapContainer} />
				</div>
			</div>
		</div>
	);
}
