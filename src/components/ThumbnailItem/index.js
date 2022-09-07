import './index.css'

const ThumbnailItem = props => {
  const {itemData, onItemSelect, isSelectedItem} = props
  const {thumbnailUrl, thumbnailAltText} = itemData

  const itemStyling = `gallery-thumbnail-item ${
    isSelectedItem ? 'selected-gallery-thumbnail' : ''
  }`

  const onClickItem = () => {
    onItemSelect(itemData.id)
  }

  return (
    <li className={itemStyling} onClick={onClickItem}>
      <button type="button" className="gallery-thumbnail-button">
        <img
          className="gallery-thumbnail-img"
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
