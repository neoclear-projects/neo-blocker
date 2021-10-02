import Header from '../header';
import Label from '../label';
import PageCenter from '../page-center';
import './room-body.scss';

export default function RoomBody() {
  return (
    <PageCenter child={
      <div id='about'>
        <Header
          text='About Neo Blocker'
          size='big'
        />
        <p className='about-content'>
          Neo Blocker is a simple extension that blocks websites for focused students and workers.
        </p>
        <Label
          text={
            <div>
              <li>It is light weight: all UI components are written with minimal CSS and JS code</li>
              <li>It is simple: It only contains a simple dashboard page</li>
              <li>It is safe: It only detects your URL on loading. It never reads your browsing history</li>
            </div>
          }
          gridArea='label'
          bordered={true}
        />
      </div>
    } />
    // <div id='room-body'>
      
    // </div>
  );
};
