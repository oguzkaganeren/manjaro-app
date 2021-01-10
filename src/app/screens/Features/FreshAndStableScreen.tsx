import * as React from 'react';
import { ScrollView, Image, Dimensions, Linking, ViewStyle } from 'react-native';
import { Text, Layout, Card, Icon, Avatar, Divider, Button, EvaProp } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';

export interface FreshAndStableProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const FreshAndStableScreenThemed: React.FC<FreshAndStableProps> = (props) => {
	const { eva, style, ...restProps } = props;

	return (
		<Layout style={[eva.style!.container, style]}>
			<ScrollView>
				<Card disabled>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Manjaro is based on the independently developed Arch operating system. Within the Linux community, Arch
						itself is renowned for being an exceptionally fast, powerful, and lightweight distribution that provides
						access to the very latest cutting edge – and bleeding edge – software. However, Arch is also aimed at more
						experienced or technically-minded users. As such, it is generally considered to be beyond the reach of those
						who lack the technical expertise (or persistence) required to use it.
					</Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Latest software might come with some problems such as incompatibilities to existing software or bugs.
						Experienced users can fix those problems by themselves. But some users don’t have enough of this expertise
						or just don’t want to figure everything out to get things working.
					</Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						To prevent problems, Manjaro adds additional layers of testing to the Arch repositories. Normal packages
						will go through these additional layers and will only be released for users who want a stable system, when
						no more problems are found.
					</Text>
					<Image
						style={[eva.style!.image, style]}
						source={require('../../../../assets/featureImages/repositories.png')}
					/>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						What about security?
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						As packages might be held back for weeks until all problems are resolved, the security of the system could
						be affected. Manjaro solves this by prioritizing security-relevant packages in the testing process or even
						skipping the testing to make security-fixes available as quickly as possible. We call this process
						fast-tracking.
					</Text>
				</Card>
			</ScrollView>
		</Layout>
	);
};

export const FreshAndStableScreen = withStyles(FreshAndStableScreenThemed, (theme) => ({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	sideContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	subContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		width: 32,
		height: 32,
		marginHorizontal: 5,
	},
	sharp: {
		color: theme['color-primary-500'],
		paddingRight: 3,
	},
	description: {
		backgroundColor: 'rgba(53, 191, 92, 0.3)',
		marginTop: 10,
		marginHorizontal: 15,
		padding: 20,
	},
	image: {
		marginVertical: 10,
		width: Dimensions.get('window').width - 50,
		height: Dimensions.get('window').height / 2,
		overflow: 'visible',
		resizeMode: 'contain',
		backgroundColor: '#EBEBEB',
	},
	buttonContainer: {
		flexDirection: 'row',
		padding: 20,
	},
	download: {
		marginHorizontal: 15,
	},
	learnMore: {
		marginHorizontal: 15,
	},
}));
