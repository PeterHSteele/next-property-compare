import axios from 'axios'
import getUrl from '../../getUrl';

export default async ( req, res ) => {

  const postalcode  = JSON.parse(req.body).postalcode;

  /*const url = new URL( 'https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address' );
  url.searchParams.append('postalcode',postalcode);
  url.searchParams.append('pagesize', 10);*/
  const params = {
    postalcode,
    pagesize: 10
  }

  const url = getUrl( 'https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address', params); 

  //console.log( url );
  /*const data = {
    postalcode,
    pagesize: 10,
  }*/
  const options = {
    headers: {
      //'Content-Type':  'application/json',
      'Accept': 'application/json',
      'APIKey': process.env.ATTOM
    },
  }

  const response = await axios.get( url.href, options);
  //const json = await response.json();
  res.json(response.data)
  //res.send(json);
  //res.json(response)
}