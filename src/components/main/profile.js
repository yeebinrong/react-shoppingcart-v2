import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios"
import { TableContainer, TableCell, TableRow, Table, TableHead, TableBody, Paper, Icon } from '../../material'

const Profile = ({classes, state, resetValues}) => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    const getTokenConfig = async () => {
      try {
          const accessToken = await getAccessTokenSilently({
            audience: process.env.REACT_APP_CLIENT_AUDIENCE
          });
          let config = {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          }
          return config
      } catch (e) {
        console.log(e.message);
      }
    };

    const getList = async () => {
      try {
        const config = await getTokenConfig()
        const results = await axios.get('https://27h7h6zsj5.execute-api.us-east-1.amazonaws.com/dev3/products', config)
        const data = results['data'].map(d => {
          return(
            <TableRow key={d.id}>
            {/* <td>{d.id}</td> */}
            <TableCell >{d.name}</TableCell>
            <TableCell align="right">{d.price}</TableCell>
            <TableCell align="right">{d.qty}</TableCell>
            <TableCell align="right" onClick={() => deleteProduct(d.id)}><Icon className={classes.red}>delete</Icon></TableCell>
          </TableRow>)})
          ReactDOM.render(data, document.getElementById('tableData'));
      } catch (e) {
        console.log(e.message)
      }
    }

    const deleteProduct = async (id) => {
      if (window.confirm('Delete this product?')) {
        const config = await getTokenConfig()
        await axios.delete('https://27h7h6zsj5.execute-api.us-east-1.amazonaws.com/dev/products/' + id, config)
        .then (() => {
          getList()
        })
      }
    }

    const postData = async () => {
      const product = {
        name: state.productname,
        price: state.productprice,
        qty: state.productqty
      }
      resetValues();
      console.info(product)
      const config = await getTokenConfig()
      axios.post('https://27h7h6zsj5.execute-api.us-east-1.amazonaws.com/dev/products', product, config)
      .then (() => {
        getList()
      })
    }

    if (isAuthenticated && state.isUpload) {
      postData()
    }
    if (isAuthenticated) {
      getList();
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, state.isUpload]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {/* <td className="pl-5 pr-5">Id</td> */}
                <TableCell >Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Qty</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody id="tableData">
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  );
};

export default Profile;