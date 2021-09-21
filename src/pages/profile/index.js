import Layout from '../../components/layout';
import ProfileComp from '../../components/Profile';

const Profile = () => {
	return (
		<>
			<div>
				<Layout headerTitle="پروفایل" />
				<ProfileComp img="https://img2.pngio.com/person-profile-user-user-profile-icon-instagram-person-icon-png-512_512.png" />
			</div>
		</>
	);
};

export default Profile;
