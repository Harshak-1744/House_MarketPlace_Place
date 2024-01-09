import {Link} from 'react-router-dom'
import {ReactComponent as DeleteIcon} from '../assets/svg/deleteIcon.svg'
import bedIcon from '../assets/svg/bedIcon.svg'
import bathtubIcon from '../assets/svg/bathtubIcon.svg'

function ListingItem({listing, id}){
  return (
    <li className='categoryListing'>
      <Link to={`/category/${listing.type}/${id}`} className='categoryListingLink'>
        <img src={listing.imgUrls[0]} alt={listing.name} className='categoryListingImg' />
        <div className="categoryListingDe">
          <p className="categoryListingLocation">
            {listing.location}
          </p>
          <p className="caregoryLisitngName">{listing.name}</p>

          <p className="categoryLisitingPrice">
            ${listing.offer 
            ? listing.discountedPrice
                  .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') 
            : listing.regularPrice
                  .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
        </div>
      </Link>
    </li>
  )
}

export default ListingItem



