import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import MainLayout from './src/layout/Main';



export default function App() {
	return (
		<PaperProvider>
			<MainLayout />
		</PaperProvider>
	)	
}
