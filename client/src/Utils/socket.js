import io from 'socket.io-client'

const url = "http://localhost:3000"

const createSocketConnection = ()=>{
    return io(url);
}
export default createSocketConnection;