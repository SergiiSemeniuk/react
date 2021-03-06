const SEND_MESSAGE = 'SEND_MESSAGE';


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
   
};

const dialogsReducer = (state = initialState, action) => {
  
    switch (action.type) {          
                   
        case SEND_MESSAGE: 
            let newMessage = {
                id: 5,
                message: action.newMessageText
            };         
            return {                
                ...state,
                messages: [...state.messages, newMessage],               
            }            
                  
        default:
            return state;
    }

}

export const addMessage = (newMessageText) => ({ type: SEND_MESSAGE , newMessageText});


export default dialogsReducer;