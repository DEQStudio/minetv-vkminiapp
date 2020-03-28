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
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="openBase">
					Show me the Persik, please
				</Button>
				<Iframe url="https://app.viloud.tv/player/embed/channel/3e6502a2759a7c8f59c081980bedecd0?autoplay=1&volume=1&controls=1&title=0&share=0&open_playlist=0&random=0"
        width="80%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
			</Div>
			
		</Group>
		<View popout={popout} activePanel='home' >
                <Panel id={id} >
                    <PanelHeader
                    left={<Button data-to='statistics' level="3" onClick={()=>{onRefresh()}}>
                        <Icon36Replay width={24} height={24} className="MyBlock"/></Button>}>
                        Premium Чат
                    </PanelHeader>
                    <PullToRefresh onRefresh={()=>onRefresh()} isFetching={fetching}>
                        <List style={{ paddingBottom:70, backgroundColor: "var(--background_page)"}}>
                            { DataMes == null ?
                               null :  getSize(DataMes.list) === 0 ?
                                    <Placeholder
                                    icon={<Icon28MessagesOutline className="MyBlock" />}
                                    header="Пока никто не написал  сообщений">
                                    Будьте первыми и напишите сообщение
                                </Placeholder> : DataMes.map(item=>
                                    <Group shadow={0} style={{padding:"0px",margin:"10px"}}  >
                                        <Link href={`https://vk.com/id${item.vk_id}`} target="_top" className="link" >
                                            <Div className="Profile">
                                                <Avatar  src={item.img} size={25}/>
                                                <p style={{marginLeft:"10px"}}>{`${item.name} `}</p>
                                                <p style={{color:"gray"}}> ● {convertTimestamp(item.date)}</p>
                                            </Div>
                                        </Link>
                                        <Div style={{paddingTop:"0px", marginLeft:"20px",paddingLeft:"0px",paddingRight:"0px" }}>
                                            {`${item.message}`}
                                        </Div>
                                    </Group>)
                            }
                        </List>
                    </PullToRefresh>
                    {fetchedUser != null ? openAlert===0 ? getUser():null :null}

                    <FixedLayout vertical="bottom" >
                        <Group >
                            <Div >
                                <FormLayout style={{padding:0}}>
                                <Input onChange={handleChange} top={`Сообщение ● стоимость - ${pGpG*message.length}`} type={"text"} hidden="Текст" />
                            </FormLayout>
                                <Button size="xl" onClick={()=>{
                                    if(message.length > 1){
                                        if(message.length < 250){
                                            WakeUpPay();
                                        }else{
                                            OpenError("Длина сообщения должна быть меньше 250 символов")
                                        }
                                    }else{
                                        OpenError("Длина сообщения минимум 2 символа")
                                    }
                                    // OpenError("Минимум должно быть 2 символа");
                                    // setModel('writeMessage');
                                }} data-to={WRITE_MESSAGE_MODAL}  level="commerce">
                                    Написать в чат
                                </Button>
                            </Div>
                        </Group>
                    </FixedLayout>
                    {snackbar}
                </Panel>
            </View>
);
  openBase () {
    if (this.state.snackbar) return;
    this.setState({ snackbar:
      <Snackbar
        layout="vertical"
        onClose={() => this.setState({ snackbar: null })}
        before={<Avatar size={24} style={blueBackground}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
      >
        Уведомления о подкастах включены
      </Snackbar>
    });
  };

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
