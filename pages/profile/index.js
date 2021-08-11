import Layout from '../../components/layout';
import ProfileComp from '../../components/Profile';

const Profile = () => {
	return (
		<>
			<div>
				<Layout headerTitle="پروفایل" />
				<ProfileComp img="data:image/png;base64,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" />
			</div>
		</>
	);
};

export default Profile;
