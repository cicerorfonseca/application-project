import React, { Component } from 'react'

export class FormUserDetails extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="text" class="form-control" id="inputEmail4" placeholder="First Name" />
            </div>
            <div class="form-group col-md-6">
              <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <input type="text" class="form-control" id="inputCity" placeholder="Phone Number" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <input type="text" class="form-control" id="inputZip" placeholder="Email" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8">
              <input type="text" class="form-control" id="inputCity" placeholder="Address" />
            </div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" id="inputZip" placeholder="Unit" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <input type="text" class="form-control" id="inputZip" placeholder="Postal Code" />
            </div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" id="inputZip" placeholder="London" />
            </div>
            <div class="form-group col-md-4">
              <input type="text" class="form-control" id="inputZip" placeholder="Ontario" />
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </div >
    )
  }
}

export default FormUserDetails
