import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
// import ToastManager from 'toastify-react-native';
import MainLayout from './src/layout/Main';

export default function App() {
	return (
		<PaperProvider>
			<MainLayout />
		</PaperProvider>
	)	
}
