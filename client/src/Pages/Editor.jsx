import React from 'react'
import Sidebar from '../Components/Sidebar'
import RunCodePanel from '../Views/RunView'
import GroupChat from '../Views/ChatView'
import Collab from '../Views/CollaboratorView'
import SettingsPanel from '../Views/SettingView'
import FileExplorer from '../Views/FileView'

function Editor() {
  return (
    <>
      <div className='flex gap-1'>
        <Sidebar />
        {/* <RunCodePanel /> */}
        {/* <GroupChat /> */}
        {/* <Collab /> */}
        {/* <SettingsPanel /> */}
        <FileExplorer />
      </div>
    </>
  )
}

export default Editor