import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setBreadcrumbs } from '../../../redux/data/dataActions';

export default function BasicBreadcrumbs() {
  const { breadcrumbs } = useSelector(({ data }) => data);
  const dispatch = useDispatch();
  const history = useHistory();
  function handleClick(event) {
    event.preventDefault();
    if (event.target.id == '0') {
      dispatch(setBreadcrumbs([{ name: 'Главная', href: '/' }]));
    }
    history.push(event.target.name);
  }

  return (
    <div style={{ marginTop: '10px' }} role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map(({ name, href }, index) => (
          <Link key={index} id={index} name={href} underline="hover" color="inherit" href={href}>
            {name}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}
