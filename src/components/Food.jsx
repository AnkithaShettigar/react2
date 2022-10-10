import { Link } from "react-router-dom";
const Food = ()=>{
    return(
       <div>
         <span className="cross">The</span>
            <h1 className="head1">Siren</h1>
             <p className="tool">
            <Link to = "/" className="one">Home</Link>
            <Link to = "/bollywood"className="one">Bollywood</Link>
            <Link to = "/technology"className="one">Technology</Link>
            <Link to = "/hollywood"className="one">Hollywood</Link>
            <Link to ="/fitness"className="one">Fitness</Link>
            <Link to="/food"className="one">Food</Link>
            </p>
            <hr className="hr1" />
            <div className="article">
            <p className="bolly">Food</p>
            <hr className="hr3"/>
          </div>
          <div className="box">
            <div className="boxright">
            <div className="block1">
            <div className="fd1">
            </div>
            <div className="manali1">
            <h3 className="dilip1">Yoghurt/Curd</h3>
                <p className="dilip2">Yoghurt, Curd or “Dahi,” as it is commonly known in most parts of India, is one of the most commonly available food items</p>
                <span className="travel">Travel</span>
                <span className="travel1">/ August 21 2017</span>
            </div>
            </div>
           
            <hr className="hr47"/>
            <div className="block2">
            <div className="fd2">
            </div>
            <div className="ladakh1">
            <h3 className="raj1">Leafy Vegetables</h3>
                <p className="raj2">Green leafy vegetables are already popular in the Indian diet. But they ought to be used more</p>
                <span className="travel">Travel</span>
                <span className="travel1">/ August 21 2017</span>
            </div>
            </div>
             
            <hr className="hr47"/>
            <div className="block3">
            <div className="fd3">
            </div>
            <div className="coorg1">
            <h3 className="Rajesh1">Eggs</h3>
                <p className="Rajesh2">While they are not always an option for vegetarians, eggs are excellent sources of protein.</p>
                <span className="travel">Travel</span>
                <span className="travel1">/ August 21 2017</span>
            </div>

            </div>
               
            <hr className="hr47"/>
            <div className="block4">
            <div className="fd4">
            </div>
            <div className="andaman1">
            <h3 className="Rishi1">Dry Fruits</h3>
                <p className="Rishi2">In moderation, dry fruits are excellent sources of essential fatty acids, minerals and even vitamins</p>
                <span className="travel">Travel</span>
                <span className="travel1">/ August 21 2017</span>
            </div>
            </div>

            <hr className="hr47"/>
            <div className="block4">
            <div className="fd5">
            </div>
            <div className="andaman1">
            <h3 className="Govinda1">Fruits</h3>
                <p className="Govinda2">Many traditional Indian fruits are great for you. They contain all kinds of minerals and vitamins that are essential for us</p>
                <span className="travel">Travel</span>
                <span className="travel1">/ August 21 2017</span>
            </div>
            </div>

            <hr className="hr47"/>
            <div className="block4">
            <div className="fd6">
            </div>
            <div className="andaman1">
            <h3 className="Amitabh1">Beans</h3>
                <p className="Amitabh2">Beans and other legumes are a great source of proteins, calcium, iron and folic acid,cook many Indian dishes.</p>
                <span className="travel">Travel</span>
                <span className="travel1">/ August 21 2017</span>
            </div>
            </div>

            
            <hr className="hr47"/>
            <div className="block4">
            <div className="fd7">
            </div>
            <div className="andaman1">
            <h3 className="Dharmendra1">Garlic</h3>
                <p className="Dharmendra2">Garlic is flavourful,also renowned for its many healing properties and primary source of natural anti-bacterial agents</p>
                <span className="travel">Travel</span>
                <span className="travel1">/ August 21 2017</span>
            </div>
            </div>

            <div className="more">
                <div className="arrow1">
                </div>
                <div className="arrowtext">
                <p>LOAD MORE</p>
                </div>
            </div>

              
            </div>
            <div className="boxleft">
               
                <div className="post">
                    <p className="bollytoptext">Top Posts</p>
                    <hr className="hr5"/>
                </div>
                <div className="toppost">
                    <div className="food"><br />
                    <h1 className="no1">1</h1>
                    <h3 className="top1text">Food and Nutrients</h3>
                    <span className="travel">Travel</span>
                    <span className="travel1">/ August 21 2017</span>
                    </div>
                    <hr className="hr6" />

                    <div className="food1"></div>
                    <h1 className="top2no1">2</h1>
                    <h3 className="top2text">Healthy Foods</h3>
                    <span className="top2travel">Travel</span>
                    <span className="top2travel1">/ August 21 2017</span>
                    <hr className="hr7" />

                    <div className="food1"></div>
                    <h1 className="top2no1">3</h1>
                    <h3 className="top2text">Healthy Foods</h3>
                    <span className="top2travel">Travel</span>
                    <span className="top2travel1">/ August 21 2017</span>
                    <hr className="hr7" />

                    <div className="food1"></div>
                    <h1 className="top2no1">4</h1>
                    <h3 className="top2text">Healthy Foods</h3>
                    <span className="top2travel">Travel</span>
                    <span className="top2travel1">/ August 21 2017</span>

                   

                </div>
                <div className="bollyadvert">
                  <p className="adverttext">Advertistement</p>
                </div>
            </div>
         
          </div>
       </div>
    )
}
export default Food;