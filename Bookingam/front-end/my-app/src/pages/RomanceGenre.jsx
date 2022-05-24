import React from "react";
import "./pagesCSS/card.css";
import "./pagesCSS/home.css";
import "./pagesCSS/toggleButton.css";
import {Book4,Book7,Book12} from "./exporters/imgExporter";

function Romance() {
  return (
    <div className="Romance">
      <div id="gallery"  >

        <div class="row">
          <div class="col-sm-2">
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
          </div>
          <div class="col-sm-2">
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
          <div class="col-sm-2">
          </div>
          </div>
      </div>
    </div>
  );
}

export default Romance;