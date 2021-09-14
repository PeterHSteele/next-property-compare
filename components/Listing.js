import Card from './Card'
import DescriptionListRow from './DescriptionListRow';
import styles from './Listing.module.css'

const addCommas = number => {
  if (!number) return '';
  number+='';
  let count = 0
  const numerals = number.split(''),
  length = numerals.length

  for ( let i = numerals.length-1; i > 0; i--){
    count++;
    console.log( count % 3);
    if ( 0 == count % 3){
      numerals.splice( i, 0, ',');
    }
  }

  return numerals.join('')
}

const Listing = ({listing}) => (
  <Card style={styles.listing}>
    <header className={styles.header}>
      <h3 className={styles.listingHeading}>{listing.address.line1}</h3>
      <button className={styles.button}>Compare</button>
    </header>
    <dl>
      <DescriptionListRow style='row' title='Size'>
        <dd>{listing.building.size.universalsize} <span>Sq. Ft.</span></dd>
      </DescriptionListRow>
      <DescriptionListRow style='row' title='Value'>
        <dd><span>$</span>{addCommas(listing.avm.amount.value)}</dd>
      </DescriptionListRow>
      <DescriptionListRow style='row' title='Value per Square Foot'>
        <dd><span>$</span>{listing.avm.calculations.perSizeUnit}</dd>
      </DescriptionListRow>
    </dl>
  </Card>
)

export default Listing;