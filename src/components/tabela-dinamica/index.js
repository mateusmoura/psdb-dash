import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import "plugins/datatables/dataTables.bootstrap4.min.css";

class TabelaResponsiva extends PureComponent {
  componentDidMount() {
    const { dados } = this.props;

    const table = window.jQuery("#datatable-buttons").DataTable({
      dom: "Bfrtip",
      responsive: !0,
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
      },
      buttons: [
        // {
        //   extend: "copy",
        //   text: 'Copiar',
        //   className: "btn-sm"
        // },
        // {
        //   extend: "csv",
        //   className: "btn-sm"
        // },
        { 
          extend: "excel",
          className: "btn-sm"
        },
        // {
        //   extend: "pdf",
        //   className: "btn-sm"
        // },
        {
          extend: "print",
          text: 'Imprimir',
          className: "btn-sm"
        }
      ],
    });

    if (dados.hasOwnProperty('extra')) {
      window.jQuery('#datatable-buttons').on('click', 'td.details-control', function () {
          var tr = window.jQuery(this).closest('tr');
          var index = tr.data('index');
          var row = table.row( tr );
   
          if ( row.child.isShown() ) {
              // This row is already open - close it
              row.child.hide();
              tr.removeClass('shown');
          } else {
              // Open this row
              row.child( dados.extra.template(dados.extra.data[index] ), 'additional-info').show();
              tr.addClass('shown');
          }
      });
    }
  }

  render () {
    const { dados } = this.props;

    return (
      <Fragment>
        <div className="table-responsive">
          <table
            id="datatable-buttons"
            className="table table-striped table-bordered"
          >
            <thead>
              <tr>
                {
                  dados.head.map((item, index) => (
                    <th key={`${item}-${index}`}>{item}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                dados.body.map((item, index) => (
                  <tr key={index} data-index={index}>
                    {
                      item.map((valor, index) => (
                        <td key={`${valor.substring(0, 20)}-${index}`} className="details-control" dangerouslySetInnerHTML={{ __html: valor }} />
                      ))
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        <div
          id="solicitar-senha-modal"
          className="modal fade"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="Solicitar Senha"
          aria-hidden="true"
          >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title mt-0">
                  <i className="fa fa-unlock m-r-5" /> Solicitar senha
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="field-2" className="control-label">
                        Qual e-mail irá receber a senha?
                      </label>
                      <input
                        type="email"
                        id="example-email"
                        name="example-email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary waves-effect"
                  data-dismiss="modal"
                >
                  Fechar
                </button>
                <button
                  type="button"
                  className="btn btn-info waves-effect waves-light"
                >
                  Solicitar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

TabelaResponsiva.propTypes = {
  titulo: PropTypes.string,
  dados: PropTypes.shape({
    head: PropTypes.arrayOf(PropTypes.string),
    body: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  }),
};

TabelaResponsiva.defaultProps = {
  titulo: "Lista"
};

export default TabelaResponsiva;
