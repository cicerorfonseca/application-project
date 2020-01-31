import React, { Component } from 'react'

export class FormServiceDetails extends Component {
  render() {
    return (
      <div>
        <form>
          <select class="form-control">
            <option>Plumber</option>
            <option>Electrician</option>
            <option>Pest Control Specialist</option>
            <option>Handyman</option>
            <option>HVAC Specialist</option>
          </select>
          <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2">Example multiple select</label>
            <select multiple class="form-control" id="exampleFormControlSelect2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
      </div>
    )
  }
}

export default FormServiceDetails;
