import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { View, Text, StyleSheet } from 'react-native';

const HomePage = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
  
	const handleClose = () => {
	  setAnchorEl(null);
	};
	
	const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
	
	return (
		
		<View style={styles.root}>
			
			<div style={{ marginLeft: "40%", }}>

      <Text style={styles.text}>AUTHENTICATED HOME PAGE</Text><br />
      <Button 
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu List
      </Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={handleClose}>Tips and Tricks</MenuItem>
        <MenuItem onClick={handleClose}>Fire Service Website</MenuItem>
        <MenuItem onClick={handleClose}>Terms and Conditions</MenuItem>
        <MenuItem onClick={handleClose}>Privacy and Policy</MenuItem>
		<MenuItem onClick={handleClose}>About</MenuItem>
		<MenuItem onClick={handleClose}>Feedback</MenuItem>
		<MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>

		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FF6300',
		
	
	},
	text: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#000',
		justifyContent: 'left',
		alignItems: 'left',
	},
});

export default HomePage;
