import axios from 'axios';
import getUrl from "../../getUrl";

export default async ( req, res ) => {

  const url = getUrl( 'https://api.gateway.attomdata.com/propertyapi/v1.0.0/avm/snapshot', JSON.parse(req.body))
  
  const response = await axios.get(url.href, {
    headers: {
      'Accept': 'application/json',
      'APIKey': process.env.ATTOM
    },
  })

  res.json(response.data)
}