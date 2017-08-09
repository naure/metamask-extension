const Component = require('react').Component
const h = require('react-hyperscript')
const inherits = require('util').inherits
const connect = require('react-redux').connect
const actions = require('../actions')

function mapStateToProps (state) {
  return {
    network: state.metamask.network,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    toCoinbase: () => {
      dispatch(actions.buyEth({ network: '1', address, amount: 0 }))
    },
  }
}

inherits(BuyOptions, Component)
function BuyOptions () {
  Component.call(this)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(BuyOptions)

BuyOptions.prototype.render = function () {
  return h('div', {}, [
    h('div.modal-content.transfers-subview', {

    }, [
      h('div.modal-content-title-wrapper.flex-column.flex-center', {
        style: {},
      }, [
        h('div.modal-content-title', {
          style: {},
        }, 'Transfers'),
        h('div', {}, 'How would you like to buy Ether?'),
      ]),

      h('div.modal-content-options.flex-column.flex-center', {}, [

        h('div.modal-content-option', {}, [
          h('div.modal-content-option-title', {}, 'Coinbase'),
          h('div.modal-content-option-subtitle', {
            onClick: () => {
              this.props.toCoinbase()
            },
          }, 'Buy with Fiat'),
        ]),

        h('div.modal-content-option', {}, [
          h('div.modal-content-option-title', {}, 'Shapeshift'),
          h('div.modal-content-option-subtitle', {}, 'Trade any digital asset for any other'),
        ]),

        h('div.modal-content-option', {}, [
          h('div.modal-content-option-title', {}, 'Direct Deposit'),
          h('div.modal-content-option-subtitle', {}, 'Deposit from another account'),
        ]),

      ]),

      h('div.modal-content-footer', {
        style: {},
      }, 'Cancel'),
    ])
  ])
}