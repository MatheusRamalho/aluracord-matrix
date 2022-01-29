import React, { useEffect } from 'react';
import { Box, TextField } from '@skynexui/components';
import { createClient } from '@supabase/supabase-js';

// CONFIG...
import appConfig from '../config.json';

// COMPONENTS...
import { Header } from '../components/Header';
import { MessageList } from '../components/MessageList';

// SUPABASE...
const GUITHUB_API_URL = 'https://api.github.com/users';
const SUPABASE_URL = 'https://lxpdgqwthlywdwrjospm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ3MDk4OCwiZXhwIjoxOTU5MDQ2OTg4fQ.mKHPcXv4SgYZJvECyxHmW1j0wOi3amU7i4H-Snx5FQM';
const SUPABASE_CLIENT = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// UTILIZANDO JS PURO...
// fetch(`${SUPABASE_URL}/rest/v1/messages?select=*`, {
//     headers: {
//         'Content-Type': 'application/json',
//         'apikey': SUPABASE_ANON_KEY,
//         'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
//     }
// }).then((res) => {
//     return res.json();
// }).then((response) => {
//     console.log(response);
// });

export default function ChatPage() {
    const [newMessage, setNewMessage] = React.useState();
    const [messageList, setMessageList] = React.useState([]);

    React.useEffect(() => {
        // UTILIZANDO SUPABASE...
        SUPABASE_CLIENT
            .from('messages')
            .select('*')
            .order('id', { ascending: false })
            .then(({ data }) => {
                setMessageList(data);
            });
    }, []);

    const handleNewMessage = (newMessage) => {
        const message = {
            // id: messageList.lengh + 1,
            from: 'Testador',
            message: newMessage,
        };

        SUPABASE_CLIENT
            .from('messages')
            .insert([message])
            .then(({ data }) => {
                setMessageList([
                    data[0],
                    ...messageList,
                ]);
            });

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