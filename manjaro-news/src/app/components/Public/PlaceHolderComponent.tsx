import React, { PureComponent } from 'react';
import { Layout, withStyles, Spinner } from '@ui-kitten/components';
import globalStyle from './../../theme/GlobalStyle';
export interface PlaceProps {
	eva: any;
	style: any;
}
const PlaceHolderComponentThemed: React.FC<PlaceProps> = (props) => {
	const PlaceHolderLoading = () => (
		<Layout style={[globalStyle.container, { justifyContent: 'center', alignItems: 'center' }]}>
			<Spinner />
		</Layout>
	);

	return <PlaceHolderLoading />;
};

export const PlaceHolderComponent = withStyles(PlaceHolderComponentThemed, (theme) => ({}));
