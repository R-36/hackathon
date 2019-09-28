import React from 'react';

import connect from '@vkontakte/vk-connect';


import {Panel, Alert, Group, PanelHeader, Cell, Avatar} from "@vkontakte/vkui"


class HomePanelBase extends React.Component {


    state = {
        groups: {
            admined: [],
            other: [],
        },
        loading: true,
        errorGetAuthToken: false,
        showImg: false,
        firstName: "",
        lastName: "",
        ava: ""
    };

    showImg = () => {
        this.setState({showImg: true});
    };

    openPopout() {
        this.props.openPopout(
            <Alert
                actions={[{
                    title: 'Нет',
                    autoclose: true,
                    style: 'cancel',
                }, {
                    title: 'Да',
                    autoclose: true,
                    action: this.showImg
                }]}
                onClose={() => this.props.closePopout()}
            >
                <h2>Вопрос значит</h2>
                <p>Вас роняли в детстве?</p>
            </Alert>
        );
    }



    async componentDidMount() {
      const profile = await connect.sendPromise("VKWebAppGetUserInfo");
      this.state.firstName = profile.first_name;
      this.state.lastName = profile.last_name;
      this.state.ava = profile.photo_200;
      this.forceUpdate();



    }
    render() {
        const {id} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Профиль</PanelHeader>
                <Group>
                  <Cell
                    photo="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"
                    description="VKontakte"

                    before={<Avatar src={this.state.ava} size={80}/>}
                    size="l"
                  >
                    {this.state.firstName} {this.state.lastName}
                  </Cell>
                </Group>
            </Panel>
        );
    }

}



export default HomePanelBase;
