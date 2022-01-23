/* eslint-disable import/no-anonymous-default-export */
import './style.css'
import photoAmeric from '../../img/countrie-img-1.jpg'
import photoSpain from '../../img/countrie-img-2.jpg'
import photoLondon from '../../img/countrie-img-3.jpg'
import photoFrance from '../../img/countrie-img-4.jpg'


export default () => {
    return(
        <div>
            <div className="conteiner-country">
                <div>
                    <img src={photoAmeric} alt="" />
                    <label htmlFor="">AMERICA</label>
                </div>
                <div>
                    <img src={photoSpain} alt="" />
                    <label htmlFor="">SPAIN</label>
                </div>
                <div>
                    <img src={photoLondon} alt="" />
                    <label htmlFor="">LONFO</label>
                </div>
                <div>
                    <img src={photoFrance} alt="" />
                    <label htmlFor="">FRANCE</label>
                </div>
            </div>
        </div>
    )
}