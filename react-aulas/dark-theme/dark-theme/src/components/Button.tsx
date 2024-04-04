import { useTheme } from "@/contexts/ThemeContext";

type Props = {
    label: string;
    onClick: () => void;
}

export const Button = ({label, onClick}: Props) => {
    const themeCtx = useTheme()
    return (
        <div>
            <button
            className={`border px-4 py-3 rounded-md
            ${themeCtx?.theme === 'dark'? 
            'bg-white text-black':
            'bg-black text-white'
            }
            `}
            onClick={onClick}
            >
                {label}
            </button>
        </div>
    )
}