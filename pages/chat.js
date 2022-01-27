import React from 'react';
import { Box, TextField } from '@skynexui/components';

// CONFIG...
import appConfig from '../config.json';

// COMPONENTS...
import { Header } from '../components/Header';
import { MessageList } from '../components/MessageList';

export default function ChatPage() {
    /*
        - [] lista de mensagens
    */
    const [newMessage, setNewMessage] = React.useState();
    const [messageList, setMessageList] = React.useState([]);

    const handleNewMessage = (newMessage) => {
        const message = {
            id: messageList.lengh + 1,
            from: 'Testador',
            message: newMessage,
        };

        setMessageList([
            message, // Adiciona a nova mensagem na lista...
            ...messageList, // Expande a lista de mensagens existente com o spread...
        ]);
        setNewMessage('');
    }

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleNewMessage(newMessage);
        }
    }

    return (
        <Box
            styleSheet={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                backgroundColor: appConfig.theme.colors.tertiary,
                background: 'linear-gradient(114deg, rgba(10,25,41,1) 0%, rgba(0,30,60,1) 35%, rgba(51,153,255,1) 100%)'
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,

                    maxWidth: '95%',
                    height: '100%',
                    maxHeight: '95vh',
                    padding: '2rem',
                    borderRadius: '1.25rem',
                    border: '0.063rem solid rgba(194, 224, 255, 0.08)',
                    backgroundColor: 'rgba(19, 47, 76, 0.5)',
                    backdropFilter: 'blur(0.5rem)',
                }}
            >
                <Header />

                <Box
                    styleSheet={{
                        position: 'relative',

                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,

                        height: '80%',
                        padding: '3rem 2rem',
                        border: '0.063rem solid rgba(194, 224, 255, 0.08)',
                        borderRadius: '1.25rem',
                        backgroundColor: appConfig.theme.colors.tertiary,
                    }}
                >
                    <MessageList mess={messageList} />
                    {/* {messageList != null &&
                        <ul>
                            {messageList.map((mess) => {
                                return (
                                    <li key={mess.id}>
                                        {mess.from}: {mess.message}
                                    </li>
                                );
                            })}
                        </ul>
                    } */}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            type="textarea"
                            placeholder="Insira sua mensagem aqui..."
                            value={newMessage}
                            onChange={(event) => setNewMessage(event.target.value)}
                            onKeyPress={handleEnter}
                            styleSheet={{
                                resize: 'none',
                                width: '100%',
                                height: '4rem',
                                // marginRight: '0.75rem',
                                padding: '1rem',
                                border: '0',
                                borderRadius: '0.75rem',
                                backgroundColor: appConfig.theme.colors.secondary,
                                color: appConfig.theme.colors.white,
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}