import React from 'react';
import Iframe from 'react-iframe'
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>MineTV</PanelHeader>

		<Group title="Navigation Example">
			<Div>
			<Iframe url="https://app.viloud.tv/player/embed/channel/3e6502a2759a7c8f59c081980bedecd0?autoplay=1&volume=1&controls=1&title=0&share=0&open_playlist=0&random=0"
        width="80%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        allow="fullscreen"
        position="relative"/>
        <p>
        MineTV - это бескрайний мир леденящих душу приключений, которые всегда рядом, ведь MineTV является полноценным телеканалом мира Майнкрафт, который всегда онлайн!

      </p>
				<Button size="xl" level="2" ref="https://google.com">Загрузить приложение для Android</Button>
			</Div>
			
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
