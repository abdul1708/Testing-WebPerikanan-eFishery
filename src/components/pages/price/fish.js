import React, { Component } from 'react'

export class fish extends Component {
  render() {

    const { fish, loading } = this.props;

    if (loading) {
      return <h2>Loading..</h2>
    }

    return (
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Komoditas</th>
              <th>Area Provinsi</th>
              <th>Area Kota</th>
              <th>Size</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {fish.map(person =>
            <tbody key={person.uuid}>
              <tr>
                <td>-</td>
                <td>{person.komoditas}</td>
                <td>{person.area_provinsi}</td>
                <td>{person.area_kota}</td>
                <td>{person.size}</td>
                <td>{person.price}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    data-toggle="modal" data-target="#exampleModal">
                    <i class="far fa-eye"></i> Detail</button>
                </td>
              </tr>
            </tbody>
          )}

          {fish.map(detperson =>
            <div key={detperson.uuid} class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Detail Price</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <table class="table table-striped table-sm">
                      <tr>
                        <td>ID: </td>
                        <td>{detperson.uuid}</td>
                      </tr>
                      <tr>
                        <td>Komoditas: </td>
                        <td>{detperson.komoditas}</td>
                      </tr>
                      <tr>
                        <td>Area Provinsi: </td>
                        <td>{detperson.area_provinsi}</td>
                      </tr>
                      <tr>
                        <td>Area Kota: </td>
                        <td>{detperson.area_kota}</td>
                      </tr>
                      <tr>
                        <td>Size: </td>
                        <td>{detperson.size}</td>
                      </tr>
                      <tr>
                        <td>Price: </td>
                        <td>{detperson.price}</td>
                      </tr>
                      <tr>
                        <td>Tanggal Parsed: </td>
                        <td>{detperson.tgl_parsed}</td>
                      </tr>
                      <tr>
                        <td>Timestamp: </td>
                        <td>{detperson.timestamp}</td>
                      </tr>
                      <tr>
                      </tr>
                    </table>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </table>
      </div>
    )
  }
}

export default fish
