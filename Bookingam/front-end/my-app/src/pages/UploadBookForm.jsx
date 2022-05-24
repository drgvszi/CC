import React from "react";
import "./pagesCSS/form.css";

function UploadBooks() {
    return (
        <form>
        <div class="form-group">
          <label for="exampleFormControlFile1">Upload Pdf</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
        </div>
      </form>
        );
    }
    
    export default UploadBooks;