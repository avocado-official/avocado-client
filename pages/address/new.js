import cn from 'classnames';
import mapboxgl from 'mapbox-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import { useForm } from 'react-hook-form';

import React, { useRef, useEffect, useState } from 'react';

import Error from '../../components/Error';
import Input from '../../components/Input';
import Back from '../../components/BackPage';

import styles from '../../styles/newAddress.module.scss';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpcmluYXByIiwiYSI6ImNrcjZvYjl4bTNocDMycG82d205enNwN24ifQ.tAomZwI2G5_9o9O9DD1D8w';

const NewAddress = () => {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(51.38);
	const [lat, setLat] = useState(35.68);
	const [zoom, setZoom] = useState(10);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

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
		let markermap = null;
		map.current.on('click', (e) => {
			let marker = new mapboxgl.Marker({
				color: '#21897e',
				draggable: false,
			})
				.setLngLat([e.lngLat.lng, e.lngLat.lat])
				.addTo(map.current);

			if (markermap !== null) {
				markermap.remove();
			}
			markermap = marker;
		});
	});

	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-11 col-md-8">
						<div className={styles.headerBox}>
							<p className={styles.header}>آدرس جدید</p>
							<Back />
						</div>
						<form onSubmit={handleSubmit(onSubmit)} className={styles.form} autoComplete="off">
							<div className={styles.city}>
								<p>استان</p>{' '}
								<select {...register('province')} className={cn(styles.select, 'col-12 col-md-8')}>
									<option value="1">تهران</option>
									<option value="2">خوزستان</option>
									<option value="3">اصفهان</option>
									<option value="4">شیراز</option>
									<option value="5">قم</option>
									<option value="6">تبریز</option>
								</select>
							</div>
							<div className={styles.place}>
								{' '}
								<p>محله</p>
								<Input
									type="text"
									{...register('neighborhood', {
										required: true,
										maxLength: 25,
									})}
									placeholder="ولنجک "
								/>
							</div>
							<div className={styles.map}>
								<p>نقشه</p>
								<div ref={mapContainer} className={styles.mapContainer} style={{ height: 300 }} />
							</div>
							<Input className={styles.button} type="submit" value="ثبت " />
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewAddress;
