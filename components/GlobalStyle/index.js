// CONFIGS...
import appConfig from '../../config.json';

export function GlobalStyle() {
    return (
        <style global jsx>{`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                list-style: none;
            }

            body {
                background-color: ${appConfig.theme.colors.secondary};

                font-family: 'Open Sans', sans-serif;
                font-weight: 400;
                color: ${appConfig.theme.colors.white};
            }

            html, body, #__next {
                min-height: 100vh;

                display: flex;
                flex: 1;
            }

            #__next {
                flex: 1;
            }

            #__next > * {
                flex: 1;
            }
        `}</style>
    );
}