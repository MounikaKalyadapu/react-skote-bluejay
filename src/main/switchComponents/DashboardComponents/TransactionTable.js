function TransactionTable() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="mb-4 h4 card-title">Latest Transaction</div>
        <div className="mb-2 row">
          <div className="col-md-1">
            <select className="form-select">
              <option >Show 10</option>
              <option >Show 20</option>
              <option >Show 30</option>
              <option >Show 40</option>
              <option >Show 50</option>
            </select>
          </div>
        </div>
        <div className="table-responsive react-table">
          <table role="table" className="table table-bordered table-hover">
            <thead className="table-light table-nowrap">
              <tr role="row">
                <th>
                  <div className="mb-2">#</div>
                  <div style={{marginTop: '5px'}}></div>
                </th>
                <th>
                  <div
                    className="mb-2"
                    title="Toggle SortBy"
                    style={{cursor: 'pointer'}}
                  >
                    Order ID
                  </div>
                  <div style={{marginTop: '5px'}}></div>
                </th>
                <th>
                  <div
                    className="mb-2"
                    title="Toggle SortBy"
                    style={{cursor: 'pointer'}}
                  >
                    Billing Name
                  </div>
                  <div style={{marginTop: '5px'}}></div>
                </th>
                <th>
                  <div
                    className="mb-2"
                    title="Toggle SortBy"
                    style={{cursor: 'pointer'}}
                  >
                    Date
                  </div>
                  <div style={{marginTop: '5px'}}></div>
                </th>
                <th>
                  <div
                    className="mb-2"
                    title="Toggle SortBy"
                    style={{cursor: 'pointer'}}
                  >
                    Total
                  </div>
                  <div style={{marginTop: '5px'}}></div>
                </th>
                <th>
                  <div
                    className="mb-2"
                    title="Toggle SortBy"
                    style={{cursor: 'pointer'}}
                  >
                    Payment Status
                  </div>
                  <div style={{marginTop: '5px'}}></div>
                </th>
                <th>
                  <div
                    className="mb-2"
                    title="Toggle SortBy"
                    style={{cursor: 'pointer'}}
                  >
                    Payment Method
                  </div>
                  <div style={{marginTop: '5px'}}></div>
                </th>
                <th>
                  <div
                    className="mb-2"
                    title="Toggle SortBy"
                    style={{cursor: 'pointer'}}
                  >
                    View Details
                  </div>
                  <div style={{marginTop: '5px'}}></div>
                </th>
              </tr>
            </thead>
            <tbody role="rowgroup">
              <tr>
                <td role="cell">
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td role="cell">
                  <a className="text-body fw-bold" href="/dashboard">
                    #SK2540
                  </a>
                </td>
                <td role="cell">Neal Matthews</td>
                <td role="cell">07 Oct, 2019</td>
                <td role="cell">$400</td>
                <td role="cell">
                  <span className="font-size-11 badge-soft-success badge bg-secondary">
                    Paid
                  </span>
                </td>
                <td role="cell">
                  <span>
                    <i className="fab fa-cc-mastercard me-1"></i> Mastercard
                  </span>
                </td>
                <td role="cell">
                  <button
                    type="button"
                    className="btn-sm btn-rounded btn btn-primary"
                  >
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td role="cell">
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td role="cell">
                  <a className="text-body fw-bold" href="/dashboard">
                    #SK2541
                  </a>
                </td>
                <td role="cell">Jamal Burnett</td>
                <td role="cell">07 Oct, 2019</td>
                <td role="cell">$380</td>
                <td role="cell">
                  <span className="font-size-11 badge-soft-danger badge bg-secondary">
                    Chargeback
                  </span>
                </td>
                <td role="cell">
                  <span>
                    <i className="fab fa-cc-visa me-1"></i> Visa
                  </span>
                </td>
                <td role="cell">
                  <button
                    type="button"
                    className="btn-sm btn-rounded btn btn-primary"
                  >
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td role="cell">
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td role="cell">
                  <a className="text-body fw-bold" href="/dashboard">
                    #SK2542
                  </a>
                </td>
                <td role="cell">Juan Mitchell</td>
                <td role="cell">06 Oct, 2019</td>
                <td role="cell">$384</td>
                <td role="cell">
                  <span className="font-size-11 badge-soft-success badge bg-secondary">
                    Paid
                  </span>
                </td>
                <td role="cell">
                  <span>
                    <i className="fab fa-cc-paypal me-1"></i> Paypal
                  </span>
                </td>
                <td role="cell">
                  <button
                    type="button"
                    className="btn-sm btn-rounded btn btn-primary"
                  >
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td role="cell">
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td role="cell">
                  <a className="text-body fw-bold" href="/dashboard">
                    #SK2543
                  </a>
                </td>
                <td role="cell">Barry Dick</td>
                <td role="cell">05 Oct, 2019</td>
                <td role="cell">$412</td>
                <td role="cell">
                  <span className="font-size-11 badge-soft-success badge bg-secondary">
                    Paid
                  </span>
                </td>
                <td role="cell">
                  <span>
                    <i className="fab fa-cc-mastercard me-1"></i> Mastercard
                  </span>
                </td>
                <td role="cell">
                  <button
                    type="button"
                    className="btn-sm btn-rounded btn btn-primary"
                  >
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td role="cell">
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td role="cell">
                  <a className="text-body fw-bold" href="/dashboard">
                    #SK2544
                  </a>
                </td>
                <td role="cell">Ronald Taylor</td>
                <td role="cell">04 Oct, 2019</td>
                <td role="cell">$404</td>
                <td role="cell">
                  <span className="font-size-11 badge-soft-warning badge bg-secondary">
                    Refund
                  </span>
                </td>
                <td role="cell">
                  <span>
                    <i className="fab fa-cc-visa me-1"></i> Visa
                  </span>
                </td>
                <td role="cell">
                  <button
                    type="button"
                    className="btn-sm btn-rounded btn btn-primary"
                  >
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td role="cell">
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td role="cell">
                  <a className="text-body fw-bold" href="/dashboard">
                    #SK2545
                  </a>
                </td>
                <td role="cell">Jacob Hunter</td>
                <td role="cell">04 Oct, 2019</td>
                <td role="cell">$392</td>
                <td role="cell">
                  <span className="font-size-11 badge-soft-success badge bg-secondary">
                    Paid
                  </span>
                </td>
                <td role="cell">
                  <span>
                    <i className="fab fa-cc-paypal me-1"></i> Paypal
                  </span>
                </td>
                <td role="cell">
                  <button
                    type="button"
                    className="btn-sm btn-rounded btn btn-primary"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="justify-content-md-end justify-content-center align-items-center row">
          <div className="col-md-auto col">
            <div className="d-flex gap-1">
              <button
                type="button"
                disabled=""
                className="btn btn-primary disabled"
              >
                &lt;&lt;
              </button>
              <button
                type="button"
                disabled=""
                className="btn btn-primary disabled"
              >
                &lt;
              </button>
            </div>
          </div>
          <div className="col-md-auto d-none d-md-block col">
            Page <strong>1 of 1</strong>
          </div>
          <div className="col-md-auto col">
            <input
              min="1"
              max="1"
              type="number"
              className="form-control"
              value="1"
              style={{width: '70px'}}
            />
          </div>
          <div className="col-md-auto col">
            <div className="d-flex gap-1">
              <button
                type="button"
                disabled=""
                className="btn btn-primary disabled"
              >
                &gt;
              </button>
              <button
                type="button"
                disabled=""
                className="btn btn-primary disabled"
              >
                &gt;&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionTable;
