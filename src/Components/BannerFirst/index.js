import './style.css'
import { render } from 'react-dom'
import DropShort from './shorts.js'
import { AiOutlineSearch } from "react-icons/ai";


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    let priceLocaltion = [110,11,544,788,656];

    return (
        <div className="sreen-top banner">
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <div className="sreen-top proper-choice">
                <div className="sreen-top proper-choice abs">
                    <div className="asd">
                        <h1>Easy way to find a perfect property</h1>
                        <span>
                            We provide a complete service for the sale, purchase or 
                            rental of real estate.
                        </span>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <button>RENT</button>
                            </li>
                            <li>
                                <button>BUY</button>
                            </li>
                            <li>
                                <button>SELL</button>
                            </li>
                        </ul>
                    </div>
                    <div  className="group-choice">

                        <form action="" className="form-banner">
                            <div>
                                <div>
                                    <DropShort nameLabel={"Localtion"} idSelect={"drop"} optinSelect={[110,11,544,788,656]}/>
                                    <DropShort nameLabel={"Price Range"} idSelect={"drop"} optinSelect={[3450,151,5344,588,26]}/>
                                    <DropShort nameLabel={"Propety Type"} idSelect={"drop"} optinSelect={[999,101,697,658,616]}/>
                                </div>
                                <div className='btn-search'>
                                    <div>
                                        <AiOutlineSearch />
                                    </div>
                                    
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}