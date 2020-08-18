import React from 'react';
const searchBox= ({searchfield , searchChange})=>{
	return (
		<div className="pa2">
		
		<input
		className=" pa3 ba b--green bg-light-blue"
		type="search" 
		placeholder="Search your robot"
		onChange={searchChange}
		/>
		</div>
		);
}
export default searchBox;