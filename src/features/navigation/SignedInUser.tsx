import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from '../../app/store/auth/action';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../app/reducers/rootReducer';

export default function SignedInUser() {
  const { email } = useSelector((state: RootState) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(signOutUser());
    history.push('/');
  }

  return (
    <>
      <Dropdown id="dropdown-basic-button" title="Sign Out">
        <Dropdown.Toggle id="dropdown-basic">
          <div style={{ display: 'inline-block' }}>{email}</div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleClick} href="#">
            Sign Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
