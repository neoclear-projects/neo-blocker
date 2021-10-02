import { useEffect, useState } from 'react';
import Button from '../button';
import RoomListItem from '../room-list-item';
import JoinModal from './join-modal';
import './room-list.scss';

interface RoomListProps {
  isBlackList?: boolean
};

const defaultProps: RoomListProps = {
  isBlackList: true
};

interface BanItem {
  url: string,
  clickCount: number,
  lastAccessed: number
};

export default function RoomList(props = defaultProps) {
  const [joinVisible, setJoinVisible] = useState(false);
  const [banList, setBanList] = useState<BanItem[]>([]);

  useEffect(() => {
    chrome.storage.sync.get('whitelist', res => {
      if (!res.whitelist)
        chrome.storage.sync.set({ whitelist: [] });
      else if (!props.isBlackList)
        setBanList(res.whitelist);
    });
    chrome.storage.sync.get('blacklist', res => {
      if (!res.blacklist)
        chrome.storage.sync.set({ blacklist: [] });
      else if (props.isBlackList)
        setBanList(res.blacklist);
    });
  }, [props.isBlackList]);

  return (
    <div className='room-list'>
      <JoinModal
        show={joinVisible}
        onClose={() => setJoinVisible(false)}
        onAccept={url => {
          if (!url)
            return;

          // Format of whitelist
          // A list of: {
          //   url,
          //   clickCount,
          //   Last accessed
          // }

          chrome.storage.sync.get(props.isBlackList ? 'blacklist' : 'whitelist', res => {
            let list: BanItem[] = props.isBlackList ? res.blacklist : res.whitelist;

            // Do not add if already added
            if (list.find(ele => ele.url === url))
              return;
            
            list.push({
              url: url,
              clickCount: 0,
              lastAccessed: Date.now()
            });

            chrome.storage.sync.set(props.isBlackList ? {
              blacklist: list
            } : {
              whitelist: list
            });

            setBanList(list);
          });
        }}
      />

      <div className='room-list-btn'>
        <Button
          text={'Add To ' + (props.isBlackList ? 'Blacklist' : 'Whitelist')}
          onClick={() => setJoinVisible(!joinVisible)}
          inverted={true}
          shadowed={true}
        />
      </div>
      {
        function() {
          let roomList = [];
          for (const banItem of banList) {
            roomList.push(
              <RoomListItem
                url={banItem.url}
                clickCount={banItem.clickCount}
                lastAccessed={banItem.lastAccessed}
              />
            );
          }

          return roomList;
        }()
      }
    </div>
  );
};
