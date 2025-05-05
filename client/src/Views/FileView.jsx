import React, { useState } from "react";
import {
  Folder,
  FolderOpen,
  FileCode2,
  Pencil,
  Trash,
  Plus,
} from "lucide-react";

// Generate unique IDs for new items
let nextId = 100;

const createNode = (type) => ({
  id: nextId++,
  type,
  name: type === "folder" ? "New Folder" : "New File",
  children: type === "folder" ? [] : undefined,
});

const TreeNode = ({
  node,
  onUpdate,
  onDelete,
  selectedId,
  setSelectedId,
}) => {
  const [expanded, setExpanded] = useState(true);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(node.name);
  const isSelected = selectedId === node.id;

  const handleRename = () => {
    node.name = name;
    setEditing(false);
    onUpdate();
  };

  const handleAdd = (type) => {
    node.children = node.children || [];
    node.children.push(createNode(type));
    setExpanded(true);
    onUpdate();
  };

  return (
    <div className="ml-2 relative">
      <div
        className={`flex items-center py-0.5 group cursor-pointer ${
          isSelected ? "bg-gray-700 rounded" : "hover:bg-gray-800"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedId(node.id);
        }}
        onDoubleClick={(e) => {
          e.stopPropagation();
          setSelectedId(node.id);
          setEditing(true); // Now rename triggers only on double click
        }}
      >
        {node.type === "folder" ? (
          expanded ? (
            <FolderOpen
              className="text-yellow-400 mr-1"
              size={16}
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(false);
              }}
            />
          ) : (
            <Folder
              className="text-yellow-400 mr-1"
              size={16}
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(true);
              }}
            />
          )
        ) : (
          <FileCode2 className="text-blue-400 mr-1" size={16} />
        )}

        {editing ? (
          <input
            className="bg-gray-600 text-white px-1 rounded w-40 text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleRename}
            onKeyDown={(e) => e.key === "Enter" && handleRename()}
            autoFocus
          />
        ) : (
          <span className="text-sm text-gray-200">{node.name}</span>
        )}

        {isSelected && (
          <div className="flex ml-2 gap-1">
            <Pencil
              size={14}
              className="text-gray-400 hover:text-blue-300 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setEditing(true);
              }}
            />
            <Trash
              size={14}
              className="text-gray-400 hover:text-red-400 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            />
            {node.type === "folder" && (
              <>
                <Plus
                  size={14}
                  className="text-green-400 cursor-pointer"
                  title="Add File"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAdd("file");
                  }}
                />
                <Plus
                  size={14}
                  className="text-yellow-400 cursor-pointer"
                  title="Add Folder"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAdd("folder");
                  }}
                />
              </>
            )}
          </div>
        )}
      </div>

      {node.type === "folder" && expanded && node.children?.length > 0 && (
        <div className="pl-4 border-l border-gray-600 ml-1">
          {node.children.map((child, idx) => (
            <TreeNode
              key={child.id}
              node={child}
              onUpdate={onUpdate}
              onDelete={() => {
                node.children.splice(idx, 1);
                onUpdate();
              }}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FileExplorer = () => {
  const [tree, setTree] = useState([
    {
      id: 1,
      type: "folder",
      name: "client",
      children: [
        { id: 2, type: "folder", name: "node_modules", children: [] },
        { id: 3, type: "folder", name: "public", children: [] },
        {
          id: 4,
          type: "folder",
          name: "src",
          children: [
            { id: 5, type: "folder", name: "assets", children: [] },
            {
              id: 6,
              type: "folder",
              name: "Components",
              children: [
                { id: 7, type: "file", name: "Footer.jsx" },
                { id: 8, type: "file", name: "Form.jsx" },
                { id: 9, type: "file", name: "Navbar.jsx" },
                { id: 10, type: "file", name: "Sidebar.jsx" },
              ],
            },
            {
              id: 11,
              type: "folder",
              name: "Context",
              children: [{ id: 12, type: "file", name: "AppContext.jsx" }],
            },
            {
              id: 13,
              type: "folder",
              name: "Pages",
              children: [
                { id: 14, type: "file", name: "About.jsx" },
                { id: 15, type: "file", name: "Editor.jsx" },
                { id: 16, type: "file", name: "Hero.jsx" },
                { id: 17, type: "file", name: "Home.jsx" },
                { id: 18, type: "file", name: "Login.jsx" },
                { id: 19, type: "file", name: "Profile.jsx" },
                { id: 20, type: "file", name: "Room.jsx" },
              ],
            },
            {
              id: 21,
              type: "folder",
              name: "Views",
              children: [{ id: 22, type: "file", name: "ChatView.jsx" }],
            },
          ],
        },
      ],
    },
  ]);

  const [selectedId, setSelectedId] = useState(null);

  const refresh = () => setTree([...tree]);

  return (
    <div
      className="bg-[#1e1e1e] text-white text-sm p-4 w-[350px] min-h-screen font-mono"
      onClick={() => setSelectedId(null)}
    >
      <div
        className="flex justify-between items-center mb-3"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-gray-300 font-semibold">EXPLORER</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            tree.push(createNode("folder"));
            refresh();
          }}
          className="bg-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-600"
        >
          + Folder
        </button>
      </div>

      {tree.map((node, index) => (
        <TreeNode
          key={node.id}
          node={node}
          onUpdate={refresh}
          onDelete={() => {
            tree.splice(index, 1);
            refresh();
          }}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
};

export default FileExplorer;
