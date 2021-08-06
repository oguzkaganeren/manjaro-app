import * as React from 'react';
import { Linking, ViewStyle } from 'react-native';
import { Text, Layout, Avatar, Button, Icon, EvaProp, IconProps } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';

export interface UserGuideProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const UserGuideScreenThemed: React.FC<UserGuideProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const BookIcon = (props: IconProps) => <Icon {...props} name="book-open" />;
	return (
		<Layout style={[eva.style!.container, style]}>
			<Layout style={[eva.style!.description, style]}>
				<Text category="p1" style={{ textAlign: 'justify' }}>
					Our Team and the Community proudly presents you, the Manjaro User Guide. Over 100 page book with everything a
					new or advanced user can learn about Manjaro. We cover the topics described below.
				</Text>
			</Layout>
			<Layout style={[eva.style!.buttonContainer, style]}>
				<Button
					style={[eva.style!.download, style]}
					onPress={() => {
						Linking.openURL('https://en.osdn.net/projects/manjaro/storage/Manjaro-User-Guide.pdf');
					}}
					appearance="outline"
					status="primary"
					accessoryLeft={BookIcon}
				>
					User's Guide
				</Button>
				<Button
					style={[eva.style!.download, style]}
					onPress={() => {
						Linking.openURL('https://en.osdn.net/projects/manjaro/storage/Manjaro-User-Guide-French.pdf');
					}}
					appearance="outline"
					status="primary"
					accessoryLeft={BookIcon}
				>
					Guide De L'utilisateur
				</Button>
				<Button
				style={[eva.style!.download, style]}
				onPress={() => {
					Linking.openURL('https://en.osdn.net/projects/manjaro/storage/Manjaro-User-Guide-Turkish.pdf');
				}}
				appearance="outline"
				status="primary"
				accessoryLeft={BookIcon}
			>
				Kullanıcı Rehberi
			</Button>
			</Layout>
			
		</Layout>
	);
};

export const UserGuideScreen = withStyles(UserGuideScreenThemed, (theme) => ({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	sideContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	sharp: {
		color: theme['color-primary-500'],
		paddingRight: 3,
	},
	description: {
		backgroundColor: 'rgba(53, 191, 92, 0.1)',
		marginTop: 10,
		marginHorizontal: 15,
		padding: 20,
	},
	logo: {
		marginBottom: 10,
	},
	buttonContainer: {
		flexDirection: 'column',
		padding: 20,
		
	},
	download: {
		marginHorizontal: 15,
		marginTop:15
	},
	learnMore: {
		marginHorizontal: 15,
	},
}));
