import css from "./_button.module.css";

type ButtonProps = {
    text?: string;
};

export function Button(props: ButtonProps) {
    const { text } = props;
    return <button className={css.button}>{text}</button>;
}
