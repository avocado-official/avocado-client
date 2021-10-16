import cn from 'classnames';
import mapboxgl from 'mapbox-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import { useForm } from 'react-hook-form';

import React, { useRef, useEffect, useState } from 'react';

import Error from '../../components/Error';
import Input from '../../components/Input';
import Back from '../../components/BackPage';

import styles from './newAddress.module.scss';

mapboxgl.accessToken =
	'pk.eyJ1Ijoic2hpcmluYXByIiwiYSI6ImNrcjZvYjl4bTNocDMycG82d205enNwN24ifQ.tAomZwI2G5_9o9O9DD1D8w';

const NewAddress = () => {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(0);
	const [lat, setLat] = useState(0);
	const [zoom, setZoom] = useState(10);
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		if (lat === 0 && lng === 0) {
			setError('province', { type: `map` });
		} else {
			console.log('ok vali');
		}
	};
	useEffect(() => {
		if (map.current) return;

		let language = new MapboxLanguage();

		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [51.38, 35.68],
			zoom: zoom,
		});

		mapboxgl.setRTLTextPlugin(
			'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js'
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
			setLat(e.lngLat.lat);
			setLng(e.lngLat.lng);
			markermap = marker;
		});
	});
	console.log(errors);
	return (
		<>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-11 col-md-8'>
						<div className={styles.headerBox}>
							<p className={styles.header}>آدرس جدید</p>
							<Back />
						</div>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className={styles.form}
							autoComplete='off'
						>
							<div className={styles.city}>
								<p>استان</p>{' '}
								<select
									{...register('province', {
										required: true,
									})}
									className={cn(styles.select, 'col-12 col-md-8')}
								>
									<option value='1'>تهران</option>
									<option value='2'>گیلان</option>
									<option value='3'>آذربایجان شرقی</option>
								</select>
							</div>
							<div className={styles.place}>
								{' '}
								<p>محله</p>
								<Input
									type='text'
									{...register('neighborhood', {
										required: true,
										maxLength: 25,
									})}
									placeholder='ولنجک '
								/>
								{errors.neighborhood?.type && (
									<Error field='محله' type={errors.neighborhood.type} />
								)}
							</div>
							<div className={styles.map}>
								<p className={styles.place}>نقشه</p>
								<div
									ref={mapContainer}
									className={styles.mapContainer}
									style={{ height: 300 }}
								/>
								{errors.province?.type && (
									<Error field='نقشه' type={errors.province.type} />
								)}
							</div>
							<Input className={styles.button} type='submit' value='ثبت ' />
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewAddress;
