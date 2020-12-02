let renderEntireTree = () => {
    console.log('State changed')
};


let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.unshift(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
};

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText,

    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    renderEntireTree(state);
};

export const onTextChange = (text) => {
    state.profilePage.newPostText = text;
    renderEntireTree(state);
};

export const changeNewMessageText = (text) => {
    state.dialogsPage.newMessageText = text;
    renderEntireTree(state);
};

export const subscribe = (observer) => {
    renderEntireTree = observer;
}


export default state;