interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className = '' }) => (
  <h4 className={`dark:bg-black-2 text-xl font-semibold text-black dark:text-primary ${className}`}>
    {text}
  </h4>
);

export default Title;