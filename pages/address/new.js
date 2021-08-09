import Link from 'next/link';

import styles from '../../styles/newAddress.module.scss';
const newAddress = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-12">
						<div className={styles.headerBox}>
							<p className={styles.header}>آدرس جدید</p>
						</div>
						<div>
							<label>محله</label>
							<select>
								<optgroup label="منطقه ۱:">
									<option value="ازگل">ازگل</option>
									<option value="اقدسیه">اقدسیه</option>
									<option value="الهيه">الهيه</option>
									<option value="امامزاده قاسم">امامزاده قاسم</option>
									<option value="اوین">اوین</option>
									<option value="باغ فردوس">باغ فردوس</option>
									<option value="تجریش">تجریش</option>
									<option value="جماران">جماران</option>
									<option value="چیذر">چیذر</option>
									<option value="دارآباد">دارآباد</option>
									<option value="دربند">دربند</option>
									<option value="درکه">درکه</option>
									<option value="دزاشیب - جوزستان">دزاشیب - جوزستان</option>
									<option value="زعفرانیه">زعفرانیه</option>
									<option value="سوهانک">سوهانک</option>
									<option value="شهرک نفت">شهرک نفت</option>
									<option value="شهرک محلاتی">شهرک محلاتی</option>
									<option value="فرمانیه">فرمانیه</option>
									<option value="فرشته">فرشته</option>
									<option value="قیطریه">قیطریه</option>
									<option value="فرشته">فرشته</option>
									<option value="کاشانک">کاشانک</option>
									<option value="کامرانیه">کامرانیه</option>
									<option value="محمودیه">محمودیه</option>
									<option value="نیاوران">نیاوران</option>
									<option value="ولنجک">ولنجک</option>
								</optgroup>

								<optgroup label="منطقه ۲:">
									<option value="برق آلستوم">برق آلستوم</option>
									<option value="تهران ویلا">تهران ویلا</option>
									<option value="ستارخان">ستارخان</option>
									<option value="سعادت آباد">سعادت آباد</option>
									<option value="شهرک غرب">شهرک غرب</option>
									<option value="شهرک مخابرات">شهرک مخابرات</option>
									<option value="شهرآرا">شهرآرا</option>
									<option value="صادقیه">صادقیه</option>
									<option value="طرشت">طرشت</option>
									<option value="فرحزاد">فرحزاد</option>
									<option value="گیشا">گیشا</option>
									<option value="همایونشهر">همایونشهر</option>
									<option value="مرزداران">مرزداران</option>
								</optgroup>

								<optgroup label="منطقه ۳:">
									<option value="اختیاریه">اختیاریه</option>
									<option value="پاسداران">پاسداران</option>
									<option value="دروس">دروس</option>
									<option value="دولت">دولت</option>
									<option value="دیباجی">دیباجی</option>
									<option value="جردن - ولیعصر">جردن - ولیعصر</option>
									<option value="سیدخندان">سیدخندان</option>
									<option value="ظفر">ظفر</option>
									<option value="قلهک">قلهک</option>
									<option value="میرداماد">میرداماد</option>
									<option value="ونک">ونک</option>
								</optgroup>

								<optgroup label="منطقه ۴:">
									<option value="بلوار پروین">بلوار پروین</option>
									<option value="تهرانپارس">تهرانپارس</option>
									<option value="حکیمیه">حکیمیه</option>
									<option value="سراج">سراج</option>
									<option value="شمس آباد - مجیدیه">شمس آباد - مجیدیه</option>
									<option value="شمیران نو">شمیران نو</option>
									<option value="علم و صنعت">علم و صنعت</option>
									<option value="فرجام">فرجام</option>
									<option value="قنات کوثر">قنات کوثر</option>
									<option value="لویزان - شیان">لویزان - شیان</option>
									<option value="مهران">مهران</option>
									<option value="نارمک">نارمک</option>
									<option value="هروی">هروی</option>
									<option value="هنگام">هنگام</option>
								</optgroup>

								<optgroup label="منطقه ۵:">
									<option value="آيت الله كاشانی">آيت الله كاشانی</option>
									<option value="اشرفی اصفهانی">اشرفی اصفهانی</option>
									<option value="باغ فیض">باغ فیض</option>
									<option value="بلوار فردوس">بلوار فردوس</option>
									<option value="پونک">پونک</option>
									<option value="جنت آباد">جنت آباد</option>
									<option value="حصارک">حصارک</option>
									<option value="سازمان برنامه">سازمان برنامه</option>
									<option value="شاهین">شاهین</option>
									<option value="شهران">شهران</option>
									<option value="شهرزيبا">شهرزيبا</option>
									<option value="شهرک آپادانا">شهرک آپادانا</option>
									<option value="شهرک اکباتان">شهرک اکباتان</option>
									<option value="شهرک اندیشه">شهرک اندیشه</option>
									<option value="شهرک پرواز">شهرک پرواز</option>
									<option value="شهرک کوهسار">شهرک کوهسار</option>
									<option value="شهرک نفت">شهرک نفت</option>
									<option value="شهرک والفجر">شهرک والفجر</option>
									<option value="کن">کن</option>
									<option value="کوی ارم">کوی ارم</option>
									<option value="کوی بیمه">کوی بیمه</option>
								</optgroup>

								<optgroup label="منطقه ۶:">
									<option value="آرژانتین - ساعی">آرژانتین - ساعی</option>
									<option value="امیرآباد">امیرآباد</option>
									<option value="ایرانشهر">ایرانشهر</option>
									<option value="بهجت آباد">بهجت آباد</option>
									<option value="پارک لاله">پارک لاله</option>
									<option value="جنت - رفتگر">جنت - رفتگر</option>
									<option value="دانشگاه تهران">دانشگاه تهران</option>
									<option value="شریعتی">شریعتی</option>
									<option value="شیراز">شیراز</option>
									<option value="عباس آباد">عباس آباد</option>
									<option value="فاطمی">فاطمی</option>
									<option value="قائم مقام - سنائی">قائم مقام - سنائی</option>
									<option value="قزل قلعه">قزل قلعه</option>
									<option value="کشاورز غربی">کشاورز غربی</option>
									<option value="گاندی">گاندی</option>
									<option value="میدان جهاد">میدان جهاد</option>
									<option value="میدان ولیعصر">میدان ولیعصر</option>
									<option value="نصرت">نصرت</option>
									<option value="یوسف آباد">یوسف آباد</option>
								</optgroup>

								<optgroup label="منطقه ۷:">
									<option value="اجاره دار">اجاره دار</option>
									<option value="ارامنه">ارامنه</option>
									<option value="امجدیه - خاقانی">امجدیه - خاقانی</option>
									<option value="باغ صبا - سهروردی">باغ صبا - سهروردی</option>
									<option value="بهار">بهار</option>
									<option value="حشمتیه">حشمتیه</option>
									<option value="خواجه نصیر - حقوقی">خواجه نصیر - حقوقی</option>
									<option value="دبستان - مجیدیه">دبستان - مجیدیه</option>
									<option value="سبلان">سبلان</option>
									<option value="عباس آباد - اندیشه">عباس آباد - اندیشه</option>
									<option value="قصر">قصر</option>
									<option value="کاج">کاج</option>
									<option value="کریمخان ">کریمخان </option>
									<option value="مطهری">مطهری</option>
									<option value="نامجو">نامجو</option>
									<option value="نظام آباد">نظام آباد</option>
									<option value="نیلوفر - شهید قندی">نیلوفر - شهید قندی</option>
									<option value="هفت تیر">هفت تیر</option>
								</optgroup>

								<optgroup label="منطقه ۸:">
									<option value="تسلیحات">تسلیحات</option>
									<option value="تهرانپارس">تهرانپارس</option>
									<option value="دردشت">دردشت</option>
									<option value="زرکش">زرکش</option>
									<option value="فدک">فدک</option>
									<option value="کرمان">کرمان</option>
									<option value="لشکر">لشکر</option>
									<option value="مجیدیه جنوبی">مجیدیه جنوبی</option>
									<option value="مدائن">مدائن</option>
									<option value="نارمک">نارمک</option>
									<option value="وحیدیه">وحیدیه</option>
									<option value="هفت حوض">هفت حوض</option>
								</optgroup>

								<optgroup label="منطقه ۹:">
									<option value="استاد معین">استاد معین</option>
									<option value="امامزاده عبدالله">امامزاده عبدالله</option>
									<option value="دکتر هوشیار">دکتر هوشیار</option>
									<option value="سرآسیاب مهرآباد">سرآسیاب مهرآباد</option>
									<option value="شمشیری">شمشیری</option>
									<option value="شهید دستغیب">شهید دستغیب</option>
									<option value="فتح - صنعتی">فتح - صنعتی</option>
									<option value="فرودگاه">فرودگاه</option>
								</optgroup>

								<optgroup label="منطقه ۱۰:">
									<option value="بریانک">بریانک</option>
									<option value="جی – شبیری">جی – شبیری</option>
									<option value="جیحون">جیحون</option>
									<option value="دامپزشكی">دامپزشكی</option>
									<option value="رودکی">رودکی</option>
									<option value="زنجان">زنجان</option>
									<option value="سلیمانی - تیموری">سلیمانی - تیموری</option>
									<option value="کارون">کارون</option>
									<option value="قزوین">قزوین</option>
									<option value="کمیل">کمیل</option>
									<option value="مالک اشتر">مالک اشتر</option>
									<option value="نواب صفوی">نواب صفوی</option>
									<option value="هاشمی">هاشمی</option>
									<option value="هفت چنار">هفت چنار</option>
								</optgroup>

								<optgroup label="منطقه ۱۱:">
									<option value="آذربایجان">آذربایجان</option>
									<option value="آگاهی">آگاهی</option>
									<option value="اسکندری">اسکندری</option>
									<option value="امیریه">امیریه</option>
									<option value="انبارنفت">انبارنفت</option>
									<option value="جمالزاده - حشمت الدوله">جمالزاده - حشمت الدوله</option>
									<option value="جمهوری">جمهوری</option>
									<option value="خرمشهر">خرمشهر</option>
									<option value="راه آهن">راه آهن</option>
									<option value="شیخ هادی">شیخ هادی</option>
									<option value="عباسی">عباسی</option>
									<option value="فروزش - امیربهادر">فروزش - امیربهادر</option>
									<option value="فلسطین - انقلاب">فلسطین - انقلاب</option>
									<option value="قلمستان - برادران جوادیان">قلمستان - برادران جوادیان</option>
									<option value="مخصوص">مخصوص</option>
									<option value="منیریه">منیریه</option>
									<option value="میدان حر">میدان حر</option>
									<option value="هلال احمر">هلال احمر</option>
								</optgroup>

								<optgroup label="منطقه ۱۲:">
									<option value="آبشار">آبشار</option>
									<option value="ارگ پامنار">ارگ پامنار</option>
									<option value="امامزاده یحیی">امامزاده یحیی</option>
									<option value="ایران">ایران</option>
									<option value="بازار">بازار</option>
									<option value="بهارستان">بهارستان</option>
									<option value="تختی">تختی</option>
									<option value="دروازه شمیران">دروازه شمیران</option>
									<option value="سنگلج">سنگلج</option>
									<option value="شهید هرندی">شهید هرندی</option>
									<option value="فردوسی">فردوسی</option>
									<option value="قیام">قیام</option>
									<option value="کوثر">کوثر</option>
								</optgroup>

								<optgroup label="منطقه ۱۳:">
									<option value="آشتیانی">آشتیانی</option>
									<option value="امامت">امامت</option>
									<option value="پیروزی">پیروزی</option>
									<option value="تهران نو">تهران نو</option>
									<option value="حافظیه">حافظیه</option>
									<option value="دهقان">دهقان</option>
									<option value="زاهد گیلانی">زاهد گیلانی</option>
									<option value="زینبیه">زینبیه</option>
									<option value="سرخه حصار">سرخه حصار</option>
									<option value="شورا">شورا</option>
									<option value="شهید اسدی">شهید اسدی</option>
									<option value="صفا">صفا</option>
									<option value="قاسم آباد">قاسم آباد</option>
									<option value="نیروی هوایی">نیروی هوایی</option>
								</optgroup>

								<optgroup label="منطقه ۱۴:">
									<option value="13 آبان">13 آبان</option>
									<option value="آهنگ">آهنگ</option>
									<option value="آهنگران">آهنگران</option>
									<option value="ابوذر">ابوذر</option>
									<option value="بروجردی">بروجردی</option>
									<option value="پرستار">پرستار</option>
									<option value="پیروزی">پیروزی</option>
									<option value="تاکسیرانی">تاکسیرانی</option>
									<option value="جابری">جابری</option>
									<option value="جوادیه">جوادیه</option>
									<option value="چهارصد دستگاه">چهارصد دستگاه</option>
									<option value="خاوران">خاوران</option>
									<option value="دژکام">دژکام</option>
									<option value="دولاب">دولاب</option>
									<option value="شاهین">شاهین</option>
									<option value="شکوفه">شکوفه</option>
									<option value="شکیب">شکیب</option>
									<option value="شیوا">شیوا</option>
									<option value="صد دستگاه">صد دستگاه</option>
									<option value=" فرزانه"> فرزانه</option>
									<option value="قصر فیروزه">قصر فیروزه</option>
									<option value="مینای">مینای</option>
									<option value="نبی اکرم">نبی اکرم</option>
									<option value="نیکنام">نیکنام</option>
								</optgroup>

								<optgroup label="منطقه ۱۵:">
									<option value="ابوذر">ابوذر</option>
									<option value="اتابک">اتابک</option>
									<option value="اسلام آباد - والفجر">اسلام آباد - والفجر</option>
									<option value="افسریه">افسریه</option>
									<option value="بروجردی - دهقان">بروجردی - دهقان</option>
									<option value="شوش">شوش</option>
									<option value="شهرک رضویه">شهرک رضویه</option>
									<option value="طیب">طیب</option>
									<option value="کیانشهر">کیانشهر</option>
									<option value="مسعودیه">مسعودیه</option>
									<option value="مشیریه">مشیریه</option>
									<option value="مطهری">مطهری</option>
									<option value="مظاهری">مظاهری</option>
									<option value="مینایی">مینایی</option>
									<option value="ولیعصر - بی سیم">ولیعصر - بی سیم</option>
									<option value="هاشم آباد">هاشم آباد</option>
								</optgroup>

								<optgroup label="منطقه ۱۶:">
									<option value="باغ آذری">باغ آذری</option>
									<option value="تختی">تختی</option>
									<option value="جوادیه">جوادیه</option>
									<option value="خزانه">خزانه</option>
									<option value="شهرک بعثت">شهرک بعثت</option>
									<option value="علی آباد">علی آباد</option>
									<option value="نازی آباد">نازی آباد</option>
									<option value="یاخچی آباد">یاخچی آباد</option>
								</optgroup>

								<optgroup label="منطقه ۱۷:">
									<option value="آذری">آذری</option>
									<option value="ابوذر">ابوذر</option>
									<option value="امامزاده حسن">امامزاده حسن</option>
									<option value="باغ خزانه">باغ خزانه</option>
									<option value="بلور سازی">بلور سازی</option>
									<option value="جلیلی">جلیلی</option>
									<option value="زمزم">زمزم</option>
									<option value="زهتابی">زهتابی</option>
									<option value="فلاح">فلاح</option>
									<option value="گلچین">گلچین</option>
									<option value="مقدم">مقدم</option>
									<option value="وصفنارد">وصفنارد</option>
									<option value="یافت آباد">یافت آباد</option>
								</optgroup>

								<optgroup label="منطقه ۱۸:">
									<option value="17 شهریور">17 شهریور</option>
									<option value="بهداشت">بهداشت</option>
									<option value="تولید دارو">تولید دارو</option>
									<option value="حسینی - فردوس">حسینی - فردوس</option>
									<option value="خلیج فارس">خلیج فارس</option>
									<option value="شاد آباد">شاد آباد</option>
									<option value="شمس آباد">شمس آباد</option>
									<option value="شهرک امام خمینی">شهرک امام خمینی</option>
									<option value="شهید رجایی">شهید رجایی</option>
									<option value="صاحب الزمان">صاحب الزمان</option>
									<option value="صادقیه">صادقیه</option>
									<option value="ولیعصر">ولیعصر</option>
									<option value="یافت آباد">یافت آباد</option>
								</optgroup>

								<optgroup label="منطقه ۱۹:">
									<option value="اسفندیاری و بستان">اسفندیاری و بستان</option>
									<option value="اسماعیل آباد">اسماعیل آباد</option>
									<option value="بوستان ولایت">بوستان ولایت</option>
									<option value="بهمنیار">بهمنیار</option>
									<option value="خانی آباد">خانی آباد</option>
									<option value="دولتخواه">دولتخواه</option>
									<option value="شریعتی">شریعتی</option>
									<option value="شکوفه">شکوفه</option>
									<option value="شهرک رسالت">شهرک رسالت</option>
									<option value="شهید کاظمی">شهید کاظمی</option>
									<option value="نعمت آباد">نعمت آباد</option>
								</optgroup>

								<optgroup label="منطقه ۲۰:">
									<option value="13 آبان">13 آبان</option>
									<option value="ابن بابویه">ابن بابویه</option>
									<option value="استخر">استخر</option>
									<option value="اقدسیه">اقدسیه</option>
									<option value="باروت کوبی">باروت کوبی</option>
									<option value="تقی آباد">تقی آباد</option>
									<option value="جوانمرد قصاب">جوانمرد قصاب</option>
									<option value="حمزه آباد">حمزه آباد</option>
									<option value="دولت آباد">دولت آباد</option>
									<option value="دیلمان">دیلمان</option>
									<option value="سرتخت">سرتخت</option>
									<option value="شهادت">شهادت</option>
									<option value="شهید بهشتی">شهید بهشتی</option>
									<option value="عباس آباد">عباس آباد</option>
									<option value="علایین">علایین</option>
									<option value="فیروزآبادی">فیروزآبادی</option>
									<option value="حمزه آباد">حمزه آباد</option>
									<option value="منصوریه منگل">منصوریه منگل</option>
									<option value="ولی آباد">ولی آباد</option>
									<option value="هاشم آباد">هاشم آباد</option>
								</optgroup>

								<optgroup label="منطقه ۲۱:">
									<option value="باشگاه نفت">باشگاه نفت</option>
									<option value="تهرانسر">تهرانسر</option>
									<option value="چیتگر">چیتگر</option>
									<option value="شهرک آزادی">شهرک آزادی</option>
									<option value="شهرک استقلال">شهرک استقلال</option>
									<option value="شهرک پاسداران">شهرک پاسداران</option>
									<option value="شهرک دانشگاه تهران">شهرک دانشگاه تهران</option>
									<option value="شهرک دریا">شهرک دریا</option>
									<option value="شهرک شهرداری">شهرک شهرداری</option>
									<option value="شهرک غزالی">شهرک غزالی</option>
									<option value="شهرک فرهنگیان">شهرک فرهنگیان</option>
									<option value="وردآورد">وردآورد</option>
									<option value="ویلا شهر">ویلا شهر</option>
								</optgroup>

								<optgroup label="منطقه ۲۲:">
									<option value="آزاد شهر - پیکان شهر">آزاد شهر - پیکان شهر</option>
									<option value="دهکده المپیک">دهکده المپیک</option>
									<option value="زیبا دشت">زیبا دشت</option>
									<option value="شهرک دژبان">شهرک دژبان</option>
									<option value="شهرک راه آهن">شهرک راه آهن</option>
									<option value="شهرک شهید باقری">شهرک شهید باقری</option>
									<option value="شهرک صنعتی شریف">شهرک صنعتی شریف</option>
									<option value="همت غرب">همت غرب</option>
								</optgroup>
							</select>
						</div>
						<div>
							<label>استان</label>
							<select>
								<option value="1">تهران</option>
								<option value="2">خوزستان</option>
								<option value="3">اصفهان</option>
								<option value="4">شیراز</option>
								<option value="5">قم</option>
								<option value="6">تبریز</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default newAddress;
