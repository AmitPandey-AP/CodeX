import { useState } from "react";
import FileStructureView from "@/components/files/FileStructureView";
import { useFileSystem } from "@/context/FileContext";
import useResponsive from "@/hooks/useResponsive";
import cn from "classnames";
import { BiArchiveIn } from "react-icons/bi";
import { TbFileUpload } from "react-icons/tb";
import { v4 as uuidV4 } from "uuid";
import { toast } from "react-hot-toast";

function FilesView() {
  const { downloadFilesAndFolders, updateDirectory } = useFileSystem();
  const { viewHeight, minHeightReached } = useResponsive();
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenDirectory = async () => {
    try {
      setIsLoading(true);

      if ("showDirectoryPicker" in window) {
        const directoryHandle = await window.showDirectoryPicker();
        await processDirectoryHandle(directoryHandle);
        return;
      }

      if ("webkitdirectory" in HTMLInputElement.prototype) {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.webkitdirectory = true;

        fileInput.onchange = async (e) => {
          const files = e.target.files;
          if (files) {
            const structure = await readFileList(files);
            updateDirectory("", structure);
          }
        };

        fileInput.click();
        return;
      }

      toast.error("Your browser does not support directory selection.");
    } catch (error) {
      console.error("Error opening directory:", error);
      toast.error("Failed to open directory");
    } finally {
      setIsLoading(false);
    }
  };

  const processDirectoryHandle = async (directoryHandle) => {
    try {
      toast.loading("Getting files and folders...");
      const structure = await readDirectory(directoryHandle);
      updateDirectory("", structure);
      toast.dismiss();
      toast.success("Directory loaded successfully");
    } catch (error) {
      console.error("Error processing directory:", error);
      toast.error("Failed to process directory");
    }
  };

  const readDirectory = async (directoryHandle) => {
    const children = [];
    const blackList = ["node_modules", ".git", ".vscode", ".next"];

    for await (const entry of directoryHandle.values()) {
      if (entry.kind === "file") {
        const file = await entry.getFile();
        const newFile = {
          id: uuidV4(),
          name: entry.name,
          type: "file",
          content: await readFileContent(file),
        };
        children.push(newFile);
      } else if (entry.kind === "directory") {
        if (blackList.includes(entry.name)) continue;

        const newDirectory = {
          id: uuidV4(),
          name: entry.name,
          type: "directory",
          children: await readDirectory(entry),
          isOpen: false,
        };
        children.push(newDirectory);
      }
    }
    return children;
  };

  const readFileList = async (files) => {
    const children = [];
    const blackList = ["node_modules", ".git", ".vscode", ".next"];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const pathParts = file.webkitRelativePath.split("/");

      if (pathParts.some((part) => blackList.includes(part))) continue;

      if (pathParts.length > 1) {
        const directoryPath = pathParts.slice(0, -1).join("/");
        let directory = children.find(
          (item) => item.name === directoryPath && item.type === "directory"
        );

        if (!directory) {
          directory = {
            id: uuidV4(),
            name: directoryPath,
            type: "directory",
            children: [],
            isOpen: false,
          };
          children.push(directory);
        }

        const newFile = {
          id: uuidV4(),
          name: file.name,
          type: "file",
          content: await readFileContent(file),
        };

        directory.children.push(newFile);
      } else {
        const newFile = {
          id: uuidV4(),
          name: file.name,
          type: "file",
          content: await readFileContent(file),
        };
        children.push(newFile);
      }
    }

    return children;
  };

  const readFileContent = async (file) => {
    const MAX_FILE_SIZE = 1024 * 1024;

    if (file.size > MAX_FILE_SIZE) {
      return `File too large: ${file.name} (${Math.round(file.size / 1024)}KB)`;
    }

    try {
      return await file.text();
    } catch (error) {
      console.error(`Error reading file ${file.name}:`, error);
      return `Error reading file: ${file.name}`;
    }
  };

  return (
    <div
      className="flex select-none flex-col gap-1 px-4 py-2"
      style={{ height: viewHeight, maxHeight: viewHeight }}
    >
      <FileStructureView />
      <div
        className={cn(`flex min-h-fit flex-col justify-end pt-2`, {
          hidden: minHeightReached,
        })}
      >
        <hr />
        <button
          className="mt-2 flex w-full justify-start rounded-md p-2 transition-all hover:bg-darkHover"
          onClick={handleOpenDirectory}
          disabled={isLoading}
        >
          <TbFileUpload className="mr-2" size={24} />
          {isLoading ? "Loading..." : "Open File/Folder"}
        </button>
        <button
          className="flex w-full justify-start rounded-md p-2 transition-all hover:bg-darkHover"
          onClick={downloadFilesAndFolders}
        >
          <BiArchiveIn className="mr-2" size={22} /> Download Code
        </button>
      </div>
    </div>
  );
}

export default FilesView;
