import {render} from '@testing-library/react';
import App from './App';

describe('App', () => {
    const renderComponent = () => render(
        <App/>
    )

    it('should render App', () => {
        const {asFragment} = renderComponent();
        expect(asFragment()).toMatchSnapshot();
    });
});