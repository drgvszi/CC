import React from "react";
import "./pagesCSS/card.css";
import "./pagesCSS/home.css";
import "./pagesCSS/toggleButton.css";
import {Book1,Book2,Book3,Book4,Book5,Book6,Book7,Book8,Book9,Book10,Book11,Book12,Book13} from "./exporters/imgExporter";


function Home() {

    return (

        <div className="home">
            <div id="gallery"  >

                <div class="row">
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card__side card__side--front">
                                <div class="card__details">
                                    
                                    <div class="card_details_img">
                                        <img src={Book1} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back">
                                <div class="card__cta">
                                    <div class="cardBack">

                                        <div class="ro1BackCard">
                                            <p>Name : The Crying Book</p>
                                        </div>
                                        <div class="ro2BackCard">
                                            <p>Author : Heather Christle</p>
                                        </div>
                                        <div class="ro3BackCard">
                                            <p>Poetry, Bibliography, Autobibliography</p>
                                        </div>
                                        <div class="ro4BackCard">


                                            <label class="label">
                                                <div class="toggle">
                                                    <input class="toggle-state" type="checkbox" name="check" value="check" />
                                                    <div class="indicator"></div>
                                                </div>
                                                <div class="label-text">Save to myShelf</div>
                                            </label>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__side card__side--front">
                            <div class="card__details">
                                    
                                    <div class="card_details_img">
                                        <img src={Book2} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back">
                                <div class="card__cta">
                                    <div class="cardBack">

                                    <div class="ro1BackCard">
                                            <p>Name : Sin Eater</p>
                                        </div>
                                        <div class="ro2BackCard">
                                            <p>Author : Megan Campisi</p>
                                        </div>
                                        <div class="ro3BackCard">
                                            <p>Historical, Fiction</p>
                                        </div>
                                        <div class="ro4BackCard">


                                            <label class="label">
                                                <div class="toggle">
                                                    <input class="toggle-state" type="checkbox" name="check" value="check" />
                                                    <div class="indicator"></div>
                                                </div>
                                                <div class="label-text">Save to myShelf</div>
                                            </label>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__side card__side--front">
                            <div class="card__details">
                                    
                                    <div class="card_details_img">
                                        <img src={Book13} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back">
                                <div class="card__cta">
                                    <div class="cardBack">

                                    <div class="ro1BackCard">
                                            <p>Name :Harry Potter and the Deadly Hollows</p>
                                        </div>
                                        <div class="ro2BackCard">
                                            <p>Author : J.K.Rowlings</p>
                                        </div>
                                        <div class="ro3BackCard">
                                            <p>Fictional, Adventure, Action</p>
                                        </div>
                                        <div class="ro4BackCard">


                                            <label class="label">
                                                <div class="toggle">
                                                    <input class="toggle-state" type="checkbox" name="check" value="check" />
                                                    <div class="indicator"></div>
                                                </div>
                                                <div class="label-text">Save to myShelf</div>
                                            </label>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card__side card__side--front">
                            <div class="card__details">
                                    
                                    <div class="card_details_img">
                                        <img src={Book3} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back">
                                <div class="card__cta">
                                    <div class="cardBack">

                                    <div class="ro1BackCard">
                                            <p>Name : The Hollow Woods</p>
                                        </div>
                                        <div class="ro2BackCard">
                                            <p>Author : Rohan Eason</p>
                                        </div>
                                        <div class="ro3BackCard">
                                            <p>Ilustration</p>
                                        </div>
                                        <div class="ro4BackCard">


                                            <label class="label">
                                                <div class="toggle">
                                                    <input class="toggle-state" type="checkbox" name="check" value="check" />
                                                    <div class="indicator"></div>
                                                </div>
                                                <div class="label-text">Save to myShelf</div>
                                            </label>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__side card__side--front">
                            <div class="card__details">
                                    
                                    <div class="card_details_img">
                                        <img src={Book4} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back">
                                <div class="card__cta">
                                    <div class="cardBack">

                                    <div class="ro1BackCard">
                                            <p>Name : The Imperfection of Memory</p>
                                        </div>
                                        <div class="ro2BackCard">
                                            <p>Author : Angelina Aldo</p>
                                        </div>
                                        <div class="ro3BackCard">
                                            <p>Romance</p>
                                        </div>
                                        <div class="ro4BackCard">


                                            <label class="label">
                                                <div class="toggle">
                                                    <input class="toggle-state" type="checkbox" name="check" value="check" />
                                                    <div class="indicator"></div>
                                                </div>
                                                <div class="label-text">Save to myShelf</div>
                                            </label>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card__side card__side--front">
                            <div class="card__details">
                                    
                                    <div class="card_details_img">
                                        <img src={Book5} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back">
                                <div class="card__cta">
                                    <div class="cardBack">

                                    <div class="ro1BackCard">
                                            <p>Name : The Worst</p>
                                        </div>
                                        <div class="ro2BackCard">
                                            <p>Author : Romian Toma</p>
                                        </div>
                                        <div class="ro3BackCard">
                                            <p>Horror , Action</p>
                                        </div>
                                        <div class="ro4BackCard">


                                            <label class="label">
                                                <div class="toggle">
                                                    <input class="toggle-state" type="checkbox" name="check" value="check" />
                                                    <div class="indicator"></div>
                                                </div>
                                                <div class="label-text">Save to myShelf</div>
                                            </label>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__side card__side--front">
                            <div class="card__details">
                                    
                                    <div class="card_details_img">
                                        <img src={Book6} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back">
                                <div class="card__cta">
                                    <div class="cardBack">

                                    <div class="ro1BackCard">
                                            <p>Name : Lunar Storm</p>
                                        </div>
                                        <div class="ro2BackCard">
                                            <p>Author : Terry Crosby</p>
                                        </div>
                                        <div class="ro3BackCard">
                                            <p>Fictional</p>
                                        </div>
                                        <div class="ro4BackCard">


                                            <label class="label">
                                                <div class="toggle">
                                                    <input class="toggle-state" type="checkbox" name="check" value="check" />
                                                    <div class="indicator"></div>
                                                </div>
                                                <div class="label-text">Save to myShelf</div>
                                            </label>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card__side card__side--front">
                            <div class="card__details">
                                    
                                    <div class="card_details_img">
                                        <img src={Book7} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back">
                                <div class="card__cta">
                                    <div class="cardBack">

                                    <div class="ro1BackCard">
                                            <p>Name : Wilder Girls</p>
                                        </div>
                                        <div class="ro2BackCard">
                                            <p>Author : Rory Power</p>
                                        </div>
                                        <div class="ro3BackCard">
                                            <p>Romance</p>
                                        </div>
                                        <div class="ro4BackCard">


                                            <label class="label">
                                                <div class="toggle">
                                                    <input class="toggle-state" type="checkbox" name="check" value="check" />
                                                    <div class="indicator"></div>
                                                </div>
                                                <div class="label-text">Save to myShelf</div>
                                            </label>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__side card__side--front">
                            <div class="card__details">
                                    
                                    <div class="card_details_img">
                                        <img src={Book8} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back">
                                <div class="card__cta">
                                    <div class="cardBack">

                                    <div class="ro1BackCard">
                                            <p>Name : The Girl Who Never</p>
                                        </div>
                                        <div class="ro2BackCard">
                                            <p>Author : HC Michaels</p>
                                        </div>
                                        <div class="ro3BackCard">
                                            <p>Fictional</p>
                                        </div>
                                        <div class="ro4BackCard">


                                            <label class="label">
                                                <div class="toggle">
                                                    <input class="toggle-state" type="checkbox" name="check" value="check" />
                                                    <div class="indicator"></div>
                                                </div>
                                                <div class="label-text">Save to myShelf</div>
                                            </label>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card__side card__side--front">
                            <div class="card__details">
                                    
                                    <div class="card_details_img">
                                        <img src={Book9} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back">
                                <div class="card__cta">
                                    <div class="cardBack">

                                    <div class="ro1BackCard">
                                            <p>Name : Crack The Code</p>
                                        </div>
                                        <div class="ro2BackCard">
                                            <p>Author :Patrick C. Harless</p>
                                        </div>
                                        <div class="ro3BackCard">
                                            <p>Adventure</p>
                                        </div>
                                        <div class="ro4BackCard">


                                            <label class="label">
                                                <div class="toggle">
                                                    <input class="toggle-state" type="checkbox" name="check" value="check" />
                                                    <div class="indicator"></div>
                                                </div>
                                                <div class="label-text">Save to myShelf</div>
                                            </label>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__side card__side--front">
                            <div class="card__details">
                                    
                                    <div class="card_details_img">
                                        <img src={Book10} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back">
                                <div class="card__cta">
                                    <div class="cardBack">

                                    <div class="ro1BackCard">
                                            <p>Name : The Girl in Red</p>
                                        </div>
                                        <div class="ro2BackCard">
                                            <p>Author : Christina Henry</p>
                                        </div>
                                        <div class="ro3BackCard">
                                            <p>Aventure, Fictional, Horror, Action</p>
                                        </div>
                                        <div class="ro4BackCard">


                                            <label class="label">
                                                <div class="toggle">
                                                    <input class="toggle-state" type="checkbox" name="check" value="check" />
                                                    <div class="indicator"></div>
                                                </div>
                                                <div class="label-text">Save to myShelf</div>
                                            </label>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card__side card__side--front">
                            <div class="card__details">
                                    
                                    <div class="card_details_img">
                                        <img src={Book11} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back">
                                <div class="card__cta">
                                    <div class="cardBack">

                                    <div class="ro1BackCard">
                                            <p>Name : Son of the Storm</p>
                                        </div>
                                        <div class="ro2BackCard">
                                            <p>Author : Suyi Davies Okungbowa</p>
                                        </div>
                                        <div class="ro3BackCard">
                                            <p>Fiction, Adventure, Action</p>
                                        </div>
                                        <div class="ro4BackCard">


                                            <label class="label">
                                                <div class="toggle">
                                                    <input class="toggle-state" type="checkbox" name="check" value="check" />
                                                    <div class="indicator"></div>
                                                </div>
                                                <div class="label-text">Save to myShelf</div>
                                            </label>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__side card__side--front">
                            <div class="card__details">
                                    
                                    <div class="card_details_img">
                                        <img src={Book12} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back">
                                <div class="card__cta">
                                    <div class="cardBack">

                                    <div class="ro1BackCard">
                                            <p>Name :The Vegetarian</p>
                                        </div>
                                        <div class="ro2BackCard">
                                            <p>Author : Han Kang</p>
                                        </div>
                                        <div class="ro3BackCard">
                                            <p>Romance</p>
                                        </div>
                                        <div class="ro4BackCard">


                                            <label class="label">
                                                <div class="toggle">
                                                    <input class="toggle-state" type="checkbox" name="check" value="check" />
                                                    <div class="indicator"></div>
                                                </div>
                                                <div class="label-text">Save to myShelf</div>
                                            </label>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;