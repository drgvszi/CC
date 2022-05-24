import React from "react";
import "./pagesCSS/card.css";
import "./pagesCSS/home.css";
import "./pagesCSS/toggleButton.css";
import {Book5,Book10,Book11,Book13} from "./exporters/imgExporter";

function Action() {
  return (
    <div className="Action">
      <div id="gallery"  >

        <div class="row">
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
          
          </div>
          </div>
      </div>
    </div>
  );
}

export default Action;