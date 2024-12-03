import chalk, { ChalkInstance } from "chalk";

type Props = {
    text: string;
    highlight: string
}

export const coloredLog = ({text, highlight}: Props) => {
    console.log(
        highlight,
        `${text}`
    );
}
