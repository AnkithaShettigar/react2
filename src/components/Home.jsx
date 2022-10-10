import { Link } from "react-router-dom";
import { ImageWithTitle } from "./ImageWithTitle";
import { Latest } from "./MockData";

const Home = () =>{
    return(
        <div>
            <span className="cross">The</span>
            <h1 className="head1">Siren</h1>
             <p className="tool">
            <Link to = "/" className="one">Home</Link>
            <Link to = "/bollywood" className="one">Bollywood</Link>
            <Link to = "/technology" className="one">Technology</Link>
            <Link to = "/hollywood"className="one">Hollywood</Link>
            <Link to ="/fitness" className="one">Fitness</Link>
            <Link to="/food"className="one">Food</Link>
            </p>
            <hr className="hr1" />
          <div className="ud">
          <div className="jaipur">
                <h3 className="first">Udaipur, Rajasthan - The City of Lakes</h3>
                <p className="second">Travel / August 2017</p>
            </div>
            <div className="double">
            <div className="delhi">
                <h3 className="first1">New Delhi,NCR-The city of cities</h3>
                <p className="second">Travel / August 2017</p>

            </div><br />
            <div className="delhi1">
                <h3 className="first1">Mumbai,Maharashtra-The City of Dreams</h3>
                <p className="second">Travel / August 2017</p>

            </div>
            </div>
          </div>
          <div className="latest">
            <p className="new">The Latest</p>
            <hr className="hr2"/>
            <div className="latest1">
            {
                Latest.map((item,index)=>{return( <ImageWithTitle header={item.header} description={item.description} tags={item.tags} imgurl={item.background}/> )})
            }
             {/* <div className="line3">
             <h3 className="linehead">Sringar,Jammu & Kashmir-The Paradise on Earth</h3>
             <p className="linehead1">Srinagar, the capital of Jammu and Kashmir, lies on the banks of the Jhelum river, and has a cool, pleasant climate all year round.</p>
             <span className="travel">Travel</span>
             <span className="travel1">/ August 21 2017</span>
             </div>
             <div className="line4">
             <h3 className="linehead">Kochi,Kerala-Queen of Arabian Sea</h3>
             <p className="linehead1">Situated on the south-west coast of India, Kochi or Cochin is a bustling commercial port city with a trading history that dates back to at least 600 years. Called as the Queen of the Arabian Sea.</p>
             <span className="travel">Travel</span>
             <span className="travel1">/ August 21 2017</span>
             </div>*/}
            </div> 
          </div>
          
          <div className="article">
            <p className="new1">Latest Articles</p>
            <hr className="hr3"/>
          </div>
          <div className="box">
            <div className="boxright">
            <hr className="hr4"/>
            <div className="block1">
            <div className="manali">
            </div>
            <div className="manali1">
            <h3 className="text2">Manali</h3>
                <p className="text21">One of the most popular hill stations in Himachal, Manali offers the most magnificent views</p>
                <span className="travel">Travel</span>
                <span className="travel1">/ August 21 2017</span>
            </div>
            </div>
           
            <hr className="hr4"/>
            <div className="block2">
            <div className="ladakh">
            </div>
            <div className="ladakh1">
            <h3 className="text1">LehLadakh</h3>
                <p className="text11">Ladakh is a union territory in the Kashmir region of India. Formerly falling in the state of Jammu & Kashmir</p>
                <span className="travel">Travel</span>
                <span className="travel1">/ August 21 2017</span>
            </div>
            </div>
             
            <hr className="hr4"/>
            <div className="block3">
            <div className="coorg">
            </div>
            <div className="coorg1">
            <h3 className="text1">Coorg</h3>
                <p className="text11">Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills </p>
                <span className="travel">Travel</span>
                <span className="travel1">/ August 21 2017</span>
            </div>

            </div>
               
            <hr className="hr4"/>
            <div className="block4">
            <div className="andaman">
            </div>
            <div className="andaman1">
            <h3 className="text1">Andaman</h3>
                <p className="text11"> Andaman & Nicobar Islands is a little slice of paradise tucked around 1,400 km away from the east coast of mainland India</p>
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
            <div className="guj">
                <h3 className="gujtext">Ahmedabad,Gujarat-Manchester ot the East</h3>
                <p className="second">Travel / August 2017</p>
            </div>
              
            </div>
            <div className="boxleft">
               <div className="advert">
                  <p className="adverttext">Advertistement</p>
                </div>
                <div className="post">
                    <p className="toptext">Top Posts</p>
                    <hr className="hr5"/>
                </div>
                <div className="toppost">
                    <div className="top1">
                    <h1 className="no1">1</h1>
                    <h3 className="top1text">Kanyakumari,Tamil Nadu</h3>
                    <span className="travel">Travel</span>
                    <span className="travel1">/ August 21 2017</span>
                    </div>
                    <hr className="hr6" />

                    <div className="top2"></div>
                    <h1 className="top2no1">2</h1>
                    <h3 className="top2text">Kanyakumari,Tamil Nadu</h3>
                    <span className="top2travel">Travel</span>
                    <span className="top2travel1">/ August 21 2017</span>
                    <hr className="hr7" />

                    <div className="top2"></div>
                    <h1 className="top2no1">3</h1>
                    <h3 className="top2text">Kanyakumari,Tamil Nadu</h3>
                    <span className="top2travel">Travel</span>
                    <span className="top2travel1">/ August 21 2017</span>
                    <hr className="hr7" />

                    <div className="top2"></div>
                    <h1 className="top2no1">4</h1>
                    <h3 className="top2text">Kanyakumari,Tamil Nadu</h3>
                    <span className="top2travel">Travel</span>
                    <span className="top2travel1">/ August 21 2017</span>

                   

                </div>
            </div>
          </div>
          <div className="story">
          <p className="newstory">Latest Stories</p>
            <hr className="hr2"/>
           </div>
           <hr className="hr8"/>
            
          <div className="bottom">
            <div className="bottom1">
                <p className="storie1">Catch waves with an adventure guide</p>
                <p  className="storie2">Gujarat is vastly underrated and it's a mystery to us ehy the region isn't more well-known as a tourist destination.It has a plethora of temples and places.Gujarat is vastly underrated and it's a mystery to us ehy the region isn't more well-known as a tourist destination.It has a plethora of temples and places.</p>
                <span  className="storie3">TECH</span>
                <span  className="storie4"> / TODAY AT 11:54</span>
            </div>
            <hr />
            <div className="bottom1">
                <p className="storie1">Catch waves with an adventure guide</p>
                <p  className="storie2">Gujarat is vastly underrated and it's a mystery to us ehy the region isn't more well-known as a tourist destination.It has a plethora of temples and places.Gujarat is vastly underrated and it's a mystery to us ehy the region isn't more well-known as a tourist destination.It has a plethora of temples and places.</p>
                <span  className="storie3">STYLE</span>
                <span  className="storie4"> / AUGUST 21 2017</span>
            </div>
            <hr />
            <div className="bottom1">
                <p className="storie1">Catch waves with an adventure guide</p>
                <p  className="storie2">Gujarat is vastly underrated and it's a mystery to us ehy the region isn't more well-known as a tourist destination.It has a plethora of temples and places.Gujarat is vastly underrated and it's a mystery to us ehy the region isn't more well-known as a tourist destination.It has a plethora of temples and places.</p>
                <span  className="storie3">TECH</span>
                <span  className="storie4"> / AUGUST 21 2017</span>
            </div>
            
          </div>
          <hr className="hr8"/>

          <div className="viewmore">
          <p className="view">VIEW MORE</p>
            <div className="forwardarrow">
            </div>
    
          </div>
          
          </div>
    )
}

export default Home;