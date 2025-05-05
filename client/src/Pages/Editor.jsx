import React from 'react'
import Sidebar from '../Components/Sidebar'
import RunCodePanel from '../Views/RunView'
import GroupChat from '../Views/ChatView'
import Collab from '../Views/CollaboratorView'
import SettingsPanel from '../Views/SettingView'
import FileExplorer from '../Views/FileView'
import { useAppContext } from '../Context/AppContext'

function Editor() {

  const { viewState, setViewState } = useAppContext();

  return (
    <>
      <div className='flex gap-1'>
        <Sidebar />
        {
          viewState == "Folder" ? <FileExplorer /> : viewState == "Chat" ? <GroupChat /> : viewState == "Run" ? <RunCodePanel /> : viewState == "Collaborator" ? <Collab /> : <SettingsPanel />
        }

      </div>
    </>
  )
}

export default Editor