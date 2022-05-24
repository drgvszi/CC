import React from "react";
import "./pagesCSS/card.css";
import "./pagesCSS/home.css";
import "./pagesCSS/toggleButton.css";
import {Book1,Book2,Book13,Book4,Book5,Book3,Book6} from "./exporters/imgExporter";

function MyBookshelf() {
  return (
    <div className="myBookshelf">
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
                    </div>
      </div>
    </div>
  );
}

export default MyBookshelf;