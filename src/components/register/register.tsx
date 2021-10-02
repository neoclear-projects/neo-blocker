import Button from '../button';
import Header from '../header';
import Input from '../input';
import PageCenter from '../page-center';
import './register.scss';

/**
 * Register component
 * 
 * @returns Register component
 */
export default function Register() {

  return (
    // Used page center to center register component
    <PageCenter
      child={
        // The register component
        <div id='register'>
          <Header
            text='Register'
            size='big'
            gridArea='header'
          />
          <Input
            placeholder='username'
            onChange={() => {}}
            gridArea='username'
          />
          <Input
            placeholder='password'
            onChange={() => {}}
            type='password'
            gridArea='password'
          />
          <Input
            placeholder='confirm password'
            onChange={() => {}}
            type='password'
            gridArea='confirm-password'
          />
          <Input
            placeholder='invitation code'
            onChange={() => {}}
            type='text'
            gridArea='code'
          />
          <Button
            text='Register'
            onClick={() => {}}
            gridArea='register'
            inverted={true}
          />
          <Button
            onClick={() => {}}
            text='Login'
            gridArea='login'
          />
        </div>
      }
    />
  );
}
