type ButtonProps = {
    text?: string;
};

export function Button(props: ButtonProps) {
    const { text } = props;
    return <button>{text}</button>;
}
