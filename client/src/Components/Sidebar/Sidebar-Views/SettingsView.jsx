import Select from "@/components/common/Select";
import { useSettings } from "@/context/SettingContext";
import useResponsive from "@/hooks/useResponsive";
import { editorFonts } from "@/resources/Fonts";
import { editorThemes } from "@/resources/Themes";
import { langNames } from "@uiw/codemirror-extensions-langs";
import { useEffect } from "react";

function SettingsView() {
  const {
    theme,
    setTheme,
    language,
    setLanguage,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    showGitHubCorner,
    setShowGitHubCorner,
    resetSettings,
  } = useSettings();
  const { viewHeight } = useResponsive();

  const handleFontFamilyChange = (e) => setFontFamily(e.target.value);
  const handleThemeChange = (e) => setTheme(e.target.value);
  const handleLanguageChange = (e) => setLanguage(e.target.value);
  const handleFontSizeChange = (e) => setFontSize(parseInt(e.target.value));
  const handleShowGitHubCornerChange = (e) => setShowGitHubCorner(e.target.checked);

  useEffect(() => {
    const editor = document.querySelector(".cm-editor > .cm-scroller");
    if (editor) {
      editor.style.fontFamily = `${fontFamily}, monospace`;
    }
  }, [fontFamily]);

  return (
    <div className="flex flex-col items-center gap-2 p-4" style={{ height: viewHeight }}>
      <h1 className="view-title">Settings</h1>

      {/* Font Family + Size */}
      <div className="flex w-full items-end gap-2">
        <Select
          onChange={handleFontFamilyChange}
          value={fontFamily}
          options={editorFonts}
          title="Font Family"
        />
        <select
          value={fontSize}
          onChange={handleFontSizeChange}
          className="rounded-md border-none bg-darkHover px-4 py-2 text-white outline-none"
          title="Font Size"
        >
          {[...Array(13).keys()].map((size) => (
            <option key={size} value={size + 12}>
              {size + 12}
            </option>
          ))}
        </select>
      </div>

      {/* Theme */}
      <Select
        onChange={handleThemeChange}
        value={theme}
        options={Object.keys(editorThemes)}
        title="Theme"
      />

      {/* Language */}
      <Select
        onChange={handleLanguageChange}
        value={language}
        options={langNames}
        title="Language"
      />

      {/* GitHub Corner */}
      <div className="mt-4 flex w-full items-center justify-between">
        <label>Show GitHub corner</label>
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            className="peer sr-only"
            type="checkbox"
            onChange={handleShowGitHubCornerChange}
            checked={showGitHubCorner}
          />
          <div className="peer h-6 w-12 rounded-full bg-darkHover outline-none duration-100 after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:duration-500 peer-checked:after:translate-x-6" />
        </label>
      </div>

      {/* Reset */}
      <button
        className="mt-auto w-full rounded-md border-none bg-darkHover px-4 py-2 text-white outline-none"
        onClick={resetSettings}
      >
        Reset to default
      </button>
    </div>
  );
}

export default SettingsView;
