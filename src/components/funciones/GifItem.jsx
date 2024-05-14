
import Prop from 'prop-types';

export const GiftItem = ({title,url}) => {
    return (
        <div className="card ">
            <img className='w-full h-64 object-cover' src={url} alt={title} />
            <p>{title}</p>

        </div>
            )
 
}

GiftItem.propTypes = {
    title: Prop.string.isRequired,
    url: Prop.string.isRequired,

}