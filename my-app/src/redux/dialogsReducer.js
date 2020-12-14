const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        case SEND_MESSAGE: {            
            let newMessage = {
                id: 5,
                message: state.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const changeNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;