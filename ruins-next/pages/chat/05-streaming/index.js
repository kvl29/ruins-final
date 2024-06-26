import StreamScreen from '@/components/tyler/center_streamScreen/streamScreen';
import MemberList from '@/components/tyler/left_memberList/memberList';
import ChatRoom from '@/components/tyler/right_chatroom/chatRoom';
import useGift from '@/contexts/use-gift';
import { socket } from '@/src/socket';
import styles from '@/styles/streaming.module.css';
import { useEffect, useState } from 'react';

export default function Streaming() {
  const { totalBonus } = useGift()
  const [isConnected, setIsConnected] = useState(socket.connected);

  // 留言功能
  const [comment, setComment] = useState([])

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    return () => {
      if (socket.connected) {
        socket.disconnect();
      }
    }
  }, [])

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
      console.log(`連線成功`);
    }

    const onDisconnect = () => {
      setIsConnected(false);
    }

    const handleReceiveComment = (receiveComment) => {

      setComment(prevComment => [...prevComment, {
        id: receiveComment.id,
        name: receiveComment.name,
        profile: receiveComment.profile,
        comment: receiveComment.comment,
        reply: receiveComment.reply,
        target: receiveComment.target,
      }])
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('receiveComment', handleReceiveComment);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('receiveComment', handleReceiveComment);
    };
  }, []);

  return (
    <>
      {/* 最大框 */}
      <div className={styles['container']}>

        {/* 左欄 */}
        <MemberList
          totalBonus={totalBonus}
        ></MemberList>

        {/* 中欄 */}
        <StreamScreen
          isConnected={isConnected}
        ></StreamScreen>

        {/* 右欄 */}
        <ChatRoom
          comment={comment}
          setComment={setComment}
          isConnected={isConnected}
        ></ChatRoom>
      </div>
    </>
  )
}
