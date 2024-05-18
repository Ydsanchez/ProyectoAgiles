
interface LinkTextProps {
    text:string;
    linkText:string;
    route:string;
}

export const LinkText = ({text,linkText,route}:LinkTextProps) => {
  return (
    <p className="text-center text-sm mt-4">
      {text}{" "}
      <a href={route} className="text-blue-500">
        {linkText}
      </a>
    </p>
  );
};
