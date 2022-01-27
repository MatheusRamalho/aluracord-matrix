import { Box, Text, Button } from '@skynexui/components';

// CONFIG...
import appConfig from '../../config.json';

export function Header() {
    return (
        <>
            <Box
                styleSheet={{
                    width: '100%',
                    marginBottom: '1rem',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Text variant='heading4' > Chat</Text>

                <Button
                    label='Logout'
                    href="/"

                    styleSheet={{
                        minHeight: '2.5rem',
                        border: 'none',
                        borderRadius: '0.75rem',
                        backgroundColor: appConfig.theme.colors.tertiary,
                        hover: {
                            backgroundColor: appConfig.theme.colors.primary,
                        }
                    }}
                />
            </Box>
        </>
    )
}