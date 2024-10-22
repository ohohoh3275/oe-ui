import css from "./_button.module.css";

/*
- properties
    text: string
    isLoading: boolean
    size: sm, md, lg, xl
    variant: default, primary, success, warning, error, link
*/

type Size = "sm" | "md" | "lg" | "xl";
type Variant = "default" | "primary" | "success" | "warning" | "error" | "link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    size?: Size;
    variant?: Variant;
    isLoading?: boolean;
}

const Loader = () => {
    return (
        <div className={css.loader}>
            <div className={css.dot} />
            <div className={css.dot} />
            <div className={css.dot} />
        </div>
    );
};

export function Button(props: ButtonProps) {
    const { text, size = "md", variant = "default", isLoading = false } = props;

    return (
        <button
            className={`${css.button__wrapper} ${
                css[`button__wrapper--${size}`]
            } ${css[`button__wrapper--${variant}`]}`}
            disabled={isLoading}
        >
            {isLoading ? <Loader /> : text}
        </button>
    );
}
