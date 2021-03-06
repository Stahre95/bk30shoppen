import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    width: '100%',
    backgroundColor: '#202020',
    color: '#fff',
    height: '100vh'
  },
  emptyCart: {
    paddingTop: '10%'
  },
  emptyContainer: {
    textAlign: 'center',
    paddingTop: '10%'
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    paddingTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: '5%'
  },
}));