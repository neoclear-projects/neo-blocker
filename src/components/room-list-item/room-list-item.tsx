import Header from '../header';
import './room-list-item.scss';

// Single element of the room list
export default function RoomListItem({
  url,
  clickCount,
  lastAccessed
}: {
  url: string,
  clickCount: number,
  lastAccessed: number
}) {
  return (
    <div className='room-list-item'>
      <Header text={url} size='small' align='left' gridArea='room-list-item-header' />
      <div className='room-list-item-active'>{ 'Bans: ' + clickCount }</div>
      <div className='room-list-item-owner'>{ new Date(lastAccessed).toLocaleString() }</div>
    </div>
  );
};
