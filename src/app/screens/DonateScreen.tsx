import * as React from 'react';
import { ScrollView, Image, Dimensions, Linking, TouchableHighlight } from 'react-native';
import { Text, Layout, Card, Icon, Avatar, Divider, Button } from '@ui-kitten/components';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { withStyles } from '@ui-kitten/components';

export interface DonateProps {
	navigation: any;
	route: any;
}

const DonateScreenThemed: React.FC<DonateProps> = (props) => {
	const { eva, style, ...restProps } = props;

	return (
		<Layout style={[eva.style.container, style]}>
			<ScrollView>
				<Card disabled>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Why does Manjaro ask for donations?
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						The mission and goals of Manjaro will remain the same as before – to support the collaborative development
						of Manjaro and its widespread use. This effort will continue to be supported through donations and
						sponsorship and these will not, under any circumstances, be used by the established company as a German GmbH
						& Co. KG since September 2019. Manjaro Linux has always and will always be free for its users!
					</Text>
					<Text></Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Most of the Core Team members and community volunteers dedicate their time and energy and resources, to
						develop and improve Manjaro Linux in their spare time. There will be many other possibilities where
						community initiatives can be subsidized to help grow the Manjaro project and community. One way is to donate
						a small amount of money, to help covering some costs, giving developers time and freedom to improve
						Manjaro’s features or spreading the word by attending conferences.
					</Text>
					<Text></Text>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Choose a donation method
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Manjaro Global ( Preferred )
					</Text>
					<TouchableHighlight onPress={() => Linking.openURL('https://funding.communitybridge.org/projects/manjaro')}>
						<Image
							style={[eva.style.donateImage, style]}
							source={require('../../../assets/donateImages/donate-cb.png')}
						/>
					</TouchableHighlight>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Manjaro Europe
					</Text>
					<TouchableHighlight onPress={() => Linking.openURL('https://opencollective.com/manjaro/donate')}>
						<Image
							style={[eva.style.donateImage, style]}
							source={require('../../../assets/donateImages/donate-cl.png')}
						/>
					</TouchableHighlight>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Manjaro UK
					</Text>
					<TouchableHighlight onPress={() => Linking.openURL('https://opencollective.com/manjaro-uk/donate')}>
						<Image
							style={[eva.style.donateImage, style]}
							source={require('../../../assets/donateImages/donate-cl-uk.png')}
						/>
					</TouchableHighlight>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Manjaro US
					</Text>
					<TouchableHighlight onPress={() => Linking.openURL('https://opencollective.com/manjaro-us/donate')}>
						<Image
							style={[eva.style.donateImage, style]}
							source={require('../../../assets/donateImages/donate-cl-us.png')}
						/>
					</TouchableHighlight>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						For what will my donations be used for?
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Your donations will be used to fund project-related expenses, for example:
					</Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						{'\u2B24'} Sponsorship for upstream events and local Manjaro team and community events
					</Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						{'\u2B24'} Local community costs (e.g. shipping of equipment to Manjaro team and community members)
					</Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						{'\u2B24'} Travel (e.g. coverage of full or part of the expenses for attending an event)
					</Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						{'\u2B24'} Hardware and hosting costs of dedicated community projects
					</Text>
					<Image style={[eva.style.image, style]} source={require('../../../assets/donateImages/uses.png')} />
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Who is deciding on how my donation is used for?
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						The Community board is approving the use of donations to fund project-related expenses in coordination with
						the fiscal host. The company may advise, but will never interfere with decision-making by the community
						board.
					</Text>
					<Text></Text>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Can my donation be anonymous?
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						You can decide for yourself if you want to donate anonymously or in your name. We won’t share or publish any
						details about you, except the amount you had donated. Read more about it here.
					</Text>
					<Text></Text>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						What do I get if I donate?
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						You get a big THANK YOU from the Core Team, since contributions will keep community related activities up
						and running and ensure the availability of updates and features within Manjaro Linux.
					</Text>
					<Text></Text>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						How can I see how the money is spent?
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						We use a transparent ledger, which shows where money comes from and where it goes. This builds
						accountability and trust. With this we have a transparent budget for our community related activities, while
						keeping personal info private. More on how it works can be found here:{' '}
						<Text
							style={{ color: 'green' }}
							onPress={() => {
								Linking.openURL('https://docs.linuxfoundation.org/display/DOCS/Donate');
							}}
						>
							CommunityBridge
						</Text>
						<Text appearance="hint" style={{ textAlign: 'justify' }}>
							,{' '}
						</Text>
						<Text
							style={{ color: 'green' }}
							onPress={() => {
								Linking.openURL('https://opencollective.com/how-it-works');
							}}
						>
							OpenCollective.
						</Text>
					</Text>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Does the fiscal host take any fee for managing?
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Operating the donations programme involves a lot of complexity surrounding taxes, tracking requests,
						gathering further information, and ensuring the money is objectively distributed across Manjaro, our
						community, upstream, and our local community teams. This (a) involves a lot of work, (b) requires some
						commercial accountability (e.g. taxes) and this should be as thin and non-bureaucratic as possible. The
						Community Team at Manjaro is in a good position to coordinate this work together with each fiscal host, and
						will regularly reach out to leaders in the Manjaro project to query requests where further information is
						needed. Accountability for this work will be provided with regular reports.
					</Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Visit the info pages of our fiscal hosts to get more details on their fees:
					</Text>
					<Text
						style={{ color: 'green' }}
						onPress={() => {
							Linking.openURL('https://docs.linuxfoundation.org/display/DOCS/CommunityBridge+FAQs');
						}}
					>
						{'\u2B24'} Global: Linux Foundation 501(c)(6)
					</Text>
					<Text
						style={{ color: 'green' }}
						onPress={() => {
							Linking.openURL('https://opencollective.com/europe');
						}}
					>
						{'\u2B24'} Europe: Open Collective Europe ASBL
					</Text>
					<Text
						style={{ color: 'green' }}
						onPress={() => {
							Linking.openURL('https://opencollective.com/uk');
						}}
					>
						{'\u2B24'} United Kingdom: Open Collective UK
					</Text>
					<Text
						style={{ color: 'green' }}
						onPress={() => {
							Linking.openURL('https://opencollective.com/opensource');
						}}
					>
						{'\u2B24'} America: Open Source Collective 501(c)(6)
					</Text>
					<Text></Text>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						What payment methods can I use?
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Right now we only support credit card payments via Stripe through the platform. It is possible to pay by
						other means, such as bank transfer or Paypal, depending on the Fiscal Host.
					</Text>
					<Text></Text>
					<Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
						<Row
							textStyle={[eva.style.tableTitleText, style]}
							data={['Host', 'Credit Card', 'Bank Transfer', 'Paypal']}
						/>
						<Rows
							textStyle={[eva.style.tableText, style]}
							data={[
								['Community Bridge', 'Yes', 'Yes', 'No'],
								['Open Collective EU', 'Yes', 'Yes', 'No'],
								['Open Collective UK', 'Yes', 'Yes', 'No'],
								['Open Collective US', 'Yes', 'Yes', 'Yes'],
							]}
						/>
					</Table>
					<Text></Text>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Can I get a tax deduction?
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						The{' '}
						<Text
							style={{ color: 'green' }}
							onPress={() => {
								Linking.openURL('https://communitybridge.org/service-terms/');
							}}
						>
							Linux Foundation 501(c)(6)
						</Text>{' '}
						and The{' '}
						<Text
							style={{ color: 'green' }}
							onPress={() => {
								Linking.openURL('https://opencollective.com/opensource');
							}}
						>
							Open Source Collective 501(c)(6)
						</Text>{' '}
						are non-profits, which serve as fiscal hosts to most open source software projects. Donations to Linux
						Foundation 501(c)(6) and Open Source Collective 501(c)(6) are not tax deductible.
					</Text>
				</Card>
			</ScrollView>
		</Layout>
	);
};

export const DonateScreen = withStyles(DonateScreenThemed, (theme) => ({
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
	tableText: {
		color: theme['color-basic-600'],
		marginVertical: 10,
		marginHorizontal: 10,
	},
	tableTitleText: {
		color: theme['color-basic-600'],
		fontWeight: 'bold',
		marginVertical: 10,
		marginHorizontal: 10,
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
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
	},
	donateImage: {
		marginVertical: 5,
		width: Dimensions.get('window').width - 50,
		resizeMode: 'contain',
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
