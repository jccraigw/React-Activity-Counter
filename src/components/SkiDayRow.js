//child component
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import React, { Component } from 'react';

//stateless component
export const SkiDayRow = ({resort, date, 
							powder, backcountry}) =>(
	<tr>
		<td>
			{date.getMonth() + 1}/{date.getDate()}/
			{date.getFullYear()}
		</td>
		<td>
			{resort}
		</td>
		<td>
			{(powder) ? <SnowFlake/> : null}
		</td>
		<td>
			{(backcountry) ? <Terrain/> : null}
		</td>
	</tr>

)