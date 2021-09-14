import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Form from '@components/Form'
import DescriptionListRow from '@components/DescriptionListRow'
import Card from '@components/Card'
import Column from '@components/Column'
import Listing from '@components/Listing';
import { useState } from 'react';
import styles from '@components/Home.module.css'
import PropertyDetail from '@components/PropertyDetail'

export default function Home() {
  let [ listings, updateListings ] = useState([])
  let [ details, updateDetails ] = useState(new Array(2).fill( null ))

  const lookupProperty = async fields => {
 
    const options = {
      method: 'POST',
      body: JSON.stringify(fields)
    }

    const response = await fetch( `/api/avmSnapshot`, options)
    const responseData = await response.json()

    //strip out listings with no value per square foot data
    updateListings( responseData.property.filter( e => e.avm?.calculations?.perSizeUnit ) );
  }

  const getZipValuePerSqFoot = currentListings => {
    //const listingsWithSizeData = currentListings.filter( e => e.avm?.calculations?.perSizeUnit ),
    const numberOflistingsWithSizeData = currentListings.length;
    if (!numberOflistingsWithSizeData) return 'not applicable';
    const totalValuePerSquareFoot=currentListings.reduce((a,b)=>{
      return a + b.avm.calculations.perSizeUnit
    }, 0),
    averageValuePerSquareFoot=totalValuePerSquareFoot/numberOflistingsWithSizeData;
    
    return Math.round(averageValuePerSquareFoot)
  }

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={"Lilypad"} />
      <main className={styles.main}>
        <Column>
          <Card>
            <Form handleSubmit={lookupProperty} />
          </Card>
          {listings.length ?
          ( 
          <Card>
            <h2>Zip Code Characteristics for {listings[0].address.postal1}</h2>
            <dl>
              <DescriptionListRow style='row' title={'Average Property Value Per Square Foot'}>
                <dd><span>$</span>{getZipValuePerSqFoot( listings )}</dd>
              </DescriptionListRow>
            </dl>
          </Card> 
          ) :
          null}
        </Column>
        <Column>
          <section>
            <Card>
              <header>
                <h2>Results</h2>
              </header>
            </Card>
            <ul className={styles.resultsList}>
              {listings.map( listing => <Listing listing={listing} key={listing.identifier.Id} />)}
            </ul>
          </section>
        </Column> 
        <Column>
          <section>
            <Card>
              <header>
                <h2>Compare Two Properties in Detail</h2>
              </header>
            </Card>
            <PropertyDetail active={true == details[0]} />
            <PropertyDetail active={true == details[1]} />
          </section>
        </Column>
      </main>

      <Footer />
    </div>
  )
}
