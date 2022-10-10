import { Link } from "react-router-dom";
const Fitness = ()=>{
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
            <Link to="/food" className="one">Food</Link>
            </p>
            <hr className="hr1" />
            <div className="article">
            <p className="bolly">Fitness</p>
            <hr className="hr3"/>
          </div>
          <div className="box">
            <div className="boxright">
            <div className="block1">
            <div className="fit1">
            </div>
            <div className="manali1">
            <h3 className="dilip1">Training Bench</h3>
                <p className="dilip2">A training bench is an adjustable platform used for performing weight training exercises.</p>
                <span className="travel">Travel</span>
                <span className="travel1">/ August 21 2017</span>
            </div>
            </div>
           
            <hr className="hr47"/>
            <div className="block2">
            <div className="fit2">
            </div>
            <div className="ladakh1">
            <h3 className="raj1">Dumbbell Set</h3>
                <p className="raj2">Dumbbells come in a variety of sizes, shapes, and materials these days, from plastic-coated to colorful to straight metal</p>
                <span className="travel">Travel</span>
                <span className="travel1">/ August 21 2017</span>
            </div>
            </div>
             
            <hr className="hr47"/>
            <div className="block3">
            <div className="fit3">
            </div>
            <div className="coorg1">
            <h3 className="Rajesh1">Kettlebell Set</h3>
                <p className="Rajesh2">Kettlebells provide an alternative to dumbbells because they activate a slightly different muscle profile, particularly the core</p>
                <span className="travel">Travel</span>
                <span className="travel1">/ August 21 2017</span>
            </div>

            </div>
               
            <hr className="hr47"/>
            <div className="block4">
            <div className="fit4">
            </div>
            <div className="andaman1">
            <h3 className="Rishi1">Pull-Up Frame and Bar</h3>
                <p className="Rishi2">This is for doing chin-ups and pull-ups. Look for a squat rack with a pull-up bar up top, and you'll save on cost and space</p>
                <span className="travel">Travel</span>
                <span className="travel1">/ August 21 2017</span>
            </div>
            </div>

            <hr className="hr47"/>
            <div className="block4">
            <div className="fit5">
            </div>
            <div className="andaman1">
            <h3 className="Govinda1">Treadmill</h3>
                <p className="Govinda2">A treadmill is a device generally used for walking, running, or climbing while staying in the same place.</p>
                <span className="travel">Travel</span>
                <span className="travel1">/ August 21 2017</span>
            </div>
            </div>

            <hr className="hr47"/>
            <div className="block4">
            <div className="fit6">
            </div>
            <div className="andaman1">
            <h3 className="Amitabh1">Stationary Bicycle</h3>
                <p className="Amitabh2">The stationary bike is an alternative to the treadmill and rowing machine for cardiovascular endurance training.</p>
                <span className="travel">Travel</span>
                <span className="travel1">/ August 21 2017</span>
            </div>
            </div>

            
            <hr className="hr47"/>
            <div className="block4">
            <div className="fit7">
            </div>
            <div className="andaman1">
            <h3 className="Dharmendra1">Rowing Machine</h3>
                <p className="Dharmendra2">A machine used to simulate the action of watercraft rowing for the purpose of exercise or training for rowing</p>
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
                    <div className="fitness"><br />
                    <h1 className="no1">1</h1>
                    <h3 className="top1text">Gym Essentials</h3>
                    <span className="travel">Travel</span>
                    <span className="travel1">/ August 21 2017</span>
                    </div>
                    <hr className="hr6" />

                    <div className="fitness1"></div>
                    <h1 className="top2no1">2</h1>
                    <h3 className="top2text">Gym Bag</h3>
                    <span className="top2travel">Travel</span>
                    <span className="top2travel1">/ August 21 2017</span>
                    <hr className="hr7" />

                    <div className="fitness1"></div>
                    <h1 className="top2no1">3</h1>
                    <h3 className="top2text">Gym Bag</h3>
                    <span className="top2travel">Travel</span>
                    <span className="top2travel1">/ August 21 2017</span>
                    <hr className="hr7" />

                    <div className="fitness1"></div>
                    <h1 className="top2no1">4</h1>
                    <h3 className="top2text">Gym Bag</h3>
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
export default Fitness;