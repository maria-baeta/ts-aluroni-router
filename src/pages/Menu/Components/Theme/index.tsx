import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
interface THEME {
  setTheme: () => void;
  themeDark: boolean;
}

export const Theme = ({ setTheme, themeDark }: THEME) => {
  return (
    <div onClick={() => setTheme()}>
      {themeDark ? <MdDarkMode size={20} /> : <MdOutlineDarkMode size={20} />}
    </div>
  );
};
