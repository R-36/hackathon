import React from 'react';
import connect from '@vkontakte/vk-connect';
import Icon24Gift from '@vkontakte/icons/dist/24/gift';
import Icon24VkLogo from '@vkontakte/icons/dist/24/logo_vk';
import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {Panel, Alert, Group, PanelHeader, Gallery, Div, Button} from "@vkontakte/vkui"


class Market extends React.Component {

    state = {
        showImg: false
    };

    showImg = () => {
        this.setState({showImg: true});
    };
    async sendPay() {
      console.log("dfvdfv");
      const pays = await connect.send("VKWebAppOpenPayForm", {"app_id": 7150912, "action": "pay-to-user", "params": { "user_id": 193790619, "amount": 100}});

    }

    serverGet(){
      fetch('https://95.213.37.146:8080/api-docs', {
      method: "GET",
      // body: JSON.stringify(''),
    }).then(function(response) {
      console.log(response.status);     //=> number 100–599
      console.log(response.statusText); //=> String
      console.log(response.headers);    //=> Headers
      console.log(response.url);        //=> String

      return response.text()
    }, function(error) {
      console.log(error.message); //=> String
    })
    }
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

    render () {
        const {id} = this.props;
          return (
              <Panel id={id}>
                <PanelHeader>Магазин</PanelHeader>
                <Div  align="center">
                  <Button before={<Icon24VkLogo/>} className="storeButton1" onClick={e => this.sendPay()}>VK PAY</Button>
                  <Button before={<Icon24Gift/>} onClick={e => this.serverGet()} id="storeButton2">Бонусы</Button>
                </Div>
                <Group title="Centered">
                  <Gallery
                    slideWidth="90%"
                    align="center"
                    style={{ height: 150 }}
                  >
                    <div style={{ backgroundColor: 'var(--destructive)' }} />
                    <div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
                    <div style={{ backgroundColor: 'var(--accent)' }} />
                  </Gallery>
                </Group>
                <Group title="Centered">
                  <Gallery
                    slideWidth="90%"
                    align="center"
                    style={{ height: 150 }}
                  >
                    <div style={{ backgroundColor: 'var(--destructive)' }} />
                    <div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
                    <div style={{ backgroundColor: 'var(--accent)' }} />
                  </Gallery>
                </Group>
                <Group title="Centered">
                  <Gallery
                    slideWidth="90%"
                    align="center"
                    style={{ height: 150 }}
                  >
                    <div style={{ backgroundColor: 'var(--destructive)' }} />
                    <div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
                    <div style={{ backgroundColor: 'var(--accent)' }} />
                  </Gallery>
                </Group>
                <Group title="Centered">
                  <Gallery
                    slideWidth="90%"
                    align="center"
                    style={{ height: 150 }}
                  >
                    <div style={{ backgroundColor: 'var(--destructive)' }} />
                    <div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
                    <div style={{ backgroundColor: 'var(--accent)' }} />
                  </Gallery>
                </Group>
              </Panel>
          )
        }
      }


const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default Market;
