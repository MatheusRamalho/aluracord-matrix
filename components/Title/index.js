// CONFIGS...
import appConfig from '../../config.json';

export function Title(props) {
    const Tag = props.tag || 'h1';

    return (
        <>
            <Tag> {props.children} </Tag>

            <style jsx>{`
                ${Tag} {
                    font-weight: 600;
                    color: ${appConfig.theme.colors.white};
                }
            `}</style>
        </>
    );
}