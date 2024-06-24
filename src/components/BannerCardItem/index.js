import './index.css'

const BannerCardItem = props => {
  const {bannerinfo} = props
  const {headerText, description, className} = bannerinfo
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          show more
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
