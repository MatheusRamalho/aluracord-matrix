import { Box, Text, Image } from '@skynexui/components';

// CONFIG...
import appConfig from '../../config.json';

export function MessageList(props) {
    console.log('MessageList', props);

    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'auto',
                marginBottom: '1rem',
                padding: '1rem',
                color: appConfig.theme.colors.primary,

                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
            }}
        >
            {props.mess.map((mess) => {
                return (
                    <Text
                        key={mess.id}
                        tag="li"
                        styleSheet={{
                            width: '100%',
                            marginBottom: '0.75rem',
                            padding: '0.8rem 1rem',
                            borderRadius: '0.75rem',
                            color: appConfig.theme.colors.gray,

                            hover: {
                                backgroundColor: appConfig.theme.colors.secondary,
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                marginBottom: '0.5rem',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '1.7rem',
                                    height: '1.7rem',
                                    marginRight: '0.5rem',
                                    borderRadius: '50%',
                                    border: '0.125rem solid',
                                    borderColor: appConfig.theme.colors.primary,

                                    display: 'inline-block',
                                }}
                                src={`https://github.com/vanessametonini.png`}
                            />

                            <Text tag="strong"> {mess.from} - </Text>

                            <Text
                                tag="span"
                                styleSheet={{
                                    marginLeft: '0.5rem',

                                    fontSize: '0.625rem',
                                    fontStyle: 'italic',
                                    color: appConfig.theme.colors.gray,
                                }}
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                        </Box>

                        {mess.message}
                    </Text>
                );
            })}
        </Box>
    );
}

// Desafio de excluir uma mensagem
// Desafio de adiconar botao de enviar uma mensagem...
// usar o filter para percorrer o array e excluir uma mensagem...