import css from "./_button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    size?: "xs" | "small" | "medium" | "large" | "xl";
    variant?: "default" | "success" | "warning" | "error";
}

export function Button(props: ButtonProps) {
    const { text } = props;
    return <button className={css.button}>{text}</button>;
}
