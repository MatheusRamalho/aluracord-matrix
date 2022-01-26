import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';

// CONFIGS...
import appConfig from '../config.json';

// COMPONENTS...
import { Title } from '../components/Title';

export default function HomePage() {
    const [userName, setUserName] = React.useState('MatheusRamalho');
    const routing = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        routing.push('/chat');
    }

    return (
        <>
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
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: { xs: 'column', sm: 'row', },

                        width: '100%',
                        maxWidth: '50rem',
                        margin: '1rem',
                        padding: '5rem 3rem',
                        borderRadius: '1.25rem',
                        border: '0.063rem solid rgba(194, 224, 255, 0.08)',
                        backgroundColor: 'rgba(19, 47, 76, 0.5)',
                        backdropFilter: 'blur(0.5rem)',
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={handleSubmit}
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',

                            width: { xs: '100%', sm: '50%' },
                            marginBottom: '2rem',
                            textAlign: 'center',
                        }}
                    >
                        <Title tag="h2"> Boas vindas de volta! </Title>

                        <Text
                            variant="body3"
                            styleSheet={{
                                margin: '0.5rem 0 2rem 0',
                                fontSize: '1rem',
                                color: appConfig.theme.colors.gray,
                            }}
                        >
                            {appConfig.name}
                        </Text>

                        <TextField
                            value={userName}
                            onChange={(event) => setUserName(event.target.value)}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.white,
                                    mainColor: appConfig.theme.colors.gray,
                                    mainColorHighlight: appConfig.theme.colors.primary,
                                    backgroundColor: appConfig.theme.colors.tertiary,
                                },
                            }}

                            styleSheet={{
                                minHeight: '3rem',
                                marginBottom: '1rem',
                                border: 'none',
                                borderRadius: '0.75rem',
                            }}
                        />

                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.white,
                                mainColor: appConfig.theme.colors.primary,
                            }}

                            styleSheet={{
                                minHeight: '2.5rem',
                                border: 'none',
                                borderRadius: '0.75rem',
                                textTransform: 'uppercase',
                            }}
                        />
                    </Box>

                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            maxWidth: '12.5rem',
                            minHeight: '15rem',
                            padding: '1rem',
                            borderRadius: '1.25rem',
                            backgroundColor: appConfig.theme.colors.tertiary,

                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1,
                        }}
                    >
                        <Image
                            styleSheet={{
                                width: '8rem',
                                height: '8rem',
                                marginBottom: '1rem',
                                borderRadius: '50%',
                                border: '0.200rem solid',
                                borderColor: appConfig.theme.colors.primary,
                            }}
                            src={`https://github.com/${userName}.png`}
                        />

                        <Text
                            variant="body4"
                            styleSheet={{
                                padding: '0.3rem 0.7rem',
                                borderRadius: '0.44rem',
                                backgroundColor: appConfig.theme.colors.primary,
                                color: appConfig.theme.colors.white,
                            }}
                        >
                            {userName}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

// Criar validação de se o input tiver menos de dois caracteres, dar disabled no button e não mostrar a imagem.