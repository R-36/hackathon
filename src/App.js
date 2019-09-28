import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {goBack, closeModal, setStory} from "./js/store/router/actions";
import * as VK from './js/services/VK';

import {Epic, View, Root, Tabbar, ModalRoot, TabbarItem, ConfigProvider} from "@vkontakte/vkui";
import './css/test.css';

import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Icon28User from '@vkontakte/icons/dist/28/user';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';

import HomePanelBase from './js/panels/home/base';
import HomePanelGroups from './js/panels/home/groups';

import MorePanelBase from './js/panels/more/base';
import MorePanelExample from './js/panels/more/example';

import HomeBotsListModal from './js/components/modals/HomeBotsListModal';
import HomeBotInfoModal from './js/components/modals/HomeBotInfoModal';

import Market from './js/panels/market/store';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.lastAndroidBackAction = 0;
    }

    componentDidMount() {
        const {goBack, dispatch} = this.props;

        dispatch(VK.initApp());
        window.onpopstate = () => {
            let timeNow = +new Date();

            if (timeNow - this.lastAndroidBackAction > 500) {
                this.lastAndroidBackAction = timeNow;

                goBack('Android');
            } else {
                window.history.pushState(null, null);
            }
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {activeView, activeStory, activePanel, scrollPosition} = this.props;

        if (
            prevProps.activeView !== activeView ||
            prevProps.activePanel !== activePanel ||
            prevProps.activeStory !== activeStory
        ) {
            let pageScrollPosition = scrollPosition[activeStory + "_" + activeView + "_" + activePanel] || 0;

            window.scroll(0, pageScrollPosition);
        }
    }

    getProfile() {
      connect.send("VKWebAppGetUserInfo", {});
    }

    render() {
        const {goBack, setStory, closeModal, popouts, activeView, activeStory, activePanel, activeModals, panelsHistory, colorScheme} = this.props;

        let history = (panelsHistory[activeView] === undefined) ? [activeView] : panelsHistory[activeView];
        let popout = (popouts[activeView] === undefined) ? null : popouts[activeView];
        let activeModal = (activeModals[activeView] === undefined) ? null : activeModals[activeView];

        const homeModals = (
            <ModalRoot activeModal={activeModal}>
                <HomeBotsListModal
                    id="MODAL_PAGE_BOTS_LIST"
                    onClose={() => closeModal()}
                />
                <HomeBotInfoModal
                    id="MODAL_PAGE_BOT_INFO"
                    onClose={() => closeModal()}
                />
            </ModalRoot>
        );


        return (
            <ConfigProvider isWebView={true} scheme={colorScheme}>
                <Epic activeStory={activeStory} tabbar={
                    <Tabbar >
                        <TabbarItem
                            onClick={() => setStory('market', 'store')}
                            selected={activeStory === 'market'}
                        ><Icon28MarketOutline/></TabbarItem>
                        <TabbarItem
                            onClick={() => setStory('more', 'callmodal')}
                            selected={activeStory === 'more'}
                        ><Icon28ArticleOutline/></TabbarItem>
                        <TabbarItem
                            onClick={() => setStory('home', 'base')}
                            selected={activeStory === 'home'}
                        ><Icon28User/></TabbarItem>
                    </Tabbar>
                }>
                    <Root id="home" activeView={activeView} popout={popout}>
                        <View
                            id="home"
                            modal={homeModals}
                            activePanel={activePanel}
                            history={history}
                            onSwipeBack={() => goBack()}
                        >
                            <HomePanelBase id="base" withoutEpic={false}/>
                            <HomePanelGroups id="groups"/>
                        </View>
                    </Root>
                    <Root id="market" activeView={activeView} popout={popout}>
                        <View
                            id="market"
                            modal={homeModals}
                            activePanel={activePanel}
                            history={history}
                            onSwipeBack={() => goBack()}
                        >
                            <Market id="store" withoutEpic={false}/>
                        </View>
                    </Root>
                    <Root id="more" activeView={activeView} popout={popout}>
                        <View
                            id="more"
                            modal={homeModals}
                            activePanel={activePanel}
                            history={history}
                            onSwipeBack={() => goBack()}
                        >
                            <MorePanelBase id="callmodal"/>
                        </View>
                        <View
                            id="modal"
                            modal={homeModals}
                            activePanel={activePanel}
                            history={history}
                            onSwipeBack={() => goBack()}
                        >
                            <MorePanelExample id="filters"/>
                        </View>
                    </Root>
                </Epic>
            </ConfigProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeView: state.router.activeView,
        activePanel: state.router.activePanel,
        activeStory: state.router.activeStory,
        panelsHistory: state.router.panelsHistory,
        activeModals: state.router.activeModals,
        popouts: state.router.popouts,
        scrollPosition: state.router.scrollPosition,

        colorScheme: state.vkui.colorScheme
    };

};


function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({setStory, goBack, closeModal}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
