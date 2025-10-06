import { useState } from "react";

function Pricing (){
    const [isChecked, setCheckBox] = useState(false);
    
    function TogglePrice(){
        if(isChecked){setCheckBox(false);}
        else {setCheckBox(true);}
    }
    return(        
    <>
        <div id="top-pattern">
        </div>
        
        <section id="pricing-section">
        
            <div className="container">
                <h2>Our Pricing</h2>
                
                <div id="toggle-flex">
                    {/* <!--bold or change color of choice made--> */}
                    <span id="annual" className={isChecked? "" : "checkedText"}>Annually</span>
                    
                    <label className="switch">
                    <input type="checkbox" id="toggle-box" onChange={TogglePrice} />
                    <span className="slider round"></span>
                    </label>
                    
                    <span id="month" className={isChecked? "checkedText" : ""}>Monthly</span>
                </div>
            </div>
        </section>

        <section id="price-plans">
            <div className="container">
                <div className="price-plan price-plan-odd">
                    <span>Basic</span>
                    
                    <div className="price">
                        <div className={isChecked ? "hide" : "show"}>
                            $199.99
                        </div>
                        <div className={isChecked ? "show" : "hide"}>
                            $19.99
                        </div>
                    </div>
                    
                    <ul className="plan-features">
                        <li>500 GB Storage</li>
                        <li>2 Users Allowed</li>
                        <li>Send up to 3 GB</li>
                    </ul>
                    
                    <hr/>
                    <a href="#" className="learn-links learn-links-odd">Learn More</a>
                </div>
                
                <div className="price-plan price-plan-even">
                    <span>Professional</span>
                    
                    <div className="price">
                        <div className={isChecked ? "hide" : "show"}>
                            $249.99
                        </div>
                        <div className={isChecked ? "show" : "hide"}>
                            $24.99
                        </div>
                    </div>
                    
                    <ul className="plan-features">
                        <li>1 TB Storage</li>
                        <li>5 Users Allowed</li>
                        <li>Send up to 10 GB</li>
                    </ul>
                    
                    <hr/>
                    <a href="#" className="learn-links  learn-links-even">Learn More</a>
                </div>
                
                <div className="price-plan price-plan-odd">
                    <span>Master</span>
                    
                    <div className="price">
                        <div className={isChecked ? "hide" : "show"}>
                            $399.99
                        </div>
                        <div className={isChecked ? "show" : "hide"}>
                            $39.99
                        </div>
                    </div>
                    
                    <ul className="plan-features">
                        <li>2 TB Storage</li>
                        <li>10 Users Allowed</li>
                        <li>Send up to 20 GB</li>
                    </ul>
                    
                    <hr/>
                    <a href="#" className="learn-links learn-links-odd">Learn More</a>
                </div>
            </div>
        </section>
        
        <div id="bottom-pattern">
        </div>
    <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
    </div>
    </>
    );
}

export default Pricing;