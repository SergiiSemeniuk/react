import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import siteBarReducer from './siteBarReducer';



let store = {

    _state: {
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Den', ava: 'https://libertycity.ru/uploads/download/gtasa_otherf/fulls/obkmdjipe5g27em88e63f3go91/13760447206412_rrjorrrr.jpg' },
                { id: 2, name: 'Doc', ava: 'https://libertycity.ru/uploads/download/gtasa_otherf/fulls/obkmdjipe5g27em88e63f3go91/1376044717554_rs-rrrjo-rrr.jpg' },
                { id: 3, name: 'Archi', ava: 'https://libertycity.net/uploads/download/gtasa_otherf/fulls/obkmdjipe5g27em88e63f3go91/13760447241664_rrrrss.jpg' },
                { id: 4, name: 'Rus', ava: 'https://libertycity.ru/uploads/download/gtasa_otherf/fulls/8ftmqrur02vi64p77hje8qv883/1452351964823_rssrr-rrrrrrrrjo.jpg' },
                { id: 5, name: 'Vova', ava: 'https://steamavatar.io/img/1477787657Itizq.png' }
            ],
            messages: [
                { id: 1, message: 'Hi!!!' },
                { id: 2, message: 'How are You?' },
                { id: 3, message: 'Yoyoyo :)' },
                { id: 4, message: ';-)' }
            ],
            newMessageText: ''
        },
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how a You?', likesCount: 20 },
                { id: 2, message: 'It\'s my first post', likesCount: 3 }
            ],
            newPostText: ''
        },
        siteBar: {
            friends: [
                { id: 1, name: 'Den', ava: 'https://libertycity.ru/uploads/download/gtasa_otherf/fulls/obkmdjipe5g27em88e63f3go91/13760447206412_rrjorrrr.jpg' },
                { id: 2, name: 'Doc', ava: 'https://libertycity.ru/uploads/download/gtasa_otherf/fulls/obkmdjipe5g27em88e63f3go91/1376044717554_rs-rrrjo-rrr.jpg' },
                { id: 3, name: 'Archi', ava: 'https://libertycity.net/uploads/download/gtasa_otherf/fulls/obkmdjipe5g27em88e63f3go91/13760447241664_rrrrss.jpg' },

            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.siteBar = siteBarReducer(this._state.siteBar, action);

        this._callSubscriber();
    }
};


export default store;