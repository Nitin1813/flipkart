import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react'
// import {flipkart} from "./resources/img/flipkart-plus.png";
function App() {


  const [arr,setArr] = useState([{
    id:1,
    title:"Best-Selling Beds",
    Price: "From Rs6290",
    para:"King, Queen & more",
    image_address:"https://rukminim1.flixcart.com/image/416/416/l4vnb…8017-flipkart-original-imagfzsxnjzfqwkw.jpeg?q=70",
    url:"https://www.flipkart.com/flipkart-perfect-homes-opus-engineered-wood-queen-box-bed/p/itmc38edb92fb7ae?pid=BDDGCZNGQHTXEVN9&lid=LSTBDDGCZNGQHTXEVN98U8RN2&marketplace=FLIPKART&q=bed&store=search.flipkart.com%2Fwwe%2F7p7%2F4yf&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=8a9ae1a8-0d29-4eff-bc80-d1b9568072bf.BDDGCZNGQHTXEVN9.SEARCH&ppt=sp&ppn=sp&ssid=sobavcc8mo0000001660208701126&qH=001cbc059a402b3b"
  },
  {
    id:2,
    title:"Top-Selling Ceiling Fans",
    Price: "From Rs1999",
    para:"Atomberg, Usha & more",
    image_address:"	https://rukminim1.flixcart.com/image/416/416/l4n2oi80/fan/0/i/c/-original-imagfhw9ptgtubd2.jpeg?q=70",
    url:"https://www.flipkart.com/flipkart-smartbuy-turbo-ceiling-fan/p/itm073494e0aa702?pid=FANER39BD7DYTGQG&lid=LSTFANER39BD7DYTGQGY9EISI&marketplace=FLIPKART&q=fan&store=search.flipkart.com%2Fj9e%2Fabm%2Flbz&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=en_ASrkQYLL6x6AIEr75T2eabwPUjIVcTUi1v12LVbCZL%2BgutPhqyWfZt0WBj3E5GRTeAaFnQCh1irv2o2Eb0Pgzw%3D%3D&ppt=sp&ppn=sp&ssid=wbm3e4jscg0000001660207806598&qH=50bd8c21bfafa6e4"
  },
  {
    id:3,
    title:"Hammock Swings",
    Price: "From Rs399",
    para:"New Desings",
    image_address:"	https://rukminim1.flixcart.com/image/416/416/kskot…ck-chair-with-original-imag64yyyr67vzz5.jpeg?q=70",
    url:"https://www.flipkart.com/curio-centre-round-swing-chair-accessories-cotton-hammock/p/itm16204908648eb?pid=HKSG64YY87JJZA6G&lid=LSTHKSG64YY87JJZA6G1CGDJS&marketplace=FLIPKART&q=Hammock+Swings.&store=search.flipkart.com%2Fwwe%2Fq7b%2F1sr&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=7fe1fe97-781b-48f9-9978-f7e6129561b5.HKSG64YY87JJZA6G.SEARCH&ppt=pp&ppn=pp&ssid=p6s41is7a80000001660207851428&qH=722d883fc11fd841"
  },
  {
    id:4,
    title:"HeadPhones & Speakers",
    Price: "Up to 70% off",
    para:"boAt, JBL",
    image_address:"	https://rukminim1.flixcart.com/image/416/416/kmz7q…art-phones-ak-original-imagfrftpwcv9ady.jpeg?q=70",
    url:"flipkart.com/mrs-simin-deep-bass-wired-earphone-3-5mm-jack-all-mobile-phones-headset/p/itm2a4722a0dd89c?pid=ACCGB7E9ZSRHUCC4&lid=LSTACCGB7E9ZSRHUCC4URETSY&marketplace=FLIPKART&q=headphones&store=search.flipkart.com%2F0pm%2Ffcn%2F821%2Ffof&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_na&fm=search-autosuggest&iid=en_Ysod0qwEFXMVTTFdrajR4A7wb4ZrUBOLYW5KgWgJbehsbyXT5KNByFMGDuQjlLPn9dV3lt0sVzd0elUUxqXPog%3D%3D&ppt=sp&ppn=sp&ssid=r8mei15uzk0000001660207887498&qH=edd443896ef5dbfc"
  },
  {
    id:5,
    title:"Gaming Laptops",
    Price: "From Rs49990",
    para:"NCEMI* | Product Exch.*",
    image_address:"	https://rukminim1.flixcart.com/image/416/416/ks99a…laptop-lenovo-original-imag5ve3jvhgvsnx.jpeg?q=70",
    url:"https://www.flipkart.com/lenovo-ideapad-gaming-core-i5-11th-gen-8-gb-512-gb-ssd-windows-11-home-4-graphics-nvidia-geforce-gtx-1650-15ihu6-laptop/p/itm264d36eb418a0?pid=COMGFM5BFZHDDB4R&lid=LSTCOMGFM5BFZHDDB4RSEPODX&marketplace=FLIPKART&q=gaming+laptop&store=search.flipkart.com%2F4rr%2Ftz1&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=1c6cfac5-2e70-4f26-8ea3-55d6124913a0.COMGFM5BFZHDDB4R.SEARCH&ppt=sp&ppn=sp&ssid=okn1z1vw2o0000001660207935211&qH=da5ee6f53d84b3c2"
  },
  {
    id:6,
    title:"Mouse,Keyboards & More!",
    Price: "From Rs99",
    para:"Computer Accessories",
    image_address:"https://rukminim1.flixcart.com/image/416/416/kppt4…-224d-quantum-original-imag3vv5eer933fe.jpeg?q=70",
    url:"https://www.flipkart.com/quantum-qhm224d-wired-optical-mouse/p/itm467d4c1522467?pid=ACCGYXG8NQCZC5XP&lid=LSTACCGYXG8NQCZC5XPJ6MJUG&marketplace=FLIPKART&q=mouse&store=search.flipkart.com%2F6bo%2Fai3%2F2ay&spotlightTagId=BestsellerId_6bo%2Fai3%2F2ay&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=beaba426-0e29-4f18-aff8-c8cb82253e0c.ACCGYXG8NQCZC5XP.SEARCH&ppt=sp&ppn=sp&ssid=lhtuzjk9280000001660207971511&qH=40203abe6e81ed98"
  }]);
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar">
          <div className="logo-container">
            <img
              className="flipkart-logo"
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            />
            <a class="_21ljIi" href="/plus" className="plus-explor">
              Explore <span className="plus">Plus</span>
              <img
                width="10px"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
              />
            </a>
          </div>
          <input type="text" placeholder="Search for products, brands and more" />
          <span></span>
          <button type="button"><a href="google">Login</a></button>
        </div>
        <div>
          <span className="become-a-seller"><a href="google">Become a Seller</a></span>
          <select>
            <option>More</option>
            <option>Tablet</option>
            <option>Desktop</option>
          </select>
        </div>
      </nav>
      <div className="container">

      {arr.map((res)=>{
        return <div className="card">
        <div className="card-details">
        <h1>{res.title}</h1>
        <h2>{res.Price}</h2>
        <p>{res.para}</p>

        </div>
        <div className="card-img">

        <a href={res.url}>
          <img src={res.image_address} />
          </a>
        </div>
        
      </div>
      })}


        
      </div>
    </div>
  );
}

export default App;
